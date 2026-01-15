function saludar(){
    const nombre = document.getElementById('txtNombre').value;
    const apellido = document.getElementById('txtApellido').value;

    const saludoProcesado = generarSaludo(nombre, apellido);

    console.log(saludoProcesado);
}