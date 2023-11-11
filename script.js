import { apiUrl } from "./api.js";
const apiResults = document.querySelector('.api-results');

async function getFromApi(){    

    try{
        const response = await fetch(apiUrl);
        const results = await response.json();

        for(let i = 0; i < results.length; i++){
            apiResults.innerHTML += `<div class="result">
                ${results[i].text}
            </div>` 
        }
    }
    catch(error){
        console.log("An error occurred: " + error);
    }
}
getFromApi();