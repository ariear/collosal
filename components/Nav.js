const Nav = () => {
    return (
        <nav className="text-white flex items-center justify-around font-notosans py-10">
            <div className="flex items-center">
                <img src="/assets/icons/icon.png" />
                <p className="font-dmsans font-bold text-2xl ml-4">Collosal.</p>
            </div>
            <ul className="flex items-center">
                <li className="mr-14"><a href="">Services</a></li>
                <li className="mr-14"><a href="">How We Work</a></li>
                <li className="mr-14"><a href="">Projects</a></li>
                <li><a href="">About</a></li>
            </ul>
            <p className="text-sm font-medium bg-[#ffffff23] py-3 px-8 rounded-sm"><a href="">Contact</a></p>
        </nav>
    )
}

export default Nav