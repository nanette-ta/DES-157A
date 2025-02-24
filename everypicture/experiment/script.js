(function() {
    'use strict';
    console.log('reading js');

    // const container = document.querySelector('div');
    // const theImg = document.querySelector('div img');
    // const percent = container.offsetWidth / 100;
    // let prevLoc = 0;

    // container.addEventListener('mousemove', reportPos);

    // function reportPos(event) {
    //     const mousePosX = Math.ceil((event.clientX - (container.getBoundingClientRect().left)) / percent);

    //     console.log(mousePosX);

    //     if (prevLoc !== mousePosX) {
    //         const addedPx = mousePosX * 30;
    //         theImg.style.width = (807 + addedPx) + 'px';
    //         prevLoc = mousePosX;
    //         console.log(prevLoc);
    //     }
    // }

    // const container = document.querySelector('#container');
    const hotSpots = document.querySelectorAll('#container div');
    const theImg = document.querySelector('div img');

    let thisSpot;

    let movingMouse;

    function zoomPhoto(event) {
        thisSpot = event.target.id;
        console.log(`zooming into ${thisSpot}`);
        switch (thisSpot) {
            case 'topleft': theImg.className = 'topleft'; break;
            case 'topright': theImg.className = 'topright'; break;
            case 'bottomleft': theImg.className = 'bottomleft'; break;
            case 'bottomright': theImg.className = 'bottomright'; break;
            case 'center': theImg.className = 'center'; break;
        }
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
            }, 1000);
        }
    });
})();
