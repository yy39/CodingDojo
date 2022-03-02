function changeName(element) {
    if (document.querySelector('#connectionsCounter').innerHTML == 420) {
        document.querySelector('#username').innerHTML = 'Blaze It'
    } else (
        document.querySelector('#username').innerHTML = 'Y Y'
    )
}

function remove(element, id) {
    var elem = document.getElementById(id);
    console.log(elem);
    var container = document.getElementById('connectionRequestsContainer');
    if (document.getElementById('connectionRequestsCounter').innerHTML > 1) {
        document.getElementById('connectionRequestsCounter').innerHTML--;
        console.log('-1')
    } else {
        container.remove();
        console.log('remove');
    }
    elem.remove();
    if (element.alt == "accept-circle") {
        document.querySelector('#connectionsCounter').innerHTML++;
    }
}