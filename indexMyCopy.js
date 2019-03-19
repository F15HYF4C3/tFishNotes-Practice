const input = document.getElementById("input");
const paragraph = document.getElementById("paragraph");
const list = document.getElementById("my-to-do-list");
const footer = document.getElementById("footer");
const addButton = document.getElementById("add-btn");

console.log(footer);
const colors = ['tomato', 'teal', 'magenta', 'firebrick', 'grey'];

const add = () => {
    const listItem = document.createElement('li');
    listItem.innerText = input.value;

    // get random color
    const index = Math.floor(Math.random()*colors.length)
    listItem.style.background = colors[index]
    footer.innerHTML= `<b>${colors[index]}</b>`;
    footer.style.color=colors[index];
       
    listItem.appendChild(listItem);
    input.value = "";

    // add confirmation
    paragraph.innerText = "Item Added";

    //add reset timeout
    setTimeout(()=>{
        paragraph.innerText = "";
    }, 2000)

}

addButton.onclick = add;