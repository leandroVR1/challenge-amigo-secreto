// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let arrayAmigos = [];

function agregarAmigo() {
    let amigo = document.getElementById("amigo").value;

    if (amigo === "") {
        alert("Por favor ingresa un nombre");
        return;
    }else{
        arrayAmigos.push(amigo);
        console.log(arrayAmigos);
    }
   
}
