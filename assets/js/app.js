import { loadCourses } from "./dataLoader.js";
import { state } from "./core/state.js";
import { renderCourses } from "./core/render.js";
import { searchCourses } from "./core/search.js";
import { initTheme } from "./ui/theme.js";
import { initModal } from "./ui/modal.js";
import { exportToCSV } from "./ui/excel.js";
import { exportToPDF } from "./ui/pdf.js";
import { showToast } from "./ui/toast.js";

const searchInput = document.getElementById("searchInput");
const exportExcelBtn = document.getElementById("exportExcelBtn");
const exportPdfBtn = document.getElementById("exportPdfBtn");

// گوش دادن به ورودی سرچ
searchInput.addEventListener("input", (e) => {
    state.filteredCourses = searchCourses(state.allCourses, e.target.value);
    renderCourses(state.filteredCourses);
});

// اکسل
if (exportExcelBtn) {
    exportExcelBtn.addEventListener("click", () => {
        exportToCSV(state.filteredCourses, "لیست_دروس.csv");
        showToast("فایل اکسل دانلود شد.");
    });
}

// پی‌دی‌اف
if (exportPdfBtn) {
    exportPdfBtn.addEventListener("click", () => exportToPDF());
}

// راه‌اندازی اولیه برنامه
async function init() {
    state.allCourses = await loadCourses();
    state.filteredCourses = [...state.allCourses];
    
    renderCourses(state.allCourses);
    initTheme();
    initModal();
}

init();