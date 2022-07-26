//Script to feth JSON data 

let dropdown = document.getElementById('locality-dropdown');
dropdown.length = 0;

let defaultOption = document.createElement('option');
defaultOption.text = 'Escoje alguna de las regiones del mundo Pokemon';

dropdown.add(defaultOption);
dropdown.selectedIndex = 0;

const url = 'data/regions.json';

fetch(url)  
  .then(  
    function(response) {  
      if (response.status !== 200) {  
        console.warn('Looks like there was a problem. Status Code: ' + 
          response.status);  
        return;  
      }

      // Examine the text in the response  
      response.json().then(function(data) {  
        let option;
    
    	for (let i = 0; i < data.length; i++) {
          option = document.createElement('option');
      	  option.text = data[i].name;
      	  option.value = data[i].abbreviation;
      	  dropdown.add(option);
    	}    
      });  
    }  
  )  
  .catch(function(err) {  
    console.error('Fetch Error -', err);  
  });

/*
const userAction = async () => {
    const response = await fetch('https://storage.googleapis.com/campus-cvs/00000000000-images-lectures/pokemons.json', {
      method: 'POST',
      body: myBody, // string or object
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const myJson = await response.json(); //extract JSON from the http response
    document.getElementById("json").textContent = JSON.stringify(myJson, undefined, 2);

  }
*/  
  