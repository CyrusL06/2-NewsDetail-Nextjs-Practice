//Copied the same code as images page.js

import { DUMMY_NEWS } from "@/dummy-news";
import { notFound } from "next/navigation";

//param propertygive acces to slug because nested routes 
//inside of dynamic route will also have access in this news item slug
export default function InterceptedImagePage({params}) {
    // Copying the logic from earlier 
    const newsSlug = params.slug
    const newsItem = DUMMY_NEWS.find((newsItem) => newsItem.slug === newsSlug)

    if (!newsItem) {
        // Debug: Inform if no item was found
        console.error("News item not found for slug:", newsSlug);
        return notFound(); // This triggers the 404 page
    }
    
    return (
        <>
        <div className="modal-backdrop">
            <dialog className="modal" open >
            <div className="fullscreen-image">
                <img 
                // output the actual Image 
                src={`/images/news/${newsItem.image}`} 
                alt = {newsItem.title}
                />
            </div>
            </dialog>
        </div>
        
        </>
    );
}