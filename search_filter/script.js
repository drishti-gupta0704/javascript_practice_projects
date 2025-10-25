


const container = document.getElementById('cardContainer');

const users = [
  {name: "Pooh", pic:"https://i.pinimg.com/736x/ad/c2/48/adc2488dec92774a62b9b177df2a4b32.jpg", bio:"Friendly, honey-loving, cuddly little bear. 🐻🍯"},
  {name :"Mickey-Mouse", pic:"https://i.pinimg.com/736x/53/e6/e1/53e6e1a61f0dbf0886f2a66210dff2a7.jpg", bio:"Cheerful, adventurous, iconic cartoon mouse. 🐭"},
  {name :"Doremon", pic:"https://i.pinimg.com/736x/2d/78/3d/2d783d4a0b61c27db9c57c42d758d45f.jpg", bio:"Blue, robotic, futuristic, helpful cat. 🐱🤖"},
  {name :"Dora", pic:"https://i.pinimg.com/736x/b9/77/d6/b977d6fa2f4091826b0247d4c7e1ad07.jpg", bio:"Curious, adventurous, smart, friendly girl. 🎒🌎"},
  {name :"Shinchan", pic:"https://i.pinimg.com/736x/89/ac/8d/89ac8d382e4b18d5be494b1deb94d0d6.jpg", bio:"Mischievous, funny, naughty little boy. 😆🧸"}
];

function showUsers(arr) {
  
    container.innerHTML = '';

  arr.forEach(user => {
    const card = document.createElement('div');
    card.classList.add('card');
    card.style.backgroundImage = `url(${user.pic})`;

    const cardContent = document.createElement('div');
    cardContent.classList.add('card-content');

    const name = document.createElement('h3');
    name.textContent = user.name;

    const bio = document.createElement('p');
    bio.textContent = user.bio;

    cardContent.appendChild(name);
    cardContent.appendChild(bio);
    card.appendChild(cardContent);

    container.appendChild(card);
  });
}

showUsers(users);


let inp= document.querySelector("#searchInput");
inp.addEventListener("input",function(){

    let newusers= users.filter((user)=> {
        // return user.name.startsWith(inp.value);
        return user.name.toLowerCase().startsWith(inp.value.toLowerCase());
    });
    
    showUsers(newusers);
})