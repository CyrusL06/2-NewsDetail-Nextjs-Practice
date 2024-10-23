//NExt Js way to fetch data from a back-END

import NewsList from "@/components/main-header/news-list";


export default async function NewsPage(){
            // fetching the backend
        //u can use fetch in a direct comonent
    const response = await fetch('http://localhost:8080/news');

    if(!response.ok) {
        throw new Error('Failed to Fetch')
    }

    const news = await response.json();

     let newsContent;

    return(
        <>
        <h1>News Page</h1>
        {/* made it a component so its reusable */}
        <NewsList news={news}/>
        </>
        
    );
}