import { DUMMY_NEWS } from "@/dummy-news";
import NewsList from "@/components/main-header/news-list";

export default function NewsPage(){
    return(
        <>
        <h1>News Page</h1>
        {/* made it a component so its reusable */}
        <NewsList news = {DUMMY_NEWS} />
        </>
        
    );
}