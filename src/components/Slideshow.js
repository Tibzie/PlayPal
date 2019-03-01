import React from 'react';
import { UncontrolledCarousel } from 'reactstrap';

const items = [
  {
    src: './images/children.jpg',
    altText: 'Happy Kids',
    caption: 'Be excited just like Little Timmy and Sandy',
    header: 'Happy Kids'
  },
  {
    src: './images/video-controller.jpg',
    altText: 'Be a game changer!',
    caption: 'Release your inner gamer.',
    header: 'Be a game changer!'
  },
];

const Slideshow = () => <UncontrolledCarousel items={items} />;

export default Slideshow;