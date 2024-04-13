const urlParams = new URLSearchParams(window.location.search);
const jsonFile = urlParams.get('json');

fetch(jsonFile)
    .then(response => response.json())
    .then(data => {
        document.getElementById('content').innerHTML = `
            <p>Title: ${data.title}</p>
            <p>Content: ${data.content}</p>
        `;


         fetch(data.jsonPages)
             .then(response => response.json())
             .then(data2 => {
                 let content = '';
                 for (const key in data2) {
                       if (data2.hasOwnProperty(key)) {
                         const item = data2[key];
                         content += `
                             <a href="page.html?json=${item.jsonPage}">${item.title}</a> <br>
                             <p>Content: ${item.content}</p>
                         `;
                       }
                 }
                 document.getElementById('pages').innerHTML = content;
             })
             .catch(error => console.error('Error fetching JSON:', error));

         document.getElementById('schedule').innerHTML = `
            <a href="schedule.html?json=${data.schedule}"> Schedule something! </a>
         `;


    })
    .catch(error => console.error('Error fetching JSON:', error));