// BULK SELECTION TEMPLATE
// This shows the pattern for adding bulk selection to any workflow

// ========== CAMPYLOBACTER BULK SELECTION FUNCTIONS ==========

function updateCampyloSelectedCount(stageKey) {
    var checkboxes = document.querySelectorAll('.campylo-bulk-checkbox[data-stage="' + stageKey + '"]:checked');
    var countSpan = document.getElementById('selectedCountC1_' + stageKey);
    if (countSpan) {
        countSpan.textContent = checkboxes.length;
    }
}

function selectAllCampyloInStage(stageKey) {
    var checkboxes = document.querySelectorAll('.campylo-bulk-checkbox[data-stage="' + stageKey + '"]');
    var allChecked = true;
    checkboxes.forEach(function(cb) {
        if (!cb.checked) allChecked = false;
    });
    checkboxes.forEach(function(cb) {
        cb.checked = !allChecked;
    });
    updateCampyloSelectedCount(stageKey);
}

function processSelectedCampylo(stageKey) {
    var checkboxes = document.querySelectorAll('.campylo-bulk-checkbox[data-stage="' + stageKey + '"]:checked');
    if (checkboxes.length === 0) {
        alert('No samples selected.');
        return;
    }
    var workflowIds = [];
    checkboxes.forEach(function(cb) {
        workflowIds.push(cb.getAttribute('data-workflow-id'));
    });
    openCampyloBulkModal(workflowIds, stageKey);
}

function openCampyloBulkModal(workflowIds, stageKey) {
    // Create bulk processing modal
    // Similar to E. coli but with Campylobacter-specific fields
}

function closeCampyloBulkModal() {
    var modal = document.getElementById('campyloBulkModal');
    if (modal) modal.style.display = 'none';
}

function completeCampyloBulkStage() {
    // Process all selected workflows
    // Apply same data to all
    saveData();
    closeCampyloBulkModal();
    renderCampyloTab();
}
