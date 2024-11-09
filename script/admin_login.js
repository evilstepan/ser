document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('adminLoginForm').addEventListener('submit', handleAdminLogin);

    function handleAdminLogin(event) {
        event.preventDefault(); 

        const password = document.getElementById('admin-password').value;

        if (password === 'ewqewq') {
            window.location.href = 'admin.html';
        } else {
            alert("Неверный пароль!");
        }
    }
});