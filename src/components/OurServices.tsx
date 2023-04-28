import Image from 'next/image';

interface ServiceItemProps {
  icon: string;
  title: string;
  desc: string;
}

function ServiceItem(props: ServiceItemProps) {
  return (
    <div className="flex w-full flex-col items-center rounded-[16px] bg-[#fbfbfb] py-[48px] px-[22px] text-center md:w-[calc((100%-32px)/2)] lg:w-auto">
      <Image src={props.icon} width={60} height={60} priority alt="Service Icon" />
      <div className="mt-[36px] text-[18px] font-bold text-[#073B4C]">{props.title}</div>
      <div className="mt-[12px] text-[16px] text-[#67687B]">{props.desc}</div>
    </div>
  );
}

export default function OurServices() {
  const services: ServiceItemProps[] = [
    {
      icon: '/images/service-1.svg',
      title: 'Software development',
      desc: 'What are the visual elements that tell your story to  brand apart.',
    },
    {
      icon: '/images/service-2.svg',
      title: 'Cloud transformation',
      desc: 'Looking for pretty pictures? We can do that — and a lot more.',
    },
    {
      icon: '/images/service-3.svg',
      title: 'Digital workplace',
      desc: 'We’ll approach your project with our finetuned design system.',
    },
    {
      icon: '/images/service-4.svg',
      title: 'IT Consulting',
      desc: 'We’re creatives who love to doodle your work with our serious strategy.',
    },
  ];

  return (
    <section id="services" className="bg-[#fff]">
      <div className="container px-[32px] py-[60px] lg:px-[166px] lg:py-[125px]">
        <div className="text-center text-[22px] font-bold text-[#073B4C] md:text-[42px]">Our Services</div>
        <div className="mt-[24px] text-center text-[16px] text-[#67687B] md:text-[18px]">
          Here is our amazing teaching method that suits for you. Read
          <br />
          our features and know the best.
        </div>
        <div className="mt-[60px] flex flex-wrap gap-[24px] lg:flex-nowrap lg:gap-[32px]">
          {services.map((item) => (
            <ServiceItem key={item.title} icon={item.icon} title={item.title} desc={item.desc} />
          ))}
        </div>
      </div>
    </section>
  );
}
