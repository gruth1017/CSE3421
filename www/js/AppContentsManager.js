const urlParams = new URLSearchParams(window.location.search);
const jsonFile = urlParams.get('json');

fetch(jsonFile)
    .then(response => response.json())
    .then(data => {
        document.getElementById('header').innerHTML = `
            <br><br>
            <h1>${data.title}</h1>
        `;

         fetch(data.jsonPages)
             .then(response => response.json())
             .then(data2 => {
                 let content = '';
                 for (const key in data2) {
                       if (data2.hasOwnProperty(key)) {
                         const item = data2[key];
                         content += `
                            <ul>
                                <li> <a href="page.html?json=${item.jsonPage}">${item.title}</a>
                                   <a>${item.content}</a> </li>
                            </ul>
                         `;
                       }
                 }
                 document.getElementById('pages').innerHTML = content;
             })
             .catch(error => console.error('Error fetching JSON:', error));

         document.getElementById('schedule').innerHTML = `
             <ul>
             <li><a href="schedule.html?json=${data.schedule}"> See the ${data.scheduleType} Schedule! </a></li>
             </ul>
         `;
    })
    .catch(error => console.error('Error fetching JSON:', error));