import { getNewsForYear } from "@/app/lib/news";
import NewsList from "@/components/main-header/news-list";

    export default function FilteredNewsPage({params}) {
                            //its .year because its the identifier between square bracker 
        const newsYear = params.year;
        const news = getNewsForYear(newsYear)

        return<NewsList news={news}/>
    }