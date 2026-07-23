document.addEventListener("DOMContentLoaded", () => {

    const title = document.querySelector(".hero h1");
    const subtitle = document.querySelector(".hero p");
    const buttons = document.querySelectorAll(".buttons button");

    // إخفاء العناصر في البداية
    title.style.opacity = "0";
    title.style.transform = "translateY(-50px)";

    subtitle.style.opacity = "0";
    subtitle.style.transform = "translateY(-30px)";

    buttons.forEach(btn => {
        btn.style.opacity = "0";
        btn.style.transform = "translateY(50px)";
    });

    // ظهور العنوان
    setTimeout(() => {
        title.style.transition = "1s ease";
        title.style.opacity = "1";
        title.style.transform = "translateY(0)";
    }, 300);

    // ظهور الوصف
    setTimeout(() => {
        subtitle.style.transition = "1s ease";
        subtitle.style.opacity = "1";
        subtitle.style.transform = "translateY(0)";
    }, 700);

    // ظهور الأزرار واحدة واحدة
    buttons.forEach((btn, index) => {
        setTimeout(() => {
            btn.style.transition = ".7s ease";
            btn.style.opacity = "1";
            btn.style.transform = "translateY(0)";
        }, 1200 + (index * 250));
    });

});
