// 初始化
init();
function init() {
  bannerSwiper();
  politicsSwiper();
  newsRun();
  issueSection();
  headerCollapse();
  politicsGsap();
  politicsbackgroundColor();
  catPic();
}

//banner區塊
function bannerSwiper() {
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
function politicsGsap() {
  gsap.registerPlugin(ScrollTrigger);
  ScrollTrigger.matchMedia({
    "(min-width: 992px)": function () {
      gsap
        .timeline({
          scrollTrigger: {
            trigger: ".manPhoto",
            pin: true,
            scrub: true,
            start: "90% 70%",
            end: "bottom 50%",
          },
        })
        .to(".politics", {
          transform: "translateY(calc(-130%)",
        });
    },
  });
}

// 政策區塊gsap改變背景顏色
function politicsbackgroundColor() {
  document.querySelector(".pin-spacer").style.backgroundColor = "#F2F1DE";
}
// 在視窗變化時重新呼叫
window.onresize = function () {
  politicsbackgroundColor();
};

//政策區塊 992px以下
function politicsSwiper() {
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
function newsRun() {
  gsap.to(".news", {
    xPercent: "-100",
    ease: "none",
    duration: 6,
    repeat: -1,
  });
}

//政策議題彈出視窗
function issueSection() {
  const issue = document.querySelector(".issue");
  const cancels = document.querySelectorAll(".cancel");
  const issueItem = document.querySelectorAll(".issueItem");
  let itemName;
  issue.addEventListener("click", (e) => {
    e.preventDefault();
    itemName = e.target.dataset.item;
    let issueItem = document.querySelector(`.${itemName}`);
    console.log(issueItem);
    issueItem.classList.remove("hidden");
    let item = issueItem.firstElementChild.firstElementChild;
    // item.style.top = `${(window.innerHeight - item.clientHeight) / 2 + window.pageYOffset}px`;
    item.style.left = `${(window.innerWidth - item.clientWidth) / 2}px`;
  });
  cancels.forEach((cancel) => {
    cancel.addEventListener("click", (e) => {
      document.querySelector(`.${itemName}`).classList.add("hidden");
    });
  });
}

// nav下拉式選單
function headerCollapse() {
  document.querySelectorAll(".navBtn").forEach((navBtn) => {
    navBtn.addEventListener("click", (e) => {
      if (!e.target.className.includes("navBtn")) return;
      document.querySelector(".header-collapse").classList.toggle("show");
    });
  });
}

//svg貓
function catPic() {
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
  const timeline = gsap.timeline();
  timeline
    .to("#cat01_leftHand", {
      duration: 1,
      y: "5px",
      ease: "bounce.inOut",
      repeat: -1,
    })
    .to("#cat01_leftHand", {
      duration: 2,
      x: "5px",
      y: "5px",
      ease: "bounce.inOut",
      repeat: -1,
    });
  timeline
    .to("#cat01_rigthHand", {
      duration: 1,
      y: "5px",
      ease: "bounce.inOut",
      repeat: -1,
    })
    .to("#cat01_rigthHand", {
      duration: 2,
      x: "5px",
      y: "5px",
      ease: "bounce.inOut",
      repeat: -1,
    });
  timeline.to("#cat01_mouth", {
    duration: 2,
    y: "5px",
    ease: "power1.inOut",
    repeat: -1,
  });
}

// 捐款按鈕彈出提示
const donationDialog = document.querySelector("#donationDialog");
const donateBtn = document.querySelector("#donateBtn");
const closeDialog = document.querySelectorAll("#closeDialog");

// 顯示
if (donateBtn) {
  donateBtn.addEventListener("click", () => donationDialog.showModal());
}
// 關閉
if (closeDialog) {
  closeDialog.forEach((button) => {
    button.addEventListener("click", () => {
      donationDialog.close();
      feedbackDialog.close();
    });
  });
}

// 意見回饋
const feedbackDialog = document.querySelector("#feedbackDialog");
const feedbackBtn = document.querySelector("#feedbackBtn");

const nameInput = document.querySelector("#nameInput");
const phoneInput = document.querySelector("#phoneInput");
const emailInput = document.querySelector("#emailInput");
const commentInput = document.querySelector("#commentInput");

const nameHint = document.querySelector("#nameHint");
const phoneHint = document.querySelector("#phoneHint");
const emailHint = document.querySelector("#emailHint");
const commentHint = document.querySelector("#commentHint");

const form = document.querySelector("#inputContainer");

// 意見回饋表單驗證
function displayHint(id, message) {
  const hint = document.getElementById(id);
  hint.textContent = message;
}

function clearHint(id) {
  const hint = document.getElementById(id);
  hint.textContent = "";
}

function isValidPhone(phone) {
  // 檢查是否為10碼數字
  return /^\d{10}$/.test(phone);
}

function isValidEmail(email) {
  // 使用簡單的正規表達式檢查Email格式
  return /\S+@\S+\.\S+/.test(email);
}

form.addEventListener("click", (e) => {
  e.preventDefault();
  // 取得輸入值
  const nameInputValue = nameInput.value.trim();
  const phoneInputValue = phoneInput.value;
  const emailInputValue = emailInput.value;
  const commentInputValue = commentInput.value.trim();

  if (!nameInputValue) {
    displayHint("nameHint", "此欄為必填。");
  } else {
    clearHint("nameHint");
  }

  if (!isValidPhone(phoneInputValue)) {
    displayHint("phoneHint", "請輸入正確的手機號碼。");
  } else {
    clearHint("phoneHint");
  }

  if (!isValidEmail(emailInputValue)) {
    displayHint("emailHint", "請輸入正確的Email。");
  } else {
    clearHint("emailHint");
  }

  if (!commentInputValue) {
    displayHint("commentHint", "此欄為必填。");
  } else {
    clearHint("commentHint");
  }

  if (e.target === feedbackBtn) {
    if (
      nameInputValue &&
      isValidPhone(phoneInputValue) &&
      isValidEmail(emailInputValue) &&
      commentInputValue
    ) {
      feedbackDialog.showModal();

      nameInput.value = "";
      phoneInput.value = "";
      emailInput.value = "";
      commentInput.value = "";
    }
  }
});

// GSAP scrollTrigger
gsap.registerPlugin(ScrollTrigger);

// 毛線球
gsap.to("#yarnballSliding", {
  x: "-250%",
  scrollTrigger: {
    trigger: "#yarnballSlidingStart",
    start: "top bottom",
    end: "#yarnballSlidingEnd",
    scrub: true,
    markers: false,
    once: true, // stoped when reached the end position
  },
});

// 貓
gsap.to("#catSliding", {
  x: "85%",
  scrollTrigger: {
    trigger: "#catSlidingStart",
    start: "top bottom",
    end: "#catSlidingEnd",
    scrub: true,
    markers: false,
  },
});
