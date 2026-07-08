import { showToast } from "../toast.js";

// حتماً کلمه export باید اینجا باشد
export function shareCourse(course) {
    if (navigator.share) {
        navigator.share({
            title: course.name,
            text: `کد درس: ${course.code} - تعداد واحد: ${course.unit}`,
            url: window.location.href
        })
        .then(() => showToast("با موفقیت به اشتراک گذاشته شد!"))
        .catch((error) => console.log("خطا در اشتراک‌گذاری:", error));
    } else {
        // حالت جایگزین اگر مرورگر از share پشتیبانی نکند
        const shareText = `درس: ${course.name}\nکد: ${course.code}\nواحد: ${course.unit}`;
        navigator.clipboard.writeText(shareText);
        showToast("اطلاعات درس کپی شد و آماده اشتراک‌گذاری است!");
    }
}
