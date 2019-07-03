import React, {Fragment} from 'react'

const Membre = ({ nom, age, children, cacherNom, handleChange }) => { 
    const name = nom
    return (
        <Fragment>
            <h2 style={{ 
                backgroundColor: age < 10 ? 'blue' : "green",
                color : 'orange'
                }}>
                {name.toUpperCase()} : {age} ans
            </h2>
            <input value={name} onChange={handleChange} type="text" />
            <button onClick={cacherNom}>X</button>
            {children ? <p>{children}</p> : <Fragment />}
        </Fragment>
    )
}
export default Membre