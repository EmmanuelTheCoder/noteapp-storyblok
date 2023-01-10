import React from 'react'
import { storyblokEditable } from '@storyblok/react'

function Note({blok}) {
    return (
        <div {...storyblokEditable(blok)}>
            {blok.name}
        </div>
    )
}

export default Note