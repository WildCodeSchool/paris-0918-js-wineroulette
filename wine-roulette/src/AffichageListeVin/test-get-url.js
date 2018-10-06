   const champsurl = document.querySelector("span");

    champsurl.addEventListener("click", (event) => {
      console.log(password.value.length);
      if (password.value.length < 6) {
        event.preventDefault();
        console.log("pass");
        alert("Mot de pass trop faible try again");
      }
    });


    document.querySelector('a').href = 'http://wikipedia.org';