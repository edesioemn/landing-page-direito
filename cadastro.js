document.addEventListener("DOMContentLoaded", ()=>{
    
    const formulario = document.getElementById("cadastro");
    const saidaUm = document.getElementById("saidaUm");
    
    formulario.addEventListener("submit",(evento) => {

        evento.preventDefault();

        const usuario = document.getElementById("usuario").value;
        const email = document.getElementById("email").value;
        const telefone = document.getElementById("telefone").value;

    saidaUm.textContent = ("Agradecemos o seu contato! Sempre que precisar estaremos a disposição.");

    formulario.reset();

    })
})