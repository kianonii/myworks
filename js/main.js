const openPopup = document.getElementById("button");
const popup = document.getElementById("popup");
const closePopup = document.getElementById("popup_close");

openPopup.addEventListener("click", function(){
    popup.classList.add("active");
});

closePopup.addEventListener("click", function(){
    popup.classList.remove("active");
});