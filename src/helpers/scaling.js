import {SCREEN_HEIGHT, SCREEN_WIDTH} from './DeviceInfo';

// Guideline sizes are based on standard "iPhone 8 Plus" screen mobile device
const BASE_WIDTH = 414;
const BASE_HEIGHT = 736;

const Scaling = {
  verticalScale: size => (SCREEN_HEIGHT / BASE_HEIGHT) * size,
  horizontalScale: size => (SCREEN_WIDTH / BASE_WIDTH) * size,
};

export {Scaling};