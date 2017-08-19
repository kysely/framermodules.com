const resultsParagraph = document.querySelector('p#results')
const loadingPiece = document.querySelector('button.paired')
const badClass = 'bad'
const goodClass = 'good'

const toggleLoading = isLoading => {
    loadingPiece.innerText = isLoading ? 'Checking' : 'Check'
}

const renderResult = (className, message) => {
    resultsParagraph.innerHTML = `<span class='${className}'>${message}</span>`
}

const reqError = () => {
    toggleLoading(false)
    renderResult(badClass, '😔 Sorry, but I couldn\'t check the name availability')
}

const reqOk = result => {
    const resultClass = result.available === true ? goodClass : badClass
    const message = result.available === true ?
        `👍 Yes! This name is still free and can be yours! The generated unique name will be <code>${result.unique_name}</code>` :
        '😢 This name is already taken, <br />try to hold back those tears'

    renderResult(resultClass, message)
}

const checkAvailability = () => {
    toggleLoading(true)
    const moduleName = document.querySelector('#module-name-input').value
    const reqURL = `https://framermodules.herokuapp.com/checkName/${encodeURIComponent(moduleName)}`

    const request = new XMLHttpRequest()
    request.open('GET', reqURL, true)

    request.onerror = reqError
    request.onload = function() {
        toggleLoading(false)

        if (this.status >= 200 && this.status < 400) {
            reqOk( JSON.parse(this.response).data )
        } else {
            reqError()
        }
    }
    request.send()

    return false
}
