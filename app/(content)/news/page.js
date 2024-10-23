"use client"

import NewsList from "@/components/main-header/news-list";
import { useEffect, useState } from "react";

export default function NewsPage(){
    const [error, setError] = useState();
    const [isLoading, setIsLoading] = useState(false);
    const [news, setNews] = useState();
    // fetching the backend
    useEffect(() => {

        async function fetchNews() {
        const response = await fetch('http://localhost:8080/news');


            if (!response.ok) {
                setError('Failed To fetch news.');
                setIsLoading(false);
            }

            const news = await response.json();
            setIsLoading(false);
            setNews(news)
        }

       
        fetchNews();
    }, []);

    
        if (isLoading) {
            return <p>Loading...</p>
        }

        if (error) {
            return {error}
        }

        // nothing
        let newsContent;
        //or newslist here
        if (news) {
            newsContent = <NewsList news={news}/>
        }

    return(
        <>
        <h1>News Page</h1>
        {/* made it a component so its reusable */}
       {newsContent}
        </>
        
    );
}