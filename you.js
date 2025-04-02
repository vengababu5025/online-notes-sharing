const container = document.getElementById("container");
const registerbtn = document.getElementById("register");
const loginbtn = document.getElementById("login");

registerbtn.addEventListener("click", () => {
  container.classList.add("active");
});

loginbtn.addEventListener("click", () => {
  container.classList.remove("active");
});
document.addEventListener("DOMContentLoaded", function () {
  const signUpButton = document.querySelector(".sign-up button");
  const signInButton = document.querySelector(".sign-in button");

  function redirectToProfile(role,user) {
      if (role === "student") {
        sessionStorage.setItem("LoggedInUser", user);
          window.location.href = "index5.html"; // Link to existing Student Profile Page
      } else if (role === "teacher") {
        sessionStorage.setItem("LoggedInUser", user);
          window.location.href = "index4.html"; // Link to existing Teacher Profile Page
      }
    }

  // Sign Up Click Event
  signUpButton.addEventListener("click", function (event) {
      event.preventDefault(); // Prevents default form submission
      const role = document.querySelector("#signupRole").value; // Get selected role
      redirectToProfile(role); // Redirect to profile page
  });

  // Sign In Click Event
  signInButton.addEventListener("click", function (event) {
      event.preventDefault(); // Prevents default form submission
      const role = document.querySelector("#signinRole").value; // Get selected role
      let faculty = document.getElementById("signinIdField").value;
      redirectToProfile(role,faculty); // Redirect to profile page
  });
});
