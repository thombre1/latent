// Example JavaScript code

// Function to display a greeting message
function greetUser(name) {
    console.log(`Hello, ${name}! Welcome to the site.`);
}

// Event listener for DOMContentLoaded
document.addEventListener('DOMContentLoaded', () => {
    console.log('Document is fully loaded.');
    greetUser('Aditya');
});

// Example of a simple counter
let counter = 0;
const incrementCounter = () => {
    counter++;
    console.log(`Counter: ${counter}`);
};

// Increment counter every second
setInterval(() => {
    const jsonValue = JSON.stringify({ counter });
    console.log(`JSON Value: ${jsonValue}`);
    
    // Handle JSON values in the root folder
    fetch('/counter.json', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: jsonValue
    })
    .then(response => response.json())
    .then(data => {
        console.log('Response from server:', data);
    })
    .catch(error => {
        console.error('Error handling JSON values:', error);
    });

    incrementCounter();
}, 1000);