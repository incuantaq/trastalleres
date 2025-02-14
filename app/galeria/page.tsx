import React from 'react';
/* import { draftMode } from "next/headers"; */
import MoreStories from "../../components/service/service";
import { faker } from '@faker-js/faker';

export function createRandomPost() {
  return {
    title: faker.book.title(), 
    coverImage: {
      url: faker.image.urlPicsumPhotos({ width: 128, height: 200 })
    }, 
    date: faker.date.past(), 
    author: {
      name: faker.person.fullName(),
      picture: {
        url: faker.image.personPortrait() 
      }
    }, 
    slug: "slug", 
    excerpt: "excerpt"
  };
}

const AboutPage: React.FC = () => {
  /* const { isEnabled } = draftMode();
  const allPosts = await getAllPosts(isEnabled); */
  const allPosts = faker.helpers.multiple(createRandomPost, {
    count: 10,
  });
  const heroPost = allPosts[0];
  const morePosts = allPosts.slice(1);


  return (
    <>
      <MoreStories morePosts={morePosts} ServiceType='Galería' />
    </>
  );
};

export default AboutPage;