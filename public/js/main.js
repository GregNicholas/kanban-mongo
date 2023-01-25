console.log("hello from main js")
const goBackLink = document.querySelector(".go-back")
const historyGoBack = () => {
    console.log("let's go back")
    window.history.back()
    goBackLink.removeEventListener("click", historyGoBack)
}
goBackLink.addEventListener("click", historyGoBack)