
const yearSpan = document.querySelector("#year");
const lastModifiedSpan = document.querySelector("#lastModified");

if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
}
if (lastModifiedSpan) {
    lastModifiedSpan.textContent = document.lastModified;
}

const params = new URLSearchParams(window.location.search);

function getParam(name) {
    const value = params.get(name);
    return value ? value : "Not provided";
}

const outFirst = document.querySelector("#outFirstName");
const outLast = document.querySelector("#outLastName");
const outEmail = document.querySelector("#outEmail");
const outMobile = document.querySelector("#outMobile");
const outOrg = document.querySelector("#outOrganization");
const outMembership = document.querySelector("#outMembership");
const outTimestamp = document.querySelector("#outTimestamp");

if (outFirst) outFirst.textContent = getParam("firstName");
if (outLast) outLast.textContent = getParam("lastName");
if (outEmail) outEmail.textContent = getParam("email");
if (outMobile) outMobile.textContent = getParam("mobile");
if (outOrg) outOrg.textContent = getParam("organization");

if (outMembership) {
    const raw = params.get("membership") || "";
    let label = "Not provided";

    switch (raw) {
        case "np":
            label = "NP Membership (Non-profit)";
            break;
        case "bronze":
            label = "Bronze Membership";
            break;
        case "silver":
            label = "Silver Membership";
            break;
        case "gold":
            label = "Gold Membership";
            break;
    }
    outMembership.textContent = label;
}

if (outTimestamp) {
    const raw = params.get("timestamp");
    if (!raw) {
        outTimestamp.textContent = "Not provided";
    } else {
        let formatted = raw;
        try {
            const date = new Date(raw);
            if (!isNaN(date.getTime())) {
                formatted = date.toLocaleString("en-US", {
                    dateStyle: "medium",
                    timeStyle: "short",
                });
            }
        } catch (e) {
        }
        outTimestamp.textContent = formatted;
    }
}
