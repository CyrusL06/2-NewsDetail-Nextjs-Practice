//outputs the image whe pressed

import { getNewsItem } from "@/app/lib/news";
import { notFound } from "next/navigation";

//param propertygive acces to slug because nested routes 
//inside of dynamic route will also have access in this news item slug
export default async function ImagePage({params}) {
    // Copying the logic from earlier 
    const newsItenSlug = params.slug
    const newsItem = await getNewsItem(newsItenSlug);

    if (!newsItem) {
        // Debug: Inform if no item was found
        console.error("News item not found for slug:", newsItenSlug);
        return notFound(); // This triggers the 404 page
    }
    
    return (
        <div className="fullscreen-image">
            <img 
            // output the actual Image 
            src={`/images/news/${newsItem.image}`} 
            alt = {newsItem.title}
            />
        </div>
    );
}