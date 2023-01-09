import React from 'react'
import { StoryblokComponent, storyblokEditable } from '@storyblok/react'

function Page({blok}) {
  return (
    <main {...storyblokEditable(blok)}>
      {blok.body.map((nestedBlok) => (
          <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid}/>
      ))}
    </main>
  )
}

export default Page