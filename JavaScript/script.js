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

// the following JavaScript was sourced from jQuery.com
// Script for draggable cards
$(function sort() {
  $(".column").sortable({
    connectWith: ".column",
    handle: ".portlet-header",
    placeholder: "portlet-placeholder ui-corner-all",
  });

  $(".portlet")
    .addClass("ui-widget ui-widget-content ui-helper-clearfix ui-corner-all")
    .find(".portlet-header")
    .addClass("ui-widget-header ui-corner-all");
});

// the following JavaScript was sourced from jQuery.com
//Script for accordion with sortable menus
$(function accordions() {
  {
    let h3Elements = [];

    $("#accordion")
      .accordion({
        header: "> div > h3",
      })
      .sortable({
        axis: "y",
        handle: "h3",
        stop: function (event, ui) {
          // Refresh accordion to handle new order
          $(this).accordion("refresh");
          // Initialize the numbering on page load
          updateNumbering();
        },
      });
  }

  // Update the numbering of the menus based on their order
  function updateNumbering() {
    $("#accordion h3").each(function (index) {
      var clonedHeader = $(this).clone(); // create a clone of the header
      var headerText = clonedHeader
        .children() // select the index number element
        .remove() // remove the index number element from the clone
        .end() // select the clone again
        .text(); // get the text of the header without the index number
      clonedHeader.prepend("<span>" + (index + 1) + ". " + "</span>"); // add the index number to the clone
      $(this).replaceWith(clonedHeader); // replace the original header with the modified clone
    });
    $("#accordion").accordion("destroy");
    $("#accordion").accordion({
      header: "> div > h3",
    });
  }

  updateNumbering();
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
loginBtn.addEventListener("click", () => {
  var loginFormWrapper = document.querySelector(".loginFormWrapper");
  if (loginFormWrapper) {
    loginFormWrapper.style.display = "block";
  }
});

// Store username in localstorage when submit button is clicked
submitButton.addEventListener("click", (event) => {
  if (event.target) {
    localStorage.setItem("loggedIn", "true");
    localStorage.setItem("username", username.value);
    showUserProfile();
  }
});
console.log("stored." + localStorage.getItem("username"));

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
  var loginBtn = document.querySelector(".loginBtn");
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
  const username = localStorage.getItem("username");
  if (logInNameContainer) {
    logInNameContainer.textContent = username.value;
  }
  console.log("displayed." + username);
}
// Show username on page load if user is logged in
window.addEventListener("load", () => {
  if (localStorage.getItem("loggedIn") === "true") {
    const logInNameContainer = document.querySelector(".userName");
    const username = localStorage.getItem("username");
    if (logInNameContainer && username) {
      logInNameContainer.textContent = username;
    }
    console.log("this is." + username);
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
