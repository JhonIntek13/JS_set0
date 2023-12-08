const appContainer = document.getElementById('app');
let currentView = localStorage.getItem('currentView') || 'template1';
let selectedItemIndex = -1;

function navigateToTemplate1() {
  currentView = 'template1';
  selectedItemIndex = -1;
  localStorage.setItem('currentView', currentView);
  displayView(currentView);
}

function navigateToTemplate2(index) {
  selectedItemIndex = index;
  currentView = 'template2';

  fetch('data.json')
    .then(response => response.json())
    .then(data => {
      const selectedItem = data[selectedItemIndex];
      const itemId = selectedItem.id;

      history.pushState(null, null, `?id=${itemId}`);

      localStorage.setItem('currentView', currentView);
      localStorage.setItem('selectedItemIndex', selectedItemIndex);

      displayView(currentView);
    })
    .catch(error => {
      console.error('Error fetching JSON:', error);
    });
}

function adjustLayout() {
  fetch('data.json')
    .then(response => response.json())
    .then(data => {
      const template1Items = document.querySelectorAll('.template1');
      template1Items.forEach((item, index) => {
        item.style.counterIncrement = 'section';
        const numberSpan = document.createElement('span');
        numberSpan.className = 'item-number';
        numberSpan.textContent = `Item ${index + 1}: `;
        item.insertBefore(numberSpan, item.firstChild);

        item.addEventListener('click', () => {
          navigateToTemplate2(index);
        });
      });
    })
    .catch(error => {
      console.error('Error fetching JSON:', error);
    });
}

function displayView(view) {
  let itemId = getParameterByName('id');

  appContainer.innerHTML = '';

  fetch('data.json')
    .then(response => response.json())
    .then(data => {
      if (!itemId) {
        itemId = localStorage.getItem('selectedItemId'); // Retrieve the item ID from localStorage
      }

      const selectedItem = data.find(item => item.id === itemId);

      if (view === 'template1' || !itemId) {
        data.forEach((item, index) => {
          const template = document.querySelector('#template1').content.cloneNode(true);
          const templateContainer = template.querySelector('.template1');

          templateContainer.querySelector('img').src = item.image;
          templateContainer.querySelector('img').alt = item.alt;
          templateContainer.querySelector('h2').textContent = item.title;

          const snippetLength = 100;
          const snippetText = item.text.substring(0, snippetLength) + '...';
          templateContainer.querySelector('.snippet').textContent = snippetText;

          appContainer.appendChild(template);
        });
      } else if (view === 'template2' && selectedItem) {
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

      localStorage.setItem('selectedItemId', itemId);
    })
    .catch(error => {
      console.error('Error fetching JSON:', error);
    });
}

function getParameterByName(name, url = window.location.href) {
  name = name.replace(/[[\]]/g, '\\$&');
  const regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)');
  const results = regex.exec(url);

  if (!results) return null;
  if (!results[2]) return '';

  return decodeURIComponent(results[2].replace(/\+/g, ' '));
}

displayView(currentView);
