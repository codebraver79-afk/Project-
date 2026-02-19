document.querySelectorAll('.tab').forEach(function(tab) {
      tab.addEventListener('click', function() {
        document.querySelectorAll('.tab').forEach(function(t) {
             t.classList.remove('active'); 
            });
        tab.classList.add('active');
      });
    });


document.querySelectorAll('.btns').forEach(function(btn) {
  btn.addEventListener('click', function() {
    document.querySelectorAll('.btns').forEach(function(b) {
      b.classList.remove('foractivebtns');
    });
    this.classList.add('foractivebtns');
  });
});

document.getElementById('firstbtn').addEventListener('click', function() {
    document.getElementById('closet').style.display = 'block';
    document.getElementById('outfits').style.display = 'none';
    document.getElementById('planner').style.display = 'none';
    document.querySelector('#closet').scrollIntoView({behavior: 'smooth', block: 'start'});    
});

document.getElementById('secondbtn').addEventListener('click', function() {
    document.getElementById('closet').style.display = 'none';
    document.getElementById('outfits').style.display = 'block';
    document.getElementById('planner').style.display = 'none';
    document.querySelector('#outfits').scrollIntoView({behavior: 'smooth', block: 'start'});
});

document.getElementById('thirdbtn').addEventListener('click', function() {
    document.getElementById('closet').style.display = 'none';
    document.getElementById('outfits').style.display = 'none';
    document.getElementById('planner').style.display = 'block';
    document.querySelector('#planner').scrollIntoView({behavior: 'smooth', block: 'start'});
});

