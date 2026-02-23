function highlight() {
    var boldWords = document.querySelectorAll("strong");
    boldWords.forEach(function(element) {
        element.style.color = "rgb(0, 128, 0)";
    });
}

function return_normal() {
    var boldWords = document.querySelectorAll("strong");
    boldWords.forEach(function(element) {
        element.style.color = "rgb(0, 0, 0)";
    });
}
