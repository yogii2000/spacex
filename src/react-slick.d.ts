declare module 'react-slick' {
    import { Component } from 'react';
  
    interface Settings {
      dots?: boolean;
      infinite?: boolean;
      speed?: number;
      slidesToShow?: number;
      slidesToScroll?: number;
      arrows?: boolean;
      autoplay?: boolean;
      autoplaySpeed?: number;
      cssEase?: string;
      draggable?: boolean;
      easing?: string;
      fade?: boolean;
      pauseOnHover?: boolean;
      responsive?: Array<{
        breakpoint: number;
        settings: Settings;
      }>;
      [key: string]: any;
    }
  
    export default class Slider extends Component<Settings> {}
  }
  