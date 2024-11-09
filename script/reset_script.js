document.getElementById('newPasswordForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

    const urlParams = new URLSearchParams(window.location.search);
    const token = urlParams.get('token');

    if (!token) {
        document.getElementById('message').innerText = 'Неверный токен.';
        return;
    }

    const decodedToken = atob(token).split(':');
    const email = decodedToken[0];

   
    let users = JSON.parse(localStorage.getItem('users')) || [];
    

    const userIndex = users.findIndex(user => user.email === email);

    if (userIndex !== -1) {
        const newPassword = document.getElementById('new_password').value;
        
        
        users[userIndex].password = newPassword;
        
      
        localStorage.setItem('users', JSON.stringify(users));
        
        document.getElementById('message').innerText = 'Пароль успешно обновлен!';
        
     
        setTimeout(() => {
            window.location.href = 'index.html'; 
        }, 2000);
        
    } else {
        document.getElementById('message').innerText = 'Пользователь не найден.';
    }
});