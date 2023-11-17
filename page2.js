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

let activeFile = "";
async function fetchObject() {
    const objectName = document.getElementById("input-object-name").value;
    let url = `/readfile.php?objectname=${objectName}`;
    const response = await fetch(url);
    console.log(response);

    const object = await response.text()
    document.getElementById("dropdown-container").innerHTML = object;

    activeFile = objectName;
}

document.getElementById("input-button-object").onclick = fetchObject;


async function checkUpdates() {
    const objectName = document.getElementById("input-object-name").value;
    if (objectName !== "") {
        let url = `/readfile.php?objectname=${activeFile}`;
        const response = await fetch(url);
        console.log(response);

        const object = await response.text()

        if(object !== document.getElementById("dropdown-container").innerHTML) {
            document.getElementById("dropdown-container").innerHTML = object;
        }
    }
}

setInterval(checkUpdates, 10 * 1000);
