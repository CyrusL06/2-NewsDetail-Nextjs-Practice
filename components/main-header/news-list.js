import Link from "next/link";


    export default function NewsList ({news}){
        return (
            <ul className="news-list">
                {news.map((newsItem) => (
                    <li key={newsItem.id} >
                        {/* Fixed this one */}
                        <Link href = {`/news/${newsItem.slug}`}>
                            <img src = {`/images/news/${newsItem.image}`} />
                            <span>{newsItem.title}</span>
                        </Link>
                    </li>
                ))}
            
            </ul>
        );
    }

    