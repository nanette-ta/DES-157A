(function(){
    'use strict';
    console.log('reading js');

    const player1 = document.querySelector('#Thumbs-Up-Smiski');
    const player2 = document.querySelector('#Cat-Smiski');
    const messages = document.querySelector('#messages');
    const startBtn = document.querySelector('#start');
    const attackBtn = document.querySelector('#attack');

    const startSound = new Audio('./audio/StartSound.m4a');
    const attackSound = new Audio('./audio/AttackSound.m4a');
    const hitSound = new Audio('./audio/HitSound.m4a');

    let attacker;
    let defender;
    let defenderIndex;

    const gameData = {
		smiskis: ['Thumbs-Up-Smiski', 'Cat-Smiski'],
		health: [100, 100],
		attack: [5, 15, 25, 30, 40],
        attackMessage: [
            'a very weak attack! 5 hit points!',
            'a weak attack for only 15 hit points!',
            'an attack of 25 hit points!',
            'a big attack for 30 hit points',
            'a massive attack! woah! 40 hit points!'
        ],
		defendMessage: [
            'no defense, hit!', 
            'some defense, partial hit', 
            'total defense, no hit!'
        ],
		index: 0
	};

    startBtn.addEventListener('click', function(){
        startSound.play();
        gameData.index = Math.round(Math.random());
        messages.innerHTML = `<p>Get ready! <strong>${gameData.smiskis[gameData.index]}</strong> was randomly selected to attack first. Click the attack button to see what happens.</p>`;
        attackBtn.className = 'showing';

    });

    attackBtn.addEventListener('click', monsterAttack );

    function monsterAttack(){
        
        if(gameData.index){
            attacker = gameData.smiskis[1];
            defender = gameData.smiskis[0];
            defenderIndex = 0;
        }
        else {
            attacker = gameData.smiskis[0];
            defender = gameData.smiskis[1];
            defenderIndex = 1;
        }

        const thisAttack = Math.floor(Math.random() * 5);
        const thisdDefense = Math.floor(Math.random() * 3);

        attackSound.play();

        attackBtn.className = 'hidden';

        document.querySelector(`#${attacker}`).className = `attack${thisAttack}`;
        messages.innerHTML = `<p><strong>${attacker}</strong> has completed ${gameData.attackMessage[thisAttack]}</p>`;

        setTimeout(function(){
            messages.innerHTML = `<p><strong>${defender}</strong> has ${gameData.defendMessage[thisdDefense]}</p>`;
            document.querySelector(`#${defender}`).className = `defend${thisdDefense}`;

            if( thisdDefense == 0){
                gameData.health[defenderIndex] = gameData.health[defenderIndex] - gameData.attack[thisAttack];
            } else if( thisdDefense == 1 ){
                gameData.health[defenderIndex] = gameData.health[defenderIndex] - gameData.attack[thisAttack]/2;
            }

            let health = Math.floor(parseFloat(gameData.health[defenderIndex]));
            if(health < 0) {health = 0;}

            document.querySelector(`#healthbar${defenderIndex}`).style.width = `${health}%`;
            document.querySelector(`#smiskihealth${defenderIndex}`).innerHTML = `${health}%`;

            hitSound.play();

            checkWinningCondition(defenderIndex, attacker);
        }, 2500);
    }

    function checkWinningCondition(enemy, attackingMonster){
        setTimeout(function(){
            player1.removeAttribute('class');
            player2.removeAttribute('class');

            const health = Math.floor(parseFloat(gameData.health[enemy]));
            if( health < 1 ){
                messages.innerHTML = `<p><strong>${attackingMonster}</strong> has won the battle! start another battle</p>`;
                messages.innerHTML += '<button id="reset" class="buttons">Battle Again</button>';
                document.querySelector('#reset').addEventListener('click', function(){
                    location.reload();
                });
            } else {
                gameData.index ? (gameData.index = 0) : (gameData.index = 1);
                messages.innerHTML = `<p>It's now <strong>${gameData.smiskis[gameData.index]}'s</strong> turn!</p>`;
                attackBtn.className = 'showing';
            }
        }, 3000);
    }
})();