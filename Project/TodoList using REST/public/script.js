document.addEventListener('DOMContentLoaded', () => {
    const doneBtn = document.querySelector(".doneBtn");
    
    if (doneBtn) {
        doneBtn.addEventListener("click", () => {
            const task = document.querySelector("li p");
            if (task) {
                task.style.textDecoration = "line-through";
            }
        });
    }
}); 