document.querySelectorAll('.btns').forEach(function(btn) {
    btn.addEventListener('click', function() {
        document.querySelectorAll('.items').forEach(function(item) {
            if(btn.innerHTML === 'All') { //check if the button text is 'All'
                item.style.display = 'block';
            } else {
                if(item.classList.contains(btn.innerHTML)) { //check if item has the class that matches the button text
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            }
        });
    });
});

document.querySelectorAll('.items').forEach(function(item) {
    item.addEventListener('click', function() {
        document.querySelectorAll('.items').forEach(function(i) {
            i.classList.remove('forclicked');
        });
        this.classList.add('forclicked');
        document.getElementById('outfitbuilt').style.display = 'block';
    });
});


const tops = document.querySelectorAll('.Tops');
const bottoms = document.querySelectorAll('.Bottoms');
const jackets = document.querySelectorAll('.Jackets');
const shoes = document.querySelectorAll('.Shoes');
const dresses = document.querySelectorAll('.Dresses');
const accessories = document.querySelectorAll('.Accessories');


//suggested code from copilot, i used it for the bottoms, shoes, and accessories as well
tops.forEach(function(top) {
    top.addEventListener('click', function() {
        document.getElementById('toppick').innerHTML = '';
        const img = top.querySelector('img').cloneNode();
        img.style.width = '200px';
        document.getElementById('toppick').appendChild(img);
    });
});

bottoms.forEach(function(bottom) {
    bottom.addEventListener('click', function() {
        document.getElementById('bottompick').innerHTML = '';
        const img = bottom.querySelector('img').cloneNode();// Clone the image element from the clicked bottom item
        img.style.width = '200px';
        document.getElementById('bottompick').appendChild(img);// Append the cloned image to the bottom pick area
    });
});

shoes.forEach(function(shoe) {
    shoe.addEventListener('click', function() {
        document.getElementById('shoepick').innerHTML = '';
        const img = shoe.querySelector('img').cloneNode();
        img.style.width = '200px';
        document.getElementById('shoepick').appendChild(img);
    });
});

jackets.forEach(function(jacket) {
    jacket.addEventListener('click', function() {
        document.getElementById('jacketpick').innerHTML = '';
        const img = jacket.querySelector('img').cloneNode();
        img.style.width = '200px';
        document.getElementById('jacketpick').appendChild(img);
    });
});

dresses.forEach(function(dress) {
    dress.addEventListener('click', function() {
        if(document.getElementById('toppick').innerHTML !== '' && document.getElementById('bottompick').innerHTML !== '') {
            alert('Please clear your top and bottom picks before selecting a dress.');
            return;
        }
        document.getElementById('dresspick').innerHTML = '';
        const img = dress.querySelector('img').cloneNode();
        img.style.width = '200px';
        document.getElementById('dresspick').appendChild(img);
    });
});


accessories.forEach(function(accessory) {
    accessory.addEventListener('click', function() {
        document.getElementById('accessoriespick').innerHTML = '';
        const img = accessory.querySelector('img').cloneNode();
        img.style.width = '200px';
        document.getElementById('accessoriespick').appendChild(img);
    });
});
document.getElementById('clearoutfit').addEventListener('click', function() {
    document.getElementById('toppick').innerHTML = 'Pick a top';
    document.getElementById('bottompick').innerHTML = 'Pick a bottom';
    document.getElementById('jacketpick').innerHTML = 'Pick a jacket';
    document.getElementById('shoepick').innerHTML = 'Pick shoes';
    document.getElementById('dresspick').innerHTML = 'Pick a dress';
    document.getElementById('accessoriespick').innerHTML = 'Pick accessories';
});

const saveButton = document.getElementById('saveoutfit');
saveButton.addEventListener('click', function() {
    const newoutfit = document.createElement('div');
    newoutfit.classList.add('outfititem2');
    const picks = ['toppick', 'bottompick', 'jacketpick', 'shoepick', 'dresspick', 'accessoriespick'];
    document.getElementById('savedoutfits').style.display = 'none';


    picks.forEach(pick => {
        const element = document.getElementById(pick);
        const img = element.querySelector('img');
        if (img) {
            
            const clonedImg = img.cloneNode();
            clonedImg.style.width = '100px';
            clonedImg.style.height = '50px';
            newoutfit.appendChild(clonedImg);

        }
    });
    const outfitWrap = document.getElementById('clotheswrap');
    if  (outfitWrap.children.length > 0) {
        const outfitsSection = document.getElementById('outfits');
        outfitsSection.appendChild(newoutfit);
        alert('Outfit saved!');
    } else {
        alert('Please select at least one item to save an outfit.');
    }
    const deletebtn = document.createElement('button');
    deletebtn.innerHTML = 'Delete';
    deletebtn.classList.add('delete');
        deletebtn.addEventListener('click', function() {
            newoutfit.remove();
            alert('Outfit deleted!');
            document.getElementById('toppick').innerHTML = 'Pick a top';
            document.getElementById('bottompick').innerHTML = 'Pick a bottom';
            document.getElementById('jacketpick').innerHTML = 'Pick a jacket';
            document.getElementById('shoepick').innerHTML = 'Pick shoes';
            document.getElementById('dresspick').innerHTML = 'Pick a dress';
            document.getElementById('accessoriespick').innerHTML = 'Pick accessories';
        });
    newoutfit.appendChild(deletebtn);
});

const apiKey = "16d0d1ae487519c29ddd59f843461be8";
const city = "beirut";
const weatherdisplay = document.querySelector('.weather');
const fetchWeatherbtn = document.getElementById('fetchweather');

fetchWeatherbtn.addEventListener('click', async function() { // add async to the event listener function
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${apiKey}`);// Use await to wait for the fetch response
        if (!response.ok) {// Check if the response is not ok
            throw new Error('Weather not found');// throw an error if the response is not ok
        }
        const data = await response.json();// use await to wait for the response to be converted to JSON
        displayWeather(data);
    } catch (error) {
        console.error(error);//print the error to the console
        weatherdisplay.innerHTML = 'Unable to fetch weather data';
    }   });
    function displayWeather(data) {
        weatherdisplay.innerHTML = "";
        const dailyList = data.list.filter(item => item.dt_txt.includes("12:00:00"));// Filter the list to get only the daily forecasts at 12:00:00 Get the date text string from api

        dailyList.forEach(function(day) {
            const date = new Date(day.dt * 1000).toDateString(); // Convert the date text string to a Date object and format it as a readable string
            const temp = Math.round(day.main.temp);// Get the temperature from the API and round it to the nearest whole number. day.main.temp is the temperature in Celsius because we specified units=metric in the API request
            const desc = day.weather[0].description; // Get the weather description from the API. day.weather is an array of weather conditions, we take the first one (index 0) and get its description property
            let suggestion = "";
            if (temp < 15) {
                suggestion = "It's quite cold, consider wearing a coat and warm layers.";
            } else{
                suggestion = "It's a bit chilly, a T-shirt would be suitable.";
            }
            
            weatherdisplay.innerHTML += `<div style="border:1px solid #C2775E;margin:5px;padding:10px; border-radius:5px;">
            <h2>${date}</h2>
            <p>Temperature: ${temp}°C</p>
            <p>Description: ${desc}</p>
            <p style='color:#C44040'>${suggestion}</p>
            <button onclick="planOutfit(this)" style="color:#C2775E; font-weight:bold; border:none; background:none; cursor:pointer;">Plan Outfit</button>
            </div>`;


            
        });
    }

    function planOutfit(button){
        const outfit = prompt('what outfit do you want to wear?');
        if (outfit) {
            const displayArea = button.previousElementSibling; // Get the previous sibling element of the button, which is the p element where we want to display the planned outfit
            displayArea.innerHTML += `<p style='color:blue'>Planned Outfit: ${outfit}</p>`;
        }
    }
