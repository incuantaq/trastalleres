import React from 'react';
import { draftMode } from "next/headers";
import MoreStories from "../../components/service/service";

const AboutPage: React.FC = () => {
  const { isEnabled } = draftMode();
  /* const allPosts = await getAllPosts(isEnabled); */
  const allPosts = [{
    title:"title", 
    coverImage: {
      url: "https://img.freepik.com/vector-premium/ilustracion-vectorial-dibujos-animados-dino-montando-scooter_156268-462.jpg?semt=ais_hybrid"
    }, 
    date: "09-02-1997", author: {
    picture: {
      url: "https://img.freepik.com/vector-premium/ilustracion-vectorial-dibujos-animados-dino-montando-scooter_156268-462.jpg?semt=ais_hybrid"
    }
  }, 
  slug: "slug", 
  excerpt: "excerpt"
  }, {
    title:"title", 
    coverImage: {
      url: "https://img.freepik.com/vector-premium/ilustracion-vectorial-dibujos-animados-dino-montando-scooter_156268-462.jpg?semt=ais_hybrid"
    }, 
    date: "09-02-1997", author: {
    picture: {
      url: "https://img.freepik.com/vector-premium/ilustracion-vectorial-dibujos-animados-dino-montando-scooter_156268-462.jpg?semt=ais_hybrid"
    }
  }, 
  slug: "slug", 
  excerpt: "excerpt"
  }, {
    title:"title", 
    coverImage: {
      url: "https://img.freepik.com/vector-premium/ilustracion-vectorial-dibujos-animados-dino-montando-scooter_156268-462.jpg?semt=ais_hybrid"
    }, 
    date: "09-02-1997", author: {
    picture: {
      url: "https://img.freepik.com/vector-premium/ilustracion-vectorial-dibujos-animados-dino-montando-scooter_156268-462.jpg?semt=ais_hybrid"
    }
  }, 
  slug: "slug-2", 
  excerpt: "excerpt"
  }]
  const heroPost = allPosts[0];
  const morePosts = allPosts.slice(1);


  return (
    <>
      <MoreStories morePosts={morePosts} ServiceType='Librería' />
    </>
  );
};

export default AboutPage;