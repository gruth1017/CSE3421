// get the json file parameter
const urlParams = new URLSearchParams(window.location.search);
const jsonFileSchedule = urlParams.get('json');

// parse through the json file
fetch(jsonFileSchedule)
  .then(response => response.json())
  .then(data => {

    // data.campusFacility is the path to the json file with the schedule information
    // parse through this json file
    fetch(data.campusFacility)
        .then(response => response.json())
        .then(data2 => {
            // display all of the schedule info (available and unavailable times)
            let content = '';
            for (const key in data2) {
              if (data2.hasOwnProperty(key)) {
                const day = data2[key];
                content += `
                  <h2> ${key} </h2>
                `;
                day.forEach(event => {
                  content += `
                    <ul>
                        <li> Time: ${event.time} </li>
                        <li> ${event.subject ? `<a>❌Unavailable</a>` : `<a href="reservation.html?json=${jsonFileSchedule}">Schedule Now</a> <br>`} </li>
                    </ul>
                  `;
                });
              }
            }
            document.getElementById('content').innerHTML = content;
        })
        .catch(error => console.error('Error fetching JSON:', error));
      })
    .catch(error => console.error('Error fetching JSON:', error));