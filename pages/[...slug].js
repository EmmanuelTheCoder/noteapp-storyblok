import React from 'react';
import Head from "next/head"

import { StoryblokComponent, getStoryblokApi } from '@storyblok/react';

const Page = ({story}) => {
    return (
        <div>
            <Head>
                <link rel="icon" href="/favicon.ico" />
                </Head>
                <header>
                    <h1>{story ? story.name : "Note App"}</h1>
                </header>
                <StoryblokComponent blok={story.content} />

        </div>
    );
}
export default Page

export async function getStaticProps({params}) {
    let slug = params.slug ? params.slug.join("/") : "home"
    let sbParams = {
        version: "draft",
        resolve_relations: ["note-highlights.title"]
    };

    const storyblokApi = getStoryblokApi()
    let {data} = await storyblokApi.get(`cdn/stories/${slug}`, sbParams)
    return {
        props: {
            story: data ? data.story : false,
            key: data ? data.story.id : false
        },
        revalidate: 3600
    };
}

export async function getStaticPaths() {
    const storyblokApi = getStoryblokApi()
    let {data} = await storyblokApi.get(`cdn/links/`)
    let paths = [];
    Object.keys(data.links).forEach((linkKey) => {
        if (data.links[linkKey].is_folder || data.links[linkKey].slug === "home") {
            return;
        }

        const slug = data.links[linkKey].slug;
        let splittedSlug = slug.split("/");
        paths.push({ params: { slug: splittedSlug } });
    });

    return {
        paths,
        fallback: false
    };
}