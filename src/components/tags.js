import '../stylesheets/sass/components/tags.css'
import React from 'react'

function Tags({content}){
    return(
        <div className='tags'>
            <p className='tags-content'>{content}</p>
        </div>
    )
}

export default Tags