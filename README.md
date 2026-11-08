<div align="center">
  <img src="https://capsule-render.vercel.app/api?type=waving&color=0:2563eb,100:f97316&height=170&section=header&text=Professional%20404%20Error%20Page&fontSize=36&fontColor=ffffff&animation=fadeIn&fontAlignY=38&desc=Abhishek%20Jadhav%20%7C%20Veda%20Technology%20Internship%20Day%2030&descAlignY=62&descSize=17" alt="Professional 404 Error Page header" />

  <img src="https://readme-typing-svg.demolab.com?font=Fira+Code&weight=500&size=20&pause=1000&color=2563eb&center=true&vCenter=true&width=780&lines=Veda+Technology+Internship+%E2%80%A2+Day+30;HTML5+%E2%80%A2+CSS3+%E2%80%A2+Vanilla+JavaScript;Pure+CSS+Illustration+%E2%80%A2+Responsive+%E2%80%A2+Accessible" alt="Typing introduction" />

  <p><b>Blue/Orange Palette &#183; Pure CSS Art &#183; Responsive &#183; No Frameworks</b></p>

  ![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
  ![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
  ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
  ![No Frameworks](https://img.shields.io/badge/No_Frameworks-2563eb?style=for-the-badge)
  ![404 Page](https://img.shields.io/badge/404_Page-f97316?style=for-the-badge)
  ![Responsive](https://img.shields.io/badge/Responsive-10b981?style=for-the-badge)

</div>

---

Professional 404 Error Page by **Abhishek Jadhav** — Web Developer and first-year BCA student at VIIT, Baramati. Built with **HTML5 + CSS3 + Vanilla JavaScript**: a polished, premium error page with a giant gradient `404`, a pure-CSS floating browser window + lost astronaut illustration, friendly copy, and working navigation — no external images, no frameworks, no build step.

> **Internship attribution:** 45-day Web Development Internship at **Veda Technology** — Day 30: Professional 404 Error Page.

## Files

| File | Purpose |
|------|---------|
| `index.html` | The 404 page — open this immediately as the main deliverable |
| `404.html` | Identical copy under the conventional `404.html` name (for hosting that serves a custom 404) |
| `homepage.html` | Demo homepage that `Back to Homepage` navigates to (proves navigation works; also the `Go Back` fallback target) |
| `style.css` | Responsive styling + all illustration CSS + animations |
| `script.js` | `Go Back` history logic, requested-path display, heading focus |
| `assets/favicon.svg` + PNGs | 404 favicon set (16/32/48/180/192/512 + `.ico`) |

## Features

- **Giant gradient `404`** — blue → orange, `clamp()`-scaled, gently floating.
- **Pure-CSS illustration** — floating browser window (URL bar, broken-link badge, skeleton lines), lost astronaut (helmet, visor, chest unit, tether), ringed planet, dashed orbit ring, twinkling stars, glowing blobs, floating badges. Zero external images.
- **Friendly copy** — “Oops! Page Not Found” + explanation + requested-address chip (filled from `location.pathname`).
- **Working navigation** — `Back to Homepage` → `homepage.html`; `Go Back` → `history.back()` with homepage fallback when there is no previous page.
- **Semantic & accessible** — `main`, `nav`, `footer`, skip link, `aria-label`s, `:focus-visible` rings, keyboard-operable buttons, `prefers-reduced-motion` support.
- **Responsive** — centered with Grid/Flexbox, two-column on desktop, stacked on mobile, `overflow-x: hidden`, scales down to 320px.
- **Design system** — CSS variables for the blue/white/orange palette, radii, and shadows; consistent with Days 1–29.
- **No console errors.** No external assets (besides optional README banner images).

## Technologies

| Technology | Use |
|------------|-----|
| HTML5 | Semantic `main`/`nav`/`footer`, metadata, skipped-to heading (`index.html`, `homepage.html`) |
| CSS3 | Custom properties, Grid/Flexbox, `clamp()` type, gradient text, keyframe animations, media queries (`style.css`) |
| JavaScript (ES6+) | `Go Back` history/referrer logic, `location.pathname` display, focus management (`script.js`) |
| SVG | Inline icons (home/back/broken-link) + favicon (`assets/favicon.svg`) |
| No Frameworks | Zero dependencies — vanilla only |
| ARIA | `aria-label`, `aria-hidden` on decorative scene, skip link |

## Project Structure

```text
internship-task-30/
├── index.html          # 404 page (main entry)
├── 404.html            # Identical copy (custom-404 hosting name)
├── homepage.html       # Demo homepage (navigation target)
├── style.css           # Responsive styling + CSS illustration
├── script.js           # Go Back + requested-path logic
├── README.md           # This file
├── Veda_Technology_Task_30_Project_Report.docx  # Project report
└── assets/
    ├── favicon.svg
    └── favicon-*.png / favicon.ico / apple-touch-icon.png
```

## How to Run

1. Open the `internship-task-30` folder.
2. Double-click `index.html` — the 404 page opens in Chrome / Edge / Firefox.
3. Or serve it: `python -m http.server 8000` → http://localhost:8000
4. Or VS Code **Live Server**: right-click `index.html` → **Open with Live Server**.

To test the full navigation round-trip: open `homepage.html` → click **View the 404 page** → click **Back to Homepage** (returns to `homepage.html`) or **Go Back** (uses browser history back to `homepage.html`).

Quick syntax check:

```powershell
node --check script.js
```

## Testing Checklist

- [x] 404 page renders centered on desktop, laptop, tablet, and mobile.
- [x] Pure-CSS illustration (browser + astronaut + planet) shows without any external images.
- [x] `Back to Homepage` navigates to `homepage.html`.
- [x] `Go Back` uses `history.back()` when a previous page exists, and falls back to `homepage.html` on direct visits.
- [x] Requested-path chip shows the real host + path on http(s) and a friendly placeholder on `file://` (no local path leak).
- [x] Homepage hero buttons are centered at all widths.
- [x] All buttons/links have visible hover and `:focus-visible` states.
- [x] Keyboard navigation works (Tab to buttons, Enter/Space to activate); heading receives focus on landing.
- [x] No horizontal scrolling at any width (320px and up).
- [x] `prefers-reduced-motion` disables float/twinkle/orbit animations.
- [x] No JavaScript console errors; no broken links or assets.

## Limitations

- `index.html` and `404.html` are identical duplicates by design (hosting conventions); edit both or keep `404.html` as a thin copy if the project grows.
- `homepage.html` is a minimal demo target, not a full site — its job is to make the 404 navigation testable.
- Requested-path display shows the real host + path on http(s) (e.g. GitHub Pages) and deliberately falls back to a friendly placeholder on `file://` so local filesystem paths are never shown.

---

<div align="center">
  <img src="https://capsule-render.vercel.app/api?type=waving&color=0:2563eb,100:f97316&height=120&section=footer" alt="Footer wave" />
  <p><sub>Veda Technology Internship — Day 30: Professional 404 Error Page — HTML5 · CSS3 · Vanilla JavaScript</sub></p>
</div>
