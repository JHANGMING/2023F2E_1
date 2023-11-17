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
