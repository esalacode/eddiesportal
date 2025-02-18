function goToPage(page) {
    document.body.style.transition = "opacity 0.5s";
    document.body.style.opacity = "0";
    setTimeout(() => {
        window.location.href = page;
    }, 500);
}