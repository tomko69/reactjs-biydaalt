import React from 'react';
import {motion} from 'framer-motion';
import {fadeIn} from '../variants'
import img1 from '../assets/Screenshot (12).png'
import img2 from '../assets/Screenshot (11).png'
import img3 from '../assets/Screenshot (14).png'



const Work = () => {
  return <section className='section' id='work'>
<div className='container mx-auto mb-auto'>
  <div className='flex flex-col lg:flex-row gap-x-10'>
<motion.div 
variants={fadeIn('right',0.3)}
initial="hidden" 
whileInView={'show'}
viewport={{once:false, amount:0.7}}
className='flex-1 flex flex-col gap-y-12 mb-10 lg:mb-0'>

    <div>
    <h2 className='h2 leading-tight text-accent'>Information technology<br/>бие даалтууд</h2>
      <p className='max-w-sm mb-16 '>
      Энэ хэсэгт хичээл дээр хийсэн бие даалтууд байрлан
      </p>
      <button className='btn btn-sm'>Бүх бие даалт</button>
    </div>

    {/* immage */}
    <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>
      <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300' ></div>
      <img className='group-hover:scale-125' src={img1} alt=''></img>
      <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50 '>
      <span className='text-gradient'>HTML, CSS</span>  </div>
      <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50 '>
        <span className='text-3xl text-white'>Portfolio</span>
      </div>
    </div>
  </motion.div>

  <motion.div 
  variants={fadeIn('left',0.5)}
  initial="hidden" 
  whileInView={'show'}
  viewport={{once:false, amount:0.7}}
  className='flex-1 flex flex-col gap-y-10'>

  <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>
      <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300' ></div>
      <img className='group-hover:scale-125' src={img2} alt=''></img>
      <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50 '>
      <span className='text-gradient'>Java</span>script  </div>
      <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50 '>
        <span className='text-3xl text-white'>Ecommerce</span>
      </div>
    </div>

    <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>
      <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300' ></div>
      <img className='group-hover:scale-125' src={img3} alt=''></img>
      <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50 '>
      <span className='text-gradient'>Nodejs</span>  </div>
      <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50 '>
        <span className='text-3xl text-white'>Блог сайт</span>
      </div>
    </div>

  </motion.div>
</div>
</div>
  </section>;
};

export default Work;
