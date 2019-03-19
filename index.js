const input = document.getElementById("input");
const paragraph = document.getElementById("paragraph");
const liste = document.getElementById("my-to-do-list");
const color = ['tomato', 'teal', 'magenta', 'firebrick', 'grey'];
const footer = document.getElementById('footer');
console.log(footer);
const add = () => {
    const listItem = document.createElement('li');
    listItem.innerText = Input.Value;
    // get random color
    const index = Math.floor(Math.random()* colors.length);
    listItem
       
    listItem.appendChild(listItem);
    input.value = "";

    // add confirmation
    paragraph.innerText = "Item Added";

    //add reset timeout
    setTimeout(()=>{
        pragrapgh.innerText = "";
    }, 2000);
};