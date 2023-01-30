import CarParking from "@assets/sign-in-up/car-parking.png";
import CommonImage from "@common/CommonImage";
import FlexBox from "@components/common/FlexBox";
import styled from "styled-components";
import { PRIMARY_100, PRIMARY_900, WHITE } from "@constants/colors";
import { H3, P } from "@components/common/Headings";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";
// import required modules
import { Autoplay, Pagination } from "swiper";
import { CarouselData } from "@meta/sign-in-up";

const SwiperFlex = styled(Swiper)`
  /* width: 90%; */
  padding-bottom: 2.5rem;
  max-width: 26.25rem;
  margin: 0;
  position: relative;

  & > .swiper-pagination {
    padding: 0 1.25rem;
    display: flex;
    gap: 0.625rem;

    & > .swiper-pagination-bullet {
      background-color: ${PRIMARY_900};
      margin: 0;
    }

    & > .swiper-pagination-bullet-active {
      width: 0.75rem;
      border-radius: 0.3125rem;
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
  }

  &:before {
    left: 0;
    background: linear-gradient(to left, transparent, ${PRIMARY_100} 100%);
  }

  &:after {
    right: 0;
    background: linear-gradient(to right, transparent, ${PRIMARY_100} 100%);
  }
`;

const SwiperSlideFlex = styled(SwiperSlide)`
  display: flex;
  flex-direction: column;
  cursor: grab;
  gap: 0.875rem;
  padding: 0 1.25rem;

  &:active {
    cursor: grabbing;
  }
`;

const SignInUpWrapper = styled(FlexBox)`
  width: 40%;
  height: 100%;

  & > ${FlexBox} {
    background-color: ${PRIMARY_100};
  }
`;

const SignInUp = () => {
  return (
    <SignInUpWrapper direction="column" justify="flex-end" align="center">
      <FlexBox
        width="100%"
        height="100%"
        borderadius="0 0 2.5rem 0"
        padding="8% 0 8% 5%"
        align="center"
      >
        <SwiperFlex
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          speed={800}
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          modules={[Pagination, Autoplay]}
          className="mySwiper"
        >
          {CarouselData.map((data, index) => (
            <SwiperSlideFlex key={index}>
              <H3 bold>{data.heading}</H3>
              <P>{data.subheading}</P>
            </SwiperSlideFlex>
          ))}
        </SwiperFlex>
      </FlexBox>
      <FlexBox width="100%" height="fit-content" justify="flex-end">
        <CommonImage
          src={CarParking}
          alt="Park Here"
          objectfit="scale-down"
          objectposition="right bottom"
          backgroundcolor="#ffffff"
          height="fit-content"
          width="95%"
          borderadius="2.5rem 0 0"
          alignself="flex-end"
          priority={false}
          padding="5% 0 0 5%"
          quality={40}
        />
      </FlexBox>
    </SignInUpWrapper>
  );
};

export default SignInUp;
