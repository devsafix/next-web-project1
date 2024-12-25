import RecipeList from "@/components/recipe-list";
import React from "react";

async function fetchRecipeList() {
    try {
        const apiRes = await fetch('https://dummyjson.com/recipes');
        const result = await apiRes.json();
        return result?.recipes

    } catch (error) {
        throw new Error(error)
    }
}

const recipeList = async () => {

    const recipeListData = await fetchRecipeList();

    return <RecipeList recipeListData={recipeListData} />;
};

export default recipeList;
