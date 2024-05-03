// get the json file parameter
const urlParams = new URLSearchParams(window.location.search);
const jsonFile = urlParams.get('json');

// parse through the json file
fetch(jsonFile)
    .then(response => response.json())
    .then(data => {
        // display the section title in the header section
        document.getElementById('header').innerHTML = `
            <br><br>
            <h1><b>${data.title}</b><img id="pawprint" src="img/panther.png" height="30" alt="An outline of a running panther."></h1>
        `;

         // data.jsonPages is the path to the json file with a list of section pages
         // parse through this json file
         fetch(data.jsonPages)
             .then(response => response.json())
             .then(data2 => {
                 // display all of the pages of the section
                 let content = '';
                 for (const key in data2) {
                       if (data2.hasOwnProperty(key)) {
                         const item = data2[key];
                         content += `
                            <ul>
                                <li> <a href="page.html?json=${item.jsonPage}">${item.title}</a>
                                   <p>${item.content}</p> </li>
                            </ul>
                         `;
                       }
                 }
                 document.getElementById('pages').innerHTML = content;
             })
             .catch(error => console.error('Error fetching JSON:', error));

         // display a link to the section schedule
         document.getElementById('schedule').innerHTML = `
             <ul>
             <li><a href="schedule.html?json=${data.schedule}"> See the ${data.scheduleType} Schedule! </a></li>
             </ul>
         `;
    })
    .catch(error => console.error('Error fetching JSON:', error));