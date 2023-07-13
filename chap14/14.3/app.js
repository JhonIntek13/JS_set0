const appContainer = document.getElementById('app');

// Set the initial view to template1
let currentView = 'template1';

function navigate() {
  if (currentView === 'template1') {
    currentView = 'template2';
  } else {
    currentView = 'template1';
  }

  displayView(currentView);
}

function displayView(view) {
  appContainer.innerHTML = ''; // Clear the app container

  fetch('data.json')
    .then(response => response.json())
    .then(data => {
      const templateData = data[view];

      const template = document.querySelector(`#${view}`).content.cloneNode(true);
      template.querySelector('img').src = templateData.image;
      template.querySelector('img').alt = templateData.alt;
      template.querySelector('h2').textContent = templateData.title;
      template.querySelector('p').textContent = templateData.snippet;

      appContainer.appendChild(template);
    })
    .catch(error => {
      console.error('Error fetching JSON:', error);
    });
}

displayView(currentView);
