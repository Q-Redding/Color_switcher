const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const btn = document.getElementById('btn');
const color = document.querySelector(".color");


// #
btn.addEventListener("click", function(){
    //get random number that between 0 - 3
    let hexColor = '#';
    for(let i = 0; i < 6; i++) {
        hexColor += hex[getRandomNumColor()];
    }

    color.textContent = hexColor;
    document.body.style.backgroundColor = hexColor;
})

const getRandomNum = () => {
    return Math.floor(Math.random() * color.length);
}

const getRandomNumColor = () => {
    return Math.floor(Math.random() * hex.length);
}