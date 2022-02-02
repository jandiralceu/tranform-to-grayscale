async function init() {
    let rustApp = null

    try {
        rustApp = await import('../pkg')
    } catch(error) {
        console.log(error)
        return
    }

    const input = document.getElementById('upload')
    const file = new FileReader()

    file.onloadend = () => {
        const base64 = file.result.replace(/^data:image\/(png|jpeg|jpg);base64,/, '')
        const img_data_url = rustApp.grayscale(base64)

        document.getElementById('new-img').setAttribute('src', img_data_url)
    }

    input.addEventListener('change', () => {
        file.readAsDataURL(input.files[0])
    })
}

init()