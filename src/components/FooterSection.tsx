import Image from 'next/image';

function Subscribe() {
  return (
    <>
      <div className="text-[24px] text-[#fff] md:text-[32px]">Get on our email list</div>
      <div className="mt-[24px] flex cursor-pointer items-center justify-between rounded-[40px] bg-[#fff] p-[4px]">
        <div className="pl-[18px] text-[14px] text-[#073B4C] md:pl-[30px] md:text-[18px]">Your email address</div>
        <div className="rounded-[24px] bg-[#0EAD69] px-[20px] py-[13px] text-[14px] text-[#fff] md:text-[18px]">
          Subscribe
        </div>
      </div>
    </>
  );
}

export default function FooterSection() {
  return (
    <footer id="footer-section" className="bg-[#073B4C]">
      <div className="container px-[32px] py-[60px] lg:px-[166px] lg:pt-[120px] lg:pb-[48px]">
        <div className="flex flex-col lg:flex-row">
          <div className="mb-[60px] flex flex-col lg:mb-0 lg:flex-[1.5]">
            <Image
              src="/images/logo-white.svg"
              className="mx-auto md:mx-0"
              width={143}
              height={48}
              priority
              alt="logo"
            />
            <div className="mt-[32px] hidden lg:block">
              <Subscribe />
            </div>
          </div>
          <div className="flex flex-col gap-[60px] md:flex-row md:gap-[133px] lg:flex-[2] lg:justify-end 2xl:gap-[183px]">
            <div>
              <div className="text-[18px] font-bold text-[#fff]">Company</div>
              <div className="mt-[35px] flex flex-col gap-[23px] text-[16px] text-[#ddd]">
                <div>Patnerships</div>
                <div>Terms of use</div>
                <div>Privacy</div>
                <div>Sitemap</div>
              </div>
            </div>
            <div>
              <div className="text-[18px] font-bold text-[#fff]">Get in touch</div>
              <div className="mt-[35px] flex flex-col gap-[23px] text-[16px] text-[#ddd]">
                <div>
                  4094 Farm Meadow Drive
                  <br />
                  Nashville, TN 37214
                </div>
                <div className="flex">
                  <Image
                    className="mr-[10px]"
                    src="/images/phone-call.svg"
                    width={23}
                    height={24}
                    priority
                    alt="logo"
                  />
                  +1 931-236-3668
                </div>
                <div className="flex">
                  <Image className="mr-[10px]" src="/images/envelope.svg" width={23} height={24} priority alt="logo" />
                  contact@youremail.com
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-[55px] lg:hidden">
          <Subscribe />
        </div>
        <div className="mt-[50px] mb-[40px] h-[2px] w-full bg-[#1a4a5a] md:mt-[100px]"></div>
        <div className="flex flex-col-reverse items-center md:flex-row md:justify-between md:align-baseline">
          <div className="mt-[40px] text-[14px] text-[#F0F0F0] md:mt-0 md:text-[16px]">
            Copyright © ANNEX 2021. All rights reserved
          </div>
          <div className="flex gap-[15px]">
            {[1, 2, 3].map((num) => (
              <a key={num} href="#" className="shrink-0">
                <Image src={`/images/attention-${num}.svg`} width={28} height={28} priority alt="icon" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
