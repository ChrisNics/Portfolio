const burger = document.querySelector(".nav__burger");
const popup = document.querySelector(".pop-up");
const main = document.querySelector(".main");
const nav = document.querySelector(".nav");
const burgerBackground = document.querySelector(".nav__burger__background");
const formBackground = document.querySelector(".abs-form");
const hire = document.querySelector(".cta--nav");
const form = document.querySelector(".form");
const inputEmail = document.querySelector(".inputEmail");
const spinner = document.querySelector(".spinner");
const check = document.querySelector(".checkmark");
const spinnerText = document.querySelector(".spinnerText");
const buttonForm = document.querySelector(".buttonForm");
burger.addEventListener("click", () => {
  console.log("awit");
  popup.style.visibility = "visible";
  popup.style.opacity = "1";
  popup.style.height = "200vh";
  popup.style.background = "rgb(24, 25, 26, .8)";
  burger.style.visibility = "hidden";
  burgerBackground.style.visibility = "hidden";
});

popup.addEventListener("click", () => {
  popup.style.visibility = "hidden";
  popup.style.opacity = "0";
  burger.style.visibility = "visible";
});

const mainBottom = main.getBoundingClientRect().bottom;
window.addEventListener("scroll", (e) => {
  const isBurger = getComputedStyle(burger).display;
  if (window.scrollY > mainBottom && isBurger === "block") {
    burger.style.position = "fixed";
    burgerBackground.style.visibility = "visible";
    burgerBackground.style.opacity = "1";
  } else {
    burger.style.position = "relative";
    burgerBackground.style.visibility = "hidden";
    burgerBackground.style.opacity = "0";
  }
});

hire.addEventListener("click", () => {
  formBackground.style.opacity = "1";
  formBackground.style.visibility = "visible";
});

formBackground.addEventListener("click", (e) => {
  if (e.target.className === "abs-form") {
    formBackground.style.visibility = "hidden";
    formBackground.style.opacity = "0";
  }
});

// function ValidateEmail(mail)
// {
//  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(myForm.emailAddr.value))
//   {
//     return (true)
//   }
//     alert("You have entered an invalid email address!")
//     return (false)
// }

inputEmail.addEventListener("input", () => {
  console.log(inputEmail.value);
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(inputEmail.value)) {
    buttonForm.style.visibility = "visible";
    buttonForm.style.opacity = "1";
  } else {
    buttonForm.style.visibility = "hidden";
    buttonForm.style.opacity = "0";
  }
});

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  spinner.classList.add("fa");
  spinner.classList.add("fa-spinner");
  spinner.classList.add("fa-spin");
  spinnerText.innerHTML = "";

  try {
    const email = inputEmail.value;
    const res = await axios({
      method: "POST",
      url: "/api/email",
      data: {
        email,
      },
    });

    if (res.data.status === "success") {
      spinner.classList.remove("fa");
      spinner.classList.remove("fa-spinner");
      spinner.classList.remove("fa-spin");
      check.style.display = "block";
      buttonForm.style.background = "#F5841D";

      setTimeout(() => {
        formBackground.style.visibility = "hidden";
        formBackground.style.opacity = "0";
        location.reload();
      }, 3000);
    }
  } catch (err) {
    console.log("error");
  }
});
