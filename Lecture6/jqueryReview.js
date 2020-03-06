//When the HTML document is loaded & ready,
//then call the function ‘onReady’
//the ready function is an “event handler”
//it takes the name of a function - dont call it here!!!
$(document).ready(onReady);
//This function is called, when our document is ready
//Great place to do all the things you want to see
//when the page first loads...
//DOM Document Object Model
function onReady(){
    console.log('Hello!');
    //call the function to put pets on the page
    appendPetsToDom();
    //set up a call to handleClick when the “add pet” button is clicked
    $(‘#btn-add’).on(‘click’), handleClick;
}
function handleClick(event){
    console.log(‘in handleClick’);
    //keeps page from refreshing due to form tag
    event.preventDefault();
    //get our input values
    const name = $(‘#in-name’).val();
    const type = $(‘#in-type’).val();
    console.log(‘Get inputs:’, name, type);
    //add the pet
    addPet(name, type);
    console.log(‘all pets’, petList);
    //show our pets on the DOM
    appendPetsToDom();
}
function addPet(name, type){
    console.log(‘in addPet’);
    const pet = {name, type }
    console.log(‘new pet is’, pet);
    petList.push(pet)
}
//Global list of pets
const petList = [];
//push some pets into the array...
//note we can push into the const, cuz its an object
//we’re changing whats inside not changing to a completely
//different array, using an =
petList.push({ name: ‘Loki’, type: ‘cat’})
petList.push({ name: ‘Larry’, type: ‘cat’})
petList.push({ name: ‘Smushy’, type: ‘cat’})
console.log(‘what pets do we have’, petList);
//this will appen the petList to the element with id “list-pets”
function appendPetsToDom(){
    console.log(‘in appendpetsToDom’);
    //starting variable name with $ cuz it came with jQuery
    //convention, not wrong if you dont do this
        const $ul = $(‘#list-pets’);
    //empty the ul element first
    $ul.empty();
    //append all the pets to the appendPetsToDom
    for (const pet of petList){
        $ul.append(`<li>${pet.name} is a ${pet.type}.</li>`);
    }
}



