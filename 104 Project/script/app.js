let salon= {
    name: "The Fashion Pet",
    address:{
        city:"Milwaukee",
        street:"Bucks Circle",
        number:"414",
        zip:"53202",
    },
    hours:{
        open:"9:00 am",
        close:"5:00 pm",
    },
    phone:"414-555-5555",
    pets:[],
}
let counter=0;
class Pet{
    constructor(name, age, gender, breed, service, owner, phone, emContact, emPhone){
        this.name=name;
    this.age=age;
    this.gender=gender;
    this.breed=breed;
    this.service=service;
    this.owner=owner;
    this.phone=phone;
    this.id=counter++
    this.emContact=emContact;
    this.emPhone=emPhone;
    }
    
}


//get the values from the form
let petName=document.getElementById("txtName");
let petAge=document.getElementById("txtAge");
let petGender=document.getElementById("txtGender");
let petBreed=document.getElementById("txtBreed");
let petService=document.getElementById("txtService");
let ownerName=document.getElementById("txtOwnerName")
let ownerPhone=document.getElementById("txtOwnerPhone");
let emContact=document.getElementById("txtEmContact");
let emPhone=document.getElementById("txtEmPhone");
//and store them into variables

function register(){
    
    //create the obj
    let thePet= new Pet(petName.value,petAge.value,petGender.value,petBreed.value,petService.value,ownerName.value,ownerPhone.value,emContact.value,emPhone.value); 
    //push the obj into the array
    salon.pets.push(thePet);
    //display the result
    displayCards(thePet);
    alert(`You registered a new pet!!! You have ${salon.pets.length} pets.`);
    clearForm();
}   
//create the clearform
function clearForm(){
    petName.value="";
    petAge.value="";
    petGender.value="";
    petBreed.value="";
    petService.value="";
    ownerName.value="";
    ownerPhone.value="";
    emContact.value="";
    emPhone.value="";
    txtSearch.value="";

}
function deletePet(id){
    console.log("Delete the pet"+id);

    document.getElementById(id).remove();
    //travel the array
    for(let i=0;i<salon.pets.length;i++){
        //find the pet by id
        if(salon.pets[i].id===id){indexDelete=i;}
    }
    salon.pets.splice(indexDelete,1);//position,number of elements
    //delete it from the array
}
function searchPet(){
    //this search is by name or by service
    let searchString=document.getElementById("txtSearch").value;
    console.log(searchString);
    for(let i=0;i<salon.pets.length;i++){
        if(salon.pets[i].name.toLowerCase()===searchString.toLowerCase() || salon.pets[i].service.toLowerCase()===searchString.toLowerCase()){
            document.getElementById(salon.pets[i].id).classList.add("highlight");
            clearForm();
        }else{
            document.getElementById(salon.pets[i].id).classList.remove("highlight");
            clearForm();
        }
    }
}
function init(){
let hachi=new Pet("Hachi",2,"Male","German Shepard","Nail Clipping","Edward","555-555-4444","Billy Hendrix","555-555-4444");
let bailey=new Pet("Bailey",3,"Male","Doberman","Bath","Henry","555-555-4444","Jimmy Ron","222-222-2222")
let precious=new Pet("Precious",1,"Male","Great Dane","Bath","Grace","555-555-1234","Ray Ray","555-432-1111")
salon.pets.push(hachi);
salon.pets.push(bailey);
salon.pets.push(precious);
displayCards();
displayNames();
}
window.onload=init;

