  // Constructor for a Place
function Place(location, landmarks, season, notes) {
  this.location = location;
  this.landmarks = landmarks;
  this.season = season;
  this.notes = notes;
}

// Prototype method to get place details
Place.prototype.getDetails = function() {
  return this.location + " - " +
         this.landmarks + " - " +
         this.season + " - " +
         this.notes;
};

// Array to store places
const places = [];

// Add place from input fields
function addPlaceFromInput() {
  const location = document.getElementById("location").value;
  const landmarks = document.getElementById("landmarks").value;
  const season = document.getElementById("season").value;
  const notes = document.getElementById("notes").value;

  // Improved validation (trim whitespace)
  if (location.trim() === "" || landmarks.trim() === "") {
    alert("Please enter at least location and landmarks");
    return;
  }

  // Prevent duplicate locations + landmarks
  if (places.some(p => p.location === location && p.landmarks === landmarks)) {
    alert("This place is already added!");
    return;
  }

  // Create place object
  const newPlace = new Place(location, landmarks, season, notes);

  // Store in array
  places.push(newPlace);

  // Create list item showing full details
  const li = document.createElement("li");
  li.textContent = newPlace.getDetails();

  // Add to list
  document.getElementById("placeList").appendChild(li);

  // Clear inputs
  document.getElementById("location").value = "";
  document.getElementById("landmarks").value = "";
  document.getElementById("season").value = "";
  document.getElementById("notes").value = "";
}
