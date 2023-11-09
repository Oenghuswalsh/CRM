const loginButton = document.getElementById("loginButton");
const loginFormWrapper = document.querySelector(".loginFormWrapper");
const loginBtnContainer = document.querySelector(".loginBtnContainer");
const avatarImg = document.querySelector(".avatarImg");
const columnDashboard = document.querySelector(".column.dashboard");

const submitButton = document.getElementById("submit");
const logInNameContainer = document.querySelector(".userName");
const username = document.getElementById("username");
const logoutButton = document.getElementById("logoutButton");
const loginBtn = document.querySelector(".loginBtn");
const logoutBtnContainer = document.querySelector(".logoutBtnContainer");
const dashboards = document.querySelector(".dashboards");
var isLoggedIn = localStorage.getItem("loggedIn");
//The script.js file contains the custom JavaScript I worte for this CRM website

//Script for accordion with sortable menus
$(function () {
  {
    let h3Elements = [];
    $("#accordion")
      .accordion({
        collapsible: true,
        active: false,
        heightStyle: "content",
        header: "> div > h3",
      })
      .sortable({
        axis: "y",
        handle: "h3",
        stop: function (event, ui) {
          // Refresh accordion to handle new order
          $(this).accordion("refresh");
        },
      });
  }
});

// If user is logged in show the user home page
function userLoggedIn() {
  if (isLoggedIn) {
    showUserProfile();
  }
}

userLoggedIn();

// Function to track tooltip
$(function () {
  $(document).tooltip({
    track: true,
    position: {
      my: "left+50px center",
      at: "right center",
    },
  });
});
function loadHome() {
  window.location.href = "./home.html";
}

// Display log in form
function showLoginForm() {
  var loginFormWrapper = document.querySelector(".loginFormWrapper");
  if (loginFormWrapper) {
    loginFormWrapper.style.display = "block";
  }
}

// Store username in localstorage when submit button is clicked
submitButton.addEventListener("click", (event) => {
  if (event.target) {
    localStorage.setItem("loggedIn", "true");
    localStorage.setItem("username", username.value);
    showUserProfile();
  }
});

// Remove username from localstorage when user clicks on log out button
logoutButton.addEventListener("click", () => {
  localStorage.setItem("loggedIn", "false");
  localStorage.removeItem("username", username.value);
  showHome();
});

// Return user to home page when log out button is clicked
// Hide log out button
function showHome() {
  var logoutBtnContainer = document.querySelector(".logoutBtnContainer");
  if (logoutBtnContainer) {
    logoutBtnContainer.style.display = "none";
  }
  // Display log in button
  var loginBtn = document.querySelector(".loginBtn"); //
  if (loginBtn) {
    loginBtn.style.display = "flex";
  }

  // Hide user name
  var logInNameContainer = document.querySelector(".userName");
  if (logInNameContainer) {
    logInNameContainer.textContent = "";
  }
  // Hide users avatar image icon
  var avatarImg = document.querySelector(".avatarImg");
  if (avatarImg) {
    avatarImg.src = `./Icons/user-96.png`;
  }
}

// hide log in form when log in button on log in form is clicked
function showUserProfile() {
  var loginFormWrapper = document.querySelector(".loginFormWrapper");
  if (loginFormWrapper) {
    loginFormWrapper.style.display = "none";
  }
  // Display log out button
  var logoutBtnContainer = document.querySelector(".logoutBtnContainer");
  if (logoutBtnContainer) {
    logoutBtnContainer.style.display = "flex";
  }

  // Hide log in button
  var loginBtn = document.querySelector(".loginBtn");
  if (loginBtn) {
    loginBtn.style.display = "none";
  }
  // Display users avatar image icon
  var avatarImg = document.querySelector(".avatarImg");
  if (avatarImg) {
    avatarImg.src = `./Icons/active-user-96.png`;
  }
  // Display username on header
  var logInNameContainer = document.querySelector(".userName");
  if (logInNameContainer) {
    logInNameContainer.textContent = username.value;
  }
}
// Show username on page load if user is logged in
window.addEventListener("load", () => {
  if (localStorage.getItem("loggedIn") === "true") {
    const logInNameContainer = document.querySelector(".userName");
    const username = localStorage.getItem("username");
    if (logInNameContainer && username) {
      logInNameContainer.textContent = username;
    }
  }
});
// Remove username from local storage if user is not logged in
if (localStorage.getItem("loggedIn") !== "true") {
  localStorage.removeItem("username");
}

// Log out function
function logout() {
  // Remove logged in state and username from local storage
  localStorage.removeItem("loggedIn");
  localStorage.removeItem("username");

  // Redirect to login page
  window.location.href = "./index.html";
}

// Log out button event listener
logoutButton.addEventListener("click", logout);

//Script for staff members data
//staff Memeber data objects
const employee1 = {
  firstName: "John",
  lastName: "Connor",
  email: "J.Conner@example.com",
  phone: "123-456-7890",
};

