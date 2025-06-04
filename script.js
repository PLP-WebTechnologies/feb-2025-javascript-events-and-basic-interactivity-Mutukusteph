// Button click
document.getElementById("clickMe").addEventListener("click", () => {
  alert("Button was clicked!");
});

// Hover effect
document.getElementById("hoverMe").addEventListener("mouseover", () => {
  alert("You hovered over the button!");
});

// Keypress detection
document.getElementById("keyInput").addEventListener("keypress", (e) => {
  console.log("Key pressed:", e.key);
});

// Double-click secret action
document.getElementById("secretAction").addEventListener("dblclick", () => {
  alert("🎉 You found the secret!");
});

// Change color box on click
document.getElementById("colorBox").addEventListener("click", () => {
  const colors = ["lightcoral", "lightseagreen", "lightblue", "lightgoldenrodyellow"];
  const box = document.getElementById("colorBox");
  box.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
});

// Image gallery
const galleryImages = [
  "https://via.placeholder.com/300x200?text=Image+1",
  "https://via.placeholder.com/300x200?text=Image+2",
  "https://via.placeholder.com/300x200?text=Image+3"
];
let currentImage = 0;
document.getElementById("nextImage").addEventListener("click", () => {
  currentImage = (currentImage + 1) % galleryImages.length;
  document.getElementById("galleryImage").src = galleryImages[currentImage];
});

// Tabs
const tabs = document.querySelectorAll(".tabBtn");
const tabContents = document.querySelectorAll(".tabContent");
tabs.forEach(btn => {
  btn.addEventListener("click", () => {
    tabContents.forEach(tc => tc.classList.add("hidden"));
    document.getElementById(btn.dataset.tab).classList.remove("hidden");
  });
});

// Form validation
document.getElementById("myForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;

  let message = "";

  if (name === "" || email === "" || password === "") {
    message = "All fields are required.";
  } else if (!/\S+@\S+\.\S+/.test(email)) {
    message = "Invalid email format.";
  } else if (password.length < 8) {
    message = "Password must be at least 8 characters.";
  } else {
    message = "✅ Form submitted successfully!";
    document.getElementById("formMsg").style.color = "green";
  }

  document.getElementById("formMsg").textContent = message;
});

// Real-time password feedback
document.getElementById("password").addEventListener("input", function() {
  const message = document.getElementById("formMsg");
  if (this.value.length < 8) {
    message.textContent = "Password is too short.";
    message.style.color = "red";
  } else {
    message.textContent = "Password looks good.";
    message.style.color = "green";
  }
});
