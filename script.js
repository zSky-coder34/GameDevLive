document.getElementById("conn_but").addEventListener("click", function() {
    window.location.href = "Connexion.html";
});

document.getElementById("button").addEventListener("click", function() {
    var actu = document.getElementById("actu_text");

    actu.scrollIntoView({ behavior: "smooth", block: "start" });
})

document.getElementById("conn_but").addEventListener("mouseover", function() {
    document.getElementById("conn_but").style.cursor = "pointer";
});

document.getElementById("button").addEventListener("mouseover", function() {
    document.getElementById("button").style.cursor = "pointer";
})

document.getElementById("button2").addEventListener("click", function() {
    window.location.href = "Stream.html"
})

document.getElementById("button2").addEventListener("mouseover", function() {
    document.getElementById("button2").style.cursor = "pointer";
})

document.getElementById("button3").addEventListener("click", function() {
    var acc = document.getElementById("conn_but");

    acc.scrollIntoView({ behavior: "smooth", block: "start" });
})

document.getElementById("button3").addEventListener("mouseover", function() {
    document.getElementById("button3").style.cursor = "pointer";
})