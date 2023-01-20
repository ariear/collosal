import { useEffect } from "react"

const Nav = () => {
    
    useEffect(() => {
        window.addEventListener('scroll', () => {
            document.querySelector('nav').classList.toggle('bg-[#ffffff25]', window.scrollY > 0)
            document.querySelector('nav').classList.toggle('py-4', window.scrollY > 0)
        })
    })

    return (
        <nav className="text-white flex items-center fixed w-full z-10 justify-around font-notosans py-10 transition-all duration-300">
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