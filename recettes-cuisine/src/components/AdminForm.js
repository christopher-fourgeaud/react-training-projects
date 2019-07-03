import React from 'react';

const AdminForm = ({ id: key, majRecette, recettes, supprimerRecette}) => {
    const recette = recettes[key]

    const handleChange = (event, key) => {
        const { name, value } = event.target
        const recette = recettes[key]
        recette[name] = value
        majRecette(key, recette)
    }

    return (
        <div className="card">
            <form className="admin-form">
                <input onChange={e => handleChange(e, key)} value={recette.nom} type="text" placeholder="Nom de la recette" name="nom"/>
                <input onChange={e => handleChange(e, key)} value={recette.image} type="text" placeholder="Adresse de l'image" name="image" />
                <textarea onChange={e => handleChange(e, key)} value={recette.ingredients} name="ingrédients" rows="3" placeholder="Liste des ingrédients"></textarea>
                <textarea onChange={e => handleChange(e, key)} value={recette.instructions} name="instructions" rows="15" placeholder="Liste des instructions"></textarea>
            </form>
            <button
                onClick={() => supprimerRecette(key)}
            >Supprimer</button>
        </div>
    );
}

export default AdminForm;