
const params = new URLSearchParams(window.location.search);

const results = document.querySelector("#results");

let html = `
  <p><strong>First Name:</strong> ${params.get("first")}</p>
  <p><strong>Last Name:</strong> ${params.get("last")}</p>
  <p><strong>Phone:</strong> ${params.get("phone")}</p>
  <p><strong>Email:</strong> ${params.get("email")}</p>
  
  <p><strong>Ordinance:</strong> ${params.get("ordinance")}</p>
  <p><strong>Date:</strong> ${params.get("date")}</p>
  <p><strong>Location:</strong> ${params.get("location")}</p>
`;

results.innerHTML = html;
