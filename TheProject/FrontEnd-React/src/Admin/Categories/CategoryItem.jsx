import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons'


export const CategoryItem = ({category}) => {
  return (
    <div className='category'>
        <p>{category.name} </p>
        <div>
            <FontAwesomeIcon icon={faTrash}/>
        </div>
    </div>
  )
}
