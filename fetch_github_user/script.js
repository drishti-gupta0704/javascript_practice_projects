
const searchbtn= document.querySelector("#searchbtn");
const result = document.querySelector("#result");

searchbtn.addEventListener("click",async()=>{
const username = document.querySelector("#username").value.trim();
if (!username) {
        result.innerText = "Please enter a username";
        return;
    }

result.innerText= "loading ....";
const response = await fetch(`https://api.github.com/users/${username}`);
const data = await response.json();
console.log(data);

result.innerHTML= `<img src= " ${data.avatar_url}"  alt= avatar>
                   <p>Name: ${data.name || "No name provided"}</p>
                   <p>Followers: ${data.followers}</p>
                  <p>Public Repos: ${data.public_repos}</p> `;



})


