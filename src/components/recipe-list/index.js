import React from "react";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import Link from "next/link";


const RecipeList = ({ recipeListData }) => {

    console.log(recipeListData);

    return (
        <div className="text-center mx-auto container py-10">
            <h2 className="text-3xl font-bold">Recipe List</h2>
            <div className="mt-10 grid grid-cols-5 gap-5">
                {
                    recipeListData && recipeListData.length > 0 ?
                        recipeListData?.map(recipe => (
                            <Link href={`recipe-list/${recipe.id}`} key={recipe.id}>
                                <Card>
                                    <CardHeader>
                                        <CardTitle>{recipe.name}</CardTitle>
                                        <CardDescription>{recipe.instructions}</CardDescription>
                                    </CardHeader>
                                    <CardContent>
                                        <img className="rounded-lg" src={recipe.image} alt="" />
                                    </CardContent>
                                    <CardFooter className="flex flex-wrap items-center justify-between">
                                        <p>Rating: {recipe.rating}</p>
                                        <p className="font-bold">{recipe.cuisine}</p>
                                    </CardFooter>
                                </Card>
                            </Link>
                        ))
                        : null
                }
            </div>
        </div>
    );
};

export default RecipeList;