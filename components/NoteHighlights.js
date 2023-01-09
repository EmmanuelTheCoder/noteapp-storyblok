import React from 'react'
import { storyblokEditable } from '@storyblok/react'
import Link from "next/link";


function NoteHighlights({blok}) {
  return (
    <div {...storyblokEditable(blok)} key={blok._uid}>
      <h2>{blok.title}</h2>
    </div>
  )
}

export default NoteHighlights