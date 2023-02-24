import {ClockIcon} from '@heroicons/react/24/outline'
export default function RecipeCard({title, ingress, img, time}){
    return(
        <article className="recipe-card">
            <h3>{title}</h3>
            <p className='recipe-text'><ClockIcon className='clock'/>Estimated time: {time} </p>
            <p>{ingress}</p>
            <img src={img} alt={title}/>
            
        </article>
    )
}