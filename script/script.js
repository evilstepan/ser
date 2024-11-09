
  document.addEventListener('DOMContentLoaded', () => {
      const counters = document.querySelectorAll('.count');
      const speed = 1000; 

      counters.forEach(counter => {
          const updateCount = () => {
              const target = +counter.getAttribute('data-target');
              const count = +counter.innerText;
              const inc = target / speed;
              if (count < target) {
                 
                  counter.innerText = Math.ceil(count + inc);
                 
                  setTimeout(updateCount, 1);
              } else {
                  counter.innerText = target; 
              }
          };

          updateCount();
      });
  });


//  слайдер
  let slideIndex = 0;
       showSlides(slideIndex);

       function plusSlides(n) {
           showSlides(slideIndex += n);
       }

       function showSlides(n) {
           let slides = document.getElementsByClassName("slides")[0];
           let totalSlides = slides.children.length;
           if (n >= totalSlides) { slideIndex = 0 }
           if (n < 0) { slideIndex = totalSlides - 1 }
           slides.style.transform = `translateX(${-slideIndex * 100}%)`;
       }

       function autoSlide() {
           plusSlides(1);
           setTimeout(autoSlide, 5000); 
       }

       autoSlide();

// формы
       function togglePassword() {
           var passwordInput = document.getElementById('password');
           var toggleIcon = document.querySelector('.toggle-password');
           if (passwordInput.type === 'password') {
               passwordInput.type = 'text';
               toggleIcon.classList.remove('fa-eye');
               toggleIcon.classList.add('fa-eye-slash');
           } else {
               passwordInput.type = 'password';
               toggleIcon.classList.remove('fa-eye-slash');
               toggleIcon.classList.add('fa-eye');
           }
       }
// выпадение
function toggleDropdown() {
    document.getElementById("dropdown").classList.toggle("show");
}


window.onclick = function(event) {
    if (!event.target.matches('#profile-pic')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        for (var i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}
// 2

        document.getElementById('registrationForm').addEventListener('submit', function(event) {
            event.preventDefault(); 

       
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const phone = document.getElementById('phone').value;
            const password = document.getElementById('password').value;
            const date = document.getElementById('date').value;

         
            if (password !== document.getElementById('confirm-password').value) {
                alert("Пароли не совпадают!");
                return;
            }

          
            const user = { name, email, phone, password, date };

            
            let users = JSON.parse(localStorage.getItem('users')) || [];

            
            users.push(user);

          
            localStorage.setItem('users', JSON.stringify(users));

            alert("Регистрация прошла успешно!");
        });

          document.getElementById('loginForm').addEventListener('submit', function(event) {
              event.preventDefault(); 

              const email = document.getElementById('login-email').value;
              const password = document.getElementById('login-password').value;

         
              let users = JSON.parse(localStorage.getItem('users')) || [];

           
              const user = users.find(user => user.email === email && user.password === password);

              if (user) {
                  alert("Вход успешен! Добро пожаловать, " + user.name);
                  
                  window.location.href = 'index7.html'; 
              } else {
                  alert("Неверный email или пароль.");
              }
          });
          document.addEventListener('DOMContentLoaded', function() {
            const users = JSON.parse(localStorage.getItem('users')) || [];
            const userLink = document.getElementById('userLink');
            const avatar = document.getElementById('avatar');
        
           
            if (sessionStorage.getItem('loggedInUser')) {
                const loggedInUser = JSON.parse(sessionStorage.getItem('loggedInUser'));
                userLink.textContent = ''; 
                avatar.src = loggedInUser.avatar || 'free-icon-boy-4537069.png'; 
                avatar.style.display = 'block'; 
            }
        
            document.getElementById('loginForm').addEventListener('submit', function(event) {
                event.preventDefault(); 
            
                const email = document.getElementById('login-email').value;
                const password = document.getElementById('login-password').value;
            
                let users = JSON.parse(localStorage.getItem('users')) || [];
                const user = users.find(user => user.email === email && user.password === password);
            
                if (user) {
                    alert("Вход успешен! Добро пожаловать, " + user.name);
                    
                    
                    document.getElementById('userLink').style.display = 'none';
                    const avatar = document.getElementById('avatar');
                    avatar.src = 'free-icon-boy-4537069.png'; 
                    avatar.style.display = 'block'; 
                    
                    document.getElementById('forgot-password').style.display = 'none';
                    document.getElementById('register-link').style.display = 'none';
                    
                    document.getElementById('profile-icon').style.display = 'block';
                    
                    window.location.href = 'index.html'; 
                } else {
                    alert("Неверный email или пароль.");
                }
            });
            });

            
const userLink = document.getElementById('userLink');
const avatar = document.getElementById('avatar');
const profileIcon = document.getElementById('profile-icon');


const isLoggedIn = false; 

if (isLoggedIn) {
    userLink.style.display = 'none'; 
    avatar.src = 'path_to_user_avatar.jpg'; 
    avatar.style.display = 'block'; 
    profileIcon.style.display = 'block'; 
}







       
        


        
   

     

 