/** @format */

import React from 'react'
import '../sass/components/_Item.scss'

function Item({ image, descriptionImage, title, description }) {
    return (
        <div className='feature-item'>
            <img
                src={image}
                alt={descriptionImage}
                className='feature-item-icon'
            />
            <h3 className='feature-item-title'>{title}</h3>
            <p>{description}</p>
        </div>
    )
}
export default Item
