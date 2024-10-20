import Link from "next/link";
import NavLink from "../nav-link";

    export default function Header(){
        return (
            <header id="main-header">
              <div id="logo">
               <li><Link href="/" >NextNews</Link> </li>
              </div>
              <ul>
                {/* Took out the nav eleement since its the only one who needs Clients */}
                <nav>
                    <ul>
                        <li>
                            <NavLink href="/news" >News</NavLink>
                        </li>
                        <li>
                            <NavLink href="/archive">Archive</NavLink>
                        </li>
                    </ul>
                </nav>
              </ul> 
            </header>
        )
    }