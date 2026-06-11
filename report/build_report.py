#!/usr/bin/env python3
from pathlib import Path
import html
import os
import re
import signal
import subprocess
import sys
import tempfile
import time


ROOT = Path(__file__).resolve().parent
MD = ROOT / "Bloxorz_3D_Report.md"
HTML = ROOT / "Bloxorz_3D_Report.html"
PDF = ROOT / "Bloxorz_3D_Report.pdf"


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


def inline(text):
    escaped = html.escape(text)
    escaped = re.sub(r"`([^`]+)`", r"<code>\1</code>", escaped)
    return re.sub(r"\[([^\]]+)\]\(([^)]+)\)", r'<a href="\2">\1</a>', escaped)


def markdown_to_html(src):
    lines = src.splitlines()
    out = []
    para = []
    list_open = None
    code_open = False
    code_buf = []
    section_open = False

    def flush_para():
        nonlocal para
        if para:
            out.append("<p>" + inline(" ".join(para)) + "</p>")
            para = []

    def close_list():
        nonlocal list_open
        if list_open:
            out.append(f"</{list_open}>")
            list_open = None

    for line in lines:
        raw = line.rstrip()

        if raw.startswith("```"):
            flush_para()
            close_list()
            if code_open:
                out.append("<pre><code>" + html.escape("\n".join(code_buf)) + "</code></pre>")
                code_open = False
                code_buf = []
            else:
                code_open = True
            continue

        if code_open:
            code_buf.append(raw)
            continue

        if not raw.strip():
            flush_para()
            close_list()
            continue

        image = re.match(r"^!\[([^\]]*)\]\(([^)]+)\)$", raw)
        if image:
            flush_para()
            close_list()
            alt = html.escape(image.group(1).strip())
            src = html.escape(image.group(2).strip(), quote=True)
            out.append("<figure>")
            out.append(f"<img src=\"{src}\" alt=\"{alt}\">")
            if alt:
                out.append(f"<figcaption>{alt}</figcaption>")
            out.append("</figure>")
            continue

        if raw.startswith("# "):
            flush_para()
            close_list()
            if section_open:
                out.append("</section>")
            out.append("<section class='cover'>")
            section_open = True
            out.append("<h1>" + inline(raw[2:].strip()) + "</h1>")
            continue

        if raw.startswith("## "):
            flush_para()
            close_list()
            if section_open:
                out.append("</section>")
            out.append("<section>")
            section_open = True
            out.append("<h2>" + inline(raw[3:].strip()) + "</h2>")
            continue

        if raw.startswith("### "):
            flush_para()
            close_list()
            out.append("<h3>" + inline(raw[4:].strip()) + "</h3>")
            continue

        if raw.startswith("- "):
            flush_para()
            if list_open != "ul":
                close_list()
                out.append("<ul>")
                list_open = "ul"
            out.append("<li>" + inline(raw[2:].strip()) + "</li>")
            continue

        numbered = re.match(r"^(\d+)\. (.*)$", raw)
        if numbered:
            flush_para()
            if list_open != "ol":
                close_list()
                out.append("<ol>")
                list_open = "ol"
            out.append("<li>" + inline(numbered.group(2).strip()) + "</li>")
            continue

        para.append(raw)

    flush_para()
    close_list()
    if code_open:
        out.append("<pre><code>" + html.escape("\n".join(code_buf)) + "</code></pre>")
    if section_open:
        out.append("</section>")
    return "\n".join(out)


def build_html():
    body = markdown_to_html(MD.read_text())
    doc = f"""<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>Bloxorz 3D Report</title>
  <style>
    @font-face {{
      font-family: "ArialReport";
      src: url("file:///System/Library/Fonts/Supplemental/Arial.ttf") format("truetype");
      font-weight: 400;
    }}
    @font-face {{
      font-family: "ArialReport";
      src: url("file:///System/Library/Fonts/Supplemental/Arial%20Bold.ttf") format("truetype");
      font-weight: 700;
    }}
    @font-face {{
      font-family: "ArialMonoReport";
      src: url("file:///Users/alimursaliyev/Library/Fonts/arial-monospaced-mt-std.otf") format("opentype");
      font-weight: 400;
    }}
    @page {{
      size: A4;
      margin: 18mm 18mm 20mm;
    }}
    * {{
      box-sizing: border-box;
    }}
    html, body {{
      margin: 0;
      background: #ffffff;
      color: #111111;
      font-family: "ArialReport", Arial, sans-serif;
      font-size: 11pt;
      line-height: 1.42;
      -webkit-print-color-adjust: exact;
      print-color-adjust: exact;
    }}
    section {{
      break-inside: auto;
      margin-bottom: 14mm;
    }}
    .cover {{
      min-height: 115mm;
      display: flex;
      flex-direction: column;
      justify-content: center;
      border-bottom: 1px solid #111;
      margin-bottom: 12mm;
    }}
    h1 {{
      font-size: 32pt;
      line-height: 1.02;
      margin: 0 0 7mm;
      letter-spacing: 0;
    }}
    h2 {{
      font-size: 17pt;
      line-height: 1.15;
      margin: 0 0 4mm;
      letter-spacing: 0;
      break-after: avoid;
    }}
    h3 {{
      font-size: 13pt;
      margin: 5mm 0 2mm;
      break-after: avoid;
    }}
    p {{
      margin: 0 0 3.2mm;
      max-width: 164mm;
    }}
    ul {{
      margin: 0 0 3.6mm 5mm;
      padding: 0;
    }}
    li {{
      margin: 0 0 1.5mm;
      padding-left: 1mm;
    }}
    code {{
      font-family: "ArialMonoReport", Arial, monospace;
      font-size: 0.92em;
    }}
    a {{
      color: #111111;
      text-decoration-thickness: 0.08em;
      text-underline-offset: 0.16em;
    }}
    figure {{
      margin: 4mm 0 7mm;
      break-inside: avoid;
    }}
    img {{
      display: block;
      width: 100%;
      max-height: 112mm;
      object-fit: contain;
      border: 1px solid #dddddd;
    }}
    figcaption {{
      font-size: 9.2pt;
      margin-top: 1.6mm;
      color: #444444;
    }}
    pre {{
      font-family: "ArialMonoReport", Arial, monospace;
      font-size: 9.2pt;
      line-height: 1.35;
      background: #f5f5f5;
      border: 1px solid #dddddd;
      padding: 3mm;
      margin: 2.5mm 0 4mm;
      white-space: pre-wrap;
      break-inside: avoid;
    }}
    pre code {{
      font-size: inherit;
    }}
  </style>
</head>
<body>
{body}
</body>
</html>
"""
    HTML.write_text(doc)


def export_pdf():
    chrome = find_chrome()
    if chrome is None:
        sys.exit("Chrome or Chromium is required to export the report PDF.")

    with tempfile.TemporaryDirectory(prefix="bloxorz-report-") as profile:
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
            raise RuntimeError("Chrome did not produce a valid report PDF.")


def main():
    build_html()
    export_pdf()
    print(PDF)


if __name__ == "__main__":
    main()
