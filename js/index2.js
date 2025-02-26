    
const menu = document.querySelector(".menu");
menu.addEventListener('click',()=>{
    menu.classList.toggle("active");
})

// const menu = document.querySelector(".menu");
const nav_bar = document.querySelector(".nav_bar");
const menu_nav = document.querySelector(".menu_nav");
const logo = document.querySelector(".logo");
const header_1 = document.querySelector("header");

let nav_result = false; // 메뉴가 처음엔 닫힌 상태

nav_bar.addEventListener("click", () => {
    nav_result = !nav_result; // 상태 반전
    console.log(nav_result);

    if (nav_result) {
        // 메뉴 나타남
        menu_nav.style.opacity = "1";
        menu_nav.style.zIndex = "800";
        menu_nav.style.transition = "opacity .5s ease-in-out";
        logo.style.opacity = "0";
        header_1.style.backgroundColor = "transparent";
    } else {
        // 메뉴 사라짐
        menu_nav.style.opacity = "0";
        setTimeout(() => {
            menu_nav.style.zIndex = "-1"; // 애니메이션 끝난 후 z-index 낮추기
        }, 500  );
        logo.style.opacity = "1";
        header_1.style.backgroundColor = "";
    }
});
// 스크롤 효과


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

// 스크롤 이벤트 추가
window.addEventListener("scroll", function () {
    let indexFirst = document.querySelector(".index_first");
    let projectCalvin = document.querySelector(".project_calvin");
    let korean2 = document.querySelector(".korean");
    const logoImg = document.querySelector('.logo');
    let scrollPosition = window.scrollY; // 현재 스크롤 위치
    let triggerPoint = window.innerHeight * 0.5; // 화면 높이의 50%

    let calvinOffset = projectCalvin.offsetTop; // project_calvin의 Y 위치
    let calvinHeight = projectCalvin.offsetHeight; // project_calvin의 높이
    let korean2Offset = korean2.offsetTop; // project_calvin의 Y 위치
    let korean2Height = korean2.offsetHeight; // project_calvin의 높이
    let windowHeight = window.innerHeight; // 화면 높이

    // 기본 로고 변경
    if (scrollPosition > triggerPoint) { 
        indexFirst.classList.add("dark");
        logoImg.src = './img/logo_white.png';
    } else {
        indexFirst.classList.remove("dark");
        logoImg.src = './img/logo_balck.png';
    }

    // project_calvin이 화면에 100% 꽉 차게 보일 때 로고 변경
    if (scrollPosition >= calvinOffset - 1 && scrollPosition + windowHeight <= calvinOffset + calvinHeight + 1) {
        logoImg.src = './img/logo_balck.png'; // 원하는 로고 이미지
    }
    // project_calvin이 화면에 100% 꽉 차게 보일 때 로고 변경
    if (scrollPosition >= korean2Offset - 1 && scrollPosition + windowHeight <= korean2Offset + korean2Height + 1) {
        logoImg.src = './img/logo_white.png'; // 원하는 로고 이미지
    }
});


// const second_text =document.querySelectorAll('.second_text')
// const second_em =document.querySelectorAll('.second_text em')
// 글자 하나씩 나오게 하는거
const second_text = document.querySelectorAll('.second_text');
const second_em = document.querySelectorAll('.second_text em');

second_text.forEach((text, index) => {
    let isAnimated = false; // 애니메이션이 한 번만 실행되도록 설정

    text.addEventListener("mouseover", () => {
        if (isAnimated) return; // 이미 실행되었으면 다시 실행하지 않음
        isAnimated = true;

        let letters = second_em[index].innerText.split(""); // 글자를 한 글자씩 나누기
        second_em[index].innerHTML = ""; // 기존 글자 지우기

        letters.forEach((letter, i) => {
            setTimeout(() => {
                second_em[index].innerHTML += letter; // 한 글자씩 추가
            }, i * 100); // 100ms 간격으로 나타나게 설정
        });

        second_em[index].style.opacity = "1"; // 투명도를 1로 설정
    });
});

// 사진
const photo_click = document.querySelector(".photo h2")
const photo_img = document.querySelector(".photo img")
console.log(photo_click)

photo_click.addEventListener('click',()=>{
    photo_img.style.opacity = '1'
    photo_img.style.transition= '1s'
    photo_click.style.opacity = '0'
    photo_click.style.transition= '1s'
})
photo_img.addEventListener('mouseout',()=>{
    photo_img.style.opacity = '0'
    photo_img.style.transition= '1s'
    photo_click.style.opacity = '1'
    photo_click.style.transition= '1s'
})
// 일단 기달
const all_A = document.querySelectorAll('body a')
for(let i of all_A){
    i.addEventListener('click',(e)=>{
        e.preventDefault()
    })
}


