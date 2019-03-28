import {getJSON} from 'wix-fetch';

$w.onReady(function () {
	
});

export function cities_change(event, $w) {
	//Add your code for this event here: 
	const city = event.target.value;
	// In this example we wrote the API key in the front, 
	// usually it is good practice to write in the backend
	const appId = 'INSERT YOUR OPENWEATHERMAP API KEY HERE' 
	//After you sign up for openweathermap you will be able get an api key to enter here
	const defaultImage = 'http://static.wixstatic.com/media/f43bc8_41dc2b6fc4884ebca4e4d9ef7ef88f21~mv2.jpg';
	const sunnyImage = 'http://static.wixstatic.com/media/f43bc8_0c1d663c8a4f4f05b359dd3b2edc2f81~mv2.jpg';

	getJSON(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${appId}&units=metric`)
		.then(json  => {
			console.log(json)
			const temprature = Math.floor(json.main.temp);
			const weatherDescription =  json.weather[0].description;
			$w('#weatherTemp').text = temprature.toString();
			$w('#weatherDescription').text = weatherDescription;
			
			if( weatherDescription === 'clear sky'){
				$w('#backgroundImage').src = sunnyImage;
			}
			else {
				$w('#backgroundImage').src = defaultImage;
			}
		});
}
