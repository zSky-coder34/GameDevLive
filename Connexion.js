document.addEventListener("DOMContentLoaded", function() {
    let v = document.getElementById("valid");
    let wrn = document.getElementById("wrn");
    let but = document.getElementById("but_img");
    let oeil = document.getElementById("oeil");
    let oeilf = document.getElementById("oeil_closed");
    let psswd = document.getElementById("password");
    //let email = document.getElementById("email");

    but.addEventListener("click", function() {
        if (oeil.style.opacity === '0') {
            oeil.style.opacity = '1';
            oeilf.style.opacity = '0';
            if (psswd.type === "text") {
                psswd.type = "password";
            }
        } else {
            oeil.style.opacity = '0';
            oeilf.style.opacity = '1';
            if (psswd.type === "password") {
                psswd.type = "text";
            }
        }
    });

    but.addEventListener("mouseover", function() {
        but.style.cursor = "pointer";
    })

    v.addEventListener("mouseover", function() {
        v.style.cursor = "pointer";
    })

    document.getElementById("valid").addEventListener("click", function(event) {
        var email = document.getElementById("email").value.trim();
        var mdp = document.getElementById("password").value;
        var mdpp = document.getElementById("password").value.trim();
        var emailRegex = /\S+@\S+\.\S+/;
        
        if (email.textContent === "" || !emailRegex.test(email)) {
          wrn.style.opacity = "1";
          event.preventDefault();
        } else if (mdp.length < 8) {
            wrn.style.opacity = "1";
            event.preventDefault();
        } else if (mdp.length > 30) {
            wrn.style.opacity = "1";
            event.preventDefault();
        } else if (mdpp.textContent === "") {
            wrn.style.opacity = "1";
            event.preventDefault();
        }

        setTimeout(function() {
            wrn.style.opacity = "0"
        }, 4000); // Attendre 4 secondes avant de cacher le message d'erreur
    });
});