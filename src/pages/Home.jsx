import { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
// swiper js import 
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';


function TextWelcome() {
  return (
    <p className="con text-center py-3 m-0">
      Lorem Ipsum is simply dummy text of the printing 💥
    </p>
  )
}

function MenuProduk() {
  return (
    <div className='bg-transparent d-flex justify-content-center'>
        <div className="con d-flex justify-content-center con-menu-produk py-3">
          <button className='btn-menu-produk'>
            <img src="/fol.svg" className='img-menu-produk' alt="" />
            <p className='bg-transparent text-primary text-menu m-0 fw-bold'>Followers</p>
          </button>
          <button className='btn-menu-produk'>
            <img src="/liker.svg" className='img-menu-produk' alt="" />
            <p className='bg-transparent text-primary text-menu m-0 fw-bold'>Likers</p>
          </button>
          <button className='btn-menu-produk'>
            <img src="/view.svg" className='img-menu-produk' alt="" />
            <p className='bg-transparent text-primary text-menu m-0 fw-bold'>Viewers</p>
          </button>
          <button className='btn-menu-produk'>
            <img src="/comment.svg" className='img-menu-produk' alt="" />
            <p className='bg-transparent text-primary text-menu m-0 fw-bold'>Comments</p>
          </button>
        </div>
      </div>
  )
}

function Banner() {
  return (
    <div className="banner pb-5 py-3">
      <div className='con my-3'>
      <Swiper navigation={true} modules={[Navigation]}  autoplayDelay={2500} centeredSlides={true} autoplay={true} loop={true} className="swiper-banner">
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper>
       </div>
    </div>
  )
}

function CardProdukPopuler() {
  return (
    <div className="card-produk pb-3">
      <img src="https://seeklogo.com/images/T/tiktok-icon-logo-1CB398A1BD-seeklogo.com.png" className='img-produk' alt="" />
      <p className='m-0 mx-2 bg-transparent mt-2'>200 Follower tiktok</p>
      <div className='d-flex bg-transparent'>
      <div className='bg-dangersec info-danger mx-2'>
        <p className='text-danger bg-transparent'>-20%</p>
      </div>
      <div className='bg-secondary info-primary mx-2'>
        <p className='text-primary bg-transparent'>Instan</p>
      </div>
      </div>
      <div className='bg-transparent px-2 mt-2 py-1 d-flex gap-1 info-terjual'>
        <span className="bi bi-cart-check text-terjual bg-transparent"></span>
        <p className='bg-transparent text-terjual'>Terjual +600</p>
      </div>
    </div>
  )
}

function CardProdukBiasa() {
  return (
    <div className="card-produk pb-3">
      <img src="https://seeklogo.com/images/T/tiktok-icon-logo-1CB398A1BD-seeklogo.com.png" className='img-produk' alt="" />
      <p className='m-0 mx-2 bg-transparent mt-2'>200 Follower tiktok</p>
        <p className='text-danger bg-transparent mx-2' >Rp 20.000</p>
    </div>
  )
}

function ProdukPopuler() {
  return (
    <div className="produk-populer con mt-5 py-3">
      <h3 className="m-0">Produk populer 🔥</h3>
      <div className='bg-transparent d-flex flex-wrap mt-2 gap-3'>
      <CardProdukPopuler />
      <CardProdukPopuler />
      <CardProdukPopuler />
      <CardProdukPopuler />
      <CardProdukPopuler />
      <CardProdukPopuler />
      </div>
    </div>
  )
}

function SuntikIg() {
  return (
    <div className="produk-populer con mt-5 py-3">
      <h3 className="m-0">Suntik like, followers, view di Instagram !</h3>
      <div className='bg-transparent d-flex flex-wrap mt-2 gap-3'>
      <CardProdukBiasa />
      <CardProdukBiasa />
      <CardProdukBiasa />
      <CardProdukBiasa />
      <CardProdukBiasa />
      </div>
    </div>
  )
}

function SuntikTt() {
  return (
    <div className="produk-populer con mt-5 py-3">
      <h3 className="m-0">Suntik like, followers, view di Tiktok !</h3>
      <div className='bg-transparent d-flex flex-wrap mt-2 gap-3'>
      <CardProdukBiasa />
      <CardProdukBiasa />
      <CardProdukBiasa />
      <CardProdukBiasa />
      <CardProdukBiasa />
      </div>
    </div>
  )
}

function TentangSunmed() {
  return (
    <div className="w-100 tentang-sunmed py-3">
      <h3 className='m-0 mt-3 bg-transparent text-center'>Tentang SunMed</h3>
      <p className='bg-transparent con text-center'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur modi eaque magnam delectus dolore. Earum a soluta saepe odit ipsum, ad illo perferendis eaque sunt nemo minima temporibus eveniet reiciendis.</p>
      <div className='d-flex justify-content-center info-ben-con align-items-center gap-2 py-3 bg-transparent mt-3'>
        <div className='bg-secondary info-benefit'>
        <i class="bi bg-transparent text-primary bi-currency-dollar"></i>
        </div>
        <div className='bg-transparent'>
         <h3 className='m-0 mt-3 bg-transparent'>Harga Terjangkau</h3>
         <p className='bg-transparent'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, aspernatur!</p>
        </div>
      </div>
      <div className='d-flex justify-content-center info-ben-con align-items-center gap-2 py-3 bg-transparent mt-3'>
        <div className='bg-secondary info-benefit'>
        <i class="bi bg-transparent text-primary bi-hourglass-bottom"></i>
        </div>
        <div className='bg-transparent'>
         <h3 className='m-0 mt-3 bg-transparent'>Proses Instan</h3>
         <p className='bg-transparent'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, aspernatur!</p>
        </div>
      </div>
      <div className='d-flex justify-content-center info-ben-con align-items-center gap-2 py-3 bg-transparent mt-3'>
        <div className='bg-secondary info-benefit'>
        <i class="bi bg-transparent text-primary bi-file-medical"></i>
        </div>
        <div className='bg-transparent'>
         <h3 className='m-0 mt-3 bg-transparent'>Bergaransi</h3>
         <p className='bg-transparent'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, aspernatur!</p>
        </div>
      </div>
    </div>
  )
}

function Home() {
  return (
    <>
     <Navbar />
     <main className=''>
      <TextWelcome />
      <Banner />
      <MenuProduk />
      <ProdukPopuler />
      <SuntikIg />
      <SuntikTt />
      <TentangSunmed />
     </main>
     <Footer />
    </>
  )
}

export default Home
