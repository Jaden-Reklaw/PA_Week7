//When the HTML document is loaded & ready,
//then call the function 'onReady'
//the ready function is an "event handler"
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

    //set up a call to handleClick when the "add pet" button is clicked
    $('#btn-add').on('click', handleClick);

    //Click on pet and remove the li item
    //Select something on the DOM at the start first
    // in the 'on' we narrow  it down to the element we want to click on
    // that element does not need to be on the DOM right away
    $('#list-pets').on('click', 'li', removePet);

    //set up a call to add color on click event
    //$('#btn-color').on('click', handleAnotherClick);
}

function removePet(event) {
    console.log('in removePet', event.target);

    //event.target gave me the element clicked on & then removes it
    $(this).remove();

    //
    console.log('in click handler, this is', this);
}

function handleClick(event){
    console.log('in handleClick');
    
    //keeps page from refreshing due to form tag
    event.preventDefault();

    //get our input values
    const name = $('#in-name').val();
    const type = $('#in-type').val().toLowerCase();
    console.log('Get inputs:', name, type);
    
    //add the pet
    addPet(name, type);
    console.log('all pets', petList);

    //show our pets on the DOM
    appendPetsToDom();
    
    //`Remove inputs
    $('#in-name').val("");
    $('#in-type').val("");
}

function addPet(name, type){
    console.log('in addPet');
    const pet = {name, type }
    console.log('new pet is', pet);
    petList.push(pet);
}


//Global list of pets
const petList = [];

//push some pets into the array...
//note we can push into the const, cuz its an object
//we're changing whats inside not changing to a completely
//different array, using an =
petList.push({ name: 'Loki', type: 'cat'})
petList.push({ name: 'Larry', type: 'cat'})
petList.push({ name: 'Smushy', type: 'cat'})

console.log('what pets do we have', petList);

//this will appen the petList to the element with id "list-pets"
function appendPetsToDom(){
    console.log('in appendpetsToDom');
    
    //starting variable name with $ cuz it came with jQuery
    //convention, not wrong if you dont do this 
        const $ul = $('#list-pets');

    //empty the ul element first
    $ul.empty();
    //append all the pets to the appendPetsToDom
    for (const pet of petList){
        let li = $(`<li>${pet.name} is a ${pet.type}.</ul>`);
        $ul.append(li);
        if(pet.type === 'dog') {
            li.addClass('blue');
        } else if (pet.type === 'cat') {
            li.addClass('red');
        } else if (pet.type === 'turtle') {
            li.addClass('green');
        } else {
            li.addClass('yellow');
        }
    }
}

// function colorCodeOurPetsOnDOM() {
//     //let's pull our pets from the DOM
//     // get the list by id...
//     let listOfPets = $('#list-pets').children();
//     listOfPets.toggleClass('red');
//     console.log("What is listOfPets", listOfPets);
//     //Color code them by type

//     //Loop over all the children with JQuery
//     for(let i=0; i<listOfPets.length; i++) {
//         let item = listOfPets
//     }
// }

// function handleAnotherClick(event) {
//     colorCodeOurPetsOnDOM();
// }




