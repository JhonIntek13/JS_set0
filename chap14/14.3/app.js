const appContainer = document.getElementById('app');
let currentView = localStorage.getItem('currentView') || 'template1';
let selectedItemIndex = -1; // Index of the selected item from template 1
// Initialize the selected item's index from localStorage
const storedSelectedItemIndex = localStorage.getItem('selectedItemIndex');
if (storedSelectedItemIndex) {
  selectedItemIndex = parseInt(storedSelectedItemIndex);
} else {
  selectedItemIndex = -1;
}


function navigateToTemplate1() {
  currentView = 'template1';
  selectedItemIndex = -1; // Reset the selected item index
  localStorage.setItem('currentView', currentView);
  displayView(currentView);
}

function navigateToTemplate2(index) {
  selectedItemIndex = index;
  currentView = 'template2';
  
  // Store the selected item's index in localStorage
  localStorage.setItem('currentView', currentView);
  localStorage.setItem('selectedItemIndex', selectedItemIndex);

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
      if (view === 'template1' || !data[selectedItemIndex]) {
        // Display main articles view with snippets
        data.forEach((item, index) => {
          const template = document.querySelector('#template1').content.cloneNode(true);
          const templateContainer = template.querySelector('.template1');

          templateContainer.querySelector('img').src = item.image;
          templateContainer.querySelector('img').alt = item.alt;
          templateContainer.querySelector('h2').textContent = item.title;

          // Create a snippet from the text for the first 100 chars
          const snippetLength = 100;
          const snippetText = item.text.substring(0, snippetLength) + '...';
          templateContainer.querySelector('.snippet').textContent = snippetText;

          appContainer.appendChild(template);
        });
      } else if (view === 'template2' && selectedItemIndex !== -1 && data[selectedItemIndex]) {
        // Display article details view
        const selectedItem = data[selectedItemIndex];
        const template = document.querySelector('#template2').content.cloneNode(true);
        const templateContainer = template.querySelector('.template2');

        templateContainer.querySelector('img').src = selectedItem.image;
        templateContainer.querySelector('img').alt = selectedItem.alt;
        templateContainer.querySelector('h2').textContent = selectedItem.title;
        templateContainer.querySelector('p').textContent = selectedItem.text;

        templateContainer.querySelector('.template2-link').addEventListener('click', navigateToTemplate1);

        appContainer.appendChild(template);
      }

      adjustLayout(); 
    })
    .catch(error => {
      console.error('Error fetching JSON:', error);
    });
}



displayView(currentView);
