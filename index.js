// U2L3 Build A Counter App

let number = document.getElementById("count-el");

let count = 0;

function decrement() {
    if(count > 0) {
        count--;
        number.innerHTML = count;
    
        autoSave();
    } else {
        alert("There cannot be a negative number of students entered.");
    }
}

function reset() {
    count = 0;
    number.innerHTML = count;

    autoSave();
}

function increment() {
    count++;
    number.innerHTML = count;

    autoSave();
}

let entries = document.createElement("h4");
document.getElementsByTagName("div")[0].appendChild(entries);

let previousEntries = "Previous entries: ";

function save() {
    previousEntries += (count + " - ");
    entries.innerHTML = previousEntries;
}

let autoSaveBtn = document.getElementById("auto-save-btn");

function activateAutoSave() {
    if(autoSaveBtn.innerHTML == "AUTO-SAVE: OFF") {
        autoSaveBtn.innerHTML = "AUTO-SAVE: ON";
    } else {
        autoSaveBtn.innerHTML = "AUTO-SAVE: OFF";
    }
}

function autoSave() {
    if(autoSaveBtn.innerHTML == "AUTO-SAVE: ON") {
        save();
    }
}
