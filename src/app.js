//toggle light and dark mood

const body = document.querySelector('body');
const Items = document.querySelectorAll('.item');
const linkList = document.querySelectorAll('.link-btn');
const removeBtn = document.querySelectorAll('.remove-btn');
let sunIcon = document.getElementById('sun-icon');
let moonIcon = document.getElementById('moon-icon');
let navigation = document.getElementById('nav-container');

//toggle the sun-icon to change background
sunIcon.addEventListener('click', () => {
    body.classList.add('light-background');

    //toggle the moon & sun btns
    sunIcon.classList.add('hidden');
    moonIcon.classList.remove('hidden');

    //change the background to the nav Tab
    navigation.classList.add('white-background');

    //change the background of the links
    linkList.forEach(list =>{
        list.classList.add('white-background');
    });

    //change the background of items
    Items.forEach(Item =>{
        Item.classList.add('white-background');
    });

    //change remove-btn background
    removeBtn.forEach(Btn =>{
        Btn.classList.add('white-background');
    });

    //change the background of cloned items
    document.querySelectorAll('.cloned-item').forEach(newItem => {
        newItem.classList.add('white-background');
    });
});
//toggle the moon-icon to change background
moonIcon.addEventListener('click', () => {
    body.classList.remove('light-background');

    //toggle the moon & sun icons
    moonIcon.classList.add('hidden');
    sunIcon.classList.remove('hidden');


    //change the background to the nav
    navigation.classList.remove('white-background');

    //change the background on each list
    linkList.forEach(list =>{
        list.classList.remove('white-background');
    });

    //change the background of each item
    Items.forEach(Item =>{
        Item.classList.remove('white-background');
    });

    //change remove-btn background
    removeBtn.forEach(Btn =>{
        Btn.classList.remove('white-background');
    });
    //change the background of cloned items
    document.querySelectorAll('.cloned-item').forEach(newItem => {
        newItem.classList.remove('white-background');
    });
});


//select the necessary buttons
const buttons = {
  all: document.querySelector('.all-btn'),
  active: document.querySelector('.active-btn'),
  inactive: document.querySelector('.inactive-btn')
};
//Select the containers
const containers = {
  all: document.querySelector('.all-item-container'),
  active: document.querySelector('.active-item-container'),
  inactive: document.querySelector('.inactive-item-container')
};

function toggleContainer(selectedContainer, clickedButton) {
  // Hide all containers
  Object.values(containers).forEach(container => {
    container.classList.add('hidden');
  });
  // Remove red-background from all buttons
  Object.values(buttons).forEach(button => {
    button.classList.remove('clicked');
  });
  
  // Show selected container and add red-background to clicked button
  containers[selectedContainer].classList.remove('hidden');
  clickedButton.classList.add('clicked');
}

// Add event listeners to buttons
Object.entries(buttons).forEach(([key, button]) => {
  button.addEventListener('click', () => toggleContainer(key, button));
});

// Initialize default state: show all-item-container and highlight all-btn
toggleContainer('all', buttons.all);


// Create a new div and append to active-item-container
const activeDiv = document.createElement('div');
activeDiv.classList.add('div-active-items');
containers.active.appendChild(activeDiv); 
// Create a new div and append to inactive-item-container
const inactiveDiv = document.createElement('div');
inactiveDiv.classList.add('div-Inactive-items');
containers.inactive.appendChild(inactiveDiv);




//Adding active class to Items using the select-btn
const selectBtn = document.querySelectorAll('.select-btn');
selectBtn.forEach(Btn => {
    Btn.addEventListener('click', (event) =>{
        const item = event.target.closest('.item'); //tagert the closest Item
        item.classList.remove('inactive');
        item.classList.add('active');

        // remove previously added item
        const removedItem = document.querySelector('.removed-container');
        if(removedItem){
            removedItem.remove();
        }

        const clonedItem = item.cloneNode(true); //clone targeted item
        clonedItem.classList.add('cloned-item'); // Add class to distinguish cloned element
            
        // Create new div to contain the cloned item
        const newContainer = document.createElement('div');
        newContainer.classList.add('new-container');
        newContainer.appendChild(clonedItem); // Append the cloned element to new-container
        activeDiv.appendChild(newContainer); // Append the new-container to the active-container
    });
});

//Adding Inactive class to Items using remove-btn
removeBtn.forEach(Btn => {
    Btn.addEventListener('click', (event) => {
        const item = event.target.closest('.item');  //tagert the closest Item
        item.classList.remove('active');
        item.classList.add('inactive');

        //Remove initially cloned element created
        const clonedItem = document.querySelector('.new-container');
        if(clonedItem){
            clonedItem.remove();
        }

        const removedItem = item.cloneNode(true); //clone targeted item
        removedItem.classList.add('cloned-item');  // Add class to distinguish cloned element
            
        // Create new div to contain the cloned item
        const container = document.createElement('div');
        container.classList.add('removed-container');
        container.appendChild(removedItem); // Append the cloned element to new-container
        inactiveDiv.appendChild(container); // Append the new-container to the inactive-container
    });
});






