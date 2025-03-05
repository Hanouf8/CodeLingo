const urlParams = new URLSearchParams(window.location.search);
const language = urlParams.get("language");

// Add the CSS styles dynamically
const style = document.createElement("style");
style.textContent = `
  .language-title-border {
    margin-bottom: 100px;
    color: #2c3e50;
    text-align: center;
    padding: 40px 0;
    padding-top: 70px;
    font-weight: 600;
    position: relative;
    background-color: #f9f9f9; /* Light background for contrast */
    border: 4px solid #3498db; /* Solid border */
    border-radius: 10px; /* Rounded corners */
    box-shadow: 0 0 20px rgb(139, 189, 240); /* Subtle shadow */
    font-family: 'Lato', sans-serif; /* Modern font */
  }

  /* Icons representing the five senses */
  .language-title-border .sensor-icon {
    position: absolute;
    font-size: 24px; /* Icon size */
    color: #5c81a5; /* Icon color */
    opacity: 0.8; /* Slightly transparent */
    animation: floatIcons 5s infinite ease-in-out;
    background-color: #f9f9f9; /* Match the background */
    padding: 5px; /* Add padding to blend with the border */
    border-radius: 50%; /* Circular shape */
    border: 2px solid #57a3f09c; /* Match the border */
  }

  /* Position each icon on the border */
  .language-title-border .sensor-icon.ear {
    top: -15px; /* Adjust to stick to the top border */
    left: 20%;
  }

  .language-title-border .sensor-icon.eye {
    top: -15px; /* Adjust to stick to the top border */
    right: 20%;
  }

  .language-title-border .sensor-icon.hand {
    bottom: -15px; /* Adjust to stick to the bottom border */
    left: 20%;
  }

  .language-title-border .sensor-icon.mind {
    bottom: -15px; /* Adjust to stick to the bottom border */
    right: 20%;
  }

  .language-title-border .sensor-icon.heart {
    top: 20%;
    left: 47%;
    transform: translate(-50%, -50%);
  }

  /* Animation for floating icons */
  @keyframes floatIcons {
    0%, 100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-10px);
    }
  }
`;
document.head.appendChild(style);

// Set the language title
const languageTitle = document.getElementById("language-title");
languageTitle.textContent = `${language.toUpperCase()} Learning`;

// Add the CSS class to the language title
languageTitle.classList.add("language-title-border");

// Add Font Awesome icons for the five senses
const sensorIcons = [
  { className: "ear fas fa-ear-listen", title: "Hearing" }, // Ear icon
  { className: "eye fas fa-eye", title: "Seeing" }, // Eye icon
  { className: "hand fas fa-hand-paper", title: "Touching" }, // Hand icon
  { className: "mind fas fa-brain", title: "Thinking" }, // Mind icon
  { className: "heart fas fa-heart", title: "Feeling" }, // Heart icon
];

sensorIcons.forEach((sensor) => {
  const iconElement = document.createElement("i");
  iconElement.className = `sensor-icon ${sensor.className}`;
  iconElement.setAttribute("title", sensor.title); // Add a tooltip for accessibility
  languageTitle.appendChild(iconElement);
});

// Add levels buttons
const levels = {
  java: ["Beginner", "Intermediate", "Advanced"],
  javas: ["Beginner", "Intermediate", "Advanced"],
  swift: ["Beginner", "Intermediate", "Advanced"],
  python: ["Beginner", "Intermediate", "Advanced"],
  dart: ["Beginner", "Intermediate", "Advanced"],
  react: ["Beginner", "Intermediate", "Advanced"],
};

const levelsContainer = document.getElementById("levels-container");
levels[language].forEach((level) => {
  const button = document.createElement("button");
  button.textContent = level;
  button.onclick = () => {
    location.href = `chapters.html?language=${language}&level=${level.toLowerCase()}`;
  };
  levelsContainer.appendChild(button);
});
