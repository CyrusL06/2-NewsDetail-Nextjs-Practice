import Link from "next/link";

    export default function Header(){
        return (
            <header id="main-header">
              <div id="logo">
               <li><Link href="/" >NextNews</Link> </li>
              </div>
              <ul>
                   <nav>
                       <li><Link href="/news" >News</Link> </li>
                  </nav>
               </ul> 
            </header>
        )
    }