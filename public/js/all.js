// 初始化
init()
function init(){
  bannerSwiper()
  politicsSwiper()
  newsRun()
  issueSection()
  headerCollapse()
  politicsGsap()
  politicsbackgroundColor()
  catPic()
}

//banner區塊
function bannerSwiper(){
  const swiper = new Swiper("#banner", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
    },
  });
}

//政策區塊gsap 992px以上
function politicsGsap(){
  gsap.registerPlugin(ScrollTrigger);
  ScrollTrigger.matchMedia({
    "(min-width: 992px)": function() {
      gsap
        .timeline({
          scrollTrigger: {
            trigger: ".manPhoto",
            pin: true,
            scrub: true,
            start: "90% 70%",
            end:"bottom 50%",
          },
        })
        .to(".politics", {
          transform: "translateY(calc(-130%)",
        })
    },
  })
}

// 政策區塊gsap改變背景顏色
function politicsbackgroundColor(){
  document.querySelector(".pin-spacer").style.backgroundColor = "#F2F1DE";
}
// 在視窗變化時重新呼叫
window.onresize = function() {
  politicsbackgroundColor();
};

//政策區塊 992px以下
function politicsSwiper(){
  const swiperPolitics = new Swiper("#politics", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 3500,
    disableOnInteraction: false,
    },
  });
}

//最新消息跑馬燈
function newsRun(){
  gsap.to(".news", {
  xPercent: "-100", 
  ease: "none",
  duration: 6,
  repeat: -1,
  });
}

//政策議題彈出視窗
function issueSection(){
  const issue=document.querySelector(".issue")
  const cancels=document.querySelectorAll(".cancel")
  const issueItem=document.querySelectorAll(".issueItem")
  let itemName;
  issue.addEventListener("click",(e)=>{
    e.preventDefault();
    itemName=e.target.dataset.item
    let issueItem=document.querySelector(`.${itemName}`)
    console.log(issueItem)
    issueItem.classList.remove("hidden")
    let item=issueItem.firstElementChild.firstElementChild
    // item.style.top = `${(window.innerHeight - item.clientHeight) / 2 + window.pageYOffset}px`;
    item.style.left = `${(window.innerWidth - item.clientWidth) / 2}px`;
  })
  cancels.forEach((cancel)=>{
    cancel.addEventListener("click",(e)=>{
      document.querySelector(`.${itemName}`).classList.add("hidden");
    })
  })
}

// nav下拉式選單
function headerCollapse(){
  document.querySelectorAll(".navBtn").forEach((navBtn)=>{
  navBtn.addEventListener("click",(e)=>{
    if(!e.target.className.includes("navBtn"))return
    document.querySelector(".header-collapse").classList.toggle("show")
    })
  })
}

//svg貓
function catPic(){
  gsap.registerPlugin(ScrollTrigger);
  const logoLegs = document.querySelectorAll("#s0_logo_leg");
  logoLegs.forEach((logoLeg, index) => {
    gsap.fromTo(
      logoLeg,
      { opacity: 0 },
      {
        opacity: 1,
        duration: 2,
        ease: "power1.inOut",
        repeat: -1,
        yoyo: true, 
        delay: index, 
      }
    );
  });
  // cat01_Hand動畫
  const timeline = gsap.timeline()
  timeline.to("#cat01_leftHand", {
    duration: 1,
    y:"5px",
    ease: 'bounce.inOut',
    repeat: -1,
  })
  .to("#cat01_leftHand", {
    duration: 2,
    x:"5px",
    y:"5px",
    ease: 'bounce.inOut',
    repeat: -1,
  });
  timeline.to("#cat01_rigthHand", {
    duration: 1,
    y:"5px",
    ease: 'bounce.inOut',
    repeat: -1,
  })
  .to("#cat01_rigthHand", {
    duration: 2,
    x:"5px",
    y:"5px",
    ease: 'bounce.inOut',
    repeat: -1,
  });
  timeline.to("#cat01_mouth", {
    duration: 2,
    y:"5px",
    ease: 'power1.inOut',
    repeat: -1,
  });
}

