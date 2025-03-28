const escapeRooms = [
    {
        id: 1,
        name: 'Mystic Manor',
        description: 'Explore a haunted mansion filled with secrets and paranormal mysteries. Solve puzzles to uncover the tragic history of the manor\'s previous inhabitants. Can you escape before the spirits claim you as their own?',
        price: 30,
        minAge: 14, 
        players: '2-6',
        distance: 1.5, 
        rating: 4.5, 
        difficulty: 'Medium',
        imageSrc: '../images/mystic_manor.jpeg'
    },
    {
        id: 2,
        name: 'Enigma Escape',
        description: 'Embark on an adventure through a labyrinth of mind-bending puzzles and riddles. Test your wit and cunning to unlock the secrets hidden within the Enigma Escape. Race against the clock to unravel the final mystery and break free.',
        price: 25,
        minAge: 12, 
        players: '2-8',
        distance: 1.2, 
        rating: 4.1, 
        difficulty: 'Hard',
        imageSrc: '../images/enigma_escape.jpeg'
    },
    {
        id: 3,
        name: 'Lost Treasure Cove',
        description: 'Discover a forgotten island filled with pirate legends and lost treasures. Navigate through caves, solve ancient puzzles, and decipher pirate maps. Will you unearth the legendary treasure or become lost in the depths of the cove?',
        price: 35,
        minAge: 10, 
        players: '3-5',
        distance: 1.8, 
        rating: 4.7, 
        difficulty: 'Medium',
        imageSrc: '../images/lost_treasure_cove.jpeg'
    },
    {
        id: 4,
        name: 'Code Breaker\'s Crypt',
        description: 'Enter the ancient crypt of a legendary code breaker and decrypt his final puzzle. Use logic and critical thinking to decipher cryptic messages and unlock hidden chambers. Can you unravel the secrets of the Code Breaker\'s Crypt before time runs out?',
        price: 28,
        minAge: 16, 
        players: '2-4',
        distance: 1.4, 
        rating: 4.2, 
        difficulty: 'Hard',
        imageSrc: '../images/code_breakers_crypt.jpg'
    },
    {
        id: 5,
        name: 'Pharaoh\'s Chamber',
        description: 'Step back in time to ancient Egypt and explore the mystical chamber of the Pharaoh. Decode hieroglyphics, manipulate ancient artifacts, and avoid ancient traps. Will you escape the Pharaoh\'s wrath and unlock the secrets of the pyramid?',
        price: 30,
        minAge: 12, 
        players: '4-6',
        distance: 1.6, 
        rating: 4.9, 
        difficulty: 'Medium',
        imageSrc: '../images/pharaohs_chamber.jpg'
    },
    {
        id: 6,
        name: 'The Mind Palace',
        description: 'Dive into the depths of a brilliant detective\'s mind. Solve intricate puzzles and follow cryptic clues to uncover the truth hidden within the Mind Palace. Can you solve the ultimate mystery and emerge victorious?',
        price: 32,
        minAge: 14, 
        players: '3-7',
        distance: 1.3, 
        rating: 4.6, 
        difficulty: 'Medium',
        imageSrc: '../images/mind_palace.jpg'
    },
    {
        id: 7,
        name: 'The Wizard\'s Workshop',
        description: 'Enter the mystical workshop of an ancient wizard. Use arcane knowledge and magical artifacts to solve puzzles and cast spells. Beware of enchanted traps and illusions in the Wizard\'s Workshop!',
        price: 27,
        minAge: 10, 
        players: '2-5',
        distance: 1.7, 
        rating: 4.3, 
        difficulty: 'Medium',
        imageSrc: '../images/wizards_workshop.jpeg'
    },
    {
        id: 8,
        name: 'Secret Agent Mission: X',
        description: 'Embark on a top-secret mission as an elite agent. Navigate through high-tech facilities, hack security systems, and thwart enemy agents. Will you complete the mission and save the day?',
        price: 35,
        minAge: 16, 
        players: '2-4',
        distance: 1.9, 
        rating: 4.8, 
        difficulty: 'Hard',
        imageSrc: '../images/secret_agent_mission.jpg'
    },
    {
        id: 9,
        name: 'Space Odyssey: Lunar Base',
        description: 'Embark on a thrilling adventure to a lunar base on the moon. Solve scientific puzzles, repair equipment, and survive the harsh environment of space. Will you return safely to Earth or be lost in the vastness of space?',
        price: 40,
        minAge: 12, 
        players: '3-6',
        distance: 1.1, 
        rating: 4.4, 
        difficulty: 'Hard',
        imageSrc: '../images/space_odyssey.jpg'
    },
    {
        id: 10,
        name: 'The Haunted Asylum',
        description: 'Enter a derelict asylum haunted by restless spirits. Piece together the asylum\'s dark history and uncover the truth behind the haunting. Can you escape the asylum\'s sinister grasp?',
        price: 29,
        minAge: 16, 
        players: '2-5',
        distance: 1.4, 
        rating: 4.5, 
        difficulty: 'Medium',
        imageSrc: '../images/haunted_asylum.jpg'
    },
    {
        id: 11,
        name: 'Pirate\'s Cove Adventure',
        description: 'Embark on a pirate-themed adventure on the high seas. Solve puzzles, navigate treacherous waters, and uncover buried treasure. Will you become a legendary pirate captain or be lost to Davy Jones\' locker?',
        price: 33,
        minAge: 10, 
        players: '4-8',
        distance: 1.5, 
        rating: 4.6, 
        difficulty: 'Easy',
        imageSrc: '../images/pirate_cove.jpg'
    }
];


