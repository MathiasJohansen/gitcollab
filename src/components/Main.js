import RecipeCard from './RecipeCard';
//import recipes from '../resources/recipes';
import { Link } from 'react-router-dom';
import Search from './Search';

export default function Main({recipes, setSearch, getRecipes}){
    return (
        <>
        <Search setSearch={setSearch} getRecipes={getRecipes} />
        <section className='recipe-view'>
            <h2>Oppskrifter</h2>
                {recipes.map((recipe, index) => (
                    <Link key={index} to={recipe?.recipe?.label.replace(/\s/g, "-").toLowerCase()}>
                        <RecipeCard title={recipe?.recipe?.label} img={recipe?.recipe?.image} time={recipe?.recipe?.totalTime}/>
                        
                    </Link>
                ))}
        </section>
      </>

      );
}