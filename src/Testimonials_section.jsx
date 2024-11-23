import React, { useState,useEffect } from 'react';
// import Slider from 'react-slick';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';
import './coffee_shop.css';
import axios from 'axios'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';



// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';


const Testimonials_section = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <button type="button" className="slick-next">Next</button>,
    prevArrow: <button type="button" className="slick-prev">Previous</button>,
    beforeChange: (current, next) => setCurrentSlide(next),
  };
  const [emps,setEmp]=useState([]);
  useEffect(() => {
    axios.get("data.json")
        .then((res) => {
          setEmp(res.data.Employee)   //projects in data.json
        })
}, [])

  return (

    <>
    <Swiper
      cssMode={true}
      navigation={true}
      pagination={true}
      mousewheel={true}
      keyboard={true}
      modules={[Navigation, Pagination, Mousewheel, Keyboard]}
      className="mySwiper testimonials-section"
      id="testimonials"
    >
      

      {/* {emps.map((emp) => (
          <SwiperSlide key={emp.id}>
            
                  <img src={emp.photo} alt="loadding" />
                  <p  >{emp.title}</p>
                  <p  >{emp.description}</p>
          </SwiperSlide>
      ))} */}

      <SwiperSlide><div className={`testimonial ${currentSlide === 0 ? 'active' : 'hidden'}`}>
    <img src="https://img.freepik.com/premium-photo/happy-female-chef-restaurant-setting-generative-by-ai_893571-15961.jpg" alt="User" className="user-image" />
    <h3 className="name">Sarah Ahmed</h3>
    <i className="feedback">"Loved the French roast. Perfectly balanced and rich. Will order again!"</i>
  </div>
  </SwiperSlide>
      <SwiperSlide>
      <div className={`testimonial ${currentSlide === 1 ? 'active' : 'hidden'}`}>
        <img src="https://img.freepik.com/premium-photo/professional-male-barista-making-caramel-iced-frappe-while-working-local-coffee-shop_73683-3347.jpg" alt="User" className="user-image" />
        <h3 className="name"> Ibrahim Wilson</h3>
        <i className="feedback">"Great espresso blend! Smooth and bold flavor. Fast shipping too!"</i>
        </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className={`testimonial ${currentSlide === 2 ? 'active' : 'hidden'}`}>
            <img src="https://img.freepik.com/premium-photo/portrait-smiling-male-barista-standing-coffee-shop_928748-216.jpg" alt="User" className="user-image" />
            <h3 className="name">Michael Brown</h3>
            <i className="feedback">"Fantastic mocha flavor. Fresh and aromatic. Quick shipping!"</i>
          </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className={`testimonial ${currentSlide === 3 ? 'active' : 'hidden'}`}>
            <img src="https://th.bing.com/th/id/OIP.KxFImVRRarRYiIJw4ANxigHaE8?rs=1&pid=ImgDetMain.jpg" alt="User" className="user-image" />
            <h3 className="name">Laila Habib</h3>
            <i className="feedback">"Excellent quality! Fresh beans and quick delivery. Highly recommend."</i>
          </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className={`testimonial ${currentSlide === 4 ? 'active' : 'hidden'}`}>
            <img src="https://th.bing.com/th/id/R.60e2648e00c7db10153ec63b262f13b0?rik=K6wxtKpqgTrC4Q&riu=http%3a%2f%2fwww.dannyelwes.com%2fimages%2fportraits%2fPortraits-Chefs-001.jpg&ehk=xobxNnsjBKRs4OET%2b3pVTKjGVMQi6PXXF4S7u7SxR50%3d&risl=&pid=ImgRaw&r=0.jpg" alt="User" className="user-image" />
            <h3 className="name">Anthony Thompson</h3>
            <i className="feedback">"Best decaf I've tried! Smooth and flavorful. Arrived promptly."</i>
          </div>
      </SwiperSlide>
    </Swiper>
  </>


    // <section className="testimonials-section" id="testimonials">
    //   <h2 className="section-title">Testimonials</h2>
    //   <div className="section-content">
    //     <Slider {...settings}>
    //       <div className={`testimonial ${currentSlide === 0 ? 'active' : 'hidden'}`}>
    //         <img src="https://img.freepik.com/premium-photo/happy-female-chef-restaurant-setting-generative-by-ai_893571-15961.jpg" alt="User" className="user-image" />
    //         <h3 className="name">Sarah Johnson</h3>
    //         <i className="feedback">"Loved the French roast. Perfectly balanced and rich. Will order again!"</i>
    //       </div>
    //       <div className={`testimonial ${currentSlide === 1 ? 'active' : 'hidden'}`}>
    //         <img src="https://img.freepik.com/premium-photo/professional-male-barista-making-caramel-iced-frappe-while-working-local-coffee-shop_73683-3347.jpg" alt="User" className="user-image" />
    //         <h3 className="name">James Wilson</h3>
    //         <i className="feedback">"Great espresso blend! Smooth and bold flavor. Fast shipping too!"</i>
    //       </div>
          // <div className={`testimonial ${currentSlide === 2 ? 'active' : 'hidden'}`}>
          //   <img src="https://img.freepik.com/premium-photo/portrait-smiling-male-barista-standing-coffee-shop_928748-216.jpg" alt="User" className="user-image" />
          //   <h3 className="name">Michael Brown</h3>
          //   <i className="feedback">"Fantastic mocha flavor. Fresh and aromatic. Quick shipping!"</i>
          // </div>
    //       <div className={`testimonial ${currentSlide === 3 ? 'active' : 'hidden'}`}>
    //         <img src="https://th.bing.com/th/id/OIP.KxFImVRRarRYiIJw4ANxigHaE8?rs=1&pid=ImgDetMain.jpg" alt="User" className="user-image" />
    //         <h3 className="name">Emily Harris</h3>
    //         <i className="feedback">"Excellent quality! Fresh beans and quick delivery. Highly recommend."</i>
    //       </div>
          // <div className={`testimonial ${currentSlide === 4 ? 'active' : 'hidden'}`}>
          //   <img src="https://th.bing.com/th/id/R.60e2648e00c7db10153ec63b262f13b0?rik=K6wxtKpqgTrC4Q&riu=http%3a%2f%2fwww.dannyelwes.com%2fimages%2fportraits%2fPortraits-Chefs-001.jpg&ehk=xobxNnsjBKRs4OET%2b3pVTKjGVMQi6PXXF4S7u7SxR50%3d&risl=&pid=ImgRaw&r=0.jpg" alt="User" className="user-image" />
          //   <h3 className="name">Anthony Thompson</h3>
          //   <i className="feedback">"Best decaf I've tried! Smooth and flavorful. Arrived promptly."</i>
          // </div>
    //     </Slider>
    //   </div>
    // </section>
  );
};

export default Testimonials_section;