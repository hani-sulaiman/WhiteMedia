let current_step = 0;
let steps = document.querySelectorAll(".viewer .step");
let bar_steps = document.querySelectorAll(".progress .step");
let max_steps = steps.length;

function btn_next() {
  if (current_step < max_steps - 1) {
    if (current_step == 0) {
      if (check_informations_empty()) {
        return;
      }
    }
    steps[current_step].classList.remove("active");
    bar_steps[current_step].innerHTML = `<i class="bi bi-check2"></i>`;
    current_step++;
    steps[current_step].classList.add("active");
    if (current_step == max_steps - 1) {
      document.querySelector(
        ".buttons"
      ).innerHTML += `<button type="submit"  class="next">Submit</button>`;
      document.querySelector(".next").remove();
      document.querySelector(".back").addEventListener("click", btn_back);
      document.querySelector(".next").addEventListener("click", btn_next);
    }
  }
}
function btn_back() {
  if (current_step != 0) {
    if (current_step == max_steps - 1) {
      document.querySelector(
        ".buttons"
      ).innerHTML += `<button type="button"  class="next">Next</button>`;
      document.querySelector(".next").remove();
      document.querySelector(".back").addEventListener("click", btn_back);
      document.querySelector(".next").addEventListener("click", btn_next);
    }
    steps[current_step].classList.remove("active");
    bar_steps[current_step - 1].innerHTML = `<i class="bi bi-circle-fill"></i>`;
    current_step--;
    steps[current_step].classList.add("active");
  }
}
document.querySelector(".back").addEventListener("click", btn_back);
document.querySelector(".next").addEventListener("click", btn_next);
document.querySelector(".close-msg-success").addEventListener("click", () => {
  document.querySelector("pop-up-success").classList.remove("view");
});
function ALERT_USER(selector) {
  document.getElementById(selector).focus();
}
function check_informations_empty() {
  firstname = document.querySelector("#firstname").value;
  lastname = document.querySelector("#lastname").value;
  email = document.querySelector("#email").value;
  phone = document.querySelector("#phonenumber").value;
  company = document.querySelector("#companyname").value;
  business = document.querySelector("#businessfield").value;
  return false;
  // if (!is_email(email)) {
  //   ALERT_USER("email");
  //   return true;
  // } else if (firstname == "") {
  //   ALERT_USER("firstname");
  //   return true;
  // } else if (lastname == "") {
  //   ALERT_USER("lastname");
  //   return true;
  // } else if (company == "") {
  //   ALERT_USER("companyname");
  //   return true;
  // } else if (business == "") {
  //   ALERT_USER("businessfield");
  //   return true;
  // } else if (email == "") {
  //   ALERT_USER("email");
  //   return true;
  // } else if (phone == "") {
  //   ALERT_USER("phonenumber");
  //   return true;
  // } else {
  //   return false;
  // }
}
function is_email(email) {
  const res = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  return res.test(String(email).toLowerCase());
}
