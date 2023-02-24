import { useParams } from "react-router-dom"
import {BookOpenIcon} from '@heroicons/react/24/outline'
export default function RecipePage({recipes}){
    const {slug} = useParams()
    const recipe = recipes.find((rec) => rec?.recipe?.label.replace(/\s/g, "-").toLowerCase() === slug)
    console.log(recipe)

 
               
    return (
        <section>
            <h1>{recipe?.recipe.label}</h1>
            <section>
                <a href={recipe?.recipe?.url}><p className="recipe-text">Get the recipe at "{recipe?.recipe?.source}"<BookOpenIcon className="recipe-icon"/></p></a>
                
                <h4>Ingredients</h4>
                <ul>{recipe?.recipe?.ingredientLines.map((ingredients) => (
                    <li>{ingredients}</li>
                ))}</ul>

                <p>Yield: {recipe?.recipe?.yield}</p>
            </section>
            <img src={recipe?.recipe?.image} alt={recipe?.recipe.label} />
        </section>
    )
}