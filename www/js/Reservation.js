// get the json file parameter
const urlParams = new URLSearchParams(window.location.search);
const jsonFileSchedule = urlParams.get('json');

// function to submit the form
function submitForm(event, nextPage) {
    event.preventDefault();
    wait();
    console.log("submitted!");
    window.location.href = "schedule.html?json=" + nextPage;
}

// function to wai after submitting to let the user know that from was submitted
function wait() {
    setTimeout(function() {
        document.getElementById('waitMessage').innerHTML = `
          <p> Submitting... </p>
        `;
    }, 5000000);

    document.getElementById('waitMessage').innerHTML = `
      <h2> Submitted! </h2>
    `;
}

// function to create the unique form
function createForm(jsonData, nextPage){
  let container = document.getElementById('content');
  let form = document.createElement('form');
  form.id = 'submitForm';

  for (const key in jsonData) {
    if (jsonData.hasOwnProperty(key)) {
      let label = document.createElement('label');
      label.textContent = jsonData[key][0].label;

      let input = document.createElement('input');
      input.type = 'text';
      input.id = key;
      input.name = key;

      form.appendChild(label);
      form.appendChild(input);
      form.appendChild(document.createElement('br'));
    }
  };

  let submitButton = document.createElement('button');
  submitButton.type = 'submit';
  submitButton.textContent = 'Submit';
  form.appendChild(submitButton);

  form.addEventListener('submit', function(event) {
     submitForm(event, nextPage);
  });
  container.appendChild(form);
}

// parse through the json file
fetch(jsonFileSchedule)
    .then(response => response.json())
    .then(data => {

    const nextPage = data.nextPage;

    // Set up the form
    fetch(data.reservationJson)
        .then(response => response.json())
        .then(data2 => {

          // Store json data from form on submit
          fetch(data.campusFacility)
            .then(response => response.json())
            .then(data3 => {
              console.log("hello");
            })
            .catch(error => console.error('Error fetching JSON:', error));
          // Call the create form function
          createForm(data2, nextPage);

        })
        .catch(error => console.error('Error fetching JSON:', error));
    })
    .catch(error => console.error('Error fetching JSON:', error));