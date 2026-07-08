# CoursesCodes — Enterprise Modular Frontend Edition 🚀

This repository is a heavily optimized, production-ready fork of the original **CoursesCodes** project. 

### ⚡ The Core Refactoring (Before vs. After)
* **Upstream Legacy:** The original project contained the entire application stack—HTML markup, layout, themes, interactive UI logic, data loading, sorting, filtering, and rendering algorithms—**tightly coupled inside a single, monolithic `index.html` file.**
* **This Fork:** Completely decoupled and refactored the codebase into a strict **Modular Frontend Architecture**. The HTML layer has been stripped down to a clean single-page presentation layout, while the core business logic, exporting engines, state lifecycles, and modern UI components have been extracted into independent, highly maintainable ES6+ JavaScript modules and granular CSS design systems.

> 💡 **Note to Maintainers:** This modernization drastically reduces technical debt, improves rendering performance, and scales development. It has been built specifically to be merged back into the upstream repository via a Pull Request.

---

## 🛠️ Summary of Architectural Enhancements

By splitting the monolithic codebase, this edition introduces a robust framework for academic data management:

* **Separation of Concerns:** Isolated markup (`index.html`), application state (`core/state.js`), styling variables (`css/variables.css`), and functional utilities.
* **Centralized State Machine (`state.js`):** Enforced a single source of truth for UI reactive updates. Live-search queries, multi-criteria filters, and custom sorting now mutate a shared state, eliminating race conditions or DOM sync bugs.
* **Performance-Optimized Render Pipeline (`render.js`):** Replaced legacy DOM manipulation blocks with clean, asynchronous template literal injections.
* **Professional Exporting Modules:** Dynamically parses reactive JSON-driven grid data directly into professional spreadsheet **Excel (.xlsx)** matrices or fully styled **PDF** documents locally on the client-side.
* **Next-Gen UI/UX Layout System:**
  * Created dynamic client-side Dark/Light mode switching handled via centralized CSS context layers.
  * Extracted inline styles into modular CSS stylesheets including programmatic transition micro-interactions (`animations.css`).
  * Engineered a custom programmatic Toast notification module (`toast.js`) and modern overlay modals (`modal.js`) for deep course exploration.

---

## 📂 Revamped Project Directory Structure

```text
CoursesCodes/
├── assets/
│   ├── css/
│   │   ├── animations.css     # UI micro-interactions & keyframe transitions
│   │   ├── components.css     # Modular elements (cards, forms, buttons)
│   │   ├── layout.css         # Page shell framework and alignment grids
│   │   ├── reset.css          # Unified cross-browser layout baseline
│   │   ├── theme.css          # Reactive dark/light UI layers
│   │   └── variables.css      # Custom color tokens & design systems
│   ├── data/
│   │   └── courses.json       # Decoupled flat-file JSON local database
│   └── js/
│       ├── core/
│       │   ├── filter.js      # Multi-criteria filter execution pipeline
│       │   ├── render.js      # Modern DOM template rendering engine
│       │   ├── search.js      # Instant query-matching search logic
│       │   ├── sort.js        # Alphabetical, code, and credit sorting utilities
│       │   └── state.js       # Centralized global application state manager
│       ├── export/
│       │   ├── excel.js       # Pure JS data-to-spreadsheet exporting engine
│       │   └── pdf.js         # Semantic document design & printer engine
│       ├── ui/
│       │   ├── modal.js       # Dynamic course profile modal controller
│       │   ├── theme.js       # Dark/Light theme toggle context handler
│       │   └── toast.js       # Transient system alert and toast notices
│       ├── app.js             # Application entry point & bootstrapper
│       └── dataLoader.js      # Asynchronous JSON stream fetch handler
├── index.html                 # Minimal, clean single-page presentation layout
└── README.md
