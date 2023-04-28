'use client';

import clsx from 'clsx';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

import styles from './OurClients.module.scss';

interface ClientItemProps {
  avatar: string;
  name: string;
  position: string;
  comment: string;
}

function ClientItem({ data }: { data: ClientItemProps }) {
  return (
    <div className="relative flex w-full shrink-0 flex-col items-center rounded-[12px] bg-[#fff] px-[32px] md:w-[calc((100%-32px*1)/2)] lg:w-[calc((100%-32px*3)/4)]">
      <Image
        className="absolute top-[-38.5px] rounded-full object-cover"
        src={data.avatar}
        width={77}
        height={77}
        priority
        alt="avatar"
      />
      <div className="mt-[75px] text-[18px] font-bold text-[#073B4C]">{data.name}</div>
      <div className="mt-[12px] text-[14px] text-[#073B4C]">{data.position}</div>
      <div className="mt-[30px] mb-[28px] h-[1px] w-full bg-[#EFEFEF]" />
      <Image className="flex self-start" src="/images/rating.svg" width={93} height={16} priority alt="rating" />
      <div className="mt-[17px] mb-[30px] text-[16px] text-[#073B4C]">{data.comment}</div>
    </div>
  );
}

export default function OurClients() {
  const cardListRef = useRef<HTMLDivElement>(null);

  // 由于 state 是异步的视图状态，直接使用拿不到最新值，所以需要用 ref 镜像关联
  // 推荐 https://ahooks.js.org/zh-CN/hooks/use-reset-state，更简洁的写法
  const [step, setStep] = useState(0);
  const stepRef = useRef(step);

  const [showQty, setShowQty] = useState(0); // 可见的卡片数量
  const showQtyRef = useRef(showQty);
  const cardElWidthRef = useRef(0); // 卡片宽度

  const [cardListData] = useState<ClientItemProps[]>([
    {
      avatar: 'https://img.js.design/assets/img/61d3dd8e0e768e183d028bb3.png',
      name: 'Shakibul Islam',
      position: 'UX UI Designer',
      comment:
        'The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk MTV quiz graced by fox.',
    },
    {
      avatar: 'https://img.js.design/assets/img/60dc56ceb6406cba14869a03.png',
      name: 'Philip Woodkin',
      position: 'Pulvinar aliquam magna',
      comment:
        'Zwei flinke Boxer jagen die quirlige Eva und ihren Mops durch Sylt. Franz jagt im komplett verwahrlosten Taxi.',
    },
    {
      avatar: 'https://img.js.design/assets/img/60dc56cdb6406cba14869a01.png',
      name: 'Sara Adams',
      position: 'Praesent orci',
      comment:
        'But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I.',
    },
    {
      avatar: 'https://img.js.design/assets/img/6167fa7d6cb81f63fed98a53.png',
      name: 'Charles Porter',
      position: 'Ornare maecenas aliquam',
      comment: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.',
    },
    {
      avatar: 'https://img.js.design/assets/img/60dc56cdb6406cba14869a01.png',
      name: 'Sara Adams2',
      position: 'Praesent orci2',
      comment:
        'But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I.',
    },
    {
      avatar: 'https://img.js.design/assets/img/6167fa7d6cb81f63fed98a53.png',
      name: 'Charles Porter2',
      position: 'Ornare maecenas aliquam2',
      comment: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.',
    },
  ]);

  const offsetCardList = (type: 'prev' | 'next' | 'init', initStep = 0) => {
    if (cardListData.length === 0) {
      return;
    }

    const gap = 32; // 卡片间隙
    let nextStep = 0; // 步数
    const overflowQty = cardListData.length - showQtyRef.current; // 超过
    const cardListEl = cardListRef.current;

    if (!cardListEl || overflowQty <= 0) {
      return;
    }

    if (type === 'prev') {
      nextStep = stepRef.current - 1;
    } else if (type === 'next') {
      nextStep = stepRef.current + 1;
    } else {
      nextStep = initStep;
    }

    // 防止超出
    if (nextStep > overflowQty || nextStep < 0) {
      return;
    }

    setStep(nextStep);
    stepRef.current = nextStep;

    const offsetValue = `${nextStep > 0 ? '-' : ''}${nextStep * (cardElWidthRef.current + gap)}`;
    cardListEl.style.transform = `translateX(${offsetValue}px)`;
  };

  const disableBtn = (type: 'prev' | 'next') => {
    const overflowQty = cardListData.length - showQty; // 超过
    if (type === 'prev' && step <= 0) {
      return true;
    }
    if (type === 'next' && step >= overflowQty) {
      return true;
    }
    return false;
  };

  const initCalc = () => {
    const cardListEl = cardListRef.current;
    if (cardListData.length === 0) {
      return;
    }
    if (cardListEl) {
      // 卡片列表宽度
      const cardListWidth = cardListEl.parentElement?.offsetWidth || 0;
      // 卡片宽度
      const cardWidth = (cardListEl.firstChild as HTMLDivElement)?.offsetWidth || 0;

      // 可见的卡片数量
      let qty = 0;
      cardListEl.childNodes.forEach((item) => {
        if ((item as HTMLDivElement).offsetLeft < cardListWidth) {
          qty += 1;
        }
      });

      setStep(0);
      stepRef.current = 0;
      setShowQty(qty);
      showQtyRef.current = qty;
      cardElWidthRef.current = cardWidth;
    }
  };

  useEffect(() => {
    initCalc();

    const handleResize = () => {
      initCalc();
      offsetCardList('init');
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section id="testmonial" className="bg-[#f0f4f3]">
      <div className="container px-[32px] py-[60px] lg:px-[166px] lg:py-[125px]">
        <div className="text-center text-[22px] font-bold text-[#073B4C] md:text-left md:text-[42px]">
          Our Clients Sing Our Praises
        </div>
        <div className="mt-[24px] text-center text-[16px] text-[#67687B] md:text-left md:text-[18px]">
          Create a visual identity for your company, and
          <br />
          an overall brand.
        </div>
        <div className="relative overflow-hidden">
          <div
            ref={cardListRef}
            className="flex justify-between gap-[32px] pt-[94px] transition-all duration-[.3s] ease-out"
          >
            {cardListData.map((item) => (
              <ClientItem key={item.name} data={item} />
            ))}
          </div>
        </div>
        {cardListData.length > 0 && (
          <div className="mt-[64px] flex justify-center md:justify-start">
            <button
              type="button"
              disabled={disableBtn('prev')}
              className={clsx(styles['arrow-btn'], disableBtn('prev') && styles['arrow-btn--disabled'])}
              style={{ backgroundImage: 'url("/images/arrow-left.svg")' }}
              onClick={() => offsetCardList('prev')}
            />
            <button
              type="button"
              disabled={disableBtn('next')}
              className={clsx(styles['arrow-btn'], 'ml-[20px]', disableBtn('next') && styles['arrow-btn--disabled'])}
              style={{ backgroundImage: 'url("/images/arrow-right.svg")' }}
              onClick={() => offsetCardList('next')}
            />
          </div>
        )}
      </div>
    </section>
  );
}
