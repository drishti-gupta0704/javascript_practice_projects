
const searchbtn = document.querySelector("#searchbtn");
const result = document.querySelector("#result");
searchbtn.addEventListener("click",async()=>{

const city = document.querySelector("#city").value.trim();
const apiKey = "853a9778e5f0af3750e174b17b89d5d4" ;
if(!city){
    result.innerText = "please enter your city name";
    return;
}

result.innerText = "loading your weather data ";


const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);



const data = await response.json();
console.log(data);

const temp= data.main.temp ;
const humidity = data.main.humidity;
const condition = data.weather[0].description;

result.innerHTML = ` 

<b> 🌆 ${data.name} </b> <br>
🌡️Temperature : ${temp}°C <br>

💧 Humidity: ${humidity}% <br>
☁️ Condition: ${condition}

`;

})