import Link from 'next/link';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

const swiperOptions = {
        modules: [Autoplay, Pagination, Navigation],
        slidesPerView: 6,
        spaceBetween: 30,
        autoplay: {
            delay: 3500,
            disableOnInteraction: false,
        },
        loop: true,

				breakpoints:{
            320: {
                slidesPerView: 1,
                // spaceBetween: 30,
            },
            575: {
                slidesPerView: 1,
                // spaceBetween: 30,
            },
            767: {
                slidesPerView: 2,
                // spaceBetween: 30,
            },
            991: {
                slidesPerView: 3,
                // spaceBetween: 30,
            },
            1199: {
                slidesPerView: 4,
                // spaceBetween: 30,
            },
            1350: {
                slidesPerView: 6,
                // spaceBetween: 30,
            },
        }

        
    };
const Clients = () => {
    return (
        <>
        <section className="clients-section">
          <div className="sponsors-outer">
              <Swiper {...swiperOptions} className="clients-carousel owl-carousel owl-theme disable-navs">
                  {/* Clients Block */}
                  <SwiperSlide className="client-block">
                    <Link href="#"className="image">
                      <img src="images/clients/1.png" alt="Image"/>
                      <img src="images/clients/1-1.png" alt="Image"/>
                    </Link>
                  </SwiperSlide>
                  {/* Clients Block */}
                  <SwiperSlide className="client-block">
                    <Link href="#"className="image">
                      <img src="images/clients/2.png" alt="Image"/>
                      <img src="images/clients/2-1.png" alt="Image"/>
                    </Link>
                  </SwiperSlide>
                  {/* Clients Block */}
                  <SwiperSlide className="client-block">
                    <Link href="#"className="image">
                      <img src="images/clients/3.png" alt="Image"/>
                      <img src="images/clients/3-1.png" alt="Image"/>
                    </Link>
                  </SwiperSlide>
                  {/* Clients Block */}
                  <SwiperSlide className="client-block">
                    <Link href="#"className="image">
                      <img src="images/clients/4.png" alt="Image"/>
                      <img src="images/clients/4-1.png" alt="Image"/>
                    </Link>
                  </SwiperSlide>
                  {/* Clients Block */}
                  <SwiperSlide className="client-block">
                    <Link href="#"className="image">
                      <img src="images/clients/5.png" alt="Image"/>
                      <img src="images/clients/5-1.png" alt="Image"/>
                    </Link>
                  </SwiperSlide>
                  {/* Clients Block */}
                  <SwiperSlide className="client-block">
                    <Link href="#"className="image">
                      <img src="images/clients/6.png" alt="Image"/>
                      <img src="images/clients/6-1.png" alt="Image"/>
                    </Link>
                  </SwiperSlide>
                  {/* Clients Block */}
                  <SwiperSlide className="client-block">
                    <Link href="#"className="image">
                      <img src="images/clients/2.png" alt="Image"/>
                      <img src="images/clients/2-1.png" alt="Image"/>
                    </Link>
                  </SwiperSlide>
              </Swiper>
          </div>
        </section>
        </>
    );
};
export default Clients
