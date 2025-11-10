import Container from './Container';
import slide01 from '../assets/home_slide1.jpg'


const Banner = () => {
    return (
        <div className='relative -top-20 -z-1   w-full h-[60vh] md:h-[80vh] lg:h-[100vh] overflow-hidden'>
            <img className='absolute left-0 w-full h-full  object-cover' src={slide01} alt="" />
            
        </div>
    );
};
export default Banner;