# Places I've Been

## Author
**Tabitha Mburu**

## Project Description
This project allows users to track places they have visited and display details for each place. Users can enter a location, landmarks, season, and notes, and the app will store and display the information in a list. This project demonstrates:

- JavaScript constructors and objects
- Prototype methods
- Arrays and object storage
- DOM manipulation
- Test-Driven Development (TDD) workflow

## Live Project
Check out the live project on GitHub Pages:  
[Places I've Been](https://mburutabitha373-creator.github.io/places-project/)

## Project Setup
To run the project locally:
 Clone the repository:  
   ```bash
   git clone https://github.com/mburutabitha373-creator/places-project.git
Navigate to the project folder:

cd places-project
Open index.html in your browser.

Enter place details in the form and click "Add Place".

Usage Instructions
Enter a location and landmarks (required fields).

Optionally enter season and notes.

Click Add Place to save the place to the list.

Click a place name to view full details (landmarks, season, notes).

Future improvements include removing places, clearing all entries, and persistent storage.

Test-Driven Development (TDD)
The business logic was tested using pseudo-coded tests:

Constructor stores values correctly

let place = new Place("Nairobi", "Museum", "June", "Fun trip");
console.log(place.location); // Expected: "Nairobi"
Prototype method returns formatted details

place.getDetails(); // Expected: "Nairobi - Museum - June - Fun trip"
Array stores multiple places

const places = [];
let trip2 = new Place("Mombasa", "Beach", "December", "Sunny");
places.push(place, trip2);
console.log(places.length); // Expected: 2
Technologies Used
1. HTML

2. CSS

3. JavaScript

4. DOM manipulation

5. GitHub Pages (Deployment)

6. Test-Driven Development

## License
This project is free to use and modify for learning purposes.
MIT License © 2026 Tabitha Mburu