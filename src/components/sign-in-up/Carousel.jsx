import { PRIMARY_900, PRIMARY_700, PRIMARY_100 } from "@constants/colors";
import { Autoplay, Pagination, Mousewheel, Keyboard } from "swiper";
import { CarouselData } from "@meta/sign-in-up/sign-in-up-carousel";
import { Swiper, SwiperSlide } from "swiper/react";
import { H3, P } from "@common/Headings";
import styled from "styled-components";
import FlexBox from "@common/FlexBox";
// Import Swiper React CSS styles
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "swiper/css";

const SwiperFlex = styled(Swiper)`
  padding-bottom: 2.5rem;
  max-width: 32.8125rem;
  margin: 0;
  position: relative;

  & > .swiper-pagination {
    padding: 0 1.25rem;
    display: flex;
    gap: 0.625rem;
    width: fit-content;

    & > .swiper-pagination-bullet {
      background-color: ${PRIMARY_900};
      margin: 0;

      &:hover {
        background-color: ${PRIMARY_700};
      }

      @media (max-width: 768px) {
        width: 0.35rem;
        height: 0.35rem;
      }
    }

    & > .swiper-pagination-bullet-active {
      width: 0.75rem;
      border-radius: 0.3125rem;

      @media (max-width: 768px) {
        width: 0.4375rem;
      }
    }

    @media (max-width: 768px) {
      gap: 0.3125rem;
      padding: 0 0.75rem;
    }
  }

  &:before,
  &:after {
    content: "";
    display: block;
    position: absolute;
    height: calc(100% - 2.5rem);
    width: 1.25rem;
    top: 0;
    z-index: 2;

    @media (max-width: 768px) {
      height: calc(100% - 2rem);
      width: 0.75rem;
    }
  }

  &:before {
    left: 0;
    background: linear-gradient(to left, transparent, ${PRIMARY_100} 100%);
  }

  &:after {
    right: 0;
    background: linear-gradient(to right, transparent, ${PRIMARY_100} 100%);
  }

  @media (max-width: 768px) {
    padding-bottom: 2rem;
  }
`;

const SwiperSlideFlex = styled(SwiperSlide)`
  display: flex;
  flex-direction: column;
  cursor: grab;
  gap: 0.875rem;
  padding: 0 1rem;

  &:active {
    cursor: grabbing;
  }

  @media (max-width: 768px) {
    padding: 0 0.75rem;
  }
`;

export const Carousel = ({ module }) => {
  const renderCarousel = ({ mobileonly, desktoponly }) => {
    return (
      CarouselData[module] && (
        <FlexBox
          width="100%"
          widthmobile="70%"
          height="100%"
          heightmobile="fit-content"
          borderadius="0 0 2.5rem 0"
          padding="8% 5%"
          paddingmobile="5% 2% 2%"
          align="flex-start"
          backgroundcolor={PRIMARY_100}
          mobileonly={mobileonly}
          desktoponly={desktoponly}
        >
          <SwiperFlex
            autoHeight={mobileonly ? true : false}
            pagination={{
              clickable: true,
            }}
            keyboard={{
              enabled: true,
            }}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            speed={700}
            slidesPerView={mobileonly ? 1 : 1.5}
            spaceBetween={0}
            loop={true}
            grabCursor={true}
            mousewheel={true}
            modules={[Pagination, Autoplay, Mousewheel, Keyboard]}
            className="mySwiper"
          >
            {CarouselData[module]?.[mobileonly ? "mobile" : "desktop"].map(
              (data, index) => (
                <SwiperSlideFlex key={index}>
                  <H3 bold>{data.heading}</H3>
                  <P>{data.subheading}</P>
                </SwiperSlideFlex>
              )
            )}
          </SwiperFlex>
        </FlexBox>
      )
    );
  };

  return (
    <>
      {renderCarousel({ mobileonly: true, desktoponly: false })}
      {renderCarousel({ mobileonly: false, desktoponly: true })}
    </>
  );
};
