class ChecklistManager {
    static addChecklist(name) {
        const checklist = {
            id: Date.now(),
            name: name,
            items: []
        };
        Storage.saveChecklist(checklist);
        this.renderChecklist(checklist);
    }

    static renderChecklist(checklist) {
        const checklistContainer = document.getElementById('checklist-container');
        const checklistElement = document.createElement('div');
        checklistElement.className = 'checklist-item';
        checklistElement.innerHTML = `
            <h2>${checklist.name}</h2>
            <ul>
                ${checklist.items.map(item => `
                    <li>
                        <img src="assets/icons/checkmark-icon-white.png" alt="Checkmark" class="icon">
                        ${item}
                        <img src="assets/icons/delete-icon-white.png" alt="Delete" class="icon" onclick="ChecklistManager.deleteItem(${checklist.id}, '${item}')">
                    </li>
                `).join('')}
            </ul>
            <button class="add-item-btn" onclick="ChecklistManager.addItem(${checklist.id})">
                <img src="assets/icons/add-icon-white.png" alt="Add Icon" class="icon">
                Add Item
            </button>
        `;
        checklistContainer.appendChild(checklistElement);
    }

    static addItem(checklistId) {
        const item = prompt('Enter item:');
        if (item) {
            const checklist = Storage.getChecklist(checklistId);
            checklist.items.push(item);
            Storage.updateChecklist(checklist);
            this.renderChecklists();
        }
    }

    static deleteItem(checklistId, item) {
        const checklist = Storage.getChecklist(checklistId);
        checklist.items = checklist.items.filter(i => i !== item);
        Storage.updateChecklist(checklist);
        this.renderChecklists();
    }

    static loadChecklists() {
        const checklists = Storage.getAllChecklists();
        checklists.forEach(checklist => this.renderChecklist(checklist));
    }

    static renderChecklists() {
        const checklistContainer = document.getElementById('checklist-container');
        checklistContainer.innerHTML = '';
        this.loadChecklists();
    }
}