let userName = document.querySelector("#userName");
let userFamily = document.querySelector("#userFamily");
let userAge = document.querySelector("#userAge");
let Submit = document.querySelector("#submit");
let blanks = document.querySelector(".blanks");
let table = document.querySelector(".table");

submit.addEventListener("click", (event) => {
  event.preventDefault();
  let userAgeValue = userName.value;
  let userFamilyValue = userFamily.value;
  let userNameValue = userAge.value;
  if (userName.value == "" || userFamily.value == "" || userAge.value == "") {
    blanks.style.display = "block";
    setTimeout(() => {
      blanks.style.display = "none";
    }, 3000);
  } else {
    table.insertAdjacentHTML(
      "beforeend",
      "<tr><td>" +
        userAgeValue +
        "</td><td>" +
        userFamilyValue +
        "</td><td>" +
        userNameValue +
        "</td></tr>"
    );
    blanks.style.display = "none";
    userName.value = "";
    userFamily.value = "";
    userAge.value = "";
  }
});
