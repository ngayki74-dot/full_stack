document.querySelector("#taskForm").addEventListener("submit", function(e) {
    e.preventDefault(); // पेज रिफ्रेश होण्यापासून थांबवते
    
    let taskName = document.querySelector("#Task").value;
    let priority = document.querySelector("#diya").value;
    
    console.log("Task:", taskName);
    console.log("Priority:", priority);
    
    alert("Task Added: " + taskName);
});
