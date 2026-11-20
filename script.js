/* Replace the empty string with your actual GitHub Releases URL after publishing an EXE.
   Example: https://github.com/YOUR-USERNAME/swj-utility/releases/latest */
const RELEASE_URL = "";
const button = document.getElementById("release-link");
const status = document.getElementById("release-status");
if (RELEASE_URL && /^https:\/\/github\.com\/[A-Za-z0-9-]+\/[A-Za-z0-9_.-]+\/releases(?:\/.*)?$/.test(RELEASE_URL)) {
  button.href = RELEASE_URL;
  button.textContent = "Download for Windows ↓";
  button.removeAttribute("aria-disabled");
  status.textContent = "Opens the official SWJ GitHub release page.";
} else {
  button.addEventListener("click", e => e.preventDefault());
}
