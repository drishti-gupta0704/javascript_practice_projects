
const container = document.getElementById('cardContainer');

const users = [
  {name: "Pooh", pic:"https://i.pinimg.com/736x/6b/a7/a0/6ba7a06240acf1592bb3fd79b49ba8a9.jpg", bio:"Friendly, honey-loving, cuddly little bear. 🐻🍯"},
  {name :"Mickey-Mouse", pic:"https://i.pinimg.com/736x/53/e6/e1/53e6e1a61f0dbf0886f2a66210dff2a7.jpg", bio:"Cheerful, adventurous, iconic cartoon mouse. 🐭"},
  {name :"Doremon", pic:"https://i.pinimg.com/736x/2d/78/3d/2d783d4a0b61c27db9c57c42d758d45f.jpg", bio:"Blue, robotic, futuristic, helpful cat. 🐱🤖"},
  {name :"Dora", pic:"https://i.pinimg.com/736x/b9/77/d6/b977d6fa2f4091826b0247d4c7e1ad07.jpg", bio:"Curious, adventurous, smart, friendly girl. 🎒🌎"},
  {name :"Shinchan", pic:"https://i.pinimg.com/1200x/af/ad/14/afad1460e24554c9665c91f360147f83.jpg", bio:"Mischievous, funny, naughty little boy. 😆🧸"},
  {name: "Boss Baby", pic:"https://i.pinimg.com/736x/33/85/96/3385967b8ace37cc33552c43b4514382.jpg", bio:"Bossy, clever, ambitious little baby."},
  {name: "We Bare Bears", pic:"https://i.pinimg.com/736x/4b/b6/a1/4bb6a1d8b62bfc939b2480e119bed9b7.jpg", bio:"Funny, lovable, adventurous bear trio."},
   {name: "Tom and Jerry", pic:"https://i.pinimg.com/736x/54/28/55/5428558224979306b998bb01f8c05f78.jpg", bio:"Mischievous, clever, funny cat-mouse duo."},
   {name: "SpongeBob", 
 pic: "https://cloudfront-us-east-1.images.arcpublishing.com/opb/UODRDCE3KTLWUWUHHRETSAXL7U.jpg", 
 bio: "Cheerful, optimistic, funny underwater sponge. 🧽"},

 {name: "Minion", pic:"https://i.pinimg.com/736x/a4/8a/f4/a48af4aa0669625403b6ac1a4d83a05b.jpg", bio:"Funny, mischievous, yellow little helpers"},

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

const inp = document.querySelector("#searchInput");
inp.addEventListener("input", function() {
  const value = inp.value.trim().toLowerCase();
  const filtered = users.filter(user => user.name.toLowerCase().includes(value));
  showUsers(filtered);
});
