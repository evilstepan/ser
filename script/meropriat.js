document.addEventListener("DOMContentLoaded", function() {
    const eventListContainer = document.querySelector(".event-list");
    const publicEvents = JSON.parse(localStorage.getItem("publicEvents")) || [];


    eventListContainer.innerHTML = "";

    
    publicEvents.forEach(event => {
        const eventItem = document.createElement("div");
        eventItem.classList.add("event-item");
        eventItem.innerHTML = `
            <img alt="${event.name} Image" src="${event.imageDataUrl || 'img/edinstvo.WEBP'}" />
            <h3>${event.name}</h3>
            <p>${event.description}</p>
            <button onclick='participateInEvent(${JSON.stringify(event)})'>Принять участие</button> <!-- Кнопка для участия -->
        `;
        eventListContainer.appendChild(eventItem);
    });
});


function participateInEvent(event) {
    const currentUser = JSON.parse(sessionStorage.getItem('currentUser'));
    
    if (!currentUser) {
        alert('Пожалуйста, войдите в систему, чтобы записаться на мероприятие.');
        return;
    }

    const acceptedEvents = JSON.parse(localStorage.getItem('acceptedEvents')) || [];

   
    const alreadyParticipating = acceptedEvents.some(acceptedEvent => 
        acceptedEvent.userId === currentUser.email && acceptedEvent.name === event.name
    );

    if (alreadyParticipating) {
        alert(`Вы уже записаны на мероприятие "${event.name}".`);
        return; 
    }

   
    const order = {
        userId: currentUser.email,
        name: event.name,
        description: event.description,
        imageDataUrl: event.imageDataUrl,
        status: "принято"
    };

 
    acceptedEvents.push(order);
    
   
    localStorage.setItem('acceptedEvents', JSON.stringify(acceptedEvents));

    
    alert(`Вы успешно записались на мероприятие "${event.name}"!`);
}