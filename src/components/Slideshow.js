import React from 'react';
import { UncontrolledCarousel } from 'reactstrap';

const items = [
  {
    src: './images/children.jpg',
    altText: 'Happy Kids',
    caption: 'Little Timmy and Sandy realised they can access to porn.',
    header: 'Happy Kids'
  },
  {
    src: './images/video-controller.jpg',
    altText: 'Be a game changer!',
    caption: 'Grab me hard, BITCH! Do it hard! That is the way I like it!',
    header: 'Be a game changer!'
  },
];

const Slideshow = () => <UncontrolledCarousel items={items} />;

export default Slideshow;