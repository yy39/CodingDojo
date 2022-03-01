function loginswap(element) {
    if (element.innerHTML == "Login") {
        element.innerHTML = "Logout";
    } else {
        element.innerHTML = "Login";
    }
}

function remove(element) {
    element.remove();
}

function likeAlert() {
    alert("Ninja was liked");
}