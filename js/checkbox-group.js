function ToggleDisplay(element, list, name) {
    if (getComputedStyle(list).display == "none") {
        list.style.display = "flex";
        element.innerText = name + " ▼";
    } else {
        list.style.display = "none";
        element.innerText = name + " ▲";
    }
}

function SelectAll(buttonAll, checkboxes) {
    for (let i = 0; i < checkboxes.length; i++) {
        checkboxes[i].checked = buttonAll.checked;
    }
}

function UpdateSelectAll(buttonAll, checkboxes) {
    let allChecked = true;

    for (let i = 0; i < checkboxes.length; i++) {
        if (!checkboxes[i].checked) {
            allChecked = false;
        }
    }

    buttonAll.checked = allChecked;
}