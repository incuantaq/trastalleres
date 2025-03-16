"use client"; // Ensure this file is treated as a client component

import React, { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { getAllPosts } from '@/lib/api';

// Create context
const BooksContext = createContext<any | null>(null);

interface MyProviderProps {
    children: ReactNode; 
}

export const BooksContextProvider: React.FC<MyProviderProps> = ({ children }) => {
    const [contextValue, setContextValue] = useState<any | null>(null); // Start with null

    useEffect(() => {
        const fetchData = async () => {
            const allPosts = await getAllPosts(true, 'book');
            console.log("Fetched allPosts:", allPosts); // Log the fetched posts
            setContextValue(allPosts); // Update context with fetched data
        };

        // Always fetch on initial render
        fetchData();
    }, []); // Empty dependency array makes this run only once when the component mounts

    return (
        <BooksContext.Provider value={contextValue}>
            {children}
        </BooksContext.Provider>
    );
};

export const useBooksContext = (): any | null => {
    return useContext(BooksContext); // Access the context
};