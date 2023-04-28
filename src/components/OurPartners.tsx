import Image from 'next/image';

export default function OurPartners() {
  const imgs: string[] = [
    'images/partner-1.svg',
    'images/partner-2.svg',
    'images/partner-3.svg',
    'images/partner-4.svg',
    'images/partner-5.svg',
    'images/partner-6.svg',
  ];

  return (
    <section id="concat" className="bg-[#fff]">
      <div className="container px-[32px] py-[60px] lg:px-[166px] lg:py-[125px]">
        <div className="hidden md:block">
          <div className="text-center text-[42px] font-bold text-[#073B4C]">Meet Our Partners</div>
          <div className="mt-[24px] text-center text-[18px] text-[#67687B]">
            There are many variations of passages of Lorem Ipsum available, but
            <br />
            the majority have suffered alteration.
          </div>
          <div className="mt-[60px] flex flex-wrap justify-center gap-[70px]">
            {imgs.map((url, urlIndex) => (
              <Image
                className="h-auto w-auto"
                key={urlIndex}
                src={url}
                width={205}
                height={30}
                priority
                alt="partner logo"
              />
            ))}
          </div>
        </div>
        <div className="mt-[150px] mb-[120px] hidden h-[2px] w-full bg-[#F0F4F3] md:block"></div>
        <div className="flex flex-col items-center">
          <div className="text-[14px] text-[#EE4266] md:text-[16px]">CONTACT US</div>
          <div className="text-[24px] md:text-[32px] md:text-[#073B4C]">We are Ready To Discover</div>
          <div className="text-[24px] font-bold text-[#073B4C] md:text-[32px]">Your Story!</div>
          <a className="mt-[37px] text-[18px] font-bold text-[#0EAD69] md:text-[22px]" href="#">
            Let’s Talk →
          </a>
        </div>
      </div>
    </section>
  );
}
