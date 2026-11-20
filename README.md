# SWJ Utility website — GitHub Pages

This is a ready-to-publish static website (HTML/CSS/JS) for SWJ Utility. No Node.js, npm, or build step is required.

## Preview locally

Double-click `index.html` to preview the website in a browser. The download button is deliberately disabled until you provide a real release URL.

## Publish on GitHub Pages

1. Sign in to GitHub and create a **public** repository named `swj-utility` (or another name).
2. Upload `index.html`, `styles.css`, `script.js`, and `swj-mark.svg` to the repository **root**. Commit the files.
3. In the repository, go to **Settings → Pages**. Under **Build and deployment**, choose **Deploy from a branch**, select `main` and `/ (root)`, and save.
4. Wait for GitHub Pages to deploy. Your URL will usually be `https://YOUR-USERNAME.github.io/swj-utility/`.
5. Open the URL and check the site on desktop and mobile.

## Enable the download button

1. In your repository, open **Releases → Draft a new release**.
2. Add a version tag (for example `v1.0.0`), a release title, notes, and upload your **tested** `SWJ.exe` as a release asset. Publish the release.
3. Edit `script.js`: set `RELEASE_URL` to `https://github.com/YOUR-USERNAME/swj-utility/releases/latest` (replace both placeholders).
4. Commit `script.js`. The Download button will now link to the release page. This approach keeps the link working when you upload future versions.

**Do not upload the EXE to the website's `assets` directory.** Use GitHub Releases instead. Do not publish an untested executable. Your EXE may show SmartScreen warnings if unsigned; don't claim it is digitally signed.

## Add actual screenshots

The two screenshots on the page are placeholders. Capture screenshots from your running app, create an `assets` folder, and save them as `assets/dashboard.png` and `assets/tweaks.png`, then edit the two `.screenshot` blocks in `index.html` to include image tags, for example:

```html
<img src="assets/dashboard.png" alt="SWJ Utility dashboard" loading="lazy">
```

You may wish to add this CSS:

```css
.screenshot img { max-width: 100%; height: auto; border-radius: 10px; }
```

## Attribution and license

SWJ Utility is based on Chris Titus Tech's Windows Utility: https://github.com/ChrisTitusTech/winutil

Before publishing or distributing your modified binary/source, verify the **license in the exact upstream version** you used and include the license text, copyright notices, and any other notices required by that license. The website credits the upstream project and links to its license page. Website files here are newly authored for this project; that does not change the upstream utility's licensing obligations.

## Customize

- Change colors, spacing, and typography in `styles.css`.
- Replace the SVG logo in `swj-mark.svg` if desired.
- Edit the site copy in `index.html`.
- Set the real GitHub Releases URL in `script.js`.
- Optionally add a `CNAME` file for a custom domain after configuring DNS.

This website does not collect personal information or use analytics by default.
