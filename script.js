// script.js

let user = [
  {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
  },
  {
    id: 2,
    name: "Ervin Howell",
    username: "Antonette",
    email: "Shanna@melissa.tv",
  },
  {
    id: 3,
    name: "Clementine Bauch",
    username: "Samantha",
    email: "Nathan@yesenia.net",
  },
  {
    id: 4,
    name: "Patricia Lebsack",
    username: "Karianne",
    email: "Julianne.OConner@kory.org",
  },
  {
    id: 5,
    name: "Chelsey Dietrich",
    username: "Kamren",
    email: "Lucio_Hettinger@annie.ca",
  },
  {
    id: 6,
    name: "Mrs. Dennis Schulist",
    username: "Leopoldo_Corkery",
    email: "Karley_Dach@jasper.info",
  },
  {
    id: 7,
    name: "Kurtis Weissnat",
    username: "Elwyn.Skiles",
    email: "Telly.Hoeger@billy.biz",
  },
  {
    id: 8,
    name: "Nicholas Runolfsdottir V",
    username: "Maxime_Nienow",
    email: "Sherwood@rosamond.me",
  },
  {
    id: 9,
    name: "Glenna Reichert",
    username: "Delphine",
    email: "Chaim_McDermott@dana.io",
  },
  {
    id: 10,
    name: "Clementina DuBuque",
    username: "Moriah.Stanton",
    email: "Rey.Padberg@karina.biz",
  },
];

const userCardsContainer = document.getElementById("user-cards");
const userForm = document.getElementById("user-form");

// Display existing user cards
function displayUserCards() {
  user.forEach((userInfo) => {
    const userCard = createUserCard(userInfo);
    userCardsContainer.appendChild(userCard);
  });
}

// Create a user card element
function createUserCard(userInfo) {
  const userCard = document.createElement("div");
  userCard.classList.add("user-card");
  userCard.innerHTML = `
    <h3>${userInfo.name}</h3>
    <p>Username: ${userInfo.username}</p>
    <p>Email: ${userInfo.email}</p>
  `;
  return userCard;
}

userForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const name = document.getElementById("name").value;
  const username = document.getElementById("username").value;
  const email = document.getElementById("email").value;

  if (name && username && email) {
    const newUser = {
      id: user.length + 1,
      name: name,
      username: username,
      email: email,
    };
    const newUserCard = createUserCard(newUser);
    userCardsContainer.appendChild(newUserCard);
    userForm.reset();
  } else {
    alert("Please fill in all fields.");
  }
});

displayUserCards();
