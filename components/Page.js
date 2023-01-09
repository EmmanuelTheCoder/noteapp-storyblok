import React from 'react'
import { StoryblokComponent, storyblokEditable } from '@storyblok/react'

function Page({blok}) {
  return (
    <main {...storyblokEditable(blok)}>
      {
        blok.body ? blok.body.map(blok => {
          <StoryblokComponent blok={blok} key={blok._uid} />
        })
      : null}
    </main>
  )
}

export default Page