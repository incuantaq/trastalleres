import React from 'react';
import { getAllPosts } from "@/lib/api";
import MoreStories from "../../components/service/service";

export const revalidate = 21600; // Revalidate every 6 hours (cost-optimized)

export default async function GaleriaPage() {
    const paints = await getAllPosts(false, 'pintura');

    return (
      <MoreStories posts={paints} serviceType='galeria' />
    );
}
