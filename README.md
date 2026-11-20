# SWJ Utility website

The static site is hosted at https://sammiewj.github.io/swj-utility/. GitHub Pages deploys the root of the `main` branch.

## Update the site

Edit `index.html` and `styles.css`, then open `index.html` locally to preview. After committing, check the Pages deployment in Actions.

To add real screenshots, place them in `assets/` and replace the two screenshot placeholders with images. Use alt text that describes the part of the app shown.

## Publish a Windows release

1. Test the launcher and administrator startup on Windows.
2. Package the executable with the upstream MIT license and upload the ZIP to GitHub Releases.
3. List the SHA-256 checksums for the ZIP and executable in the release notes. Link to a matching VirusTotal report if one is available.
4. Update the Windows release section in `index.html` with the public release and download links.

Include applicable upstream copyright and MIT license notices with every distributed package.
