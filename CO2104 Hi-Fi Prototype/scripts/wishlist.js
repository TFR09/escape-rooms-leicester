const escapeRoomsContainer = document.querySelector(".escape-rooms")
const alertMsg = document.querySelector(".alert");

var wishlist = JSON.parse(localStorage.getItem("wishlist"));

function createEscapeRoomItems() {
    wishlist.forEach(room => {
        const item = document.createElement('div');
        item.classList.add('item');

        const roomNameElement = document.createElement('div');
        roomNameElement.classList.add('room-name');
        roomNameElement.textContent = room.name;

        const btnContainer = document.createElement('div');
        btnContainer.classList.add('btn-container');

        const viewButton = document.createElement('button');
        viewButton.textContent = 'View';
        viewButton.addEventListener('click', () => {
            const url = `escapeRoom.html?room=${room.id}`;
            window.location.href = url;
        });

        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.addEventListener('click', () => {
            item.remove();
            wishlist = wishlist.filter((r) => !(r.id == room.id))
            localStorage.setItem("wishlist", JSON.stringify(wishlist));
            alertMsg.innerHTML = `${room.name} successfully removed from wishlist!`
            alertMsg.hidden = false;
            setTimeout(() => {
                alertMsg.hidden = true;
            }, 2000);
        });

        btnContainer.appendChild(viewButton);
        btnContainer.appendChild(removeButton);

        item.appendChild(roomNameElement);
        item.appendChild(btnContainer);

        escapeRoomsContainer.appendChild(item);
    });
}


createEscapeRoomItems();