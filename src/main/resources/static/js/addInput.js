// Add new fields on button click
document.querySelector(".addDistance").addEventListener("click", function(event) {
    // Prevent default form submission
    event.preventDefault();

    // Create new div, label, input, and delete button elements
    var newDiv = document.createElement("div");
    var newInput = document.createElement("input");
    var deleteButton = document.createElement("button");

    // Assign attributes to the new input, label and delete button elements
    newInput.type = "text";
    newInput.className = "input__distance new-input";
    newInput.placeholder = "Введите название дистанции";
    deleteButton.textContent = "Ⓧ Удалить поле";
    deleteButton.className = "deleteField";
    deleteButton.style.border = "none";
    deleteButton.style.padding = "10px";
    deleteButton.style.color = "#898989";
    deleteButton.style.background = "#F3F7FA";

    // Append the new elements to the new div
    newDiv.appendChild(newInput);
    newDiv.appendChild(deleteButton);

    // Append the new div to the form
    var formContainer = document.querySelector(".column");
    formContainer.appendChild(newDiv);
});

// When the page is loaded, add event listeners to delete buttons
window.onload = function() {
    document.body.addEventListener("click", function(event) {
        if(event.target && event.target.className === "deleteField") {
            // Prevent default form submission
            event.preventDefault();

            var fieldToDelete = event.target.parentElement;
            fieldToDelete.remove();
        }
    });
};