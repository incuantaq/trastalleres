// components/PostPreview.tsx (with next/link)
"use client";

import CoverImage from "../../app/cover-image";

type ServiceKeys = 'libreria' | 'galeria';

interface PostPreviewProps {
  title: string;
  coverImage: { url: string };
  excerpt: string;
  author: string;
  slug: string;
  serviceType: ServiceKeys;
  onClick: () => void;
}

function PostPreview({
  title,
  coverImage,
  excerpt,
  author,
  slug,
  serviceType,
  onClick,
}: PostPreviewProps) {
  return (
    <div onClick={onClick}>
      <div className="border-2 mb-1 md:mb-2 cursor-pointer">
        <CoverImage title={title} slug={slug} author={author} serviceType={serviceType} url={coverImage.url} />
      </div>
      <h3 className="text-2xl mb-1 leading-snug cursor-pointer text-[#75103A]">
        {title}
      </h3>
      <span className="text-[#7f7579]">{author}</span>
    </div>
  );
}

export default PostPreview;