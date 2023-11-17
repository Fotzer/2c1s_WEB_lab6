function addHorizontalMenu() {
    const dropdownContainer = document.getElementById("dropdown-container");
    const dropdownName = document.getElementById("dropdown-add-horizontal-input").value;
    
    if(dropdownName !== "" && document.getElementById(dropdownName) === null)
    dropdownContainer.innerHTML += `<div>
        <button onclick="toogleDropdown('${dropdownName}')" class="dropbtn">${dropdownName}</button>
        <div id="${dropdownName}" class="dropdown-content">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
        </div>
    </div>`;
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