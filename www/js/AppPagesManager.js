const urlParams = new URLSearchParams(window.location.search);
const jsonFile = urlParams.get('json');

fetch(jsonFile)
    .then(response => response.json())
    .then(data => {
        document.getElementById('content').innerHTML = `
            <p>Title: ${data.title}</p>
            <p>Description: ${data.description}</p>
            <p>Author: ${data.author}</p>
            <p>Content: ${data.content}</p>
        `;
    })
    .catch(error => console.error('Error fetching JSON:', error));