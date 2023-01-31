let email = 'joao@hcode.com.br';

email = 'glaucio@hcode.com.br';

console.log(email);
console.log('O seu e-mail é: ' + email);
console.log(`O seu e-mail é: ${email}`);

document.getElementById('btn-submit').addEventListener('click', e => {

    console.log('O botao foi cliclado!');

});

document.getElementById('form-login').addEventListener('mouseenter', e => {

    console.log('O mouse esta sobre o formulario.');

});

document.querySelector('#form-login').addEventListener('mouseleave', e=> {

    console.log('O mouse esta fora do formulario');

});

document.querySelector('#formlogin').addEventListener('submit', e=> {

    e.preventDefault();

    
    let email = document.querySelector('#email').value;
    let password = document.querySelector('#password').value;


   let json = {
     email, 
     password
    };

    if (!json.email ) {

        console.error("o campo e-mail deve ser preenchido!");

    } else if (!json.password) {

        console.error("o campo password deve ser preenchido!");

    } else {

        console.info("Dados validados com sucesso");

    }


});