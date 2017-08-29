const repoURL = 'https://www.github.com/kysely/framer-modules#docs'

window.onload = () => {
    window.setTimeout(function() {
        window.location = repoURL
    }, 1000)
}

const download = () => {
    window.location = repoURL
    return false
}
