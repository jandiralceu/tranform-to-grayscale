function init() {
    const file = new FileReader()
    const input = document.getElementById('upload')

    file.onloadend = () => {
        let base64 = file.result.replace(/^data:image\/(png|jpeg|jpg);base64,/, '')
        console.log(input.files[0])
        console.log(base64)
    }

    input.addEventListener('change', () => {
        file.readAsDataURL(input.files[0])
    })
}

init()