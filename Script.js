// College Assignment Submission Tracker

let assignments = [];

// Add a new assignment
function addAssignment(subject, title, dueDate) {
    assignments.push({
        subject: subject,
        title: title,
        dueDate: dueDate,
        submitted: false
    });
    console.log("Assignment added successfully!");
}

// Mark assignment as submitted
function submitAssignment(title) {
    let found = false;

    assignments.forEach(assignment => {
        if (assignment.title === title) {
            assignment.submitted = true;
            found = true;
        }
    });

    if (found) {
        console.log("Assignment submitted successfully!");
    } else {
        console.log("Assignment not found.");
    }
}

// Display all assignments
function displayAssignments() {
    console.log("\nAssignment List:");
    assignments.forEach((assignment, index) => {
        console.log(
            `${index + 1}. Subject: ${assignment.subject}, ` +
            `Title: ${assignment.title}, ` +
            `Due Date: ${assignment.dueDate}, ` +
            `Status: ${assignment.submitted ? "Submitted" : "Pending"}`
        );
    });
}

// Sample Data
addAssignment("JavaScript", "Mini Project", "15-07-2026");
addAssignment("Database", "SQL Assignment", "18-07-2026");
addAssignment("Python", "Lab Exercise", "20-07-2026");

displayAssignments();

submitAssignment("SQL Assignment");

displayAssignments();