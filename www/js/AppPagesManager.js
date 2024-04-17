const urlParams = new URLSearchParams(window.location.search);
const jsonFile = urlParams.get('json');

fetch(jsonFile)
    .then(response => response.json())
    .then(data => {
        document.getElementById('header').innerHTML = `
            <br><br>
            <h1>${data.title}</h1>
        `;

        document.getElementById('content').innerHTML = `
            <h3>${data.description}</h3>
            <h5>Article By ${data.author}</h5>
        `;

        document.getElementById('body').innerHTML = `
             <p>${data.content}</p>
        `;
    })
    .catch(error => console.error('Error fetching JSON:', error));