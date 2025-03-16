"use client"; // This ensures the component can use hooks

import React from 'react';
import { useBooksContext } from "@/context/itemsContext";
import MoreStories from "../../components/service/service";

const Demo: React.FC = () => {
    const contextValue = useBooksContext();

    if (!contextValue) {
        return <div>Loading...</div>; 
    }

    return (
      <MoreStories posts={contextValue} serviceType='libreria' />
    );
};

export default Demo;