const query = window.location.search;
const urlParams = new URLSearchParams(query);
const roomId = urlParams.get('room');
let room;

function renderEscapeRoom(roomId) {
    const escapeRoom = escapeRooms.find(room => room.id === parseInt(roomId));

    if (escapeRoom) {
        const titleElement = document.querySelector('.escape-room .title');
        const descriptionElement = document.querySelector('.escape-room .description');
        const priceElement = document.querySelector('.escape-room .price');
        const playersElement = document.querySelector('.escape-room .players');
        const difficultyElement = document.querySelector('.escape-room .difficulty');
        const ageElement = document.querySelector('.escape-room .age');
        const imageElement = document.querySelector('.escape-room .image img');
        const avgRating = document.querySelector(".avg-rating");

        // Populate HTML elements with escape room data
        titleElement.textContent = escapeRoom.name;
        descriptionElement.textContent = escapeRoom.description;
        priceElement.textContent = `Price: £${escapeRoom.price}`;
        playersElement.textContent = `Players: ${escapeRoom.players}`;
        difficultyElement.textContent = `Difficulty: ${escapeRoom.difficulty}`;
        ageElement.textContent = `Age Rating: ${escapeRoom.minAge}+`;
        imageElement.src = escapeRoom.imageSrc;

        // Render avg rating with stars

        avgRating.innerHTML = escapeRoom.rating + createStars(escapeRoom.rating);

        room = {
            "id" : escapeRoom.id,
            "name" : escapeRoom.name
        }


    } else {
        console.log(`Escape room with ID ${roomId} not found.`);
    }
}

function createStars(rating) {
    let last_star = rating % 1
    let stars = " "
    for (let i = 1; i < rating; i++) {
        stars += '<i class="fa-solid fa-star fa-xs"></i>';
    }
    if (last_star != 0) stars += '<i class="fa-solid fa-star-half fa-xs"></i>';
    return stars
}

renderEscapeRoom(roomId);

var wishlist = JSON.parse(localStorage.getItem("wishlist"));
wishlist = wishlist == null ? []: wishlist;
const wishlistAlert = document.querySelector(".wishlist-alert")
const addWishlistBtn = document.querySelector(".add-wishlist") 

function addToWishlist(room) {
    if (!wishlist.some(r => r.name === room.name)) {
        wishlist.push(room);
        localStorage.setItem("wishlist", JSON.stringify(wishlist))
        wishlistAlert.innerHTML = "Escape Room added to wishlist!"
        return;
    }
    wishlistAlert.innerHTML = "Escape Room already in wishlist!"
}

addWishlistBtn.addEventListener("click", () => {
    wishlistAlert.hidden = false;
    addToWishlist(room);
    setTimeout(() => {
        wishlistAlert.hidden = true;
        wishlistAlert.innerHTML = "";
    }, 2000)
})