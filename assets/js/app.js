import { loadCourses } from "./dataLoader.js";
import { state } from "./core/state.js";
import { renderCourses } from "./core/render.js";
import { searchCourses } from "./core/search.js";
import { initTheme } from "./ui/theme.js";
import { showToast } from "./ui/toast.js";
import { exportToCSV } from "./export/excel.js";
import { exportToPDF } from "./export/pdf.js";

const searchInput = document.getElementById("searchInput");
const exportExcelBtn = document.getElementById("exportExcelBtn");
const exportPdfBtn = document.getElementById("exportPdfBtn");
const departmentFilter = document.getElementById("departmentFilter");


searchInput.addEventListener("input", (e) => {
    state.filteredCourses = searchCourses(state.allCourses, e.target.value);
    renderCourses(state.filteredCourses);
});


if (departmentFilter) {
    departmentFilter.addEventListener("change", (e) => {
        const selectedCategory = e.target.value;
        if (selectedCategory === "all") {
            state.filteredCourses = [...state.allCourses];
        } else {
            state.filteredCourses = state.allCourses.filter(
                course => course.category === selectedCategory  
            );
        }
        renderCourses(state.filteredCourses);
    });
}

const categories = [...new Set(state.allCourses.map(c => c.category))];  
const select = document.createElement("select");
select.className = "department-select";

const allOption = document.createElement("option");
allOption.value = "all";
allOption.textContent = "همه رشته‌ها";
select.appendChild(allOption);

categories.forEach(category => { 
    const option = document.createElement("option");
    option.value = category;
    option.textContent = category; 
    select.appendChild(option);
});

if (departmentFilter) {
    departmentFilter.appendChild(select);
}


if (exportExcelBtn) {
    exportExcelBtn.addEventListener("click", () => {
        exportToCSV(state.filteredCourses, "لیست_دروس.csv");
        showToast("فایل اکسل دانلود شد.");
    });
}


if (exportPdfBtn) {
    exportPdfBtn.addEventListener("click", () => exportToPDF());
}


async function init() {
    state.allCourses = await loadCourses();
    state.filteredCourses = [...state.allCourses];
    
    const departments = [...new Set(state.allCourses.map(c => c.department))];
    const select = document.createElement("select");
    select.className = "department-select";
    
    const allOption = document.createElement("option");
    allOption.value = "all";
    allOption.textContent = "همه رشته‌ها";
    select.appendChild(allOption);
    
    departments.forEach(dept => {
        const option = document.createElement("option");
        option.value = dept;
        option.textContent = dept;
        select.appendChild(option);
    });
    
    if (departmentFilter) {
        departmentFilter.appendChild(select);
    }
    
    renderCourses(state.allCourses);
    initTheme();
}

init();
