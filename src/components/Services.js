import React from 'react';
import {BsArrowUpRight} from 'react-icons/bs';
import {motion} from 'framer-motion';
import { fadeIn } from '../variants';

const services=[
  {name:'Тогооч',
description:'2015 онд Тэмүүжин ресторанд бэлтгэгчээс үндсэн тогооч хүртэл 3сар ажилсан. 2016 онд Боржигон Ресторанд үндсэн тогоочоор -сар ажилсан',
link:'Нүүр'
},
{name:'Хүний нөөц',
description:'2017 2018 онд Зөв эргэлт үл хөдлөх зуучлалын газар хичээлийн хажуугаар Тус Тус 2 2р сар хүний нөөцөөр ажилсан',
link:'Нүүр'
},
{name:'Хүнсний технологич',
description:'2019-2020 онуудад Хөдөө аж ахуй сургуулийн харьяа судалгааний багт ажилсан. ',
link:'Нүүр'
},
{name:'Information technology',
description:'2022 онд индра институт сургуульд элсэж ороод хичээл бүр дээр өөрийн бие даалт project-ийг бэлтэгсэн.',
link:'Нүүр'
}
]


const Services = () => {
  return <section className='section' id='services'>
    <div className='container mx-auto'>
      <div className='flex flex-col lg:flex-row'>

        <motion.div
  variants={fadeIn('right', 0.3)}
  initial='hidden'
  whileInView={'show'}
  viewport={{once:false, amount:0.3}}
        className='flex-1 lg:bg-services lg:bg-bottom bg-no-repeat mix-blend-lighten mb-12 lg:mb-0'>
        <h2 className='h2 text-accent mb-6'>Ажилын туршилга</h2>
<h3 className='h3 max-w-[430px] mb-16'>
 Энд миний сурсан мэрэгжилээрээ ажилсан товч тайлбар байрлах болно.
</h3>
<button className='btn btn-sm'>Баярлалаа</button>
        </motion.div>

<motion.div 
    variants={fadeIn('left', 0.5)}
    initial='hidden'
    whileInView={'show'}
    viewport={{once:false, amount:0.3}}
className='flex-1'>
  <div>
{services.map((service, index)=>{
  const {name,description,link}= service;
  return (
  <div key={index} className='border-b border-white/20 h-[146px] mb-[38px] flex'>

    <div className='max-w-[476px]'>
      <h4 className='text-[20px] trackimg-wider font-primary font-semibold mb-6 '>
        {name}
        </h4>
      <p className='font-secondary leading-tight'>
        {description}
        </p>
    </div>

    <div className='flex flex-col flex-1 items-end'>
      <a href='#' className='btn w-9 h-9 mb-[42px] flex justify-center items-center'>
        <BsArrowUpRight/>
      </a>
      <a href='#' className='text-gradient text-sm'>{link}</a>
    </div>
  </div>
  )
})}
  </div> 
</motion.div>

      </div>
    </div>
  </section>;
};

export default Services;
