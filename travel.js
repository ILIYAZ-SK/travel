function addDestination() {
    const destination = document.getElementById("destination").value;
    const startDate = document.getElementById("startDate").value;
    const endDate = document.getElementById("endDate").value;

    const itineraryList = document.getElementById("itineraryList");

    const itineraryItem = document.createElement("div");
    itineraryItem.classList.add("itinerary-item");
    itineraryItem.innerHTML = `
        <strong>${destination}</strong>
        <p>Start Date: ${startDate}</p>
        <p>End Date: ${endDate}</p>
    `;

    itineraryList.appendChild(itineraryItem);

    // Clear form fields
    document.getElementById("destination").value = "";
    document.getElementById("startDate").value = "";
    document.getElementById("endDate").value = "";
}
