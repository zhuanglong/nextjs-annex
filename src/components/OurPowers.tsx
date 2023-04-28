import { Fragment } from 'react';
interface PowerItemProps {
  order: string;
  desc: string;
}

function PowerItem(props: PowerItemProps) {
  return (
    <div className="flex">
      <div className="flex h-[44px] w-[44px] shrink-0 items-center justify-center rounded-[10px] bg-[#1a4a5a] font-bold text-[#ddd]">
        {props.order}
      </div>
      <div className="ml-[22px] text-[14px] text-[#ddd] md:text-[16px]">{props.desc}</div>
    </div>
  );
}

export default function OurPowers() {
  const powerGroup: PowerItemProps[][] = [
    [
      {
        order: '01',
        desc: 'The bottom line is that you can’t send out email marketing campaign if you have no one.',
      },
      {
        order: '02',
        desc: 'What most people do when they want to build an email list an option form on their website.',
      },
    ],
    [
      {
        order: '03',
        desc: 'An email service provider (ESP) lets you segment your audience, organize your list.',
      },
      {
        order: '04',
        desc: 'Lead magnets are only effective when the audience uses them, so if you deliver a.',
      },
    ],
  ];

  return (
    <section id="why-choose-us" className="bg-[#073b4c]">
      <div className="container px-[32px] py-[60px] lg:px-[166px] lg:py-[125px]">
        <div className="text-center text-[22px] font-bold text-[#fff] md:text-[42px]">Why Choose Us</div>
        <div className="mt-[24px] text-center text-[16px] text-[#fff] md:text-[18px]">
          Here is our amazing teaching method that suits for you. Read our
          <br />
          features and know the best.
        </div>
        <div className="my-[60px] h-[2px] w-full bg-[#1a4a5a]"></div>
        <div className="flex flex-col items-center justify-center gap-[50px] px-[20px] md:flex-row md:gap-0">
          {powerGroup.map((powers, powersIndex) => (
            <Fragment key={powersIndex}>
              <div className="flex flex-col gap-[50px] md:gap-[40px] lg:gap-[80px]">
                {powers.map((item) => (
                  <PowerItem key={item.order} order={item.order} desc={item.desc} />
                ))}
              </div>
              {powersIndex === 0 && (
                <div className="hidden h-[120px] w-[2px] bg-[#1a4a5a] md:mx-[50px] md:block lg:mx-[100px]" />
              )}
            </Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}
