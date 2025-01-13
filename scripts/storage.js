class Storage {
    static saveChecklist(checklist) {
        const checklists = this.getAllChecklists();
        checklists.push(checklist);
        localStorage.setItem('checklists', JSON.stringify(checklists));
    }

    static getAllChecklists() {
        return JSON.parse(localStorage.getItem('checklists')) || [];
    }

    static getChecklist(id) {
        const checklists = this.getAllChecklists();
        return checklists.find(checklist => checklist.id === id);
    }

    static updateChecklist(updatedChecklist) {
        const checklists = this.getAllChecklists();
        const index = checklists.findIndex(checklist => checklist.id === updatedChecklist.id);
        checklists[index] = updatedChecklist;
        localStorage.setItem('checklists', JSON.stringify(checklists));
    }
}