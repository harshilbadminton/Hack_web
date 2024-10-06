codeSnippet = document.getElementById("codeSnippet");
theory = document.getElementById("theo");
Errorcode = document.getElementById("Error");
suggesion = document.getElementById("suggest")

// Function for selecting only one checkbox at a time

const checkboxes = document.querySelectorAll('input[type="checkbox"]');

checkboxes.forEach(checkbox => {
    checkbox.addEventListener('change', () => {
        if (checkbox.checked) {
            checkboxes.forEach(otherCheckbox => {
                if (otherCheckbox !== checkbox) {
                    otherCheckbox.checked = false;
                    if (!otherCheckbox.checked) {
                        if (otherCheckbox.value === "codesnippet") {
                            
                            // Perform an action for 'Code Snippet'
                            codeSnippet.classList.add("hidden")
                
                        } else if (otherCheckbox.value === "suggestion") {
                            
                            // Perform an action for 'Suggestion'
                            suggesion.classList.add("hidden")
                
                        } else if (otherCheckbox.value === "theory") {
                            
                            theory.classList.add("hidden")
                            // Perform an action for 'Theory'
                        } else if (otherCheckbox.value === "errorcode") {
                            
                            Errorcode.classList.add("hidden")
                            // Perform an action for 'Error Code'
                        }
                    }
                }
            });
        }
    });
});
function handleCheckboxClick(checkbox) {
    if (checkbox.checked) {
        if (checkbox.value === "codesnippet") {
            console.log("Code Snippet checkbox clicked");
            // Perform an action for 'Code Snippet'
            codeSnippet.classList.remove("hidden")

        } else if (checkbox.value === "suggestion") {
            console.log("Suggestion checkbox clicked");
            // Perform an action for 'Suggestion'
            suggesion.classList.remove("hidden")

        } else if (checkbox.value === "theory") {
            console.log("Theory checkbox clicked");
            theory.classList.remove("hidden")
            // Perform an action for 'Theory'
        } else if (checkbox.value === "errorcode") {
            console.log("Error Code checkbox clicked");
            Errorcode.classList.remove("hidden")
            // Perform an action for 'Error Code'
        }
    } else {
        // Optionally handle unchecking logic
        codeSnippet.classList.add("hidden");
        theory.classList.add("hidden")
        Errorcode.classList.add("hidden")
        suggesion.classList.add("hidden")
        console.log(checkbox.value + " checkbox unchecked");

    }
}

