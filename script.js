const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('.site-nav');

menuButton.addEventListener('click', () => {
  const isOpen = menuButton.getAttribute('aria-expanded') === 'true';
  menuButton.setAttribute('aria-expanded', String(!isOpen));
  menuButton.setAttribute('aria-label', isOpen ? 'Open navigation' : 'Close navigation');
  navigation.classList.toggle('is-open', !isOpen);
});

navigation.addEventListener('click', (event) => {
  if (event.target.closest('a')) {
    menuButton.setAttribute('aria-expanded', 'false');
    menuButton.setAttribute('aria-label', 'Open navigation');
    navigation.classList.remove('is-open');
  }
});

document.querySelector('#year').textContent = new Date().getFullYear();

// Add an entry only after confirming the associated media feature or support.
const confirmedMediaFeatures = [
  { name: 'Le360', image: 'assets/media/le360-transparent.png' },
  { name: 'Kassetta', image: 'assets/media/kassetta-transparent.png' },
  { name: 'HT Radio', image: 'assets/media/ht-radio-transparent.png' },
  { name: 'SNRT', image: 'assets/media/snrt-transparent.png' },
];

const mediaMarks = document.querySelector('#media-marks');
const mediaEmpty = document.querySelector('#media-empty');

confirmedMediaFeatures.forEach(({ name, image, url }) => {
  const mark = document.createElement(url ? 'a' : 'figure');
  mark.className = 'media-mark';
  if (url) {
    mark.href = url;
    mark.target = '_blank';
    mark.rel = 'noreferrer';
  }

  const logo = document.createElement('img');
  logo.src = image;
  logo.alt = `${name} logo`;
  mark.append(logo);

  if (!url) {
    const caption = document.createElement('figcaption');
    caption.textContent = name;
    mark.append(caption);
  }

  mediaMarks.append(mark);
});

mediaEmpty.hidden = confirmedMediaFeatures.length > 0;
