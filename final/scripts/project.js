document.addEventListener("DOMContentLoaded", () => {
  const yearSpan = document.getElementById("currentyear");
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }

  const lastModPara = document.getElementById("lastModified");
  if (lastModPara) {
    lastModPara.textContent = "Last Modification: " + document.lastModified;
  }

  const servicesInfo = {
    customEquipment: {
      title: "Custom Equipment",
      description:
        "Design and fabrication of custom automated machines built for washdown environments.",
    },
    installation: {
      title: "Installation Services",
      description:
        "Expert installation of conveyors and automated systems for seamless integration.",
    },
  };

  function displayServiceDetails(serviceKey) {
    const serviceSection = document.getElementById("service-details");
    if (!serviceSection) return;

    const service = servicesInfo[serviceKey];

    if (service) {
      serviceSection.innerHTML = `
        <h2>${service.title}</h2>
        <p>${service.description}</p>
      `;
    } else {
      serviceSection.innerHTML = `<p>Service information not found.</p>`;
    }
  }

  function saveInquiry(name, email, message) {
    if (!name || !email || !message) {
      alert("Please fill out all fields.");
      return;
    }

    const inquiry = { name, email, message, date: new Date().toISOString() };
    const inquiries = JSON.parse(localStorage.getItem("inquiries")) || [];
    inquiries.push(inquiry);
    localStorage.setItem("inquiries", JSON.stringify(inquiries));

    alert("Thank you for your inquiry! We will get back to you shortly.");
    document.getElementById("inquiry-form").reset();
  }

  function initInquiryForm() {
    const form = document.getElementById("inquiry-form");
    if (!form) return;

    form.addEventListener("submit", (e) => {
      e.preventDefault();

      const name = form.elements["name"].value.trim();
      const email = form.elements["email"].value.trim();
      const message = form.elements["message"].value.trim();

      saveInquiry(name, email, message);
    });
  }

  function initNavToggle() {
    const toggleBtn = document.querySelector(".nav-toggle");
    const navMenu = document.querySelector("nav ul");

    if (!toggleBtn || !navMenu) return;

    toggleBtn.addEventListener("click", () => {
      navMenu.classList.toggle("show");
    });
  }

  initInquiryForm();
  initNavToggle();

  if (document.body.dataset.page === "custom-equipment") {
    displayServiceDetails("customEquipment");
  } else if (document.body.dataset.page === "installation") {
    displayServiceDetails("installation");
  }
});
