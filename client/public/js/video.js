const urlParams = new URLSearchParams(window.location.search);
const videoUrl = urlParams.get("url");
const videoTitle = urlParams.get("title");

const style = document.createElement("style");
style.textContent = `
  .video-title-layout {
    margin-bottom: 30px;
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
  .video-title-layout .sensor-icon {
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
  .video-title-layout .sensor-icon.ear {
    top: -15px; /* Adjust to stick to the top border */
    left: 20%;
  }

  .video-title-layout .sensor-icon.eye {
    top: -15px; /* Adjust to stick to the top border */
    right: 20%;
  }

  .video-title-layout .sensor-icon.hand {
    bottom: -15px; /* Adjust to stick to the bottom border */
    left: 20%;
  }

  .video-title-layout .sensor-icon.mind {
    bottom: -15px; /* Adjust to stick to the bottom border */
    right: 20%;
  }

  .video-title-layout .sensor-icon.heart {
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

// Set the video title
const videoTitleElement = document.getElementById("video-title");
videoTitleElement.textContent = videoTitle;

// Add the CSS class to the video title
videoTitleElement.classList.add("video-title-layout");

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
  videoTitleElement.appendChild(iconElement);
});

// Embed the YouTube video
const videoContainer = document.getElementById("video-container");
const iframe = document.createElement("iframe");
iframe.width = "100%";
iframe.height = "500";
iframe.src = videoUrl;
iframe.frameBorder = "0";
iframe.allow =
  "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
iframe.allowFullscreen = true;
iframe.style.borderRadius = "12px";
videoContainer.appendChild(iframe);
