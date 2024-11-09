document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;
    const date = document.getElementById('date').value;

    if (!name) {
        alert("Пожалуйста, введите ваше ФИО.");
        return;
    }

    const nameParts = name.split(' ');
    if (nameParts.length !== 3) {
        alert("Пожалуйста, введите ваше ФИО в формате 'Имя Фамилия Отчество'.");
        return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert("Пожалуйста, введите корректный адрес электронной почты.");
        return;
    }

    const phonePattern = /^\+7\(\d{3}\)-\d{3}-\d{2}-\d{2}$/; 
    if (!phonePattern.test(phone)) {
        alert("Пожалуйста, введите корректный номер телефона в формате +7(906)-561-43-22.");
        return;
    }

    if (password !== confirmPassword) {
        alert("Пароли не совпадают!");
        return;
    }

    const user = { name, email, phone, password, date };

    let users = JSON.parse(localStorage.getItem('users')) || [];

    if (users.some(existingUser => existingUser.email === email)) {
        alert("Пользователь с таким email уже существует!");
        return;
    }

    users.push(user);
    localStorage.setItem('users', JSON.stringify(users));

    alert("Регистрация прошла успешно!");

    window.location.href = 'login.html'; 
});

document.getElementById('phone').addEventListener('input', function(e) {
    let input = e.target.value.replace(/\D/g, ''); 
    if (input.length > 11) input = input.substring(0, 11); 

    let formattedValue = '+7';
    
    if (input.length > 1) {
        formattedValue += '(' + input.substring(1, 4); 
        if (input.length >= 4) {
            formattedValue += ')-' + input.substring(4, 7); 
            if (input.length >= 7) {
                formattedValue += '-' + input.substring(7, 9); 
                if (input.length >= 9) {
                    formattedValue += '-' + input.substring(9); 
                }
            }
        }
    }

    e.target.value = formattedValue; 
});