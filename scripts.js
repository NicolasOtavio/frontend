const recipes = [

];

function generateRecipe() {
    const randomIndex = Math.floor(Math.random() * recipes.length);
    const recipe = recipes[randomIndex];

    document.getElementById('recipe-title').textContent = recipe.title;
    document.getElementById('recipe-description').textContent = recipe.description;
}

// Gerar uma receita aleatória ao carregar a página
window.onload = generateRecipe;
