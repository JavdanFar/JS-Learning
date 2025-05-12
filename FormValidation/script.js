document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("myForm");
  const validName = (name) => {
    name.trim().length >= 3;
  };

  const validFamily = (family) => {
    family.trim().length >= 3;
  };

  const validEmail = (email) => {
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };
  
  const validMobile = (mobile) => {
    /^09\d{9}$/.test(mobile);
  };
});
