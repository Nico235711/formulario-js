function recieveData(event) {
  event.preventDefault() // modifico la acción por defecto de un formulario
  let welcome = document.querySelector("#bienvenida")
  let name = document.querySelector("#nombre").value
  let date = document.querySelector("#fecha").value
  const year = new Date().getFullYear()
  let years
  let message

  if ([name, date].includes("")) {
    message = "Todos los campos son obligatorios"
    welcome.textContent = message

    setTimeout(() => {
      welcome.textContent = ""
    }, 1500);

    return // corto la ejcución del código
  }

  if (date) {
    // JavaScript intenta convertir 'date' a número automáticamente durante la resta
    years = year - Number(date)
  }
  
  message = `Bienvenido ${name}! Tienes ${years} años`
  welcome.textContent = message

  setTimeout(() => {
    welcome.textContent = ""
    name = ""
    date = ""
  }, 1000);
}

const myForm = document.querySelector("#formulario")
myForm.addEventListener("submit", recieveData)