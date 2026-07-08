import { loadCourses } from "./dataLoader.js";
import { state } from "./core/state.js";
import { renderCourses } from "./core/render.js";
import { searchCourses } from "./core/search.js";

// فایل‌های بخش ظاهر که داخل پوشه ui هستند
import { initTheme } from "./ui/theme.js";
import { initModal } from "./ui/modal.js";
import { showToast } from "./ui/toast.js";

// فایل‌های بخش خروجی که داخل پوشه export هستند
import { exportToCSV } from "./export/excel.js";
import { exportToPDF } from "./export/pdf.js";

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
    // ۱. بارگذاری دروس از فایل دیتالودر
    state.allCourses = await loadCourses();
    
    // ۲. حتماً فیلتر اولیه را هم با تمام دروس پر کن تا سرچ فعال شود (مشکل اصلی همینجا بود)
    state.filteredCourses = [...state.allCourses];
    
    // ۳. رندر کردن دروس روی صفحه
    renderCourses(state.allCourses);
    
    // ۴. فعال‌سازی تم و مودال
    initTheme();
    initModal();
}

init();
