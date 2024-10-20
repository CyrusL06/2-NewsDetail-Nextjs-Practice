// files allows you to define deafualt fallback content 
//that doesnt have the path is not suppoeted

import { getLatestNews } from "@/app/lib/news";
import NewsList from "@/components/main-header/news-list";


export default function LatestPage(){
    const latestNews = getLatestNews();

    return(
    <>
        <h2>Latest News</h2>
        <NewsList news={latestNews} />
    </>);
}