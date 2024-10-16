import { getAvailableNewsYears, getNewsForYear } from "@/app/lib/news";
import NewsList from "@/components/main-header/news-list";
import Link from "next/link";

    export default function FilteredNewsPage({params}) {
            //its .year because its the identifier between square bracker 
        const filter = params.filter;
        const links = getAvailableNewsYears();

        console.log(filter);
        
        return ( 
        <header id="archive-header">
            <nav>
                <ul>
                    {links.map((link)=> (
                        <li key = {link}>
                            <Link href={`/archive/${link}`}>{link}</Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>);


        // const news = getNewsForYear(newsYear)

        // return<NewsList news={news}/>
    }