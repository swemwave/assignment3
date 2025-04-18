// when the "submit-button" is clicked, the contents of the contact-page are replaced with a single <p> element that reads "Thank you for your message" in size 24 font.

// hint: you can change the style of an element by modifying the value of that element's .style.fontSize, or by updating its .classList.

document.getElementById("submit-button").addEventListener("click", function(event) {
    // Prevent the default form submission behavior
    event.preventDefault();
    
    // Get the contact page element
    let contactPage = document.getElementById("contact-page");
    
    // Clear its contents
    contactPage.innerHTML = "";
    
    // Create a new paragraph element
    let thankYouMessage = document.createElement("p");
    
    // Set its text content
    thankYouMessage.textContent = "Thank you for your message";
    
    // Set its font size
    thankYouMessage.style.fontSize = "24px";
    
    // Append it to the contact page
    contactPage.appendChild(thankYouMessage);
});