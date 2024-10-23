//NExt Js way to fetch data from a back-END

import { getAllNews } from "@/app/lib/news";
import NewsList from "@/components/main-header/news-list";


export default async function NewsPage(){
    //because our database is within our server
    // when u own the database use this method
    //add await for the promise
    const news = await getAllNews();

    return(
        <>
        <h1>News Page</h1>
        {/* made it a component so its reusable */}
        <NewsList news={news}/>
        </>
        
    );
}