const employee2 = {
  firstName: "Mick",
  lastName: "Smith",
  email: "M.Smith@example.com",
  phone: "555-555-1212",
};

const employee3 = {
  firstName: "Bob",
  lastName: "Murphy",
  email: "B.Murphy@example.com",
  phone: "987-654-3210",
};
const employee4 = {
  firstName: "Mary",
  lastName: "Wallace",
  email: "M.Wallace@example.com",
  phone: "123-456-7890",
};

const employee5 = {
  firstName: "Alice",
  lastName: "Brown",
  email: "A.Brown@example.com",
  phone: "555-555-1212",
};

const employee6 = {
  firstName: "Thomas",
  lastName: "Burke",
  email: "T.Burke@example.com",
  phone: "987-654-3210",
};

const employee7 = {
  firstName: "Benjamin",
  lastName: "Martin",
  email: "b.martin@example.com",
  phone: "123-456-7890",
};

const employee8 = {
  firstName: "James",
  lastName: "Anderson",
  email: "james.anderson@example.com",
  phone: "555-555-1212",
};

const employee9 = {
  firstName: "Sarah",
  lastName: ">Williams",
  email: "sarah.williams@example.com",
  phone: "987-654-3210",
};
const employee10 = {
  firstName: "Samantha",
  lastName: "Lee",
  email: "samantha.lee@example.com",
  phone: "123-456-7890",
};

const employee11 = {
  firstName: "Emily",
  lastName: "Taylor",
  email: "emily.taylor@example.com",
  phone: "555-555-1212",
};

const employee12 = {
  firstName: "William",
  lastName: "Johnson",
  email: "william.johnson@example.com",
  phone: "987-654-3210",
};
// staff data array
const employee = [
  employee1,
  employee2,
  employee3,
  employee4,
  employee5,
  employee6,
  employee7,
  employee8,
  employee9,
  employee10,
  employee11,
  employee12,
];

let id;

