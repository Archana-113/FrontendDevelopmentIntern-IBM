
let form=document.querySelector("form")
// console.log(form);
form.addEventListener("submit",(e)=>{
    e.preventDefault()
    let location=document.getElementById("location").value
    // console.log(location)

let fetchWeather= async ()=>{
    let data= await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=bd3e23094a4831fe81db177a9da39c32`)
    // console.log(data);
       let finalData = await data.json()
    //    console.log(finalData);
    // console.log(finalData.weather[0].description);
    // console.log(finalData.main.temp-273);
    // console.log(finalData.main.humidity);
    let description=document.getElementById("des")
    let temperature=document.getElementById("temp")
    let humidity=document.getElementById("hmd")
    // console.log(description);
    // console.log(temperature);
    // console.log(humidity);

    let finalDes= finalData.weather[0].description.toUpperCase()
    let finalTemp=(Math.round(finalData.main.temp-273))
    let finalHmd=finalData.main.humidity
    
    
    description.innerHTML=finalDes
    temperature.innerHTML=`${finalTemp} <sup>0<sup>`
    humidity.innerHTML=`${finalHmd} kmph`

    let img=document.querySelector("#second_section img")
    let bgc=document.getElementById("main_container")
    console.log(bgc);
    
    // console.log(img);
    switch(finalDes){
        case "CLEAR":
            img.src="./Assets/clearSky.png";
            bgc.style.backgroundImage="url(./Assets/clearSky.gif)";
            break;
        case "CLOUDS":
            img.src="./Assets/clouds.jpeg";
            bgc.style.backgroundImage="url(./Assets/clouds.gif)";
            break;
        case "SUNNY":
            img.src="./Assets/sunny-day.png";
            bgc.style.backgroundImage="url(./Assets/sunny-day.gif)";
            break;
        case "MIST":
            img.src="./Assets/mist.jpg";
            bgc.style.backgroundImage="url(./Assets/mist.gif)";
            break;
        case "HAZE":
            img.src="./Assets/haze.jpg";
            bgc.style.backgroundImage="url(./Assets/haze.gif)";
            break;
        case "LIGHT RAIN":
            img.src="./Assets/rainy.jpg";
            bgc.style.backgroundImage="url(./Assets/lightRain.gif)"
            break;
        case "SCATTERED CLOUDS || BROKEN CLOUDS":
            img.src="./Assets/scatteredClouds.jpeg";
            bgc.style.backgroundImage="url(./Assets/scatteredClouds.gif)"
            break;
        case "BROKEN CLOUDS":
            img.src="./Assets/scatteredClouds.jpeg";
            bgc.style.backgroundImage="url(./Assets/scatteredClouds.gif)"
            break;
        case "SNOW":
            img.src="./Assets/snow.jpeg";
            bgc.style.backgroundImage="url(./Assets/snow.gif)"
            break;
        case "DUST":
            img.src="./Assets/dust.jpg";
            bgc.style.backgroundImage="url(./Assets/dust.gif)"
            break;
        default:
            img.src="./Assets/clearSky.png";
            bgc.style.backgroundImage="url(./Assets/clearSky.gif)";
    }
}
fetchWeather()
})
