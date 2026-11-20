# SWJ Utility

SWJ Utility is a Windows desktop app for installing software, adjusting system settings, and running maintenance tools.

**Windows 11 (64-bit)** · [Download 1.0.2 Preview](https://github.com/SammieWJ/swj-utility/releases/download/v1.0.2-preview/SWJ-Utility-v1.0.2-preview-win-x64.zip) · [Release notes](https://github.com/SammieWJ/swj-utility/releases/tag/v1.0.2-preview) · [Website](https://sammiewj.github.io/swj-utility/)

## Set up on Windows

1. Download the ZIP and select **Extract All** in File Explorer.
2. Open the extracted folder and double-click **SWJ.exe**.
3. Approve the Windows administrator prompt to open SWJ Utility. No PowerShell window needs to stay on screen.

The preview executable is unsigned. To check it before running, upload the extracted `SWJ.exe` to [VirusTotal](https://www.virustotal.com/gui/home/upload). Scan results can miss threats.

### Optional PowerShell setup

After downloading the ZIP, open PowerShell in the folder where you saved it and run these commands. They extract it into a versioned folder and then launch SWJ.

```powershell
$destination = Join-Path $env:LOCALAPPDATA 'SWJ Utility\1.0.2-preview'
Expand-Archive -LiteralPath '.\SWJ-Utility-v1.0.2-preview-win-x64.zip' -DestinationPath $destination -ErrorAction Stop
Start-Process -FilePath (Join-Path $destination 'SWJ.exe')
```

## Website and license

GitHub Pages publishes the website from the root of `main`. The Windows ZIP includes the applicable upstream MIT license and copyright notice.
