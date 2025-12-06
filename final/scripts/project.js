document.addEventListener("DOMContentLoaded", () => {

  updateFooterInfo();
  initHamburgerMenu();
  initInquiryForm();
  loadServiceDetails();

});

// ------------------------------
// Footer Info
// ------------------------------
function updateFooterInfo() {
  const lastMod = document.getElementById("lastModified");
  if (lastMod) {
    lastMod.textContent = "Last Modification: " + document.lastModified;
  }

  const yearSpan = document.getElementById("currentyear");
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }
}

// ------------------------------
// Hamburger Menu
// ------------------------------
function initHamburgerMenu() {
  const hamburger = document.getElementById("hamburger");
  const mobileMenu = document.getElementById("mobile-menu");

  if (!hamburger || !mobileMenu) return;

  hamburger.addEventListener("click", () => {
    mobileMenu.classList.toggle("open");
  });
}

// ------------------------------
// Contact Form (only runs on contact.html)
// ------------------------------
function initInquiryForm() {
  const form = document.getElementById("inquiry-form");
  if (!form) return; // Exit if not on contact page

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = form.elements["name"].value.trim();
    const email = form.elements["email"].value.trim();
    const message = form.elements["message"].value.trim();

    if (!name || !email || !message) {
      alert("Please fill out all fields.");
      return;
    }

    saveInquiry(name, email, message);
    form.reset();
  });
}

function saveInquiry(name, email, message) {
  const inquiry = {
    name,
    email,
    message,
    date: new Date().toISOString()
  };

  const stored = JSON.parse(localStorage.getItem("inquiries")) || [];
  stored.push(inquiry);

  localStorage.setItem("inquiries", JSON.stringify(stored));

  alert("Thank you! Your inquiry has been submitted.");
}

// ------------------------------
// Load service details (only on pages with data-page attribute)
// ------------------------------
function loadServiceDetails() {
  const page = document.body.dataset.page;
  const serviceDetails = document.getElementById("service-details");

  if (!page || !serviceDetails) return;

  const services = {
    "custom-equipment": {
      title: "Custom Equipment",
      description:
        "Design and fabrication of custom automated machines built for washdown environments."
    },
    "installation": {
      title: "Installation Services",
      description:
        "Expert installation of conveyors and automated systems for seamless integration."
    }
  };

  if (services[page]) {
    serviceDetails.innerHTML = `
      <h2>${services[page].title}</h2>
      <p>${services[page].description}</p>
    `;
  }
}
