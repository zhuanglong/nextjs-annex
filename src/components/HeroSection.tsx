import Image from 'next/image';

export default function HeroSection() {
  return (
    <section id="home" className="bg-[url('/images/hero-bgimg.jpg')] bg-cover bg-top bg-no-repeat">
      <div className="container relative px-[32px] lg:px-[0px] lg:pl-[166px]">
        <div className="pt-[110px] text-[40px] font-bold text-[#073B4C] lg:pt-[200px] lg:text-[62px]">
          Let’s Give Your Brand <br className="hidden sm:block" />
          Some <span className="text-[#0EAD69]">Character.</span>
        </div>
        <div className="mt-[25px] text-[14px] text-[#073B4C] lg:mt-0 lg:text-[18px]">
          A best and cheapest way of getting know <br /> learning to make a better tomorrow
        </div>
        <div className="flex items-center pt-[60px] pb-[66px] lg:pb-[223px]">
          <button
            type="button"
            className="rounded-[30px] bg-[#0EAD69] px-[20px] py-[8px] text-[16px] text-[#FFFEFE] shadow-[0px_7px_48px_0px_rgba(18,168,158,.25)] lg:px-[34px] lg:py-[18px] lg:text-[15px]"
          >
            Get started
          </button>
          <button type="button" className="ml-[30px] flex items-center">
            <Image
              src="/images/play.svg"
              className="h-[40px] w-[40px] lg:h-[60px] lg:w-[60px]"
              width={60}
              height={60}
              priority
              alt="Intro Video"
            />
            <span className="ml-[10px] text-[16px] text-[#073B4C]">Intro Video</span>
          </button>
        </div>
        <Image
          className="w-[260px] sm:absolute sm:bottom-0 sm:right-[20px] md:right-[104px] lg:w-[500px]"
          src="/images/person.svg"
          width={600}
          height={428}
          priority
          alt="person"
        />
      </div>
    </section>
  );
}
