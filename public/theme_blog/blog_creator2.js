// Get references to the different content sections
const codeSnippet = document.getElementById("codeSnippet");
const theory = document.getElementById("theo");
const errorCode = document.getElementById("Error");
const suggestion = document.getElementById("suggest");

// Function to show only the selected section and hide the others
function handleCheckboxClick(checkbox) {
    // First hide all sections by default
    hideAllSections();
    
    // If a checkbox is checked, show the corresponding section
    if (checkbox.checked) {
        switch (checkbox.value) {
            case "codesnippet":
                console.log("Code Snippet checkbox clicked");
                codeSnippet.classList.remove("hidden");
                break;
            case "suggestion":
                console.log("Suggestion checkbox clicked");
                suggestion.classList.remove("hidden");
                break;
            case "theory":
                console.log("Theory checkbox clicked");
                theory.classList.remove("hidden");
                break;
            case "errorcode":
                console.log("Error Code checkbox clicked");
                errorCode.classList.remove("hidden");
                break;
        }
    }
}

// Helper function to hide all sections
function hideAllSections() {
    codeSnippet.classList.add("hidden");
    theory.classList.add("hidden");
    errorCode.classList.add("hidden");
    suggestion.classList.add("hidden");
}

// Function for selecting only one checkbox at a time
const checkboxes = document.querySelectorAll('input[type="checkbox"]');

checkboxes.forEach(checkbox => {
    checkbox.addEventListener('change', () => {
        if (checkbox.checked) {
            // Uncheck other checkboxes and hide their associated sections
            checkboxes.forEach(otherCheckbox => {
                if (otherCheckbox !== checkbox) {
                    otherCheckbox.checked = false; // Uncheck other boxes
                }
            });
        }

        // Handle showing/hiding of the relevant sections
        handleCheckboxClick(checkbox);
    });
});
