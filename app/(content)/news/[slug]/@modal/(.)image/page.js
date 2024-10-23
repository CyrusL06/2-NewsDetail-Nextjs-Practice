
import { getNewsItem } from "@/app/lib/news";
import ModalBackDrop from "@/components/modal-backdrop";

//param propertygive acces to slug because nested routes 
//inside of dynamic route will also have access in this news item slug
export default async function InterceptedImagePage({params}) {
     // Copying the logic from earlier 
    const newsItemSlug = params.slug;
    const newsItem = await getNewsItem(newsItemSlug);

    if (!newsItem) {
        // Debug: Inform if no item was found
        console.error("News item not found for slug:", newsItemSlug);
        return notFound(); // This triggers the 404 page
    }
    
    


    return (
        <>
            {/* Turn into component because you cant use await on client side */}
            <ModalBackDrop/>
            <dialog className="modal" open >
            <div className="fullscreen-image">
                <img 
                // output the actual Image 
                src={`/images/news/${newsItem.image}`} 
                alt = {newsItem.title}
                />
            </div>
            </dialog>
        
        
        </>
    );
}