const dataContainer = document.querySelectorAll("h3");
// This 'for' loop sets the value of the 'id' variable to the 'id' attribute value of the selected <h3> element.
for (let i = 0; i < dataContainer.length; i++) {
  dataContainer[i].addEventListener("click", function () {
    id = this.id;
    console.log(id);
  });
}
// Function to display staff data
function displayUserData(employee) {
  const fullTimeStaffDataContainer = document.getElementById(
    "fullTimeStaffDataContainer"
  );
  const partTimeStaffDataContainer = document.getElementById(
    "partTimeStaffDataContainer"
  );
  const casualStaffDataContainer = document.getElementById(
    "casualStaffDataContainer"
  );
  const contractorsStaffDataContainer = document.getElementById(
    "contractorsStaffDataContainer"
  );
  if (id === "fullTimeStaff") {
    fullTimeStaffDataContainer.innerHTML = "";
  } else if (id === "partTimeStaff") {
    partTimeStaffDataContainer.innerHTML = "";
  } else if (id === "casualStaff") {
    casualStaffDataContainer.innerHTML = "";
  } else if (id === "contractors") {
    contractorsStaffDataContainer.innerHTML = "";
  }

  const firstName = employee.firstName;
  const lastName = employee.lastName;
  const email = employee.email;
  const phone = employee.phone;

  const userDataDiv = document.createElement("div");
  userDataDiv.classList.add("user-data");

  const firstNameLabel = document.createElement("label");
  firstNameLabel.textContent = "First Name:";
  userDataDiv.appendChild(firstNameLabel);
  userDataDiv.appendChild(document.createElement("br"));

  const firstNameInput = document.createElement("input");
  firstNameInput.type = "text";
  firstNameInput.style.marginLeft = "3em";
  firstNameInput.value = firstName;
  firstNameInput.disabled = true;
  userDataDiv.appendChild(firstNameInput);
  userDataDiv.appendChild(document.createElement("br"));

  const lastNameLabel = document.createElement("label");
  lastNameLabel.textContent = "Last Name:";
  userDataDiv.appendChild(lastNameLabel);
  userDataDiv.appendChild(document.createElement("br"));

  const lastNameInput = document.createElement("input");
  lastNameInput.type = "text";
  lastNameInput.style.marginLeft = "3em";
  lastNameInput.value = lastName;
  lastNameInput.disabled = true;
  userDataDiv.appendChild(lastNameInput);
  userDataDiv.appendChild(document.createElement("br"));

  const emailLabel = document.createElement("label");
  emailLabel.textContent = "Email:";
  userDataDiv.appendChild(emailLabel);
  userDataDiv.appendChild(document.createElement("br"));

  const emailInput = document.createElement("input");
  emailInput.type = "email";
  emailInput.style.marginLeft = "3em";
  emailInput.value = email;
  emailInput.disabled = true;
  userDataDiv.appendChild(emailInput);
  userDataDiv.appendChild(document.createElement("br"));

  const phoneLabel = document.createElement("label");
  phoneLabel.textContent = "Phone:";
  userDataDiv.appendChild(phoneLabel);
  userDataDiv.appendChild(document.createElement("br"));

  const phoneInput = document.createElement("input");
  phoneInput.type = "tel";
  phoneInput.style.marginLeft = "3em";
  phoneInput.value = phone;
  phoneInput.disabled = true;
  userDataDiv.appendChild(phoneInput);
  userDataDiv.appendChild(document.createElement("br"));

  const editButton = document.createElement("button");
  editButton.type = "button";
  editButton.style.color = "white";
  editButton.style.backgroundColor = " #007bff";
  editButton.style.marginTop = "0.3em";
  editButton.style.padding = "0.2em 2em";
  editButton.style.border = "2px black solid";
  editButton.style.borderRadius = "5px";
  editButton.addEventListener("mouseover", function () {
    editButton.style.backgroundColor = " #9747ff";
  });
  editButton.addEventListener("mouseout", function () {
    editButton.style.backgroundColor = " #007bff";
  });

  editButton.textContent = "Edit";
  editButton.addEventListener("click", (event) => {
    editButton.style.display = "none";
    firstNameInput.disabled = false;
    firstNameInput.style.border = "2px dashed  #9747ff";
    firstNameInput.style.borderRadius = "3px";
    lastNameInput.disabled = false;
    lastNameInput.style.border = "2px dashed  #9747ff";
    lastNameInput.style.borderRadius = "3px";
    emailInput.disabled = false;
    emailInput.style.border = "2px dashed  #9747ff";
    emailInput.style.borderRadius = "3px";
    phoneInput.disabled = false;
    phoneInput.style.border = "2px dashed  #9747ff";
    phoneInput.style.borderRadius = "3px";
    saveButton.style.display = "inline-block";
  });
  userDataDiv.appendChild(editButton);
  const saveButton = document.createElement("button");
  saveButton.type = "button";
  saveButton.style.color = "white";
  saveButton.style.backgroundColor = " #007bff";
  saveButton.style.marginTop = "0.3em";
  saveButton.style.padding = "0.2em 2em";
  saveButton.style.border = "2px black solid";
  saveButton.style.borderRadius = "5px";
  saveButton.addEventListener("mouseover", function () {
    saveButton.style.backgroundColor = " #9747ff";
  });
  saveButton.addEventListener("mouseout", function () {
    saveButton.style.backgroundColor = " #007bff";
  });
  saveButton.textContent = "Save";
  saveButton.style.display = "none";
  saveButton.addEventListener("click", (event) => {
    employee.firstName = firstNameInput.value;
    employee.lastName = lastNameInput.value;
    employee.email = emailInput.value;
    employee.phone = phoneInput.value;

    firstNameInput.disabled = true;
    firstNameInput.style.border = "1px solid  #767676";
    lastNameInput.disabled = true;
    lastNameInput.style.border = "1px solid  #767676";
    emailInput.disabled = true;
    emailInput.style.border = "1px solid  #767676";
    phoneInput.disabled = true;
    phoneInput.style.border = "1px solid  #767676";
    saveButton.style.display = "none";
    editButton.style.display = "inline-block";
  });
  userDataDiv.appendChild(saveButton);

  if (id === "fullTimeStaff") {
    fullTimeStaffDataContainer.appendChild(userDataDiv);
  } else if (id === "partTimeStaff") {
    partTimeStaffDataContainer.appendChild(userDataDiv);
  } else if (id === "casualStaff") {
    casualStaffDataContainer.appendChild(userDataDiv);
  } else if (id === "contractors") {
    contractorsStaffDataContainer.appendChild(userDataDiv);
  }
}

// Event listener for selecttion staff member seperated by staff catogery.
const fullTimeSelector = document.getElementById("fullTimeSelector");
fullTimeSelector.addEventListener("change", (event) => {
  const selectedUserIndex = event.target.value - 1;
  const selectedUserData = employee[selectedUserIndex];
  displayUserData(selectedUserData);
});

const partTimeSelector = document.getElementById("partTimeSelector");
partTimeSelector.addEventListener("change", (event) => {
  const selectedUserIndex = event.target.value - 1;
  const selectedUserData = employee[selectedUserIndex];
  displayUserData(selectedUserData);
});
const casualSelector = document.getElementById("casualSelector");
casualSelector.addEventListener("change", (event) => {
  const selectedUserIndex = event.target.value - 1;
  const selectedUserData = employee[selectedUserIndex];
  displayUserData(selectedUserData);
});
const contractorsSelector = document.getElementById("contractorsSelector");
contractorsSelector.addEventListener("change", (event) => {
  const selectedUserIndex = event.target.value - 1;
  const selectedUserData = employee[selectedUserIndex];
  displayUserData(selectedUserData);
});
