import '../styles/globals.css'
import {storyblokInit, apiPlugin} from "@storyblok/react"
import Page from "../components/Page"
import Note from "../components/Note"
import NoteHighlights from "../components/NoteHighlights"
import Teaser from "../components/Teaser";
import Grid from "../components/Grid";
import Feature from "../components/Feature";


const components = {
  page: Page,
  note: Note,
  "note-highlights": NoteHighlights,
  teaser: Teaser,
  grid: Grid,
  feature: Feature
}

storyblokInit({
  accessToken: process.env.NEXT_PUBLIC_STORYBLOK_TOKEN,
  components,
  use: [apiPlugin]
})

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />
}
