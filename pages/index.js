import Nav from "../components/Nav"

const Home = () => {
  return (
    <div>
      <Nav />
      <div className="relative">
        <div className="font-notosans text-center py-28">
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
      </div>
    </div>
  )
}

export default Home