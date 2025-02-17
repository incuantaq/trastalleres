"use client"

import ContentfulImage from "../lib/contentful-image";

function cn(...classes: any[]) {
  return classes.filter(Boolean).join(" ");
}

export default function CoverImage({
  title,
  url,
  slug,
  serviceType,
  author,
}: {
  title: string;
  url: string;
  slug: string;
  serviceType: string;
  author: any;
}) {
  return (
      <ContentfulImage
        alt={`Cover Image for ${title}`}
        priority
        width={2000}
        height={1000}
        className={cn("shadow-small", {
          "hover:shadow-medium transition-shadow duration-200 sm:mx-0": slug,
        })}
        src={url}
      />
  );
}
