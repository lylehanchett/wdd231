

export async function loadEquipmentData() {
    const url = "data/equipment.json";  

    try {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error(`HTTP Error: ${response.status}`);
        }

        const data = await response.json();
        return data;

    } catch (error) {
        console.error("Error fetching equipment data:", error);
        throw error;
    }
}
