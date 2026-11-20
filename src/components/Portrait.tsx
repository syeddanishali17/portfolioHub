import { useEffect, useRef } from "react";

type Img = { src: string; width: number; height: number };
type Props = { wide: Img; tall: Img; alt: string; onError: () => void };

/** Landscape screens get the head-and-shoulders crop, portrait screens the full photo. */
const WIDE = "(min-aspect-ratio: 5/4)";

/**
 * Black-and-white photo with a soft circle of true colour that follows the pointer.
 * Two copies of the same image are stacked; the colour copy is masked to a circle at the pointer.
 * The pointer is tracked on the whole parent section, so chips and buttons on top don’t break it.
 * Touch: the circle follows the finger while it is down. Without a pointer the photo stays B&W.
 */
export function Portrait({ wide, tall, alt, onError }: Props) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const fig = ref.current;
    const area = fig?.parentElement;
    if (!fig || !area) return;
    const move = (e: PointerEvent) => {
      const r = fig.getBoundingClientRect();
      fig.style.setProperty("--x", `${e.clientX - r.left}px`);
      fig.style.setProperty("--y", `${e.clientY - r.top}px`);
      fig.dataset.lit = "true";
    };
    const leave = () => (fig.dataset.lit = "false");
    const up = (e: PointerEvent) => e.pointerType !== "mouse" && leave();
    area.addEventListener("pointermove", move);
    area.addEventListener("pointerdown", move);
    area.addEventListener("pointerleave", leave);
    area.addEventListener("pointerup", up);
    return () => {
      area.removeEventListener("pointermove", move);
      area.removeEventListener("pointerdown", move);
      area.removeEventListener("pointerleave", leave);
      area.removeEventListener("pointerup", up);
    };
  }, []);

  return (
    <figure ref={ref} className="portrait" data-lit="false">
      <picture>
        <source media={WIDE} srcSet={wide.src} width={wide.width} height={wide.height} />
        <img className="bw" src={tall.src} alt={alt} width={tall.width} height={tall.height} fetchPriority="high" onError={onError} />
      </picture>
      <picture>
        <source media={WIDE} srcSet={wide.src} width={wide.width} height={wide.height} />
        <img className="color" src={tall.src} alt="" aria-hidden="true" width={tall.width} height={tall.height} />
      </picture>
    </figure>
  );
}
