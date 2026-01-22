import React from 'react';
import { getAllPosts } from "@/lib/api";
import MoreStories from "../../components/service/service";

export const revalidate = 60; // Revalidate every 60 seconds as a fallback

export default async function GaleriaPage() {
    const paints = await getAllPosts(false, 'pintura');

    return (
      <MoreStories posts={paints} serviceType='galeria' />
    );
}
