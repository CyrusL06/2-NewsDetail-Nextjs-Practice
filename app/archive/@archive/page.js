import { getAvailableNewsYears } from "@/app/lib/news";
import Link from "next/link";

    export default function ArchivePage(){
        // array of years identifier
        const links = getAvailableNewsYears();
        //try change
        return(
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
    }