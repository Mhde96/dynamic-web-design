const BootstrapScript = document.createElement('script')

BootstrapScript.src = 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js'
BootstrapScript.crossOrigin = 'anonymous'

document.body.appendChild(BootstrapScript)

BootstrapScript.onload = () => {
    console.log('Bootstrap JS Loaded Successfully')
}




const JqueryScript = document.createElement('script')

JqueryScript.src = "https://code.jquery.com/jquery-3.7.1.min.js"
JqueryScript.crossOrigin = 'anonymous'

document.body.appendChild(JqueryScript)


JqueryScript.onload = () => {
    console.log('Jquery  Loaded Successfully')
}


