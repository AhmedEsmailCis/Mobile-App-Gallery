# Coding Challenge
## Overview
To complete this challenge, you will need to write a simple application. The purpose of this challenge is to assess not just your coding skills, but how you approach the challenge at hand.

We will be assessing your submitted code based on a number of criteria, including:
* Overall project structure
* Maintainability 
* Testability
* Reusability

We don't expect people to complete every feature outlined below, so time-box yourself to three or four hours. You will be assessed based on what you do deliver, not on what you don't.
* Use create-react-app so you can focus on the code, and not the project setup.
* Decide up-front what you're going to try and implement in the short time you have. For example, if you feel like integrating into an API will require too much effort, use static JSON files or placeholder values.

## The Challenge
Using the provided screens as a reference, you'll build part of a photo album application. You will use an online JSON API to request a list of albums and their associated entities. Each album has an owner, and an album contains a number of photos.

Familiarize yourself with the [JSON Placeholder API](https://jsonplaceholder.typicode.com/) before beginning this challenge. You will be using the [album](https://jsonplaceholder.typicode.com/albums), [photo](https://jsonplaceholder.typicode.com/photos), and [user](https://jsonplaceholder.typicode.com/users) resources.

Please include a README file with instructions on how to run both your application and any tests you have written.

Also add the following to your README:

* Give a brief summary of what you have developed in the allotted time.
* Include any important design decisions you made along the way.
* Given more time, what would you have done differently?
* Briefly outline any problems you might have had which prevented you from completing this challenge.

### How To Submit
Push your code into this repository and send an email to your recruitment point of contact to confirm you've completed the challenge. Please aim to complete this challenge within seven days of receiving your invite.

## Details
Aim to build the following two screens:

### The application's homepage
* Refer to the wireframe [react_challenge_album_list.png](react_challenge_album_list.png).
* This will display a list of photo albums, retrieved from the `albums` API.
* For each album, display its title, owner information, and a thumbnail image. If the album has no images, then display a suitable placeholder (tip: [placeholder.com](https://placeholder.com/) can be used to generate a fake image).
* Allow the user to navigate to an album.
* As a stretch goal, implement the filter widget on the right-hand side to allow the user to display only those albums owned by the user selected in the filter dropdown.

### An album gallery view
* Refer to the wireframe [react_challenge_album_view.png](react_challenge_album_view.png).
* This screen should contain two sections:
  * The top half will display the currently selected image (this should default to the first photo in the album). On either side of the image there should be slideshow controls which allow the user to preview the previous and next images in the album.
  * The bottom section will display thumbnails of all images in a grid format.
* The image currently being shown in the top section should be highlighted in the bottom section. Use whatever styling you want to do this highlighting. For example, in the wireframe there is a blue border around the thumbnail being previewed.
* This screen will be used to assess how you approach state management. Although it is a trivial use case, feel free to use Redux to manage the state between the components on this page.

## Other Notes
* Time is limited so prioritize quality over quantity. We would rather see less features developed well, as opposed to all features developed poorly.
* Don't be too concerned about how the application looks. Use your own CSS instead of frameworks such as Bootstrap.
* Commit regularly so we can get an idea of how you approached the challenge.
* Try to keep dependencies to a minimum.
* The provided wireframes are just a guide. Render the data as you see fit.