# CoursesCodes — Enterprise Modular Frontend Edition 🚀
 
This repository is a heavily optimized, production-ready fork of the original **CoursesCodes** project.
 
### ⚡ The Core Refactoring (Before vs. After)
* **Upstream Legacy:** The original project contained the entire application stack—HTML markup, layout, themes, interactive UI logic, data loading, sorting, filtering, and rendering algorithms—**tightly coupled inside a single, monolithic `index.html` file.**
* **This Fork:** Completely decoupled and refactored the codebase into a strict **Modular Frontend Architecture**. The HTML layer has been stripped down to a clean single-page presentation layout, while the core business logic, exporting engines, state lifecycles, and modern UI components have been extracted into independent, highly maintainable ES6+ JavaScript modules and granular CSS design systems.
> 💡 **Note to Maintainers:** This modernization drastically reduces technical debt, improves rendering performance, and scales development. It has been built specifically to be merged back into the upstream repository via a Pull Request.
 
---
 
## 🎯 Key Features
 
### ✨ **Multi-Course Selection & URL-Based Sharing**
- **Checkbox Selection:** Select multiple courses at once with a clean, intuitive checkbox interface
- **URL-Based Sharing:** Share selected courses via a shareable link (e.g., `?courses=101,102,201`)
- **Auto-Load on Visit:** When someone opens a shared link, courses are automatically selected and displayed
- **Cross-Platform Support:** Works seamlessly on desktop and mobile devices
### 📤 **Professional Export Capabilities**
- **Excel Export (.xlsx):** Export filtered courses to professional Excel spreadsheets
- **PDF Export:** Generate print-ready PDF documents with styling
- **Dynamic Data Parsing:** Exports respect current search filters and selections
### 🎨 **Modern UI/UX**
- **Dark/Light Theme Toggle:** Seamless theme switching with persistent user preference
- **Responsive Design:** Optimized for desktop, tablet, and mobile devices
- **Toast Notifications:** Non-intrusive, auto-dismissing alerts for user feedback
- **Smooth Animations:** Performance-optimized entrance animations only on initial load
### 🔍 **Advanced Search & Filter**
- **Real-Time Search:** Instant course name and code matching
- **Department/Category Filter:** Multi-category filtering with dropdown selector
- **Combined Filters:** Search and department filters work together seamlessly
---
 
## 🛠️ Summary of Architectural Enhancements
 
By splitting the monolithic codebase, this edition introduces a robust framework for academic data management:
 
* **Separation of Concerns:** Isolated markup (`index.html`), application state (`core/state.js`), styling variables (`css/variables.css`), and functional utilities.
* **Centralized State Machine (`state.js`):** Enforced a single source of truth for UI reactive updates. Live-search queries, multi-criteria filters, course selections, and custom sorting now mutate a shared state, eliminating race conditions or DOM sync bugs.
* **Performance-Optimized Render Pipeline (`render.js`):** Replaced legacy DOM manipulation blocks with clean, asynchronous template literal injections. Initial load animations with progressive animation delays. Subsequent renders skip animations for better performance.
* **Professional Exporting Modules:** Dynamically parses reactive JSON-driven grid data directly into professional spreadsheet **Excel (.xlsx)** matrices or fully styled **PDF** documents locally on the client-side.
* **URL-Based Sharing System (`export/share.js`):** 
  - Encode selected courses into shareable URLs
  - Automatic course loading from URL parameters on page visit
  - Support for Web Share API on mobile devices
  - Fallback to clipboard copying on desktop
* **Next-Gen UI/UX Layout System:**
  * Created dynamic client-side Dark/Light mode switching handled via centralized CSS context layers.
  * Extracted inline styles into modular CSS stylesheets including programmatic transition micro-interactions (`animations.css`).
  * Engineered a custom programmatic Toast notification module (`toast.js`) and modern overlay modals (`modal.js`) for deep course exploration.
  * Customized checkbox styling with gradient backgrounds and smooth state transitions (`share-styles.css`)
---
 
## 📂 Revamped Project Directory Structure
 
```text
CoursesCodes/
├── assets/
│   ├── css/
│   │   ├── animations.css      # UI micro-interactions & keyframe transitions
│   │   ├── components.css      # Modular elements (cards, forms, buttons)
│   │   ├── layout.css          # Page shell framework and alignment grids
│   │   ├── reset.css           # Unified cross-browser layout baseline
│   │   ├── share-styles.css    # Custom checkbox & share menu styling
│   │   ├── theme.css           # Reactive dark/light UI layers
│   │   └── variables.css       # Custom color tokens & design systems
│   ├── data/
│   │   └── courses.json        # Decoupled flat-file JSON local database
│   └── js/
│       ├── core/
│       │   ├── render.js       # Modern DOM template rendering engine
│       │   ├── search.js       # Instant query-matching search logic
│       │   └── state.js        # Centralized global application state manager
│       ├── export/
│       │   ├── excel.js        # Pure JS data-to-spreadsheet exporting engine
│       │   ├── pdf.js          # Semantic document design & printer engine
│       │   └── share.js        # URL encoding & sharing functionality
│       ├── ui/
│       │   ├── theme.js        # Dark/Light theme toggle context handler
│       │   └── toast.js        # Transient system alert and toast notices
│       ├── app.js              # Application entry point & bootstrapper
│       └── dataLoader.js       # Asynchronous JSON stream fetch handler
├── index.html                  # Minimal, clean single-page presentation layout
└── README.md
```
 
