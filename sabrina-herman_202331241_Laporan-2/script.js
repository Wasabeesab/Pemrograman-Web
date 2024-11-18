
function toggleTheme() {
    document.body.classList.toggle('messy'); 
}


function toggleContent(element) {
    const content = element.nextElementSibling; 
    if (content.style.display === "none") {
        const confirmShow = confirm("Kamu mau liat tulisannya?");
        if (confirmShow) {
            content.style.display = "block";
        }
    } else {
        const confirmHide = confirm("Kamu mau sembunyiin tulisannya?");
        if (confirmHide) {
            content.style.display = "none";
        }
    }
}
