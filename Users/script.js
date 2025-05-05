async function getUsers() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await response.json();
    // console.log(users);
    const tableBody = document.getElementById("tableBody");
    users.map((user) => {
      tableBody.innerHTML += `<tr>
      <td>${user.id}</td>
      <td>${user.name}</td>
      <td>${user.email}</td>
      </tr>`;
    });
  } catch (error) {
    console.log("Something is Wrong");
  }
}
getUsers();

async function createUser() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users", {
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
// createUser();

async function updateUser() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users/11", {
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
// updateUser();

async function deleteUser() {
  try {
    await fetch("https://jsonplaceholder.typicode.com/users/11", {
      method: "DELETE",
    });
  } catch (error) {
    console.log("user is Wrong");
  }
}
// deleteUser();
