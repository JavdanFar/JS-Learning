async function getUsers() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users/");
    const users = await response.json();
    const tableBody = document.getElementById("tableBody");
    users.map((user) => {
      tableBody.innerHTML += `<tr>
      <td>${user.id}</td>
      <td>${user.name}</td>
      <td>${user.email}</td>
      <td>
      <button class="btn btn-warning">Edit</button>
      <button class="btn btn-danger remove" data-id="${user.id}">Delete</button>
      </td>
      </tr>`;
    });
    const removeBtns = document.querySelectorAll(".remove");
    removeBtns.forEach((removeBtn) => {
      removeBtn.addEventListener("click", deleteUser);
    });
  } catch (error) {
    console.log("Something is Wrong");
  }
}
getUsers();

async function createUser() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users/", {
      method: "POST",
      body: JSON.stringify({
        name: "Faramarz",
        username: "gladioum",
        email: "gladioum@gmail.com",
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
    const user = await response.json();
    console.log(user);
  } catch (error) {
    console.log("user is Wrong");
  }
}

async function updateUser() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users/", {
      method: "PATCH",
      body: JSON.stringify({
        name: "Bruce",
        username: "gladioum",
        email: "gladioum@gmail.com",
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
    const user = await response.json();
    console.log(user);
  } catch (error) {
    console.log("user is Wrong");
  }
}

async function deleteUser(e) {
  //
  try {
    await fetch(`https://jsonplaceholder.typicode.com/users/${e.target.dataset.id}`, {
      method: "DELETE",
    });
    e.target.parentNode.parentNode.remove();
  } catch (error) {
    console.log("user is Wrong");
  }
}
// deleteUser();
