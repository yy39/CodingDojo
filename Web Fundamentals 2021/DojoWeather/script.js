function loadWeather() {
    alert('Loading weather report...');
}

function acceptCookies() {
    document.querySelector('#popUp').remove();
}



function changeDegrees(value) {
    console.log(value);

    var idArray = [];
    for (var i = 1; i < 5; i++) {
        idArray.push('#high' + i);
        idArray.push('#low' + i);
    }

    console.log(idArray);

    if (value == 'F') {

        for (var i = 0; i < idArray.length; i++) {
            console.log(((document.querySelector(idArray[i]).innerHTML) * 9 / 5 + 32));
            var newValue = ((document.querySelector(idArray[i]).innerHTML) * 9 / 5 + 32).toFixed(0);
            document.querySelector(idArray[i]).innerHTML = newValue;
        }
    } else {
        for (var i = 0; i < idArray.length; i++) {
            console.log(((document.querySelector(idArray[i]).innerHTML - 32) * 5 / 9));
            var newValue = ((document.querySelector(idArray[i]).innerHTML - 32) * 5 / 9).toFixed(0);
            document.querySelector(idArray[i]).innerHTML = newValue;
        }
    }
}