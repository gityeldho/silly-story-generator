const storiesStart = [
  "Once upon a time,",
  "Long ago,",
  "In a faraway land,",
  "On a dark and stormy night,",
  "Many years ago,"
];

const storiesMiddle = [
  "a brave knight",
  "a curious cat",
  "a clever fox",
  "a tiny mouse",
  "a friendly giant"
];

const storiesEnd = [
  "found a hidden treasure.",
  "saved the village from danger.",
  "went on an amazing adventure.",
  "discovered a secret cave.",
  "made a new friend."
];

const storiesContainer = document.querySelector('.stories');
const generateBtn = document.getElementById('generateBtn');

function randomItem(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function generateStory() {
  return `${randomItem(storiesStart)} ${randomItem(storiesMiddle)} ${randomItem(storiesEnd)}`;
}

function generateStories(count = 1) {
  storiesContainer.innerHTML = ''; // Clear previous stories
  for (let i = 0; i < count; i++) {
    const story = generateStory();
    const p = document.createElement('p');
    p.classList.add('story');
    p.textContent = story;
    storiesContainer.appendChild(p);
  }
}

generateBtn.addEventListener('click', () => generateStories(1));
