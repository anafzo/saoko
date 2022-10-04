console.log("Sesión JS06 Formularios");

/* Los dos nos dan lo mismo, se recomienda utilizar document.forms ya que queda más explicito que estás trabajando sobre el formulario */

// const form = document.getElementById("registro");
const objForm = document.forms["registro"];

// (evento, función callback)
objForm.addEventListener('submit', event => {
    event.preventDefault();
    console.log("El evento submit se ha generado");
    let email = objForm.elements['inputEmail4'].value;
    console.log(email);
    console.log(objForm.elements['inputPassword4'].value);
}); 