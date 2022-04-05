AOS.init();

const $form = document.getElementById("contact-form-id")

$form.addEventListener("submit", handleSubmit)

async function handleSubmit(event) {
  event.preventDefault()

  const form = new FormData(this)
  const response = await fetch(this.action, {
    method: this.method,
    body: form,
    headers: {
      'Accept': 'application/json'
    }
  })

  if(response.ok) {
    this.reset()
    alert('¡Gracias por contactarnos!, En breve nos comunicaremos para responder su consulta.')
  } else {
    this.reset()
    alert('¡Hubo un problema al enviar el formulario!')
  }
}

let getBrowserInfo = () => {
  var ua= navigator.userAgent, tem,
  M= ua.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [];
  if(/trident/i.test(M[1])){
      tem=  /\brv[ :]+(\d+)/g.exec(ua) || [];
      return 'IE '+(tem[1] || '');
  }
  if(M[1]=== 'Chrome'){
      tem= ua.match(/\b(OPR|Edge)\/(\d+)/);
      if(tem!= null) return tem.slice(1).join(' ').replace('OPR', 'Opera');
  }
  M= M[2]? [M[1], M[2]]: [navigator.appName, navigator.appVersion, '-?'];
  if((tem= ua.match(/version\/(\d+)/i))!= null) M.splice(1, 1, tem[1]);
  return M.join(' ');
}

if(!getBrowserInfo().toLowerCase().includes('safari')) {
  document.getElementById('idPromo').style.backgroundAttachment = 'fixed'
}