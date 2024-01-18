import logo from '../../assets/images/logo.svg'


const Header = () => {
    return (
        <div className="container m-auto">

            <div className="navbar bg-base-100 h-[114px] font-[cabinetVariable]  ">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <li><a>Item 1</a></li>
                            <li>
                                <a>Parent</a>
                                <ul className="p-2">
                                    <li><a>Submenu 1</a></li>
                                    <li><a>Submenu 2</a></li>
                                </ul>
                            </li>
                            <li><a>Item 3</a></li>
                        </ul>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1">
                            <li><a className='text-base font-medium	'>Anunciar imóvel</a></li>
                            <li><a className='text-base font-medium	'>Sobre</a></li>
                            <li><a className='text-base font-medium	'>Conteúdos</a></li>
                        </ul>
                    </div>

                </div>
                {/* middle */}
                <img src={logo} alt="logo" />

                <div className="navbar-end hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><a className='text-base font-medium	'>Cadastrar</a></li>
                        <li><a className='text-base font-bold'>Entrar</a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Header