window.onload = () => {
    const moduleCheck = window.location.href.match(/framermodules\.com\/[^\/]+$/)
    const moduleName = moduleCheck ? moduleCheck[0].replace(/framermodules\.com\//, '') : null

    if (moduleName) {
        const urlScheme = 'framermodules://' + moduleName

        window.setTimeout(function() {
            window.location = urlScheme
        }, 1000)
    }
}

const download = () => {
    window.location = 'https://framermodules.com'
    return false
}
