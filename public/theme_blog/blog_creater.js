function handleCheckboxClick(checkbox) {
    if (checkbox.checked) {
        if (checkbox.value === "codesnippet") {
            console.log("Code Snippet checkbox clicked");
            // Perform an action for 'Code Snippet'
        } else if (checkbox.value === "suggestion") {
            console.log("Suggestion checkbox clicked");
            // Perform an action for 'Suggestion'
        } else if (checkbox.value === "theory") {
            console.log("Theory checkbox clicked");
            // Perform an action for 'Theory'
        } else if (checkbox.value === "errorcode") {
            console.log("Error Code checkbox clicked");
            // Perform an action for 'Error Code'
        }
    } else {
        console.log(checkbox.value + " checkbox unchecked");
        // Optionally handle unchecking logic
    }
}