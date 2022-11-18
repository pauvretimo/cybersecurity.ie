function handleLink(e) {
    window.open(e.innerText, '_blank');
}

function handleEMail(e) {
    navigator.clipboard.writeText(e.innerText
        .replace("contact : ", "")
        .replace(" [at] ", "@")
        .replace(" [dot] ", ".")
    )
        .then(() => {
        let el = document.getElementById("copyPopup")
            el.classList.remove("hidden")
            el.style.animation = 'none';
            el.offsetHeight; /* trigger reflow */
            el.style.animation = null;
        });
}