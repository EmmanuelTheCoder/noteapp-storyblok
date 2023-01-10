import React from 'react'
import { storyblokEditable } from '@storyblok/react'
import Link from "next/link";


function Teaser({blok}) {
    return (
        <div {...storyblokEditable(blok)} key={blok._uid}>
            <h2>{blok.headline}</h2>
        </div>
    )
}

export default Teaser