const apiKey = 'ZHI2cEaLFtRFz77I8b0VqK1PW1lxWWSa';
const baseURL = 'https://api.giphy.com/v1/gifs/';
const num1 = document.querySelector('#num1');
const num2 = document.querySelector('#num2');
const num3 = document.querySelector('#num3');
const num4 = document.querySelector('#num4');
const num5 = document.querySelector('#num5');
const num6 = document.querySelector('#num6');
const num7 = document.querySelector('#num7');
const num8 = document.querySelector('#num8');
const num9 = document.querySelector('#num9');
const num10 = document.querySelector('#num10');
const button = document.querySelector('#searchStart');
let current = document.querySelectorAll('input[name="selection"]');
let url = '';
let img1 = document.createElement('img');
let img2 = document.createElement('img');
let img3 = document.createElement('img');
let img4 = document.createElement('img');
let img5 = document.createElement('img');
let img6 = document.createElement('img');
let img7 = document.createElement('img');
let img8 = document.createElement('img');
let img9 = document.createElement('img');
let img10 = document.createElement('img');

button.addEventListener('click', fetchResults);
searchInput.addEventListener('keypress', function (e) { if (e.key === 'Enter')
        fetchResults()
});



function fetchResults(e) {
    current = document.querySelector('input[name="selection"]:checked').value;
    let searchInput = document.querySelector('#searchInput').value;

    while (num1.firstChild) {
        num1.removeChild(num1.firstChild);
    };
    while (num2.firstChild) {
        num2.removeChild(num2.firstChild);
    };
    while (num3.firstChild) {
        num3.removeChild(num3.firstChild);
    };
    while (num4.firstChild) {
        num4.removeChild(num4.firstChild);
    };
    while (num5.firstChild) {
        num5.removeChild(num5.firstChild);
    };
    while (num6.firstChild) {
        num6.removeChild(num6.firstChild);
    };
    while (num7.firstChild) {
        num7.removeChild(num7.firstChild);
    };
    while (num8.firstChild) {
        num8.removeChild(num8.firstChild);
    };
    while (num9.firstChild) {
        num9.removeChild(num9.firstChild);
    };
    while (num10.firstChild) {
        num10.removeChild(num10.firstChild);
    };


    if (current !== 'search') {
        url=`${baseURL}${current}?api_key=${apiKey}&limit=10&rating=pg&lang=en`
    } else {
        url=`${baseURL}${current}?api_key=${apiKey}&q=${searchInput}&limit=10&rating=pg&lang=en`
    };

    if (current === 'random') {

        url=`${baseURL}${current}?api_key=${apiKey}&limit=10&rating=pg&lang=en`

        fetch(url)
            .then(function (result) {
                return result.json();
            })
            .then(function (json) {
                console.log(json)
                img1.src = json.data.images.downsized.url
                img1.alt = json.data.title
                num1.appendChild(img1)
            })

        fetch(url)
            .then(function (result) {
                return result.json();
            })
            .then(function (json) {
                img2.src = json.data.images.downsized.url
                img2.alt = json.data.title
                num2.appendChild(img2)
            })
        fetch(url)
            .then(function (result) {
                return result.json();
            })
            .then(function (json) {
                img3.src = json.data.images.downsized.url
                img3.alt = json.data.title
                num3.appendChild(img3)
            })
        fetch(url)
            .then(function (result) {
                return result.json();
            })
            .then(function (json) {
                img4.src = json.data.images.downsized.url
                img4.alt = json.data.title
                num4.appendChild(img4)
            })
        fetch(url)
            .then(function (result) {
                return result.json();
            })
            .then(function (json) {
                img5.src = json.data.images.downsized.url
                img5.alt = json.data.title
                num5.appendChild(img5)
            })
        fetch(url)
            .then(function (result) {
                return result.json();
            })
            .then(function (json) {
                img6.src = json.data.images.downsized.url
                img6.alt = json.data.title
                num6.appendChild(img6)
            })
        fetch(url)
            .then(function (result) {
                return result.json();
            })
            .then(function (json) {
                img7.src = json.data.images.downsized.url
                img7.alt = json.data.title
                num7.appendChild(img7)
            })
        fetch(url)
            .then(function (result) {
                return result.json();
            })
            .then(function (json) {
                img8.src = json.data.images.downsized.url
                img8.alt = json.data.title
                num8.appendChild(img8)
            })
        fetch(url)
            .then(function (result) {
                return result.json();
            })
            .then(function (json) {
                img9.src = json.data.images.downsized.url
                img9.alt = json.data.title
                num9.appendChild(img9)
            })
        fetch(url)
            .then(function (result) {
                return result.json();
            })
            .then(function (json) {
                img10.src = json.data.images.downsized.url
                img10.alt = json.data.title
                num10.appendChild(img10)
            })
    } else if (current === 'trending') {
    
        url=`${baseURL}${current}?api_key=${apiKey}&limit=10&rating=pg&lang=en`

        fetch(url)
            .then(function (result) {
                return result.json();
            })
            .then(function (json) {
                img1.src = json.data[0].images.downsized.url
                img1.alt = json.data.title
                num1.appendChild(img1)
                img2.src = json.data[1].images.downsized.url
                img2.alt = json.data.title
                num2.appendChild(img2)
                img3.src = json.data[2].images.downsized.url
                img3.alt = json.data.title
                num3.appendChild(img3)
                img4.src = json.data[3].images.downsized.url
                img4.alt = json.data.title
                num4.appendChild(img4)
                img5.src = json.data[4].images.downsized.url
                img5.alt = json.data.title
                num5.appendChild(img5)
                img6.src = json.data[5].images.downsized.url
                img6.alt = json.data.title
                num6.appendChild(img6)
                img7.src = json.data[6].images.downsized.url
                img7.alt = json.data.title
                num7.appendChild(img7)
                img8.src = json.data[7].images.downsized.url
                img8.alt = json.data.title
                num8.appendChild(img8)
                img9.src = json.data[8].images.downsized.url
                img9.alt = json.data.title
                num9.appendChild(img9)
                img10.src = json.data[9].images.downsized.url
                img10.alt = json.data.title
                num10.appendChild(img10)
            })
    } else if (current === 'search') {

        url=`${baseURL}${current}?api_key=${apiKey}&q=${searchInput}&limit=10&rating=pg&lang=en`

        fetch(url)
            .then(function (result) {
                return result.json();
            })
            .then(function (json) {
                img1.src = json.data[0].images.downsized.url
                img1.alt = json.data.title
                num1.appendChild(img1)
                img2.src = json.data[1].images.downsized.url
                img2.alt = json.data.title
                num2.appendChild(img2)
                img3.src = json.data[2].images.downsized.url
                img3.alt = json.data.title
                num3.appendChild(img3)
                img4.src = json.data[3].images.downsized.url
                img4.alt = json.data.title
                num4.appendChild(img4)
                img5.src = json.data[4].images.downsized.url
                img5.alt = json.data.title
                num5.appendChild(img5)
                img6.src = json.data[5].images.downsized.url
                img6.alt = json.data.title
                num6.appendChild(img6)
                img7.src = json.data[6].images.downsized.url
                img7.alt = json.data.title
                num7.appendChild(img7)
                img8.src = json.data[7].images.downsized.url
                img8.alt = json.data.title
                num8.appendChild(img8)
                img9.src = json.data[8].images.downsized.url
                img9.alt = json.data.title
                num9.appendChild(img9)
                img10.src = json.data[9].images.downsized.url
                img10.alt = json.data.title
                num10.appendChild(img10)
            })
    }
}

fetchResults()