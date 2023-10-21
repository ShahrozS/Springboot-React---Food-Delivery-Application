import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons'


export const Food = ({fooditem}) => {
  return (
    <div className='category'>
        <p>{fooditem.name}    {fooditem.price} </p>
        <div>
            <FontAwesomeIcon icon={faTrash}/>
        </div>
    </div>
  )
}
export default Food;