---
 
## 🚀 Getting Started
 
### Installation
```bash
# Clone the repository
git clone <repository-url>
cd CoursesCodes
 
# Open in browser (no build step required)
open index.html
# or
python -m http.server 8000
```
 
### Basic Usage
 
1. **Search Courses:** Type course name or code in the search box
2. **Filter by Department:** Select a department from the dropdown
3. **Select Courses:** Check the boxes next to courses you want to share
4. **Share:** Click the 🔗 button in the header to copy or share the link
5. **Export:** Use 📊 (Excel) or 🖨️ (PDF) buttons to download
### Sharing Feature
 
#### How It Works:
1. Select multiple courses using checkboxes
2. Click the 🔗 share button in the header
   - **Desktop:** Directly copies the shareable link
   - **Mobile:** Shows menu with share options
3. Share the link with others
4. Recipients see only the selected courses with them pre-checked
#### URL Format:
```
https://example.com/courses?courses=CE402,ENG101,MATH201
```
 
---
 
## 🔧 Technology Stack
 
- **Vanilla JavaScript (ES6+):** Zero dependencies, pure client-side execution
- **CSS3 & CSS Variables:** Dynamic theming and responsive design
- **JSON:** Flat-file data storage (easily replaceable with API)
- **HTML5:** Semantic markup and Web APIs (Web Share API, Clipboard API)
---
 
## 📊 State Management
 
The application uses a centralized `state` object:
 
```javascript
export const state = {
    allCourses: [],           // All courses from data source
    filteredCourses: [],      // Currently displayed courses (after search/filter)
    selectedCategory: "all",  // Active department filter
    selectedCourses: new Set() // Selected courses for sharing
};
```
 
All UI updates react to state changes. This ensures consistency across search, filter, selection, and export operations.
 
---
 
## 🎨 Customization
 
### Colors & Theme
Edit `assets/css/variables.css`:
```css
:root {
    --primary-color: #6366f1;
    --secondary-color: #8b5cf6;
    --bg-primary: #ffffff;
    --text-primary: #1f2937;
    /* ... more variables */
}
```
 
### Toast Notifications
Customize in `assets/js/ui/toast.js`:
```javascript
showToast("Custom message", "success", 3000); // duration in ms
```
 
### Add More Export Formats
Create new modules in `assets/js/export/`:
```javascript
export function exportToJSON(courses, filename) {
    // Implementation here
}
```
 
---
 
## 📈 Performance Optimizations
 
- **Lazy Rendering:** Animations only on initial load, skipped for search/filter results
- **Efficient State Updates:** Only affected DOM elements re-render
- **CSS Variables:** Theme switching without full page reload
- **Client-Side Processing:** No server requests for search, filter, or export
---
 
## 🔐 Browser Compatibility
 
| Feature | Chrome | Firefox | Safari | Edge |
|---------|--------|---------|--------|------|
| Core Features | ✅ | ✅ | ✅ | ✅ |
| Web Share API | ✅ | ✅ | ✅ (15+) | ✅ |
| CSS Grid/Flexbox | ✅ | ✅ | ✅ | ✅ |
| Export (Excel/PDF) | ✅ | ✅ | ✅ | ✅ |
 
---
 
## 🤝 Contributing
 
This fork is designed to be merged back to the upstream repository. When contributing:
 
1. Follow the modular architecture pattern
2. Keep concerns separated (UI, state, logic)
3. Add new features as isolated modules
4. Maintain backward compatibility with existing functionality
---
 
## 📝 License
 
[Add appropriate license]
 
---
 
## 🙌 Credits
 
- **Original Project:** CoursesCodes
- **This Edition:** Enterprise Modular Refactoring with URL Sharing & Selection Features
---
 
### 🎯 Roadmap
 
- [ ] API integration for dynamic course data
- [ ] Advanced sorting options (alphabetical, by code, by credits)
- [ ] Course detail modal view
- [ ] Bulk operations (select all, deselect all)
- [ ] Share analytics tracking
- [ ] Course comparison feature
- [ ] Schedule builder integration
