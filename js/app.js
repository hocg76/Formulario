var form = document.getElementById('form-contato')

if (form.addEventListener) {
    form.addEventListener('submit', validaCadastro)
} else if (form.attachEvent) {
    form.attachEvent('onsubmit', validaCadastro)
}

function validaCadastro(evt) {
    var nome = document.getElementById('nome')
    var email = document.getElementById('email')
    var sexo = document.getElementById('sexo')
    var senha = document.getElementById('senha')
    var senha2 = document.getElementById('senha2')
    var filtro = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i
    var contErro = 0

    // Validação do campo nome
    caixa_nome = document.querySelector('.msg-nome')

    if (nome.value == '') {
        caixa_nome.innerHTML = 'Por favor, preencha o campo Nome'
        caixa_nome.style.display = 'block'
        contErro += 1
    } else {
        caixa_nome.style.display = 'none'
    }

    // Validação do campo e-mail
    caixa_email = document.querySelector('.msg-email')
    if (email.valie == '') {
        caixa_email.innerHTML = 'Por favor, preencha o campo E-mail'
        caixa_email.style.display = 'block'
        contErro += 1
    } else if (filtro.test(email.value)) {
        caixa_email.style.display = 'none'
    } else {
        caixa_email.innerHTML = 'Formato do E-mail é inválido!'
        caixa_email.style.display = 'block'
        contErro += 1
    }

    // validação da caixa campo sexo
    caixa_genero = document.querySelector('.msg-genero')
    if (sexo.value == '') {
        caixa_genero.innerHTML = 'Por favor, indique o Gênero'
        caixa_genero.style.display = 'block'
        contErro += 1
    } else {
        caixa_genero.style.display = 'none'
    }

    // Validação do campo senha
    caixa_senha = document.querySelector('.msg-senha')
    if (senha.value == '') {
        caixa_senha.innerHTML = 'Por favor, preencha o campo Senha.'
        caixa_senha.style.display = 'block'
        contErro += 1
    } else if (senha.value.length < 6) {
        caixa_senha.innerHTML =
            'Por favor, preencha a senha com no mínino de 6 caracteres.'
        caixa_senha.style.display = 'block'
        contErro += 1
    } else {
        caixa_senha.style.display = 'none'
    }

    // Validação do campo repita a senha
    caixa_senha2 = document.querySelector('.msg-senha2')
    if (senha2.value == '') {
        caixa_senha2.innerHTML = 'Por favor, preencha o campo Repita a senha'
        caixa_senha2.style.display = 'block'
        contErro += 1
    } else {
        caixa_senha2.style.display = 'none'
    }

    // Validação do campo senha se for igual ao campo repita senha
    if (senha.value != "" && senha2.value != "" && senha.value != senha2.value) {
        caixa_senha2.innerHTML = 'O campo Repita a senha é diferente do campo Senha.'
        caixa_senha2.style.display = 'block'
        contErro += 1
    }
    if (contErro > 0) {
        evt.preventDefault();
    }
}