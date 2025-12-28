const menu = document.querySelector(".menu input");
const nav = document.querySelector("nav ul");

menu.addEventListener("click", function () {
  nav.classList.toggle("slide");
});
const scriptURL = "https://script.google.com/macros/s/AKfycbx5MhV9pJjppOofqTQ4mFtL0I3tiXDAVpfhEIhAWqTOUIJvxsRcuDuOu8lQbnclC0dg6A/exec";
const form = document.forms["contact-form"];
const btnKirim = document.querySelector(".btn-kirim");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
      console.log("Success!", response);
      //reset formnya
      form.reset();
    })
    .catch((error) => console.error("Error!", error.message));
});
