#!/usr/bin/env python3
from pathlib import Path
import os
import signal
import subprocess
import sys
import tempfile
import time


ROOT = Path(__file__).resolve().parent
HTML = ROOT / "final_presentation.html"
PDF = ROOT / "Bloxorz_3D_Final_Presentation.pdf"


def find_chrome():
    paths = [
        Path("/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"),
        Path("/Applications/Chromium.app/Contents/MacOS/Chromium"),
        Path("/usr/bin/google-chrome"),
        Path("/usr/bin/chromium"),
        Path("/usr/bin/chromium-browser"),
    ]
    for path in paths:
        if path.exists():
            return path
    return None


def main():
    chrome = find_chrome()
    if chrome is None:
        sys.exit("Chrome or Chromium is required to export the final PDF.")
    if not HTML.exists():
        sys.exit(f"Missing final presentation source: {HTML}")

    with tempfile.TemporaryDirectory(prefix="bloxorz-final-") as profile:
        PDF.unlink(missing_ok=True)
        cmd = [
            str(chrome),
            "--headless=new",
            "--disable-gpu",
            "--no-sandbox",
            "--disable-background-networking",
            "--disable-component-update",
            "--disable-default-apps",
            "--disable-extensions",
            "--disable-sync",
            "--metrics-recording-only",
            "--no-first-run",
            "--allow-file-access-from-files",
            "--no-pdf-header-footer",
            f"--user-data-dir={profile}",
            f"--print-to-pdf={PDF}",
            HTML.as_uri(),
        ]
        process = subprocess.Popen(
            cmd,
            stdout=subprocess.DEVNULL,
            stderr=subprocess.DEVNULL,
            start_new_session=True,
        )

        stable_size = -1
        stable_seen = 0
        deadline = time.monotonic() + 24
        while time.monotonic() < deadline:
            if PDF.exists():
                size = PDF.stat().st_size
                if size > 50_000 and size == stable_size:
                    stable_seen += 1
                else:
                    stable_seen = 0
                    stable_size = size
                if stable_seen >= 2:
                    break

            if process.poll() is not None:
                break
            time.sleep(0.5)

        if process.poll() is None:
            os.killpg(process.pid, signal.SIGTERM)
            try:
                process.wait(timeout=5)
            except subprocess.TimeoutExpired:
                os.killpg(process.pid, signal.SIGKILL)
                process.wait(timeout=5)

        if not PDF.exists() or PDF.stat().st_size <= 50_000:
            raise RuntimeError("Chrome did not produce a valid final PDF.")

    print(PDF)


if __name__ == "__main__":
    main()
