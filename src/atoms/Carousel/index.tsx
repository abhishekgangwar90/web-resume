import React from 'react';
import Slider from 'react-slick';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';

type Props = {
  children: React.ReactNode;
  settings?: any;
};

const Carousel: React.FunctionComponent<Props> = ({
  children,
  settings,
  ...otherProps
}: Props) => {
  return (
    <Slider {...settings} {...otherProps}>
      {children}
    </Slider>
  );
};

const Next = (props: any) => {
  const { className, style, onClick } = props;
  return (
    <button type="button" className={className} style={style} onClick={onClick}>
      <NavigateNextIcon />
    </button>
  );
};

Carousel.defaultProps = {
  settings: {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    nextArrow: <Next />,
    // fade: true,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: false,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          swipeToSlide: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          swipeToSlide: true,
        },
      },
    ],
  },
};

export default Carousel;
