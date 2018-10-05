   const password = document.getElementById("pass");

    document.querySelector("form").addEventListener("submit", (event) => {
      console.log(password.value.length);
      if (password.value.length < 6) {
        event.preventDefault();
        console.log("pass");
        alert("Mot de pass trop faible try again");
      }
    });