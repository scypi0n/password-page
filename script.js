
function checkPassword() {
    var password = document.getElementById('password').value;
    if(password === 'szczur') {
        window.location.href = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley';
    } else {
        alert('Niepoprawne hasło!');
    }
}
