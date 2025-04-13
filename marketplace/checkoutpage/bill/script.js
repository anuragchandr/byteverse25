const storedUsername = localStorage.getItem('username') || 'Anurag';

// Get the <a> element by its ID
const nameElement = document.getElementById('name');

// Set the text content of the <a> element to the stored username
if (nameElement) {
    nameElement.textContent = storedUsername;
}


// Get the <a> element by its ID
const accountElement = document.getElementById('account');

// Add a click event listener to the "My Account" link
accountElement.addEventListener('click', (event) => {
    event.preventDefault(); // Prevent the default link behavior

    // Retrieve all data from localStorage
    const userDetails = {
        username: localStorage.getItem('username') || 'Anurag',
        email: localStorage.getItem('email') || 'Not provided',
        address: localStorage.getItem('address') || 'Not provided',
        phone: localStorage.getItem('phone') || 'Not provided',
    };

    // Create the popup content
    const popupContent = `
        <div style="padding: 20px; font-family: Arial, sans-serif;">
            <h2>My Account Details</h2>
            <p><strong>Username:</strong> ${userDetails.username}</p>
            <p><strong>Email:</strong> ${userDetails.email}</p>
            <p><strong>Address:</strong> ${userDetails.address}</p>
            <p><strong>Phone:</strong> ${userDetails.phone}</p>
            <button id="closePopup" style="margin-top: 10px; padding: 5px 10px; background-color: #0071ce; color: white; border: none; cursor: pointer;">Close</button>
        </div>
    `;

    // Create a popup window
    const popup = document.createElement('div');
    popup.id = 'popupWindow';
    popup.style.position = 'fixed';
    popup.style.top = '50%';
    popup.style.left = '50%';
    popup.style.transform = 'translate(-50%, -50%)';
    popup.style.backgroundColor = 'white';
    popup.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.2)';
    popup.style.borderRadius = '8px';
    popup.style.zIndex = '1000';
    popup.innerHTML = popupContent;

    // Append the popup to the body
    document.body.appendChild(popup);

    // Add an event listener to close the popup
    document.getElementById('closePopup').addEventListener('click', () => {
        document.body.removeChild(popup);
    });
});