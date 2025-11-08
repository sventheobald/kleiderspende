import logo from '../images/logo_final.png';

export default function Header() {
    return (
      <header className=" border-b bg-white">
        <div className="mx-auto flex h-16 max-w-7xl itenms-center justify-betweem px-4 sm:px-6 lg:px-8">
     <a
     href="/"
     className="flex items-center gap-2"
     >
     </a>   
     <img src={logo} alt="martinus" className="h-5 w-auto p-0 object-contain" />
<nav
aria-label="Navigation"
className="hidden md:block"
>
    <ul className="flex items-center gap-6">
    <li>
        <a className="hover:underline" href="/">Start</a>
    </li>
    <li>
        <a className="hover:underline" href="donation">Spenden</a>
    </li>
    <li>
        <a className="hover:underline" href="about-us">Über uns</a>
    </li>
    <li>
        <a className="hover:underline" href="impressum">Impressum</a>
    </li>

    </ul>
    </nav>
<button
type="button"
className="
inline-flec items-center justify-center
rounded-md p-2
hover:bg-gray-100
md:hidden"
aria-label="Menü"
>
    <span className="material-icons">menu</span>
</button>

     </div>
      </header>
    )
  }
  
 