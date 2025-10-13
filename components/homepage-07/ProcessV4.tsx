import processImg from "@/public/images/process-img-01.png";
import Image from "next/image";
import RevealWrapper from "../animation/RevealWrapper";
import TextAppearAnimation from "../animation/TextAppearAnimation";

const ProcessV4 = () => {
  return (
    <section className="pb-14 pt-14 md:pb-16 md:pt-16 lg:pb-[88px] lg:pt-[88px] xl:pb-[100px] xl:pt-[100px]">
      <div className="container">
        <div className="mb-8 text-center md:mb-20">
          <RevealWrapper className="rv-badge reveal-me mb-5 md:mb-8">
            <span className="rv-badge-text">Нашиот процес</span>
          </RevealWrapper>
          <TextAppearAnimation>
            <h2 className="text-appear mx-auto max-w-[770px]">Дизајнот го гледаме како процес на откривање.</h2>
          </TextAppearAnimation>
        </div>
        <RevealWrapper className="flex flex-col gap-20 md:flex-row">
          <figure>
            <Image src={processImg} alt="Слика од процесот" />
          </figure>

          <div>
            <ul className="relative space-y-10 border-secondary dark:border-backgroundBody md:border-l lg:space-y-28 xl:space-y-[170px]">
              <li className="max-w-max px-10">
                <div className="absolute left-0 flex items-center justify-center rounded-full border-backgroundBody bg-secondary px-3.5 py-5 text-lg font-bold text-white dark:border-[#151515] md:-left-11 md:border-[18px] lg:-left-[52px] lg:px-6 lg:py-8">
                  <span className="inline-block bg-gradient-to-r from-backgroundBody to-gray-400 bg-clip-text text-xl font-semibold text-black text-transparent dark:bg-gradient-to-r dark:from-white dark:to-[#BDBDBD] dark:bg-clip-text dark:text-[#FFF] dark:text-transparent">01</span>
                </div>
                <div className="ml-[30px]">
                  <h3>Закажи повик</h3>
                  <p className="mt-5 max-w-[483px]">Избери датум и време за воведен состанок, каде што ќе ги дефинираме целите на проектот, временската рамка и буџетот.</p>
                </div>
              </li>

              <li className="max-w-max px-10">
                <div className="absolute left-0 flex items-center justify-center rounded-full border-backgroundBody bg-secondary px-3.5 py-5 text-lg font-bold text-white dark:border-[#151515] md:-left-11 md:border-[18px] lg:-left-[54px] lg:px-6 lg:py-8">
                  <span className="inline-block bg-gradient-to-r from-white to-gray-400 bg-clip-text text-xl font-semibold text-black text-transparent dark:bg-gradient-to-r dark:from-white dark:to-[#BDBDBD] dark:bg-clip-text dark:text-[#FFF] dark:text-transparent">02</span>
                </div>
                <div className="ml-[30px]">
                  <h3>Прими понуда</h3>
                  <p className="mt-5 max-w-[483px]">Ќе ти испратиме прилагодена понуда за проектот со сите достави, патоказ и цена во рок од 1–2 работни дена.</p>
                </div>
              </li>

              <li className="max-w-max px-10">
                <div className="absolute left-0 flex items-center justify-center rounded-full border-backgroundBody bg-secondary px-3.5 py-5 text-lg font-bold text-white dark:border-[#151515] md:-left-11 md:border-[18px] lg:-left-[54px] lg:px-6 lg:py-8">
                  <span className="inline-block bg-gradient-to-r from-white to-gray-400 bg-clip-text text-xl font-semibold text-black text-transparent dark:bg-gradient-to-r dark:from-white dark:to-[#BDBDBD] dark:bg-clip-text dark:text-[#FFF] dark:text-transparent">03</span>
                </div>
                <div className="ml-[30px]">
                  <h3>Започни со проектот</h3>
                  <p className="mt-5 max-w-[483px]">Испрати депозит, опушти се и дозволи ни да си ја завршиме работата. Ќе те поканиме на дизајн преглед по 10–15 работни дена.</p>
                </div>
              </li>
            </ul>
          </div>
        </RevealWrapper>
      </div>
    </section>
  );
};

export default ProcessV4;
