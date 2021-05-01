var contactList = [];

getContactDataFromLocal();

function getContactDataFromLocal() {
    let defaultContact = localStorage.getItem('contactInfo');
    if (defaultContact != null) {
        contactList = JSON.parse(defaultContact);

        contactList.forEach(function (ele) {
            generateTableHTML(ele)
        })
    }


}

function getContactDetail() {
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let tel = document.getElementById('tel').value;
    let city = document.getElementById('city').value;

    console.log(`${name} - ${email} - ${tel} - ${city}`);
    let contactObj = {
        name: name,
        email: email,
        tel: tel,
        city: city
    }

    contactList.push(contactObj);
    setLocal();
    generateTableHTML(contactObj)
}

function setLocal() {
    localStorage.setItem('contactInfo', JSON.stringify(contactList));
    sessionStorage.setItem('contactInfo', JSON.stringify(contactList))
}

function generateTableHTML(contactObj) {
    let frameHTMl = `<tr><td>${contactObj.name}</td><td>${contactObj.email}</td><td>${contactObj.tel}</td><td>${contactObj.city}</td</tr>`;
    let contactTable = document.getElementById('contactTable').getElementsByTagName('tbody')[0];
    let len = (contactList.length > 1) ? contactTable.rows.length : 0;
    
    let newRow = contactTable.insertRow(len);

    newRow.innerHTML = frameHTMl;

}