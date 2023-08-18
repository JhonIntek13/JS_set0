const appContainer = document.getElementById('app');
let currentView = localStorage.getItem('currentView') || 'template1';
let selectedItemIndex = -1; // Index of the selected item from template 1

function navigateToTemplate1() {
  currentView = 'template1';
  localStorage.setItem('currentView', currentView);
  displayView(currentView);
}

function navigateToTemplate2(index) {
  selectedItemIndex = index;
  currentView = 'template2';
  localStorage.setItem('currentView', currentView);
  displayView(currentView);
}

function adjustLayout() {
  const template1Items = document.querySelectorAll('.template1');
  template1Items.forEach((item, index) => {
    item.style.counterIncrement = 'section';
    const numberSpan = document.createElement('span');
    numberSpan.className = 'item-number';
    numberSpan.textContent = `Item ${index + 1}: `;
    item.insertBefore(numberSpan, item.firstChild);

    // Add click event listener to navigate to template2-like view
    item.addEventListener('click', () => {
      navigateToTemplate2(index);
    });
  });
}

function displayView(view) {
  appContainer.innerHTML = '';

  fetch('data.json')
    .then(response => response.json())
    .then(data => {
      if (view === 'template1') {
        for (const key in data) {
          if (data.hasOwnProperty(key)) {
            const item = data[key];
            const template = document.querySelector('#template1').content.cloneNode(true);
            const templateContainer = template.querySelector('.template1');

            templateContainer.querySelector('img').src = item.image;
            templateContainer.querySelector('img').alt = item.alt;
            templateContainer.querySelector('h2').textContent = item.title;
            templateContainer.querySelector('p').textContent = item.snippet;

            appContainer.appendChild(template);
          }
        }
      } else if (view === 'template2' && selectedItemIndex !== -1 && data[Object.keys(data)[selectedItemIndex]]) {
        const selectedItem = data[Object.keys(data)[selectedItemIndex]];
        const template = document.querySelector('#template2').content.cloneNode(true);
        const templateContainer = template.querySelector('.template2');

        templateContainer.querySelector('img').src = selectedItem.image;
        templateContainer.querySelector('img').alt = selectedItem.alt;
        templateContainer.querySelector('h2').textContent = selectedItem.title;
        templateContainer.querySelector('.template2-text').textContent = selectedItem.snippet;

        // Add click event listener to navigate back to template1
        templateContainer.querySelector('.template2-link').addEventListener('click', navigateToTemplate1);

        appContainer.appendChild(template);
      }

      adjustLayout(); // Call adjustLayout() after content is loaded
    })
    .catch(error => {
      console.error('Error fetching JSON:', error);
    });
}

displayView(currentView);
