/** @type {import('next').NextConfig} */
module.exports = {
    publicRuntimeConfig: {
        CONTENTFUL_SPACE_ID: "process.env.CONTENTFUL_SPACE_ID",
        CONTENTFUL_ACCESS_TOKEN: process.env.CONTENTFUL_ACCESS_TOKEN,
        CONTENTFUL_PREVIEW_ACCESS_TOKEN: process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN,
        CONTENTFUL_REVALIDATE_SECRET: process.env.CONTENTFUL_REVALIDATE_SECRET,
        CONTENTFUL_BEARER_TOKEN: process.env.CONTENTFUL_BEARER_TOKEN,
        MP_ACCESS_TOKEN: process.env.MP_ACCESS_TOKEN,
        MP_PUBLIC_KEY: process.env.MP_PUBLIC_KEY,
    }
}  
