const footerComponent = document.querySelector("main footer p")

if (footerComponent instanceof HTMLElement)
    footerComponent.innerHTML = ` &#169;${new Date().getUTCFullYear()} - m0lc14kk.com`
