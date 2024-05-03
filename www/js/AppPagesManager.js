// get the json file parameter
const urlParams = new URLSearchParams(window.location.search);
const jsonFile = urlParams.get('json');

// parse through the json file
fetch(jsonFile)
    .then(response => response.json())
    .then(data => {
        // display the page title in the header section
        document.getElementById('header').innerHTML = `
            <br><br>
            <h1>${data.title}</h1>
        `;

        // display the page information in the content section
        document.getElementById('content').innerHTML = `
            <h3>${data.description}</h3>
            <h5>Article By ${data.author}</h5>
        `;

        // display the page contents in the body section
        document.getElementById('body').innerHTML = `
             <p>${data.content}</p>
        `;
    })
    .catch(error => console.error('Error fetching JSON:', error));