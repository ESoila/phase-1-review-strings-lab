// Write your code in this file!



// Define currentUser with a string of your choice
const currentUser = 'Grace Hopper';

// Define a welcome message with string interpolation
const welcomeMessage = `Welcome to Flatbook, ${currentUser}!`;

// Create an excited version of the welcome message by converting it to uppercase
const excitedWelcomeMessage = welcomeMessage.toUpperCase();

// Define a short greeting that uses the first character of the currentUser
const shortGreeting = `Welcome, ${currentUser.slice(0, 1)}!`;
