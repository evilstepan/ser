
          document.getElementById('loginForm').addEventListener('submit', function(event) {
              event.preventDefault(); 

              const email = document.getElementById('login-email').value;
              const password = document.getElementById('login-password').value;

              let users = JSON.parse(localStorage.getItem('users')) || [];
              const user = users.find(user => user.email === email && user.password === password);

              if (user) {
                  alert("Вход успешен! Добро пожаловать, " + user.name);
                  
               
                  sessionStorage.setItem('currentUser', JSON.stringify(user));
                  
                  window.location.href = 'index7.html'; 
              } else {
                  alert("Неверный email или пароль.");
              }
          });
    