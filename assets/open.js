window.onload = () => {
    const moduleCheck = window.location.href.match(/framermodules\.com\/[^\/]+$/)
    const moduleName = moduleCheck ? moduleCheck[0].replace(/framermodules\.com\//, '') : null
    console.log('module name', moduleName)

    if (moduleName) {
        const urlScheme = 'framermodules://' + moduleName
        console.log(urlScheme)

        window.setTimeout(function() {
            window.location = urlScheme
        }, 1000)
    }
}

const download = () => {
    window.location = 'https://framermodules.com'
    return false
}
