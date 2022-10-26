//add click event handler with submit button
document.getElementById('btn-submit').addEventListener('click', function () {
    //get the email address
    //remember to use .value to get text from input field
    const emailField = document.getElementById('user-email');
    const email = emailField.value;

    //get password
    const passField = document.getElementById('user-pass');
    const password = passField.value;

    //dontverify email pass on the client side
    //verify email,pass

    if (email == 'rafid@gmail.com' && password == 'secretcse') {
    window.location.href = 'bank.html';
    }
    else {
    alert('Invalid user');
}
})
