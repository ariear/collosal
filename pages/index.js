import Nav from "../components/Nav"

const Home = () => {
  return (
    <div>
      <Nav />
      <div className="relative">
        <div className="font-notosans text-center py-28 mb-16">
            <p className="text-[#16FCD2] font-semibold mb-4 tracking-widest">CLIENT-DEVELOPMENT DRIVEN</p>
            <p className="text-white font-bold text-4xl tracking-wide leading-relaxed w-[620px] mx-auto mb-6">We Design. We Develop. We Ship. In The Same Day.</p>
            <p className="text-[#ffffffa9] font-medium w-[540px] leading-loose mx-auto mb-10">We are committed to not making clients wait. We will deliver the work as quickly as possible. Even on the same day. Even so, we do not reduce the quality of our work.</p>
              <div className="text-white font-semibold">
                <button className="bg-[#6016FC] tracking-wide py-3 px-10 rounded-sm mr-6">Send Quote</button>
                <button className="bg-[#ffffff23] tracking-wide py-3 px-10 rounded-sm">Learn More</button>
              </div>
        </div>
        <div className="w-[784px] h-[784px] rounded-full bg-[#fca0162a] blur-[100px] absolute top-0 -left-64 z-10"></div>
        <div className="w-[700px] h-[700px] rounded-full bg-[#16fcd228] blur-[100px] absolute -top-40 left-72"></div>
        <div className="w-[784px] h-[784px] rounded-full bg-[#fc165b21] blur-[100px] absolute -top-56 right-48 z-10"></div>
        <div className="font-notosans flex justify-center items-center mb-20">
            <div className="bg-[#ffffff1c] text-white rounded w-[320px] p-10">
              <img src="/assets/icons/figma.png" className="bg-[#ffffff13] p-3 rounded mb-5" />
              <p className="text-lg font-bold mb-2">Design</p>
              <p className="font-medium text-[#ffffffa2]">The project interface will be designed first, our favorite tool is Figma.</p>
            </div>
            <div className="bg-[#ffffff1c] text-white rounded w-[320px] p-10 mx-7">
              <img src="/assets/icons/code.png" className="bg-[#ffffff13] p-3 rounded mb-5" />
              <p className="text-lg font-bold mb-2">Develop</p>
              <p className="font-medium text-[#ffffffa2]">Transform design and write business logic here. Choose the technology you want.</p>
            </div>
            <div className="bg-[#ffffff1c] text-white rounded w-[320px] p-10">
              <img src="/assets/icons/box.png" className="bg-[#ffffff13] p-3 rounded mb-5" />
              <p className="text-lg font-bold mb-2">Ship</p>
              <p className="font-medium text-[#ffffffa2]">After the work is complete, we will send the project and all its assets to you.</p>
            </div>
        </div>
        <div className="flex items-center justify-center py-10 border-y border-[#ffffff48] mb-10 w-max mx-auto px-32">
          <img src="/assets/logos/github-logo.png" className="mr-9" />
          <img src="/assets/logos/forbes-logo.png" className="mr-9" />
          <img src="/assets/logos/google-logo.png" className="mr-9" />
          <img src="/assets/logos/microsoft-logo.png" className="mr-9" />
          <img src="/assets/logos/facebook-logo.png" />
        </div>
        <div className="font-notosans flex items-center justify-center py-10">
          <img src="/assets/we-work.png" />
          <div className="w-[500px]">
            <p className="font-semibold text-[#16FCD2] mb-2">HOW WE WORK?</p>
            <p className="font-bold text-3xl text-white leading-relaxed mb-5">Everything is well planned, well designed and developed wholeheartedly</p>
            <p className="font-medium text-[#ffffff98] leading-loose">Careful planning makes us confident, developed with best practices so that the project can be maintained. We always test projects before they are shipped.</p>
          </div>
        </div>
        <div className="font-notosans flex items-center justify-center py-14">
          <div className="w-[410px] mr-7">
            <p className="font-semibold text-[#16FCD2] mb-2">OUR TEAM</p>
            <p className="text-white font-bold text-3xl leading-relaxed mb-5">We're a team of designers, engineers and analysts</p>
            <p className="text-[#ffffff98] font-medium leading-loose mb-10">Our team consists of many creative people. We are committed to maintaining quality work as well as speed. These creative people work together to create maximum work results.</p>
            <button className="font-semibold text-white bg-[#ffffff1a] py-3 px-10 rounded">See Our Teams</button>
          </div>
          <img src="/assets/team-illu.png" />
        </div>
      </div>
    </div>
  )
}

export default Home