async function getUsers() {
  try {
    // const response = await fetch("https://jsonplaceholder.typicode.com/users/");
    // const users = await response.json();
    // localStorage.setItem("users", JSON.stringify(users));

    let userList = JSON.parse(localStorage.getItem("users"));

    let ul = document.querySelector("ul");
    userList.map((user) => {
      ul.innerHTML += `
        <li>${user.name}</li>`;
    });
  } catch (error) {
    console.log("Something is Wrong");
  }
}
getUsers();
