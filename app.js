// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let arrayAmigos = [];

// Función para agregar un amigo al array
function agregarAmigo() {
    let amigo = document.getElementById("amigo").value;
// Validamos si el campo de entrada con id amigo no esté vacío
    if (amigo === "") {
        alert("Por favor ingresa un nombre");
        return;
    }else{
        // Agregamos el amigo al array
        arrayAmigos.push(amigo);
       
    }
    // Limpiamos el campo de entrada
    document.getElementById("amigo").value = "";
    // Limpiamos el campo resultado
    document.getElementById("resultado").textContent = "";
    mostrarAmigos();
}
// Función para mostrar la lista de amigos en el HTML
function mostrarAmigos() {
    let listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = ""; // Limpiar la lista
    
    for (let i = 0; i < arrayAmigos.length; i++) {
        let li = document.createElement("li");// Crear un elemento de lista
        li.textContent = arrayAmigos[i];// Establecer el texto del elemento
        listaAmigos.appendChild(li);// Agregar el elemento a la lista


    }
    
}

// Función para sortear y escoger el amigo secreto
function sortearAmigo() {
    if (arrayAmigos.length < 2){
        alert("Necesitas al menos 2 amigos para sortear");
        return;
    }
    amigoSecreto = arrayAmigos[Math.floor(Math.random() * arrayAmigos.length)];
    let resultado = document.getElementById("resultado");
    resultado.textContent = "Tu amigo secreto es: " + amigoSecreto;
    


    

}




