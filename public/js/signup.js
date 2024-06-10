const signUpButtonEl = document.getElementById('submitBtn');

async function signUpFunction(e){
    e.preventDefault();
    const usernameEl = document.getElementById('username').value.trim();
    const emailEl = document.getElementById('signUpEmail').value.trim();
    const passwordEl = document.getElementById('signUpPassword').value.trim();
   
    
    if (usernameEl && emailEl && passwordEl) {
        const response = await fetch('/api/users', {
            method: 'POST',
            body: JSON.stringify({username: usernameEl, email: emailEl, password: passwordEl}),
            headers: { 'Content-Type' : 'application/json' },

        });

    if (response.ok) {
        document.location.replace('/');
    } else {
        alert('Failed to sign up');
    }
}

};

signUpButtonEl.addEventListener('click', signUpFunction);