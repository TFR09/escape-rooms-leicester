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

function sortByAgeASC(rooms) {
    return rooms.slice().sort((a, b) => a.minAge - b.minAge);
}

function sortByAgeDESC(rooms) {
    return rooms.slice().sort((a, b) => b.minAge - a.minAge);
}

function sortByPriceASC(rooms) {
    return rooms.slice().sort((a, b) => a.price - b.price);
}

function sortByPriceDESC(rooms) {
    return rooms.slice().sort((a, b) => b.price - a.price);
}


function sortByRatingASC(rooms) {
    return rooms.slice().sort((a, b) => a.rating - b.rating);
}

function sortByRatingDESC(rooms) {
    return rooms.slice().sort((a, b) => b.rating - a.rating);
}

function sortByDistanceASC(rooms) {
    return rooms.slice().sort((a, b) => a.distance - b.distance);
}

function sortByDifficultyASC(rooms) {
    const difficultyOrder = { 'Easy': 1, 'Medium': 2, 'Hard': 3 };
    return rooms.slice().sort((a, b) => difficultyOrder[a.difficulty] - difficultyOrder[b.difficulty]);
}

function sortByDifficultyDESC(rooms) {
    const difficultyOrder = { 'Easy': 1, 'Medium': 2, 'Hard': 3 };
    return rooms.slice().sort((a, b) => difficultyOrder[b.difficulty] - difficultyOrder[a.difficulty]);
}


const escapeRoomsContainer = document.querySelector('.content');
const checkboxes = document.querySelectorAll('input[type="checkbox"]');
const dropdown = document.getElementById('dropdown');


function renderEscapeRooms(rooms) {
    const selectedDifficulties = Array.from(document.querySelectorAll('input[name="difficulty"]:checked')).map(input => input.value);
    const selectedAgeRatings = Array.from(document.querySelectorAll('input[name="age-rating"]:checked')).map(input => parseInt(input.value));
    const minSelectedAge = selectedAgeRatings.length > 0 ? Math.min(...selectedAgeRatings) : -Infinity;

    const filteredRooms = rooms.filter(room => {
        return (
            (selectedDifficulties.length === 0 || selectedDifficulties.includes(room.difficulty.toLowerCase())) &&
            (room.minAge >= minSelectedAge)
        );
    });

    escapeRoomsContainer.innerHTML = '';

    filteredRooms.forEach(room => {
        const card = document.createElement('div');
        card.classList.add('card');

        card.innerHTML = `
            <a href='escapeRoom.html?room=${room.id}'>
                <div class="name">${room.name}</div>
                <div class="rating">${room.rating} <i class="fa-solid fa-star fa-xs"></i></div>
                <img src="${room.imageSrc}" alt="${room.name}">
                <div class="difficulty">${room.difficulty}</div>
                <div class="players">${room.players} <i class="fa-solid fa-user fa-xs"></i></div>
                <div class="price"><i class="fa-solid fa-sterling-sign fa-xs"></i>${room.price}</div>
            </a>
        `;

        escapeRoomsContainer.appendChild(card);
    });
}

function handleFilterChange() {
    renderEscapeRooms(escapeRooms);
}

checkboxes.forEach(checkbox => {
    checkbox.addEventListener('change', handleFilterChange);
});

dropdown.addEventListener('change', () => {
    let rooms;
    switch(dropdown.value) {
        case "age-lh":
            rooms = sortByAgeASC(escapeRooms);
            break;
        case "age-hl":
            rooms = sortByAgeDESC(escapeRooms);
            break;
        case "difficulty-lh":
            rooms = sortByDifficultyASC(escapeRooms);
            break;
        case "difficulty-hl":
            rooms = sortByDifficultyDESC(escapeRooms);
            break;
        case "popularity-lh":
            rooms = sortByRatingASC(escapeRooms);
            break;
        case "popularity-hl":
            rooms = sortByRatingDESC(escapeRooms);
            break;
        case "price-lh":
            rooms = sortByPriceASC(escapeRooms);
            break;
        case "price-hl":
            rooms = sortByPriceDESC(escapeRooms);
            break;
        case "distance":
            rooms = sortByDistanceASC(escapeRooms);
            break;
        default:
            rooms = escapeRooms;
            break;
    }

    renderEscapeRooms(rooms);
});

renderEscapeRooms(escapeRooms);