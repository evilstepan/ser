document.getElementById('resetPasswordForm').addEventListener('submit', function(event) {
    event.preventDefault(); 
    const email = document.getElementById('email').value;

   
    let users = JSON.parse(localStorage.getItem('users')) || [];
    

    const user = users.find(user => user.email === email);

    if (user) {
       
        const token = btoa(user.email + ':' + new Date().getTime()); 
        
     
        const resetLink = `reset_password.html?token=${token}`;
        
       
        document.getElementById('resetLink').value = resetLink;
        document.getElementById('resetLinkContainer').style.display = 'block';
        
       
    } else {
        alert("Пользователь с таким email не найден.");
    }
});


document.getElementById('copyButton').addEventListener('click', function() {
    const resetLinkInput = document.getElementById('resetLink');
    resetLinkInput.select();
    document.execCommand('copy');
    
    
    document.getElementById('copyMessage').style.display = 'block';
});