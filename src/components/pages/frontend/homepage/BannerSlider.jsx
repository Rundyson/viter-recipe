import { imgPath } from '@/components/helpers/functions-general'
import { ArrowRight, Clock, HandPlatter, Utensils } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"

const BannerSlider = () => {
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoPlay: true,
      };
  return (
    <section>
        <Slider {...settings}>
            {Array.from(Array(4).keys()).map((key) => (
                <div className='w-full h-[calc(100vh-72px)] relative' key={key}>
                <img src={`${imgPath}/Pasta-2.jpg`} alt="" className='w-full h-[105%] object-cover'/>

                <div className="tint w-full h-[105%] bg-black bg-opacity-70 absolute top-0 left-0"></div>
                
                <div className='absolute top-1/2 left-[calc((100vw-1200px)/2)] p-4 text-white max-w-[500px] -translate-y-1/2'>
                    
                    <h2 className='text-5xl'>PASTA SA'YO ANG LABAN NA 'TO</h2>
                    
                    <ul className='flex gap-5 mb-5'>
                        <li className='flex gap-2 items-center'>
                            <Clock/> 30 mins
                        </li>

                        <li className='flex gap-2 items-center'>
                            <Utensils/> 4 Servings
                        </li>

                        <li className='flex gap-2 items-center'>
                            <HandPlatter/> PASTA
                        </li>
                    </ul>

                    <p className='mb-5'>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa, 
                        et aperiam? Ea, animi! Natus at nostrum consequatur cupiditate 
                        iusto, animi ratione tempora cum? Molestiae sunt optio quis nostrum numquam omnis!
                    </p>

                    <Link to="/" className='flex gap-3 group items-center hover:text-accent transition-all font-bold'>
                    View Full Recipe 
                    <ArrowRight
                    size={18} 
                    className='opacity-0 -translate-x-3 transition-all group-hover:opacity-100
                    group-hover:translate-x-0 stroke-accent'/>
                    </Link>

                </div>

            </div>
            ))}
            
        </Slider>
    </section>
  )
}

export default BannerSlider