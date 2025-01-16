function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

const wildlifePhotos = [
  './assets/photos/IMG_0129.jpg',
  './assets/photos/IMG_1857.jpg ',
  '/assets/photos/IMG_3827-1.jpg',
  './assets/photos/IMG_1561.jpg',
  './assets/photos/IMG_1265.png',
  './assets/photos/IMG_2323.jpg',
  './assets/photos/IMG_2510.jpg',
  './assets/photos/IMG_2557.jpg',
  './assets/photos/IMG_2792.jpg',
  './assets/photos/IMG_2794.jpg',
  './assets/photos/IMG_2834HQ.jpg',
  './assets/photos/IMG_3191.jpg',
  './assets/photos/IMG_3485.jpg',
  './assets/photos/IMG_3541.jpg',
  './assets/photos/IMG_3555.jpg',
  './assets/photos/IMG_3559.jpg',
  './assets/photos/IMG_3644.jpg',
  './assets/photos/IMG_1297.png',
  './assets/photos/IMG_5628.jpg',
  './assets/photos/IMG_5753.jpg',
  './assets/photos/IMG_6854.jpg',
  './assets/photos/IMG_9177.jpg',
];

let currentImageIndex = 0;

function openGallery(index) {
  currentImageIndex = index;
  const popup = document.getElementById('gallery-popup');
  const popupImg = document.getElementById('popup-img');
  popupImg.src = wildlifePhotos[index];
  popup.style.display = 'flex';
}

function closeGallery() {
  document.getElementById('gallery-popup').style.display = 'none';
}

function changeImage(step) {
  currentImageIndex += step;
  if (currentImageIndex < 0) {
    currentImageIndex = wildlifePhotos.length - 1;
  } else if (currentImageIndex >= wildlifePhotos.length) {
    currentImageIndex = 0;
  }
  document.getElementById('popup-img').src = wildlifePhotos[currentImageIndex];
}

// Project details array
const projectDetails = [
  {
    title: "Gesture-Controlled Velocity-Based Virtual Piano Interface",
    description:
      "A Virtual Piano application built using Computer Vision and Python. The system leverages Mediapipe for hand tracking and OpenCV for desk edge detection, allowing users to play the piano by tapping specific areas above a desk, corresponding to different musical notes.",
  },
  {
    title: "Distance Estimation using ESP32-CAM Stereo Vision",
    description:
      "Distance Estimation using ESP32-CAM Stereo Vision is a project that leverages two ESP32-CAM modules to simulate a stereo vision setup. By capturing images from dual perspectives, the system calculates depth and distance, enabling accurate object detection and distance measurement. This project showcases the potential of low-cost hardware for robotics, automation, and real-world spatial analysis.",
  },
  {
    title: "Human Detection and Tracking using ESP32-CAM and SG-90 Servo",
    description:
      "A surveillance system utilizing ESP32-CAM and SG-90 servo motors to detect and track humans in real-time. This project demonstrates the integration of IoT devices for intelligent monitoring and security applications.",
  },
  {
    title: "FitLife: ML-Driven Computer Vision for Exercise Guidance",
    description:
      "FitLife is a revolutionary fitness and wellness management platform developed during Smart India Hackathon (SIH) 2023. It combines machine learning and IoT technologies to provide real-time exercise tracking, personalized recommendations, and advanced analytics for a seamless fitness experience.",
  },
  {
    title: "Self-Driving-Car-Simulation-Using-Stereo-ESP32-CAM",
    description:
      "This project simulates a self-driving car system using stereo vision principles. Two ESP32-CAM modules act as virtual stereo cameras, capturing images to calculate disparity maps and perform depth estimation. The project showcases how depth perception aids navigation and obstacle avoidance in virtual environments.",
  },
  {
    title: "Polyp Segmentation Using UNet-3 with TensorFlow",
    description:
      "A medical image segmentation project designed to detect and segment polyps using the UNet-3 architecture in TensorFlow. This project demonstrates the application of deep learning in healthcare for accurate diagnosis and treatment planning.",
  },
];


// Function to show project details in a popup
function showProjectDetails(index) {
  const popup = document.getElementById("project-popup");
  const title = document.getElementById("popup-title");
  const description = document.getElementById("popup-description");

  // Set the title and description dynamically
  title.textContent = projectDetails[index].title;
  description.textContent = projectDetails[index].description;

  // Show the popup
  popup.style.display = "flex";

  // Add event listener for clicks outside the popup content
  popup.addEventListener("click", (event) => {
    if (event.target === popup) {
      closeProjectPopup();
    }
  });
}

// Function to close the popup
function closeProjectPopup() {
  const popup = document.getElementById("project-popup");
  popup.style.display = "none";
}
