let sliderElement = document. query Selector ("#slider");
let buttonElement = document.query Selector ("#button");
let sizePassword = document. querySelector ("#valor");
let password = document.query Selector ("#password");
et containerPassword = document.query Selector ("#container-password");
let charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!';
let novaSenha = ";
sizePassword.innerHTML = sliderElement.value;
slider.oninput = function() {
sizePassword.innerHTML = this.value;
}
    function generatePassword()
let pass = ";
for(let i = 0, n = charset.length; i < sliderElement.value; ++iX
pass += charset.charAt(Math.floor(Math.random() * n));
｝
console.log(pass)
containerPassword.classList.remove("hide");
password.innerHTML = pass;
novaSenha = pass;
}
  function copyPassword()
alert("Senha copiada com sucesso!")
navigator.clipboard write Text(novaSenha);
}
