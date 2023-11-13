import React, { useEffect } from 'react';
import CodeBlock from '@theme/CodeBlock';
import FeatureBlock from '@site/src/components/FeatureBlock';
import Swiper from 'swiper/bundle';

export default function Coverflow() {
  useEffect(() => {
    var coverflow = new Swiper('#coverflowExample', {
      effect: 'coverflow',
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: 'auto',
      coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows : true,
      },
      pagination: {
        el: '#coverflowExample .swiper-pagination',
      },
    });

    return () => {
      // Do proper cleanup on unmount
      coverflow.destroy();
    };
  }, []);
  return (
    <FeatureBlock>
      <FeatureBlock.Body>
        <style>{`
          #coverflowExample.swiper-container {
            width: 100%;
            padding-top: 50px;
            padding-bottom: 50px;
          }
          #coverflowExample .swiper-slide {
            background-position: center;
            background-size: cover;
            width: 300px;
            height: 300px;
          }
        `}</style>

        <div id="coverflowExample" className="swiper swiper-container">
          <div className="swiper-wrapper">
            <div className="swiper-slide" style={{ backgroundImage: 'url(https://picsum.photos/300/300)' }}></div>
            <div className="swiper-slide" style={{ backgroundImage: 'url(https://picsum.photos/id/237/300/300)' }}></div>
            <div className="swiper-slide" style={{ backgroundImage: 'url(https://picsum.photos/id/1062/300/300)' }}></div>
            <div className="swiper-slide" style={{ backgroundImage: 'url(https://picsum.photos/id/1075/300/300)' }}></div>
            <div className="swiper-slide" style={{ backgroundImage: 'url(https://picsum.photos/id/1040/300/300)' }}></div>
            <div className="swiper-slide" style={{ backgroundImage: 'url(https://picsum.photos/id/1027/300/300)' }}></div>
            <div className="swiper-slide" style={{ backgroundImage: 'url(https://picsum.photos/id/1015/300/300)' }}></div>
            <div className="swiper-slide" style={{ backgroundImage: 'url(https://picsum.photos/id/1039/300/300)' }}></div>
            <div className="swiper-slide" style={{ backgroundImage: 'url(https://picsum.photos/id/1043/300/300)' }}></div>
          </div>
          <div className="swiper-pagination"></div>
        </div>
      </FeatureBlock.Body>
      <FeatureBlock.Footer>
        <CodeBlock
          className="!mb-0"
          language="markup"
          title=""
          showLineNumbers
        >
{`var swiper = new Swiper('.swiper-container', {
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  },
  spaceBetween: 0
});
`}
        </CodeBlock>
      </FeatureBlock.Footer>
    </FeatureBlock>
  );
}
