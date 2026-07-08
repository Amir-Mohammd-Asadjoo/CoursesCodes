import { showCourseDetails } from "../ui/modal.js";
import { showToast } from "../ui/toast.js";
import { shareCourse } from "../ui/share.js";

const coursesGrid = document.getElementById("coursesGrid");
const courseCount = document.getElementById("courseCount");

export function renderCourses(courses) {
    if (!coursesGrid || !courseCount) return;
    
    coursesGrid.innerHTML = "";

    if (courses.length === 0) {
        coursesGrid.innerHTML = `
            <div style="grid-column: 1 / -1; text-align: center; padding: 60px 20px; color: var(--text-secondary);">
                <p style="font-size: 18px;">درسی یافت نشد</p>
            </div>
        `;
        courseCount.textContent = "0";
        return;
    }

    courses.forEach((course, index) => {
        const card = document.createElement("div");
        card.className = "course-card new";
        card.style.animationDelay = `${index * 30}ms`;

        card.innerHTML = `
            <div class="course-top">
                <div style="flex: 1;">
                    <h4>${course.name}</h4>
                    <p class="course-code">${course.code}</p>
                </div>
                <div style="display: flex; flex-direction: column; align-items: flex-end; gap: 8px;">
                    <span class="course-unit">${course.unit} واحد</span>
                    <button class="btn-share" style="cursor: pointer; font-size: 18px; padding: 4px;" title="اشتراک‌گذاری">🔗</button>
                </div>
            </div>
            <div class="course-actions">
                <button class="btn btn-primary btn-copy">کپی کد</button>
                <button class="btn btn-secondary btn-details">جزئیات</button>
            </div>
        `;

        // دکمه کپی کدهای درس
        card.querySelector(".btn-copy").addEventListener("click", () => {
            navigator.clipboard.writeText(course.code);
            showToast(`کد درس "${course.name}" کپی شد!`);
        });

        // دکمه جزئیات (مودال)
        card.querySelector(".btn-details").addEventListener("click", () => {
            showCourseDetails(course);
        });

        // دکمه اشتراک‌گذاری
        card.querySelector(".btn-share").addEventListener("click", () => {
            shareCourse(course);
        });

        coursesGrid.appendChild(card);
    });

    courseCount.textContent = courses.length;
}