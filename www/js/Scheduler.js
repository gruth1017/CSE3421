const urlParams = new URLSearchParams(window.location.search);
const jsonFileSchedule = urlParams.get('json');


fetch(jsonFileSchedule)
  .then(response => response.json())
  .then(data => {

    fetch(data.campusFacility)
        .then(response => response.json())
        .then(data2 => {
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