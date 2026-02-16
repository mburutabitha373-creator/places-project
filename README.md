# Places I've Been
A website that lets you track places you’ve visited and display their details. This project demonstrates JavaScript constructors, prototype methods, arrays, and basic Test-Driven Development (TDD).
## Project Overview

This app allows users to:

- Create place objects using a constructor
- Store places inside an array
- Display formatted place details
- Practice writing and testing business logic

The project was built step-by-step using Test-Driven Development.



## Technologies Used

- HTML  
- JavaScript  
- Basic DOM manipulation  
- Github

## Test-Driven Development (Business Logic Tests)

Each feature was tested first.
## Constructor stores values

**Goal:** Ensure a new place object stores the correct data.

```javascript
let place = new Place("Nairobi", "Museum", "June", "Fun");
place.location;

// Expected: "Nairobi"

 Prototype returns formatted details
Goal: Confirm that the prototype method formats details correctly.

place.getDetails();
// Expected: "Nairobi - Museum - June - FunTrip"

 — Places array stores objects

 Places array stores objects
Goal: Verify multiple place objects can be stored.

let trip2 = new Place("Mombasa", "Beach", "December", "Sunny");
places.push(place, trip ,trip2)
How to Run the Project
Download or clone the project

Open index.html in a browser

Enter place details

View stored places

Git Workflow Used
After every passing test:

git add .
git commit -m "Describe passing test"
git push
This keeps development organized and trackable.

Learning Goals
## Learning Goals
This project helps beginners understand:

JavaScript constructors

Prototype methods

Arrays and object storage

DOM updates

Test-Driven Development workflow



License

Git commit discipline

## License

Free to use and modify for learning purposes.

Author
Tabitha Mburu