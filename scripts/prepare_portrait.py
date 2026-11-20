"""Prepares Danish's photos for the website.

   python scripts/prepare_portrait.py

   Sources (kept out of git, in photo-source/):
     vienna-original.png     above Vienna at dusk  -> hero (wide + tall), contact avatar, share image
     portrait-original.jpeg  Frankfurt skyline     -> About section portrait card

   Retouch is lighting only and deliberately honest: a gentle white-balance pull, the face lifted
   out of shadow inside a soft mask, warm casts tamed, light sharpening. No skin smoothing,
   no reshaping, no change of skin colour.
"""
from pathlib import Path

import numpy as np
from PIL import Image, ImageDraw, ImageEnhance, ImageFilter, ImageOps, ImageStat

root = Path(__file__).resolve().parent.parent
src_dir = root / "photo-source"
out = root / "public" / "me"
out.mkdir(parents=True, exist_ok=True)


def retouch(img: Image.Image, face: tuple[float, float, float, float], lift: float, warm_fix: float, wb: float) -> Image.Image:
    """face = (cx, cy, rx, ry) in source pixels."""
    # 1. White balance: pull part of the way towards grey-world neutral.
    r, g, b = ImageStat.Stat(img).mean
    grey = (r + g + b) / 3
    gains = [1 + wb * (grey / c - 1) for c in (r, g, b)]
    img = Image.merge("RGB", [ch.point(lambda v, k=k: min(255, round(v * k))) for ch, k in zip(img.split(), gains)])
    img = ImageEnhance.Contrast(img).enhance(1.05)

    # 2. Face lighting inside a soft elliptical mask: lift exposure, neutralise warm cast.
    cx, cy, rx, ry = face
    mask = Image.new("L", img.size, 0)
    ImageDraw.Draw(mask).ellipse((cx - rx, cy - ry, cx + rx, cy + ry), fill=255)
    mask = mask.filter(ImageFilter.GaussianBlur(max(rx, ry) * 0.35))
    arr = np.asarray(img).astype(np.float32) / 255
    lit = arr**lift
    lit *= np.array([1 - 0.07 * warm_fix, 1.0, 1 + 0.06 * warm_fix], dtype=np.float32)
    grey_px = lit.mean(axis=2, keepdims=True)
    lit = grey_px + (lit - grey_px) * (1 - 0.2 * warm_fix)
    m = (np.asarray(mask).astype(np.float32) / 255)[..., None]
    arr = np.clip(arr * (1 - m) + lit * m, 0, 1)
    img = Image.fromarray((arr * 255 + 0.5).astype(np.uint8), "RGB")

    # 3. Light sharpening only (eyes, hair, jacket texture). Never blur or smooth.
    return img.filter(ImageFilter.UnsharpMask(radius=1.3, percent=55, threshold=3))


def load(name: str) -> Image.Image:
    return ImageOps.exif_transpose(Image.open(src_dir / name)).convert("RGB")


# ---- Vienna photo: hero + avatar -------------------------------------------------------
v = load("vienna-original.png")
s = v.width / 1086  # boxes below were chosen on the 1086 x 1448 original
box = lambda *b: tuple(round(x * s) for x in b)  # noqa: E731
v = retouch(v, face=(555 * s, 735 * s, 140 * s, 190 * s), lift=0.86, warm_fix=0.4, wb=0.15)

# Wide screens: head and shoulders with the Vienna skyline and sunset band; upscaled with
# Lanczos plus a touch more sharpening because the source is only ~1100 px wide.
wide = v.crop(box(0, 440, 1086, 1080)).resize((1700, round(1700 * 640 / 1086)), Image.LANCZOS)
wide = wide.filter(ImageFilter.UnsharpMask(radius=1.6, percent=35, threshold=2))
wide.save(out / "hero-wide.webp", "WEBP", quality=84, method=6)

tall = v.resize((900, round(900 * v.height / v.width)), Image.LANCZOS)
tall.save(out / "hero-tall.webp", "WEBP", quality=82, method=6)

v.crop(box(325, 500, 785, 960)).resize((320, 320), Image.LANCZOS).save(out / "avatar.webp", "WEBP", quality=86, method=6)

# ---- Frankfurt photo: About section portrait -------------------------------------------
f = load("portrait-original.jpeg")
fs = f.width / 1500
fbox = lambda *b: tuple(round(x * fs) for x in b)  # noqa: E731
f = retouch(f, face=(745 * fs, 470 * fs, 250 * fs, 330 * fs), lift=0.82, warm_fix=1.0, wb=0.5)
f.crop(fbox(250, 130, 1250, 1380)).resize((800, 1000), Image.LANCZOS).save(out / "about.webp", "WEBP", quality=82, method=6)

for p in sorted(out.glob("*.webp")):
    print(p.name, Image.open(p).size, f"{p.stat().st_size // 1024} KB")
