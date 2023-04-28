import clsx from 'clsx';

import styles from './AboutUs.module.scss';

interface QAItemProps {
  question: string;
  answer: string;
}

function QAItem(props: QAItemProps) {
  return (
    <div className="flex w-full flex-col rounded-[12px] bg-[#fff] py-[48px] px-[32px] md:w-[250px]">
      <div className="text-[22px] font-bold text-[#073B4C]">{props.question}</div>
      <div className="mt-[20px] text-[16px] text-[#073B4C]">{props.answer}</div>
      <a href="#" className="mt-[32px] text-[16px] text-[#0EAD69]">
        Learn More
      </a>
    </div>
  );
}

export default function OurServices() {
  const qaGroup: QAItemProps[][] = [
    [
      {
        question: 'Who We Are ',
        answer: 'You get a 2-week free trial to kick the Smarty tries. We want you to.',
      },
      {
        question: 'How Do WeHelp',
        answer: 'Learning resources anyone can transform With access.',
      },
    ],
    [
      {
        question: 'What Do We Do',
        answer: 'We give you a free course that guides you through the process.',
      },
    ],
  ];
  const imgGroup: string[][] = [
    ['https://img.js.design/assets/img/627629a16bcf1d72ee2f0a2c.png'],
    [
      'https://img.js.design/assets/img/627629a24362d10deff125cb.png',
      'https://img.js.design/assets/img/627629a21887d774eb756c02.png',
    ],
  ];

  return (
    <section id="about" className="bg-gradient-to-b from-[#fff] to-[#f8f8f8]">
      <div className="container overflow-hidden px-[32px] py-[60px] lg:px-[166px] lg:py-[125px]">
        <div className="flex justify-center md:items-center md:justify-between">
          <div className="text-center md:mr-[120px] md:text-left">
            <div className="text-[22px] font-bold text-[#073B4C] md:text-[42px]">About Us</div>
            <div className="mt-[24px] text-[16px] text-[#67687B] md:text-[18px]">
              At Besnik Consultancy, we take pride in our values – service,
              <br />
              integrity, and excellence.
            </div>
          </div>
          <button
            type="button"
            className="hidden shrink-0 rounded-[30px] bg-[#0EAD69] px-[34px] py-[18px] text-[18px] text-[#FFFEFE] shadow-[0px_7px_48px_0px_rgba(18,168,158,.25)] md:flex"
          >
            Let’s Talk →
          </button>
        </div>
        <div className="mt-[60px] flex justify-between gap-[32px] md:flex-col lg:flex-row">
          <div className={clsx(styles['img-group'], 'flex flex-col md:flex-row')}>
            {qaGroup.map((qaList, qaListIndex) => (
              <div className="flex flex-col gap-[32px]" key={qaListIndex}>
                {qaList.map((item) => (
                  <QAItem key={item.question} question={item.question} answer={item.answer} />
                ))}
              </div>
            ))}
          </div>
          <div className={clsx(styles['img-group'], 'hidden md:flex md:justify-end')}>
            {imgGroup.map((imgList, imgListIndex) => (
              <div className="flex flex-col gap-[32px]" key={imgListIndex}>
                {imgList.map((url, urlIndex) => (
                  <div
                    className={clsx('h-[270px] w-[250px] bg-cover bg-no-repeat', {
                      'mt-[-180px]': imgListIndex === 0,
                    })}
                    style={{ backgroundImage: `url(${url})` }}
                    key={urlIndex}
                  />
                ))}
              </div>
            ))}
          </div>
        </div>
        <button
          type="button"
          className="mx-auto mt-[56px] flex shrink-0 rounded-[30px] bg-[#0EAD69] px-[14px] py-[8px] text-[16px] text-[#FFFEFE] shadow-[0px_7px_48px_0px_rgba(18,168,158,.25)] md:hidden"
        >
          Let’s Talk →
        </button>
      </div>
    </section>
  );
}
