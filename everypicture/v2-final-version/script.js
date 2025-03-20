(function() {
    'use strict';
    console.log('reading js');

    const hotSpots = document.querySelectorAll('#container div');
    const theImg = document.querySelector('div img');
    const zoomedContainer = document.getElementById('zoomed-container');
    const topleft = document.getElementById('topleft'); 
    const topright = document.getElementById('topright'); 
    const bottomleft = document.getElementById('bottomleft'); 
    const bottomright = document.getElementById('bottomright'); 
    const center = document.getElementById('center'); 
 
    let thisSpot;

    let movingMouse;

    function zoomPhoto(event) {
        thisSpot = event.target.id;
        console.log(`zooming into ${thisSpot}`);

        zoomedContainer.style.display = 'flex';
        topleft.style.display = 'none';
        topright.style.display = 'none';
        bottomleft.style.display = 'none';
        bottomright.style.display = 'none';
        center.style.display = 'none';

        switch (thisSpot) {
            case 'topleft': 
            theImg.className = 'topleft'; 
            zoomedContainer.innerHTML = '<img src="./images/smiski.png"  <p>Meet my glow in the dark smiskis! Each one has their own unique personality. Do you have a favorite?</p> <button id="close">X</button>'; break;

            case 'topright': 
            theImg.className = 'topright'; 
            zoomedContainer.innerHTML = '<img src="./images/mofusand.png" <p>This is my prized mofusand keychain! She was won from a claw machine in Tokyo after many attempts!</p> <button id="close">X</button>'; break;

            case 'bottomleft': 
            theImg.className = 'bottomleft';
            zoomedContainer.innerHTML = '<img src="./images/polaroid.png" <p>These are my 4lifers! We met in our freshmen year, and have been housemates ever since.</p> <button id="close">X</button>'; break;

            case 'bottomright': 
            theImg.className = 'bottomright';
            zoomedContainer.innerHTML = '<img src="./images/matcha.png" <p>My latest caffine addiction is matcha. I bought this one in Uji, Kyoto during the summer!</p> <button id="close">X</button>'; break;

            case 'center': 
            theImg.className = 'center';
            zoomedContainer.innerHTML = '<img src="./images/bows.png" <p>These bow statement earrings are my favorite pieces of jewelry at the moment!</p> <button id="close">X</button>'; break;
        }

        const closeButton = document.getElementById('close');

        if (closeButton) {
            closeButton.addEventListener('click', function() {
                zoomedContainer.style.display = 'none'; 
            });
        }

        theImg.style.transformOrigin = 'center center';
    }

    hotSpots.forEach(function (eachSpot) {
        eachSpot.addEventListener('mouseover', zoomPhoto);
        eachSpot.addEventListener('mouseout', function () {
            thisSpot = 'out';
            console.log(thisSpot);
        });
    });

    document.addEventListener('mousemove', function(){
        clearTimeout(movingMouse);
        if(thisSpot == 'out'){
            movingMouse = setTimeout(function(){
                theImg.className = 'start';
                console.log('zooming out!');

                zoomedContainer.style.display = 'none';
                topleft.style.display = 'block';
                topright.style.display = 'block';
                bottomleft.style.display = 'block';
                bottomright.style.display = 'block';
                center.style.display = 'block';
            }, 1000);
        }
    });

})();