const adminPassword = 'ewqewq'; 
if (!localStorage.getItem('admin')) {
    localStorage.setItem('admin', JSON.stringify({ password: adminPassword }));
}

if (sessionStorage.getItem('isAdminLoggedIn')) {
    document.getElementById('loginContainer').style.display = 'none';
    document.getElementById('sidebar').style.display = 'block';
    document.getElementById('adminContent').style.display = 'block';
    
    loadUsers(); 
} else {
    document.getElementById('loginContainer').style.display = 'flex';
}

document.getElementById('adminLoginForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

    const password = document.getElementById('admin-password').value;
    const admin = JSON.parse(localStorage.getItem('admin'));

    if (password === admin.password) {
        sessionStorage.setItem('isAdminLoggedIn', 'true'); 
        document.getElementById('loginContainer').style.display = 'none';
        document.getElementById('sidebar').style.display = 'block';
        document.getElementById('adminContent').style.display = 'block';
        
        loadUsers();
    } else {
        alert("Неверный пароль!");
    }
});

function loadUsers() {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const tbody = document.querySelector('#userTable tbody');
    tbody.innerHTML = ''; 

    users.forEach((user, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${user.name}</td>
            <td>${user.email}</td>
            <td>${user.phone}</td>
            <td>${user.date}</td> <!-- Дата рождения -->
            <td>${user.password}</td> <!-- Отображаем пароль -->
            <td><button onclick='openEditModal(${index})'>Редактировать</button></td>
            <td><button onclick='openDeleteModal(${index})'>Удалить</button></td>`;
          
       tbody.appendChild(row);
   });
}

function openEditModal(index) {
   const users = JSON.parse(localStorage.getItem('users')) || [];
   const user = users[index];

   document.getElementById('edit-index').value = index;
   document.getElementById('edit-name').value = user.name;
   document.getElementById('edit-email').value = user.email;
   document.getElementById('edit-phone').value = user.phone;
   document.getElementById('edit-date').value = user.date; 

   document.getElementById('edit-password').value = user.password; 

   document.getElementById('editModal').style.display = 'block';
}

function closeModal() {
   document.getElementById('editModal').style.display = 'none';
}

document.getElementById('logoutBtn').addEventListener('click', function() {
   sessionStorage.removeItem('isAdminLoggedIn'); 
   window.location.reload(); 
});

function openDeleteModal(index) {
   const deleteModal = document.getElementById("deleteModal");
   deleteModal.style.display = "block";

   document.getElementById("confirmDeleteBtn").onclick = function() {
       deleteUser(index);
       closeDeleteModal();
   };
}

function closeDeleteModal() {
   document.getElementById("deleteModal").style.display = "none";
}

function deleteUser(index) {
   const users = JSON.parse(localStorage.getItem('users')) || [];
   
   users.splice(index, 1); 
   localStorage.setItem('users', JSON.stringify(users)); 
   loadUsers(); 
}

document.getElementById('editForm').addEventListener('submit', function(event) {
   event.preventDefault(); 

   const index = document.getElementById('edit-index').value;
   const users = JSON.parse(localStorage.getItem('users')) || [];

   users[index] = {
       name: document.getElementById('edit-name').value,
       email: document.getElementById('edit-email').value,
       phone: document.getElementById('edit-phone').value,
       date: document.getElementById('edit-date').value, 
       password: users[index].password 
   };

   localStorage.setItem('users', JSON.stringify(users));
   closeModal();
   loadUsers(); 
});