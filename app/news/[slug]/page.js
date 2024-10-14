import { DUMMY_NEWS } from "@/dummy-news";
import { notFound } from "next/navigation";

export default function NewsDetailPage({params}){
    // holds the key for every id slugs
    const newsSlug = params.slug
    //dummy news finds newsItem and turns them into slug == newSLug
    const newsItem = DUMMY_NEWS.find((newsItem) => newsItem.slug === newsSlug)

    // because nextJS doesnt understand if article exist or not
    // we only 
    if(!newsItem){
        notFound();
    }


    return(
        <article className= "news-article">
        <header>
            <img 
            src ={`/images/news/${newsItem.image}`}
            alt = {newsItem.title}
            />
            <time dateTime = {newsItem.date}>{newsItem.date}</time>
            <h1>{newsItem.title}</h1>
        </header>
        <p>{newsItem.content}</p>
        </article>
    );
}