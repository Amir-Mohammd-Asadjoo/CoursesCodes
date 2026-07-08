import { showToast } from "./toast.js";

export function shareCourse(course) {
    const shareText = `📚 درس: ${course.name}\n🔑 کد درس: ${course.code}\n🔢 تعداد واحد: ${course.unit}`;

    // بررسی اینکه آیا مرورگر از اشتراک‌گذاری سیستمی پشتیبانی می‌کند یا خیر (مخصوصاً روی موبایل)
    if (navigator.share) {
        navigator.share({
            title: `کد درس ${course.name}`,
            text: shareText,
            url: window.location.href
        })
        .catch((error) => console.log('خطا در اشتراک‌گذاری:', error));
    } else {
        // پاشنه آشیل دسکتاپ: اگر پشتیبانی نشد، متن را کپی کند
        navigator.clipboard.writeText(shareText);
        showToast("اطلاعات درس برای اشتراک‌گذاری کپی شد!");
    }
}