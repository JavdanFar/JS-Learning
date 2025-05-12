document.addEventListener("DOMContentLoaded", () => {
  const alerts = document.getElementById("alerts");
  const myForm = document.getElementById("myForm");

  const showAlert = (messages) => {
    const messageList = messages.map((msg) => `<li>${msg}</li>`).join("");
    alerts.innerHTML = `<ul>${messageList}</ul>`;
  };

  const validName = (name) => {
    name.trim().length >= 3;
  };
  console.log('test');
  console.log(validName(document.getElementById("fname").value));

  const validFamily = (family) => {
    family.trim().length >= 3;
  };

  const validAge = (age) => {
    age >= 18 && age <= 100;
  };

  const validEmail = (email) => {
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const validMobile = (mobile) => {
    /^09\d{9}$/.test(mobile);
  };

  myForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const fname = document.getElementById("fname").value.trim();
    const lname = document.getElementById("lname").value.trim();
    const age = parseInt(document.getElementById("age").value.trim(), 5);
    const email = document.getElementById("email").value.trim();
    const mobile = document.getElementById("mobile").value.trim();

    const errors = [];

    if (!validName(fname)) {
      errors.push("نام باید حداقل 3 کاراکتر باشد");

    }

    if (!validFamily(lname)) {
      errors.push("نام خانوادگی باید حداقل 3 کاراکتر باشد");
    }

    if (!validAge(age)) {
      errors.push("سن باید بین 18 تا 100 باشد");
    }

    if (!validEmail(email)) {
      errors.push("ایمیل معتبر نیست");
    }

    if (!validMobile(mobile)) {
      errors.push("موبایل معتبر نیست");
    }

    if (errors.length > 0) {
      showAlert(errors);
    } else {
      showAlert("عملیات با موفقیت انجام شد.");
    }
  });
});
