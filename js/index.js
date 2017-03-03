document.querySelector('#page-loaded').innerHTML = 
  (new Date()).toLocaleString();


document.querySelector('#btn-get-data').addEventListener('click', makeAjaxCall);

function makeAjaxCall() {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            var clientData = JSON.parse(xhr.responseText);
            document.querySelector('#client-name').innerHTML = clientData.name;
            document.querySelector('#client-address').innerHTML = clientData.address;
            document.querySelector('#client-age').innerHTML = clientData.age;
        }
    }
    xhr.open('GET', 'client-data.json', true);
    xhr.send();
}

