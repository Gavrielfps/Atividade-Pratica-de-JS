document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('.form');
    const emailInput = document.getElementById('username'); 
    const passwordInput = document.getElementById('password');

    function validarEmail(email) {
        if (email.trim() === '') {
            return ' O E-mail é obrigatório.';
        }
        if (!email.includes('@') || !email.includes('.')) {
            return ' Por favor, insira um e-mail válido.';
        }
        return null;
    }

    function validarSenha(password) {
        if (password === '') {
            return ' A Senha é obrigatória.';
        }
        if (password.length < 6) {
            return ' A senha deve ter no mínimo 6 caracteres.';
        }
        const temMinuscula = /[a-z]/.test(password);
        const temMaiuscula = /[A-Z]/.test(password);
        const temNumero = /\d/.test(password);

        if (!temMinuscula) {
            return ' A senha deve conter pelo menos uma letra minúscula.';
        }
        if (!temMaiuscula) {
            return ' A senha deve conter pelo menos uma letra maiúscula.';
        }
        if (!temNumero) {
            return ' A senha deve conter pelo menos um número.';
        }
    }

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const email = emailInput.value;   
        const password = passwordInput.value;

        const erroEmail = validarEmail(email);
        const erroSenha = validarSenha(password);

        if (erroEmail) {
            alert(erroEmail);   
            emailInput.focus();
            return; 
        }

        if (erroSenha) {
            alert(erroSenha);
            passwordInput.focus();
            return; 
        }

        window.location.href = 'redirecionamento.html';
    
    });

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        
        const confirm = confirm('Tem certeza que deseja enviar o formulário?');


        if (confirmacao) {
            form.submit();
            alert('Formulário enviado com sucesso!');
        } else {
            alert('Envio do formulário cancelado.');
        }   
    });

});