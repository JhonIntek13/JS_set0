const templates = document.querySelectorAll('.template');

// Add click event listeners to each template
templates.forEach(template => {
  template.addEventListener('click', navigate);
});

// Set the initial view to template 1
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
  templates.forEach(template => {
    if (template.id === view) {
      template.style.display = 'flex';
    } else {
      template.style.display = 'none';
    }
  });
}

displayView(currentView);
