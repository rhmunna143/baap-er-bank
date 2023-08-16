document.getElementById('login-btn').addEventListener('click', function(){
    const userEmail = document.getElementById('input-email').value;

    const userPassword = document.getElementById('input-password').value;

    let user1Email = 'choto-chele@hotmail.beshi';
    let user1Password = 'psswd.debona';

    if(userEmail == user1Email && userPassword == user1Password){
       return window.location.assign('http://127.0.0.1:5500/home.html');
    } else{
        alert('Wrong Email or Password!!!')
    }
})