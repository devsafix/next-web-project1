import React from 'react';

async function fetchRecipeList(id) {
    try {
        const apiRes = await fetch(`https://dummyjson.com/recipes/${id}`);
        const result = await apiRes.json();
        return result

    } catch (error) {
        throw new Error(error)
    }
}

const RecipeDetails = async ({ params }) => {

    const { details: id } = await params;

    const singleRecipe = await fetchRecipeList(id);

    return (
        <div className='text-center py-10'>
            <h1 className='font-bold text-3xl'>{singleRecipe.name}</h1>
            <img src={singleRecipe.image} className='size-96 my-5 mx-auto' alt="" />
            <h1 className='font-semibold text-3xl'>ingredients</h1>
            <ul className='space-y-3 mt-3 list-disc pl-3 text-sm'>
                {
                    singleRecipe.ingredients.map((ing) => (
                        <li key={ing}>{ing}</li>
                    ))
                }
            </ul>
        </div>
    );
};

export default RecipeDetails;