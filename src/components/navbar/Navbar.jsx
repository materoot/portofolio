import './navbar.css'
import Logo from '../../img/logo.webp'
const Navbar = () => {
    const Menus = [
        { id: 1, name: 'Home', link: '#home' },
        { id: 2, name: 'About', link: '#about' },
        { id: 3, name: 'Services', link: '#services' },
        { id: 4, name: 'Skills', link: '#skills' },
    ]
    return (
        <nav id='home' className='container'>
            <img src={Logo} alt="My Logo" className='logo' />
            <ul>
                {Menus.map(menu => (
                    <li key={menu.id}><a href={menu.link}>{menu.name}</a></li>
                ))}
            </ul>
        </nav>
    )
}

export default Navbar