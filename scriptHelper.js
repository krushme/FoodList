


function searchRecipe(document, id, title, calories, carbs, fat, image, protein) {

    document.getElementById("foodRecipes").innerHTML=`
        <div>
            <h2> Recipes Returned (With Nutritional information)</h2>
            <ol>
                <li> title: ${title}</li>
                <li> id: ${id}</li>
                <li> calories: ${calories}</li>
                <li> carbs: ${carbs}</li>
                <li> fat: ${fat}</li>
                <li> protein: ${protein}</li>
            </ol>
            <img src="${image}">
        </div>
    `
}

async function myFetch() {
    let recipesReturned;

    foodReturned = await fetch("https://api.spoonacular.com/recipes/complexSearch").then( function(response) {
        return response.json();
        });

    return recipesReturned;
}

