function addHorizontalMenu() {
    const dropdownContainer = document.getElementById("dropdown-container");
    const dropdownName = document.getElementById("dropdown-add-horizontal-input").value;
    
    if(dropdownName !== "" && document.getElementById(dropdownName) === null)
    dropdownContainer.innerHTML += `<div>` +
        `<button onclick="toogleDropdown('${dropdownName}')" class="dropbtn">${dropdownName}</button>` +
        `<div id="${dropdownName}" class="dropdown-content">` +
        `</div>` +
    `</div>\n`;
}

function toogleDropdown(name) {
    const dropdowns = document.getElementsByClassName("dropdown-content");
    for (let i = 0; i < dropdowns.length; i++) {
        let openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
    }
    document.getElementById(name).classList.toggle("show");
}

window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      const dropdowns = document.getElementsByClassName("dropdown-content");
      for (let i = 0; i < dropdowns.length; i++) {
        let openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }

document.getElementById("dropdown-add-horizontal-button").onclick = addHorizontalMenu;

function addVerticalItem() {
    const dropdownName = document.getElementById("dropdown-add-horizontal-input").value;
    const horizontalMenu = document.getElementById(dropdownName);
    if(horizontalMenu !== null) {
        const verticalItemName = document.getElementById("dropdown-add-vertical-input-name").value;
        const verticalItemLink = document.getElementById("dropdown-add-vertical-input-link").value;
        horizontalMenu.innerHTML += `<a href="${verticalItemLink}">${verticalItemName}</a>`;
    }
}

document.getElementById("dropdown-add-vertical-button").onclick = addVerticalItem;

async function sendObject() {
  const objectName = document.getElementById("form-input-name").value;

  if(objectName !== "") {
    const objectValue = document.getElementById("dropdown-container").innerHTML;

    let formData = new FormData();
    formData.append("object", objectValue);
    formData.append("objectname", objectName);

    const response = await fetch("writefile.php", {
      method: "POST",
      body: formData,
    });

    console.log(response);
  }
}

document.getElementById("submit-object").onclick = sendObject;