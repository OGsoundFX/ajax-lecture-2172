import Swal from 'sweetalert2'

// const url = "https://api.github.com/users/mozzzaic"

// fetch(url)
//   .then(response => response.json())
//   .then(data => console.log(data))

// reqres API

const url = "https://reqres.in/api/register"
const form = document.querySelector("#form")
const message = document.querySelector("#message")

form.addEventListener("submit", (event) => {
  event.preventDefault()
  const email = document.querySelector("#email").value
  const password = document.querySelector("#password").value
  
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-API-Key": "reqres-free-v1"
    },
    body: JSON.stringify({"email": email,"password": password})
  }

  fetch(url, options)
    .then(response => response.json())
    .then(data => displayResponse(data))
})

const displayResponse = (data) => {
  if (data.token) {
    message.innerHTML = "<strong style='color: green'>Sucessfully registered</strong>"
    Swal.fire({title: 'Success', text: 'You are connected', icon: 'success'})
  } else {
    message.innerHTML = "<strong style='color: red'>Not registered</strong>"
    Swal.fire({title: 'Error!', text: 'Oups! Something went wrong', icon: 'error'})
  }
}


