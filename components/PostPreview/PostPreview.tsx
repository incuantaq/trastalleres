// components/PostPreview.tsx (with next/link)
"use client";

import Avatar from "../../app/avatar";
import CoverImage from "../../app/cover-image";

type ServiceKeys = 'libreria' | 'galeria';

interface PostPreviewProps {
  title: string;
  coverImage: { url: string };
  date: string;
  excerpt: string;
  author: { name: string; picture: string };
  slug: string;
  serviceType: ServiceKeys;
  onClick: () => void;
}

function PostPreview({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
  serviceType,
  onClick,
}: PostPreviewProps) {
  return (
    <div onClick={onClick}>
      <div className="mb-1 md:mb-2 cursor-pointer">
        <CoverImage title={title} slug={slug} author={author} serviceType={serviceType} url={coverImage.url} />
      </div>
      <h3 className="text-2xl mb-1 leading-snug cursor-pointer">
        {title}
      </h3>
      {author && <Avatar name={author.name} picture={author?.picture} />}
    </div>
  );
}

export default PostPreview;