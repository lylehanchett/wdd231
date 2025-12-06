

export function saveLastViewed(item) {
    const record = {
        id: item.id,
        name: item.name,
        timestamp: new Date().toLocaleString()
    };

    localStorage.setItem("dlb_last_viewed", JSON.stringify(record));
}

export function loadLastViewedInfo() {
    const raw = localStorage.getItem("dlb_last_viewed");
    if (!raw) return null;

    try {
        return JSON.parse(raw);
    } catch (error) {
        console.error("Error parsing last viewed item:", error);
        return null;
    }
}