const circle = document.querySelector('.circle')
window.addEventListener('mousemove',(e)=>{
    console.log(`clienX=${e.clientX}`)
    circle.style.left = `${e.clientX}px`
    circle.style.top = `${e.clientY}px`
}) 

const menu2 = document.querySelector(".menu");
menu2.addEventListener('click',()=>{
    menu2.classList.toggle("active");
})


// 

const wavve_preview = document.querySelector ('.wavve_preview')
const wavve_img = document.querySelector('.wavve_site img')
wavve_preview.addEventListener('mouseover',()=>{
    wavve_img.style.opacity = '0';
    setTimeout(() => {
        wavve_img.src = './img/FireShot Capture 002 - Wavve(웨이브) - yunaweb.pe.kr.png'
        setTimeout(() => {
            wavve_img.style.opacity = '1';
        }, 100);
    }, 1000);
})
wavve_preview.addEventListener('mouseout',()=>{
    wavve_img.style.opacity = '0';
    setTimeout(() => {
        wavve_img.src = './img/1577623_20220928113354_117_0001.jpg   '
        setTimeout(() => {
            wavve_img.style.opacity = '1';
        }, 100);
    }, 1000);
})
const calvin_preview =document.querySelector('.calvin_preview')
const calvin_img =document.querySelector('.calvin_site img')

calvin_preview.addEventListener('mouseover',()=>{
    calvin_img.style.opacity = '0';
    setTimeout(() => {
        calvin_img.src = "./img/FireShot Capture 001 - 캘빈클라인 공식 온라인 스토어 (한국) - calvinkleinkorea.netlify.app.png"
        setTimeout(() => {
            calvin_img.style.opacity = '1';
        }, 100);
    }, 1000);
})
calvin_preview.addEventListener('mouseout',()=>{
    calvin_img.style.opacity = '0';
    setTimeout(() => {
        calvin_img.src = "./img/jTqLdF.jpg"
        setTimeout(() => {
            calvin_img.style.opacity = '1';
        }, 100);
    }, 1000);
})



// 링크연결
const web_link = document.querySelectorAll('.project_box')
const git_link =document.querySelectorAll('.figma_link')
let git_figma =['https://www.figma.com/proto/mxTjr6dFNz8v5gaUhxGVzi/Untitled?page-id=0%3A1&type=design&node-id=1-2&viewport=555%2C526%2C0.02&t=iWMGVQz4esDzeEdq-1&scaling=contain&mode=design','https://github.com/leejonghyunbeen/calvinklein']
let web_site = ['https://yunaweb.pe.kr/wave_frontend24/#','https://calvinkleinkorea.netlify.app/','https://koreacinema.netlify.app/','https://www.figma.com/proto/awSRDNw2wSh28Qm1FjveeA/1%EC%A1%B0_%EB%B9%84%EB%A0%8C%EC%8A%A4_%EC%9A%A9%EA%B8%B0%2C%ED%98%84%EB%B9%88%2C%EC%9D%80%EC%A7%80?page-id=0%3A1&node-id=1-70&viewport=2240%2C315%2C0.08&t=hzZpPaDLB5AOtN3L-1&scaling=contain']

web_link.forEach((target,index)=>{
    target.addEventListener('click',()=>{
        window.open(web_site[index],'_blank')
    })
})


git_link.forEach((target,index)=>{
    target.addEventListener('click',(e)=>{
        e.preventDefault()
        window.open(git_figma[index],'_blank')
    })
})




// 
const project_wrap = document.querySelectorAll('.project_wavve')
const project_calvin =document.querySelectorAll('.project_calvin')
const korean = document.querySelectorAll('.korean')
const app = document.querySelectorAll('.app')
for(let i of project_wrap){
    i.addEventListener('mouseover',()=>{
        circle.innerHTML = 'view site'
        circle.classList.add('project_active')
    })
    i.addEventListener('mouseout',()=>{
        circle.innerHTML = ''
        circle.classList.remove('project_active')
        circle.style.transition = '0.2s'
    })
}
for(let i of project_calvin){
    i.addEventListener('mouseover',()=>{
        circle.innerHTML = 'view site'
        circle.classList.add('calvin_active')
    })
    i.addEventListener('mouseout',()=>{
        circle.innerHTML = ''
        circle.classList.remove('calvin_active')
        circle.style.transition = '0.2s'
    })
}
for(let i of app){
    i.addEventListener('mouseover',()=>{
        circle.innerHTML = 'view site'
        circle.classList.add('project_active')
    })
    i.addEventListener('mouseout',()=>{
        circle.innerHTML = ''
        circle.classList.remove('project_active')
        circle.style.transition = '0.2s'
    })
}
for(let i of korean){
    i.addEventListener('mouseover',()=>{
        circle.innerHTML = 'view site'
        circle.classList.add('project_active')
    })
    i.addEventListener('mouseout',()=>{
        circle.innerHTML = ''
        circle.classList.remove('project_active')
        circle.style.transition = '0.2s'
    })  
}
