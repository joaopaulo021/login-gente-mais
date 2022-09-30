function showLoading() {
    const div = document.createElement("div")
    div.classList.add('loading')
    div
    div.classList.add('loading-img')

    const img = document.createElement("img")
    img.src = ("./img/loading.gif")

    div.appendChild(img)
    document.body.appendChild(div)


}

function hideLoading() {
    const loadings = document.getElementsByClassName('loading', 'loading-img')
    if (loadings.length) {
        loadings[0].remove()
    }
}