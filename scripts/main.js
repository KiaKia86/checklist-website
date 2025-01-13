document.addEventListener('DOMContentLoaded', () => {
    const startScreen = document.getElementById('start-screen');
    const mainContent = document.getElementById('main-content');
    const startBtn = document.getElementById('start-btn');

    startBtn.addEventListener('click', () => {
        startScreen.style.display = 'none';
        mainContent.classList.remove('hidden');
    });

    const addChecklistBtn = document.getElementById('add-checklist-btn');
    const checklistContainer = document.getElementById('checklist-container');

    addChecklistBtn.addEventListener('click', () => {
        const checklistName = prompt('Enter checklist name:');
        if (checklistName) {
            ChecklistManager.addChecklist(checklistName);
        }
    });

    // Load checklists from storage
    ChecklistManager.loadChecklists();
});