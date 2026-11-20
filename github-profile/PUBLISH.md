# Publishing the GitHub profile README

GitHub shows a profile README from a public repository named exactly like the account.

1. On github.com, create a new **public** repository called `syeddanishali17` (tick "Add a README file" off).
2. Copy `README.md` and the `media/` folder from this directory into that repository and push.
3. The README then appears at the top of https://github.com/syeddanishali17.

The CV badge links to the PDF in this repository (`public/cv/Syed_Danish_Ali_CV.pdf`), so it stays current when the CV is rebuilt and pushed here. Once the portfolio has its own domain, change the "Portfolio · source" badge to point at it. The BioLab ECG live-app link is left out until the Streamlit app is reachable again.

To regenerate the banner: `node scripts/make-gh-banner.mjs`.
