import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper";
import { MouseParallaxContainer, MouseParallaxChild } from "react-parallax-mouse";

import Nav from "../components/Nav"
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div>
      <MouseParallaxContainer globalFactorX={0.1} globalFactorY={0.1}>
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
        <div className="font-notosans py-20 mb-14 border-t container mx-auto border-[#ffffff48]">
        <MouseParallaxChild factorX={0.7} factorY={0.8}>
          <div className="circle left-0 bg-pink-400"></div>
          </MouseParallaxChild>
        <MouseParallaxChild factorX={-0.4} factorY={-0.6}>
          <div className="circle right-28 bg-green-400"></div>
          </MouseParallaxChild>
        <MouseParallaxChild factorX={0.2} factorY={0.4}>
          <div className="circle right-0 top-36 bg-purple-700"></div>
          </MouseParallaxChild>
            <p className="font-semibold text-[#16FCD2] text-center mb-4">PROJECTS</p>
            <p className="font-bold text-3xl text-white text-center w-[440px] mx-auto leading-relaxed mb-20">We have completed many amazing projects that you will not believe</p>
            <div className="text-center flex items-center justify-center">
              <div className="w-[450px] mr-5">
                <img src="/assets/mobile.webp" className="rounded mb-8" />
                <p className="font-bold text-xl text-white mb-3">The Mobile App Landing Page</p>
                <p className="text-[#ffffffad] mb-9">A landing page for mobile app</p>
                <button className="text-white font-medium text-sm border rounded-full py-2 px-7">Detail</button>
              </div>
              <div className="w-[450px]">
                <img src="/assets/web.png" className="rounded mb-8" />
                <p className="font-bold text-xl text-white mb-3">The Desktop App Landing Page</p>
                <p className="text-[#ffffffad] mb-9">A landing page for desktop app</p>
                <button className="text-white font-medium text-sm border rounded-full py-2 px-7">Detail</button>
              </div>
            </div>
        </div>
        <div className="bg-[#221048] font-notosans mx-24 mb-20 rounded-3xl py-20">
            <p className="font-semibold text-[#16FCD2] text-center mb-4">GET STARTED</p>
            <p className="font-bold text-3xl text-white text-center w-[440px] mx-auto leading-relaxed mb-20">What do you need? Choose a service that can help you</p>
            <div className="flex items-center justify-center">
              <div className="bg-[#3F2379] text-white w-[320px] rounded-lg py-9 px-10">
                  <div className="flex justify-between pb-8 mb-8 border-b">
                    <p className="font-bold">UI Design</p>
                    <div>
                      <p className="text-[#ffffff94] text-xs mb-1">Starting from</p>
                      <p className="font-bold text-4xl">1200$</p>
                    </div>
                  </div>
                  <ul className="font-medium text-center mb-10">
                    <li className="mb-3">10 design pages</li>
                    <li className="mb-3">Well-documented</li>
                    <li className="mb-3">4 revisions</li>
                    <li>$100/additional page</li>
                  </ul>
                  <button className="bg-white font-semibold rounded text-[#3F2379] w-full py-3">Detail</button>
              </div>
              <div className="bg-[#233679] text-white w-[320px] rounded-lg py-9 px-10 mx-7">
                  <div className="flex justify-between pb-8 mb-8 border-b">
                    <p className="font-bold">Development</p>
                    <div>
                      <p className="text-[#ffffff94] text-xs mb-1">Starting from</p>
                      <p className="font-bold text-4xl">5000$</p>
                    </div>
                  </div>
                  <ul className="font-medium text-center mb-10">
                    <li className="mb-3">Web & Mobile</li>
                    <li className="mb-3">Well-documented</li>
                    <li className="mb-3">8 revisions</li>
                    <li>$1000/additional feature</li>
                  </ul>
                  <button className="bg-white font-semibold rounded text-[#233679] w-full py-3">Detail</button>
              </div>
              <div className="bg-[#792366] text-white w-[320px] rounded-lg py-9 px-10">
                  <div className="flex justify-between pb-8 mb-8 border-b">
                    <p className="font-bold">Maintenance</p>
                    <div>
                      <p className="text-[#ffffff94] text-xs mb-1">Starting from</p>
                      <p className="font-bold text-4xl">3000$</p>
                    </div>
                  </div>
                  <ul className="font-medium text-center mb-10">
                    <li className="mb-3">Daily backup</li>
                    <li className="mb-3">3 hourse of maintenance</li>
                    <li className="mb-3">Including fixing</li>
                    <li>$50/additional hour</li>
                  </ul>
                  <button className="bg-white font-semibold rounded text-[#792366] w-full py-3">Detail</button>
              </div>
            </div>
        </div>
        <div className="py-16 font-notosans relative mb-14">
            <p className="font-semibold text-[#16FCD2] text-center mb-4">TESTIMONIAL</p>
            <p className="font-bold text-3xl text-white text-center w-[480px] mx-auto leading-relaxed mb-20">What do our clients say that we never let down?</p>
            <Swiper
                slidesPerView={3}
                spaceBetween={70}
                pagination={{
                  clickable: true,
                  el: '.swiper-pagination',
                  type: 'bullets',
                  bulletActiveClass: 'swiper-pagination-bullet-active',
                }}
                autoplay={{
                  delay: 5000,
                  disableOnInteraction: false,
                }}
                modules={[Pagination,Autoplay]}
                className="mySwiper w-[1400px]"
            >
              <SwiperSlide>
              <div className="bg-[#ffffff18] text-center w-[415px] py-12 px-12 rounded">
                <div className="relative w-max mx-auto">
                  <img src="/avatar.png" className="mb-4" />
                  <img src="/assets/icons/ep.png" className="bg-[#6016FC] p-2 rounded-full absolute bottom-0 right-0" />
                </div>
                <p className="text-white font-bold text-lg mb-2">Courtney Henry</p>
                <p className="text-[#ffffffa1] font-medium text-sm mb-9">Biffco Enterprises Ltd.</p>
                <p className="text-[#ffffffa1] font-medium leading-loose">"Very easy to use. I made back the purchase price in just 48 hours! It's great. It's is both attractive and highly adaptable."</p>
              </div>
              </SwiperSlide>
              <SwiperSlide>
              <div className="bg-[#ffffff18] text-center w-[415px] py-12 px-12 rounded">
                <div className="relative w-max mx-auto">
                  <img src="/avatar2.png" className="mb-4" />
                  <img src="/assets/icons/ep.png" className="bg-[#6016FC] p-2 rounded-full absolute bottom-0 right-0" />
                </div>
                <p className="text-white font-bold text-lg mb-2">Esther Howard</p>
                <p className="text-[#ffffffa1] font-medium text-sm mb-9">Abstergo Ltd.</p>
                <p className="text-[#ffffffa1] font-medium leading-loose">"Your company is truly upstanding and is behind its product 100%. It's the perfect solution for our business. It has really helped our business."</p>
              </div>
              </SwiperSlide>
              <SwiperSlide>
              <div className="bg-[#ffffff18] text-center w-[415px] py-12 px-12 rounded">
                <div className="relative w-max mx-auto">
                  <img src="/avatar3.png" className="mb-4" />
                  <img src="/assets/icons/ep.png" className="bg-[#6016FC] p-2 rounded-full absolute bottom-0 right-0" />
                </div>
                <p className="text-white font-bold text-lg mb-2">Ronald Richards</p>
                <p className="text-[#ffffffa1] font-medium text-sm mb-9">Barone LLC.</p>
                <p className="text-[#ffffffa1] font-medium leading-loose">"I am really satisfied with it. I'm good to go. It really saves me time and effort. It's is exactly what our business has been lacking. "</p>
              </div>
              </SwiperSlide>
              <SwiperSlide>
              <div className="bg-[#ffffff18] text-center w-[415px] py-12 px-12 rounded">
                <div className="relative w-max mx-auto">
                  <img src="/avatar.png" className="mb-4" />
                  <img src="/assets/icons/ep.png" className="bg-[#6016FC] p-2 rounded-full absolute bottom-0 right-0" />
                </div>
                <p className="text-white font-bold text-lg mb-2">Courtney Henry</p>
                <p className="text-[#ffffffa1] font-medium text-sm mb-9">Biffco Enterprises Ltd.</p>
                <p className="text-[#ffffffa1] font-medium leading-loose">"Very easy to use. I made back the purchase price in just 48 hours! It's great. It's is both attractive and highly adaptable."</p>
              </div>
              </SwiperSlide>
              <SwiperSlide>
              <div className="bg-[#ffffff18] text-center w-[415px] py-12 px-12 rounded">
                <div className="relative w-max mx-auto">
                  <img src="/avatar2.png" className="mb-4" />
                  <img src="/assets/icons/ep.png" className="bg-[#6016FC] p-2 rounded-full absolute bottom-0 right-0" />
                </div>
                <p className="text-white font-bold text-lg mb-2">Esther Howard</p>
                <p className="text-[#ffffffa1] font-medium text-sm mb-9">Abstergo Ltd.</p>
                <p className="text-[#ffffffa1] font-medium leading-loose">"Your company is truly upstanding and is behind its product 100%. It's the perfect solution for our business. It has really helped our business."</p>
              </div>
              </SwiperSlide>
              <SwiperSlide>
              <div className="bg-[#ffffff18] text-center w-[415px] py-12 px-12 rounded">
                <div className="relative w-max mx-auto">
                  <img src="/avatar3.png" className="mb-4" />
                  <img src="/assets/icons/ep.png" className="bg-[#6016FC] p-2 rounded-full absolute bottom-0 right-0" />
                </div>
                <p className="text-white font-bold text-lg mb-2">Ronald Richards</p>
                <p className="text-[#ffffffa1] font-medium text-sm mb-9">Barone LLC.</p>
                <p className="text-[#ffffffa1] font-medium leading-loose">"I am really satisfied with it. I'm good to go. It really saves me time and effort. It's is exactly what our business has been lacking. "</p>
              </div>
              </SwiperSlide>
              </Swiper>
              <div className="swiper-pagination"></div>
        </div>
        <Footer />
      </div>
      </MouseParallaxContainer>
    </div>
  )
}

export default Home