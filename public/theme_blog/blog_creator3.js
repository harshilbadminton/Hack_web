// Function to handle checkbox clicks
function handleCheckboxClick(checkbox) {
    const codeSnippet = document.getElementById("codeSnippet");
    const theory = document.getElementById("theo");
    const errorCode = document.getElementById("Error");
    const suggestion = document.getElementById("suggest");

    if (checkbox.value === "none") {
        // If "None" is selected, clear the container and stop showing further boxes
        document.getElementById("checkboxContainer").innerHTML = ''; 
        return;
    }

    // Unhide corresponding box for selected checkbox
    if (checkbox.value === "codesnippet") {
        codeSnippet.classList.remove("hidden");
    } else if (checkbox.value === "suggestion") {
        suggestion.classList.remove("hidden");
    } else if (checkbox.value === "theory") {
        theory.classList.remove("hidden");
    } else if (checkbox.value === "errorcode") {
        errorCode.classList.remove("hidden");
    }

    // Reset checkboxes after a selection to allow more input
    createCheckboxes();  // Call this function to recreate the checkboxes for next input
}

// Function to recreate the checkboxes
function createCheckboxes() {
    const checkboxContainer = document.getElementById("checkboxContainer");
    checkboxContainer.innerHTML = '';  // Clear previous checkboxes

    // Create a new set of checkboxes
    const checkboxes = [
        { value: 'codesnippet', label: 'Code Snippet' },
        { value: 'suggestion', label: 'Suggestion' },
        { value: 'theory', label: 'Theory' },
        { value: 'errorcode', label: 'Error Code' },
        { value: 'none', label: 'None' }
    ];

    // Append the new checkboxes into the container
    checkboxes.forEach(item => {
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.value = item.value;
        checkbox.addEventListener('click', () => handleCheckboxClick(checkbox));

        const label = document.createElement('label');
        label.innerText = item.label;
        label.style.marginRight = "10px";

        checkboxContainer.appendChild(checkbox);
        checkboxContainer.appendChild(label);
        checkboxContainer.appendChild(document.createElement('br'));  // Line break for spacing
    });
}

// Initialize by creating the first set of checkboxes when the page loads
window.onload = () => {
    createCheckboxes();
};
