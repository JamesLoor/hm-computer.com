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