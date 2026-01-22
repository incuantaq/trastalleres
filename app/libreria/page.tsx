import React from 'react';
import { getAllPosts } from "@/lib/api";
import MoreStories from "../../components/service/service";

export const revalidate = 21600; // Revalidate every 6 hours (cost-optimized)

export default async function LibreriaPage() {
    const posts = await getAllPosts(false, 'book');

    return (
      <MoreStories posts={posts} serviceType='libreria' />
    );
}