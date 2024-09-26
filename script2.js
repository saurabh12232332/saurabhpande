const scriptURL = 'https://script.google.com/macros/s/AKfycbye6F0jH0-epncnYIuFfahXsGnhCCs-rn8JkcE0g_HnSlgNOLSiLvAxxZLg0SRabi1Pwg/exec'
  const form = document.forms['submit-to-google-sheet']
  const msg = document.getElementById("msg")

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
        msg.innerHTML = "Message sent successfully"
        setTimeout(function(){
           msg.innerHTML = ""
        },3000)
        form.reset()
      })
      .catch(error => console.error('Error!', error.message))
  })