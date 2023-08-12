import React from 'react';

import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import { inView, motion } from 'framer-motion';
import { fadeIn } from '../variants';

const About = () => {
  return <section className='section' id='about' >
    <div className='container mx-auto'>
      <div className='flex flex-col gap-y-10 lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-0 h-screen'>

        <motion.div
        variants={fadeIn('right', 0.3)}
        initial='hidden'
        whileInView={'show'}
        viewport={{once:false, amount:0.3}}
        className='flex-1 bg-about bg-contain bg-no-repeat h-[640px] mix-blend-lighten bg-top'></motion.div>

        <motion.div
         variants={fadeIn('left', 0.3)}
        initial='hidden'
        whileInView={'show'}
        viewport={{once:false, amount:0.3}}
        className='flex-1'>
          <h2 className='h2 text-accent'>Миний товч түүх</h2>
          <h3 className='h3 mb-4'>Намайг Төмөрбаатар гэдэг одоо Information technology-р суралцдаг.</h3>
          <p className='mb-6'>Би хэд хэдэн мэрэгжилээр сурч бас ажилж байсан. Тогоочоор 2015 онд суралчаж төгсөөд 3газар 2 2сар ажилж эрдэм номийн хөөж Хөдөө Аж Ахуй Их сургуульд хүнсний Технологчиор сурж эхэлсэн харин зуны хугацаанд Хүний нөөцөөр сурж төгсөөд ажилж эхэлсэнв
          </p>
          <div className='flex gap-x-6 lg:gap-x-10 mb-12'>

            <div >
              <div className='text-[40px] font-tertiary text-gradient mb-2'>

               {inView ? <CountUp start={0} end={6} duration={7}/> : null}
Сар
              </div>
              <div className='font-primart text-sm tracking-[2px]'>
                Суралцсан хугацаа <br/>
                Тогооч
              </div>
            </div>
            <div >
              <div className='text-[40px] font-tertiary text-gradient mb-2'>

               {inView ? <CountUp start={0} end={3} duration={7}/> : null}
Сар
              </div>
              <div className='font-primart text-sm tracking-[2px]'>
              Суралцсан хугацаа  <br/>
               Хүний нөөц
              </div>
            </div>
            <div >
              <div className='text-[40px] font-tertiary text-gradient mb-2'>

               {inView ? <CountUp start={0} end={4} duration={7}/> : null}
Жил
              </div>
              <div className='font-primart text-sm tracking-[2px]'>
              Суралцсан хугацаа <br/>
                Хүнсний технологич
              </div>
            </div>
          </div>

          <div className='flex gap-x-8 items-center'>
<button className='btn btn-lg'>Баярлалаа</button>
<a href='#' className='text-gradient btn-link'>My portfolio</a>
          </div>

        </motion.div>
      </div>
    </div>
    </section>;
};

export default About;
