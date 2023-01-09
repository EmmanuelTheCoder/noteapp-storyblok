import React from 'react'
import { storyblokEditable } from '@storyblok/react'
import {render} from "storyblok-rich-text-react-renderer"

function Note({blok}) {
  return (
    <div {...storyblokEditable(blok)} key={blok._uid}>
      <div>
        <h2>{blok.title}</h2>
        <p> {render(blok.body)}</p>
      </div>
      <p>Story from index.js</p>
    </div>
  )
}

export default Note