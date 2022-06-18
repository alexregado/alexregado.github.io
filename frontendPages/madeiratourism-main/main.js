var nav = document.getElementById('nav');

window.onscroll = function(){

   if (window.pageYOffset >100) {

       nav.style.background = "rgba(139, 139, 139, 0.9)";
       nav.style.boxShadow = "0px 4px 2px rgb(194, 55, 55)"
   }
   else{
       nav.style.background = "rgba(139, 139, 139, 0.7)";
       nav.style.boxShadow = "none";
   }
}





/* IMPORTAR O FORMULÁRIO */
const myForm = document.getElementById('myForm');

/* SUBMISSÃO DO FORM SEM IR PARA O FICHEIRO PHP */
myForm.addEventListener("submit", (e) =>{
    e.preventDefault();

    const request = new XMLHttpRequest();
    request.open("post", "http://localhost/php/Trabalho/forms.php");
    request.onload = function () {
        console.log(request.responseText);
    }
    request.send(new FormData(myForm));
    /* MOSTRA NA CONSOLA QUE OS DADOS FORAM SUBMETIDOS E É LANÇADO UM ALERTA */
    console.log("Form has been submited!");
    alert('O formulário foi submetido com sucesso! Obrigado pela sua participação e boa sorte!')

});



