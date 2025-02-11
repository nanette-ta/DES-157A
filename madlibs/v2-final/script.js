(function() {
    'use strict';

    const sections = document.querySelectorAll('section');
    const form = document.querySelector('form');

    function goToNextCard(currentCardId, nextCardId) {
        const currentCard = document.querySelector(`#${currentCardId}`);
        const nextCard = document.querySelector(`#${nextCardId}`);
        const currentInput = currentCard.querySelector('input');

        if (currentInput.value.trim() !== '') {
            currentCard.classList.remove('showing');
            currentCard.classList.add('hidden');
            
            nextCard.classList.remove('hidden');
            nextCard.classList.add('showing');
        } else {
            alert("Please fill out the field before moving to the next card.");
        }
    }

    document.querySelector('#gotocard2').addEventListener('click', function(event) {
        event.preventDefault();
        goToNextCard('card1', 'card2');
    });

    document.querySelector('#gotocard3').addEventListener('click', function(event) {
        event.preventDefault();
        goToNextCard('card2', 'card3');
    });

    document.querySelector('#gotocard4').addEventListener('click', function(event) {
        event.preventDefault();
        goToNextCard('card3', 'card4');
    });

    document.querySelector('#gotocard5').addEventListener('click', function(event) {
        event.preventDefault();
        goToNextCard('card4', 'card5');
    });

    document.querySelector('#gotocard6').addEventListener('click', function(event) {
        event.preventDefault();
        goToNextCard('card5', 'card6');
    });

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const dessert = document.querySelector('#input1').value;
        const title = document.querySelector('#input2').value;
        const artist = document.querySelector('#input3').value;
        const city = document.querySelector('#input4').value;
        const restaurant = document.querySelector('#input5').value;
        const food = document.querySelector('#input6').value;

        sections[0].style.display = 'none';
        sections[1].style.display = 'flex';

        document.querySelector('#dessert').textContent = dessert;
        document.querySelector('#song').textContent = title;
        document.querySelector('#artist').textContent = artist;
        document.querySelector('#city').textContent = city;
        document.querySelector('#restaurant').textContent = restaurant;
        document.querySelector('#food').textContent = food;
    });
})();
