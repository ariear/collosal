const Footer = () => {
    return (
        <div className="font-notosans container mx-auto relative">
            <div className="circle -right-20 bg-pink-500"></div>
            <div className="circle -left-20 bg-green-400 bottom-32"></div>
            <footer className="text-white flex border-y border-[#ffffff48] py-16 items-center justify-between">
                <p className="font-bold text-3xl w-[550px] leading-relaxed">We've prepared everything, it's time for you to tell the problem</p>
                <div className="font-semibold">
                    <button className="bg-[#6016FC] py-3 px-12 rounded mr-3">Send Quote</button>
                    <button className="bg-[#ffffff2d] py-3 px-12 rounded">Ask Us</button>
                </div>
            </footer>
            <footer className="flex text-[#ffffffa4] justify-between py-14">
                <div>
                    <p className="flex items-center text-white font-dmsans font-bold text-2xl mb-7"><img src="/assets/icons/CollectionOutline.png" className="mr-3" />Collosal.</p>
                    <p className="mb-3">Copyright © 2022</p>
                    <p>Design By Collosal LLC</p>
                </div>
                <div>
                    <p className="font-medium text-sm text-white mb-5 tracking-widest">SERVICES</p>
                    <p className="mb-3">Web Development</p>
                    <p className="mb-3">App Development</p>
                    <p className="mb-3">UI Design</p>
                    <p className="mb-3">Consultation</p>
                    <p>Maintenance</p>
                </div>
                <div>
                    <p className="font-medium text-sm text-white mb-5 tracking-widest">COMPANY</p>
                    <p className="mb-3">About</p>
                    <p className="mb-3">Contact</p>
                    <p className="mb-3">Send Quote</p>
                    <p className="mb-3">Privacy Policy</p>
                    <p className="mb-3">Term of Service</p>
                    <p>Jobs</p>
                </div>
                <div>
                    <p className="font-medium text-sm text-white mb-5 tracking-widest">RESOURCES</p>
                    <p className="mb-3">Support</p>
                    <p className="mb-3">Documentation</p>
                    <p className="mb-3">License</p>
                    <p>Sitemap</p>
                </div>
            </footer>
        </div>
    )
}

export default Footer