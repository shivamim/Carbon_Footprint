window.parent.document.getElementById('button-17').addEventListener('click', showPopup);
window.parent.document.getElementById('button-17').addEventListener('click', changeText);
window.parent.document.getElementById('popup').addEventListener('click', hidePopup);

function showPopup() {
    window.parent.document.getElementById('popup').style.display = 'block';
    window.parent.document.getElementById('button-17').style.display = 'none';
};
function hidePopup() {
    window.parent.document.getElementById('popup').style.display = 'none';
    window.parent.document.getElementById('button-17').style.display = 'block';
};
var texts = [
    "Each year, human activities emit over 40 billion tons of CO₂ into the atmosphere.",
    "Producing just one kilogram of beef results in approximately 26 kilograms of CO₂ emissions.",
    "The transportation sector is responsible for nearly 25% of global CO₂ emissions, with aviation being a significant contributor.",
    "Deforestation accounts for about 10% of global carbon emissions, releasing the stored carbon from trees into the atmosphere.",
    "Some carbon offset projects, like reforestation, can sequester up to 20 tons of CO₂ per acre over several decades.",
    "Driving an electric vehicle can cut an individual’s carbon footprint by roughly 50% compared to traditional gasoline-powered cars.",
    "Using 1GB of data generates about 3 kilograms of CO₂, and streaming an HD-quality movie on Netflix produces approximately 4.5 kilograms of CO₂.",
    "Buildings globally are responsible for around 36% of total energy consumption and 39% of CO₂ emissions.",
    "The fashion industry’s annual global carbon footprint is estimated at approximately 3.3 billion tons of CO₂.",
    "As of 2021, the average global temperature has risen by about 1.2 degrees Celsius compared to pre-industrial levels.",
    "The Amazon rainforest, known as the 'lungs of the Earth,' generates around 20% of the world’s oxygen.",
    "In 2019, renewable energy contributed to about 26.2% of global electricity production.",
    "Globally, over 90 million barrels of crude oil are consumed daily, contributing significantly to CO₂ emissions.",
    "The global use of coal for electricity generation exceeds 9,000 million metric tons each year.",
    "Around 1.3 billion tons of food are wasted worldwide annually, leading to substantial carbon emissions.",
    "The aviation industry alone is responsible for over 2% of global CO₂ emissions.",
    "In 2020, global CO₂ emissions decreased by about 5.8% due to the COVID-19 pandemic.",
    "The production of one ton of cement releases roughly one ton of CO₂ into the atmosphere.",
    "Each year, over 1.5 billion new smartphones are manufactured, contributing to electronic waste and carbon emissions.",
    "Burning fossil fuels for energy production accounts for over 70% of global greenhouse gas emissions.",
    "Deforestation results in the loss of around 7 million hectares of forest annually, releasing significant amounts of stored carbon.",
    "The Paris Agreement seeks to limit global warming to well below 2 degrees Celsius above pre-industrial levels.",
    "Approximately 25% of the global population depends on biomass (wood, charcoal) for cooking, leading to indoor air pollution and carbon emissions.",
    "The ocean absorbs about 30% of the CO₂ released into the atmosphere, contributing to ocean acidification.",
    "Each year, more than 8 million metric tons of plastic enter the oceans, causing severe marine pollution and environmental damage.",
    "The construction industry accounts for nearly 40% of global energy-related CO₂ emissions.",
    "On average, an American generates over 16 metric tons of carbon dioxide emissions annually."
];

function changeText() {
    var randomIndex = Math.floor(Math.random() * texts.length);
    var newText = texts[randomIndex];

    window.parent.document.getElementById('popupText').innerHTML = newText;
};

if (!window.parent.document.querySelector('[class^=icon2]')) {
    var newDiv = document.createElement('span');
            
    newDiv.className  = 'icon2';

    var button = window.parent.document.querySelector('div[id^=tabs-bui][id$=-tabpanel-4] > div > div > div > div > div > div > div> div > div > div > button[kind = "secondary"] > div');

    button.appendChild(newDiv);
};

if (!window.parent.document.querySelector('[class^=icon3]')) {
    var newDiv2 = document.createElement('span');
            
    newDiv2.className  = 'icon3';

    var button2 = window.parent.document.querySelector('div[id^=tabs-bui][id$=-tabpanel-2] > div > div > div > div > div > div > div> div > div > div > button[kind = "secondary"] > div');

    button2.appendChild(newDiv2);
};
                        
function checkScreenWidth() {
  var screenWidth = window.innerWidth || window.parent.document.documentElement.clientWidth || window.parent.document.body.clientWidth;

  if (screenWidth <= 600) {
            window.parent.document.getElementById('project-copyright').style.display = 'none';
			Array.from(window.parent.document.querySelectorAll('button[data-baseweb="tab"] > div > p')).forEach(button => button.style.fontSize = '10px');
  } else {
            window.parent.document.getElementById('project-copyright').style.display = 'block';
  }
}

window.onload = checkScreenWidth;
window.onresize = checkScreenWidth;
