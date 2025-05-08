
const parent = document.querySelector('.all_wrap');

// 30개의 원을 랜덤으로 화면에 배치
for (let i = 0; i < 30; i++) {
    const newDIV = document.createElement("div");
    newDIV.classList.add('circle2');

    // 원의 크기 랜덤 설정 (5px ~ 50px)
    const size = Math.random() * 45 + 5;
    newDIV.style.width = `${size}px`;
    newDIV.style.height = `${size}px`;

    // 원의 시작 위치와 끝 위치 랜덤 설정
    const startX = Math.random() * (window.innerWidth - size);  // 화면에서 벗어나지 않게 조정
    const startY = Math.random() * (window.innerHeight - size); // 화면에서 벗어나지 않게 조정
    const endX = Math.random() * window.innerWidth;
    const endY = Math.random() * window.innerHeight;

    // CSS 변수로 시작 위치, 끝 위치 설정
    newDIV.style.setProperty('--start-x', `${startX}px`);
    newDIV.style.setProperty('--start-y', `${startY}px`);
    newDIV.style.setProperty('--end-x', `${endX}px`);
    newDIV.style.setProperty('--end-y', `${endY}px`);

    // 애니메이션 지속 시간 랜덤 설정 (10s ~ 30s)
    const duration = Math.random() * 20 + 10;
    newDIV.style.animationDuration = `${duration}s`;

    // 애니메이션 반복 없이 한 번만 계속 이동하도록 수정
    newDIV.style.animationIterationCount = 'infinite';

    // 원을 부모 요소에 추가
    parent.appendChild(newDIV);
}


document.addEventListener("DOMContentLoaded", function () {
    setTimeout(() => {
        let textElements = document.querySelectorAll(".index_first h2");
        
        textElements.forEach((h2) => {
            let letters = h2.innerText.split("");  // 글자를 한 글자씩 나누기
            h2.innerHTML = "";  // 기존 글자 지우기

            letters.forEach((letter, index) => {
                let span = document.createElement("span");
                span.textContent = letter;
                h2.appendChild(span);

                setTimeout(() => {
                    span.style.transform = "rotateX(0deg)";
                    span.style.opacity = "1";
                }, index * 100); // 100ms 간격으로 하나씩 일어남
            });
        });
    }, 4800); // 로딩 후 4.8초 뒤 실행
});

// const second_text =document.querySelectorAll('.second_text')
// const second_em =document.querySelectorAll('.second_text em')
// 글자 하나씩 나오게 하는거

// 일단 기달
// const all_A = document.querySelectorAll('body a')
// for(let i of all_A){
//     i.addEventListener('click',(e)=>{
//         e.preventDefault()
//     })
// }


const circle = document.querySelector('.circle');
let mouseX = 0, mouseY = 0;
let circleX = 0, circleY = 0;

window.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
});

function animate() {
    circleX += (mouseX - circleX) * 0.2; 
    circleY += (mouseY - circleY) * 0.2;

    circle.style.transform = `translate(${circleX}px, ${circleY}px)`;
    
    requestAnimationFrame(animate);
}

animate();

document.addEventListener("DOMContentLoaded", function () {
    const nowTimeElement = document.querySelector(".now_time");
    const currentYear = new Date().getFullYear(); // 현재 연도 가져오기
    nowTimeElement.textContent = `©${currentYear}`;
});

// 스크롤 
// let scrollY = window.scrollY; // 현재 스크롤 위치
// let isScrolling = false;

// window.addEventListener("wheel", (event) => {
//   event.preventDefault(); // 기본 스크롤 동작 방지

//   let delta = event.deltaY * 0.8; // 스크롤 감도 조절
//   scrollY += delta;

//   if (!isScrolling) {
//     isScrolling = true;
//     smoothScroll();
//   }
// }, { passive: false });

// function smoothScroll() {
//   let currentY = window.scrollY;
//   let distance = scrollY - currentY;
  
//   if (Math.abs(distance) > 1) {
//     window.scrollTo(0, currentY + distance * 0.1); // 0.1은 감속 비율
//     requestAnimationFrame(smoothScroll);
//   } else {
//     isScrolling = false;
//   }
// }

// 프로잭트
document.addEventListener("DOMContentLoaded", function () {
    // 모든 change_link2 클래스를 가진 요소를 선택
    const links = document.querySelectorAll(".change_link2");

    // 각 버튼에 고유한 링크 지정
    const urls = [
        "https://www.figma.com/proto/awSRDNw2wSh28Qm1FjveeA/1%EC%A1%B0_%EB%B9%84%EB%A0%8C%EC%8A%A4_%EC%9A%A9%EA%B8%B0%2C%ED%98%84%EB%B9%88%2C%EC%9D%80%EC%A7%80?page-id=0%3A1&node-id=1-70&viewport=2240%2C315%2C0.08&t=hzZpPaDLB5AOtN3L-1&scaling=contain",
        "https://calvinkleinkorea.netlify.app/",
        "https://sensational-cassata-8d815c.netlify.app/#",
        "https://koreacinema.netlify.app/#",
        "https://venerable-meringue-81dd8e.netlify.app/"
    ];

    // 각 링크에 클릭 이벤트 추가 (새 창에서 열기)
    links.forEach((link, index) => {
        link.addEventListener("click", function (event) {
            event.preventDefault(); // 기본 링크 기능 방지
            window.open(urls[index], "_blank"); // 새 창에서 열기
        });
    });
});





var swiper = new Swiper(".swiper-container", {
    effect: "cards",
grabCursor: true,  });

document.addEventListener("DOMContentLoaded", function () {
    // 네비게이션의 모든 링크 선택
    document.querySelectorAll('.menu_item').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            // info 버튼은 예외적으로 최상단으로 이동
            if (this.getAttribute('id') === 'scrollTop') {
                window.scrollTo({ top: 0, behavior: 'smooth' });
                return;
            }

            // 기본 이벤트 제거
            e.preventDefault();

            // href 속성 값 가져오기
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
});