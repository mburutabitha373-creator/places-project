 // Constructor for a Place
function Place(location, landmarks, season, notes) {
  this.location = location;
  this.landmarks = landmarks;
  this.season = season;
  this.notes = notes;
}

// Prototype method to get place details
Place.prototype.getDetails = function() {
  return `${this.location} - ${this.landmarks} - ${this.season} - ${this.notes}`;
};

// Array to store places
let places = [];

// Add place from input fields
function addPlaceFromInput() {
  const location = document.getElementById("location").value.trim();
  const landmarks = document.getElementById("landmarks").value.trim();
  const season = document.getElementById("season").value.trim();
  const notes = document.getElementById("notes").value.trim();

  // Input validation
  if (!location || !landmarks) {
    alert("Please enter at least location and landmarks");
    return;
  }

  // Prevent duplicates
  if (places.some(p => p.location === location && p.landmarks === landmarks)) {
    alert("This place is already added!");
    return;
  }

  const newPlace = new Place(location, landmarks, season, notes);
  places.push(newPlace);

  // Display in the list
  const li = document.createElement("li");
  li.textContent = newPlace.getDetails();

  // Show full details when clicked
  li.addEventListener("click", () => {
    const detailsDiv = document.getElementById("details");
    detailsDiv.textContent = newPlace.getDetails();
  });

  document.getElementById("placeList").appendChild(li);

  // Clear inputs
  document.getElementById("location").value = "";
  document.getElementById("landmarks").value = "";
  document.getElementById("season").value = "";
  document.getElementById("notes").value = "";
}