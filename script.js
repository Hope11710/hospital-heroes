function showPopup(text) {
    const popup = document.getElementById("popup");
    const content = document.getElementById("popupContent");
    
    content.innerHTML = text + `
        <br><br>
        <button class="close-btn" onclick="closePopup()">Close</button>
    `;

    popup.classList.remove("hidden");
}

function showInfo(type) {

    if (type == "help") {
        showPopup(`
            <b>Things I Help With</b><br><br>
            Give medicine<br>
            Check how you're feeling<br>
            Help you feel safe
            <br><br>
        `);
    }

    else if (type === "tools") {
        showPopup(`
            <b>My Tools</b><br><br>
            Stethoscope<br>
            Thermometer<br>
            Blood pressure cuff
        `);
    }

    else if (type === "fun") {
        showPopup(`
            <b>Fun Fact</b><br><br>
            Nurses are one of the most important parts of a hospital team!
        `);
    }
}

 function closePopup() {
        const popup = document.getElementById("popup");
        popup.classList.add("hidden");
}