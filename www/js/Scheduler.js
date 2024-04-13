const urlParams = new URLSearchParams(window.location.search);
const jsonFile = urlParams.get('json');

fetch(jsonFile)
    .then(response => response.json())
    .then(data => {
        document.getElementById('content').innerHTML = `
            <p>Date: ${data.date}</p>
            <p>Time: ${data.time}</p>
        `;
    })
    .catch(error => console.error('Error fetching JSON:', error));