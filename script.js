const storiesStart = [
  "Once upon a time,",
  "Long ago,",
  "In a faraway land,",
  "On a dark and stormy night,",
  "Many years ago,"
];

const storiesMiddle = [
  "a brave knight named NAME",
  "a curious cat named NAME",
  "a clever fox named NAME",
  "a tiny mouse called NAME",
  "a friendly giant known as NAME"
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
const userNameInput = document.getElementById('userName');

function randomItem(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function generateStory() {
  let name = userNameInput.value.trim();
  if (name === "") name = "someone";

  const middle = randomItem(storiesMiddle).replace('NAME', name);
  return `${randomItem(storiesStart)} ${middle} ${randomItem(storiesEnd)}`;
}

generateBtn.addEventListener('click', () => {
  const story = generateStory();
  storiesContainer.innerHTML = `<p class="story">${story}</p>`;
});
