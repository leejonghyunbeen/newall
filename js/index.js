const test = document.querySelector('.loding_wrap p')
console.log(test)
document.addEventListener("DOMContentLoaded", () => {
    const firstText = document.querySelector(".loding_wrap p:first-child");
    const secondText = document.querySelector(".loding_wrap p:nth-child(2)");
    const loding_all = document.querySelector('.loding_all')

    // 첫 번째 텍스트 나타남
    setTimeout(() => {
        firstText.style.visibility = "visible";
        firstText.style.opacity = "1";
    }, 900);

    // 첫 번째 텍스트 사라짐ㅋ
    setTimeout(() => {
        firstText.style.opacity = "0";
    }, 1800);

    // 두 번째 텍스트 나타남
    setTimeout(() => {
        firstText.style.visibility = "hidden"; // 첫 번째 텍스트 완전히 숨김
        secondText.style.visibility = "visible";
        secondText.style.opacity = "1";
    }, 2700);

    setTimeout(() => {
        secondText.style.opacity = "0";
    }, 3600);
    setTimeout(() => {
        loding_all.style.transform = "translateY(-200%)";
    }, 4200);
});

// nav
