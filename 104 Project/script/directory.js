function displayCards(){
    let aPet=salon.pets;
    let tmp="";

     let petsContainer=document.getElementById("petsContainer");
        petsContainer.innerHTML="";
    for(let i=0;i<salon.pets.length;i++){
       
    tmp=`
    <tr id="${aPet[i].id}">
    <td>${aPet[i].name}</td>
    <td>${aPet[i].age}</td>
    <td>${aPet[i].gender}</td>
    <td>${aPet[i].breed}</td>
    <td>${aPet[i].service}</td>
    <td>${aPet[i].owner}</td>
    <td>${aPet[i].phone}</td>
    <td>${aPet[i].emContact}</td>
    <td>${aPet[i].emPhone}</td>
    <td><button class="btn btn-outline-danger" onclick="deletePet(${aPet[i].id});">Delete</button></td>
    </tr>`;
    petsContainer.innerHTML+=tmp;
    }
    
    /*let li=document.createElement("li");
    let text=document.createTextNode(`${aPet.name}`);
    li.appendChild(text);
    document.getElementById("petsContainer").appendChild(li);*/

}

displayCards();

