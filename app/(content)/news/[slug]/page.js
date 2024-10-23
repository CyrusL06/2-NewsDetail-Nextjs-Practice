import { getNewsItem } from "@/app/lib/news";
import Link from "next/link";
import { notFound } from "next/navigation";

export default async function NewsDetailPage({params}){
    // holds the key for every id slugs
    const newsSlug = params.slug
    //beacuse we dont use dummy data now
    const newsItem = await getNewsItem(newsSlug);

    if (!newsItem) {
        // Debug: Inform if no item was found
        console.error("News item not found for slug:", newsSlug);
        return notFound(); // This triggers the 404 page
    }


    return(
        <article className= "news-article">
        <header>
            {/* the path taht gets us into image/page.js which is*/}
            {/* /news/[slug]/image */}
            <Link href ={`/news/${newsItem.slug}/image`} >
                <img 
                src ={`/images/news/${newsItem.image}`}
                alt = {newsItem.title}
                />
            </Link>
            <time dateTime = {newsItem.date}>{newsItem.date}</time>
            <h1>{newsItem.title}</h1>
        </header>
        <p>{newsItem.content}</p>
        </article>
    );
}