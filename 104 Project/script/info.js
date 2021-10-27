function displayInformation(){
    document.getElementById("information").innerHTML=`
    ${salon.name} opens at ${salon.hours.open} and closes at ${salon.hours.close} <br> ${salon.address.city}, ${salon.address.street}, ${salon.address.number}, ${salon.address.zip} <br>

    `;
}
displayInformation();
//create objects literals for the pets


function displayNames(){
    //select the element by id
    //create the html template string ``
    //salon.pets[0].name
    document.getElementById("pets").innerHTML=`
    <h4>Pets in our salon:</h4>
    <ol>
        <li>${salon.pets[0].name} - Owner: ${salon.pets[0].owner} - Breed: ${salon.pets[0].breed}</li>
        <li>${salon.pets[1].name} - Owner: ${salon.pets[1].owner} - Breed: ${salon.pets[1].breed}</li>
        <li>${salon.pets[2].name} - Owner: ${salon.pets[2].owner} - Breed: ${salon.pets[2].breed}</li>
        <li>${salon.pets[3].name} - Owner: ${salon.pets[3].owner} - Breed: ${salon.pets[3].breed}</li>
        <li>${salon.pets[4].name} - Owner: ${salon.pets[4].owner} - Breed: ${salon.pets[4].breed}</li>
        <li>${salon.pets[5].name} - Owner: ${salon.pets[5].owner} - Breed: ${salon.pets[5].breed}</li>
        <li>${salon.pets[6].name} - Owner: ${salon.pets[6].owner} - Breed: ${salon.pets[6].breed}</li>

    </ol>
    `
}
displayNames(); 
