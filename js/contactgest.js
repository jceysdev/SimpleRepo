// Script gestionnaire de contact

const contacts = [];
form = document.querySelector("form");

 displayData = (event) => {
     var contactData = {
        nom : form.elements[0].value,
        prenom : form.elements[1].value,
        email : form.elements[2].value,
        telephone : form.elements[3].value,
    };
    contacts.push(contactData);
    console.log(contactData[1]);
    console.log(contacts);
    form.reset();

    tbody = document.querySelector("tbody");
    tr = document.createElement("tr");
    tbody.appendChild(tr);
    for (const prop in contactData){
        td = document.createElement("td");
        td.textContent = contactData[prop];
        tr.appendChild(td);
    }

    event.preventDefault();
 };
