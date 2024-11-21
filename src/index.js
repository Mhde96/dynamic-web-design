
const JqueryScript = document.createElement('script')

JqueryScript.src = "https://code.jquery.com/jquery-3.7.1.min.js"
JqueryScript.crossOrigin = 'anonymous'

document.body.appendChild(JqueryScript)


JqueryScript.onload = () => {
    console.log('Jquery  Loaded Successfully')
}



const PopperScript = document.createElement('script')

PopperScript.src = 'https://cdn.jsdelivr.net/npm/popper.js@1.12.9/dist/umd/popper.min.js'
PopperScript.crossOrigin = 'anonymous'

document.body.appendChild(PopperScript)

PopperScript.onload = () => {
    console.log('PopperScript  Loaded Successfully')
}





const BootstrapScript = document.createElement('script')

BootstrapScript.src = 'https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/js/bootstrap.min.js'
BootstrapScript.crossOrigin = 'anonymous'

document.body.appendChild(BootstrapScript)

BootstrapScript.onload = () => {
    console.log('Bootstrap JS Loaded Successfully')
}



