import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation as SwiperNavigation, Pagination as SwiperPagination } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

import Banners from '../../mocks/carrossel.json'
import styled from 'styled-components'

const BannerContainerStyled = styled.div`
  max-width: 100%;
  width: 100%;
  margin: 0 auto 72px;
  padding: 0;
  .swiper-button-prev, .swiper-button-next {
    background-image: url('/assets/arrow.svg');
    width: 14px;
    height: 18px;
  }
  .swiper-button-prev::after, .swiper-button-next::after {
    content: '';
  }
  .swiper-button-prev {
    transform: rotate(180deg);
  }
  .swiper-pagination .swiper-pagination-bullet {
    background-color: #fff;
    border-radius: 0;
    width: 30px;
    height: 3px;
  }

`

const BannerWrapStyled = styled.div`
  position: relative;
`

const BannerTextContentStyled = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  top: 57%;
  bottom: 24px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const ImgStyled = styled.img`
  max-width: 100%;
  margin: 0;
  width: 100%;
  /* max-height: 415px; */
  object-fit: cover;
`

const BannerTitleStyled = styled.h2`
  font-size: 32px;
  font-weight: 400;
  color: white;
  margin: 0 0 8px;
`

const BannerDescriptionStyled = styled.p`
  color: #fff;
  font-size: 20px;
  margin: 0;
`

const BannerSlider = () => {
  return (
    <BannerContainerStyled>
      <Swiper
        modules={[ SwiperNavigation, SwiperPagination ]}
        spaceBetween={0}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        onSlideChange={() => console.log('slide change')}
      >
        {Banners.map(banner => {
          return (
            <SwiperSlide key={banner.id}>
              <BannerWrapStyled>
                <ImgStyled src={banner.src} alt={banner.alt} />
                {banner.itemCarrossel && <BannerTextContentStyled>
                  <BannerTitleStyled>
                    { banner.itemCarrossel.titulo }
                  </BannerTitleStyled>
                  <BannerDescriptionStyled>
                    { banner.itemCarrossel.subtitulo }
                  </BannerDescriptionStyled>
                </BannerTextContentStyled>}
              </BannerWrapStyled>
            </SwiperSlide>
          )
        })}
      </Swiper>
    </BannerContainerStyled>
  )
}

export default BannerSlider