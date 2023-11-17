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

async function fetchObject() {
    const objectName = document.getElementById("input-object-name").value;
    let url = `/readfile.php?objectname=${objectName}`;
    const response = await fetch(url);
    console.log(response);
    
    const object = await response.text()
    console.log(object);
    document.getElementById("dropdown-container").innerHTML = object;
    //setInterval(checkUpdates, 10 * 100, objectName);
}

async function checkUpdates() {
    
}

document.getElementById("input-button-object").onclick = fetchObject;