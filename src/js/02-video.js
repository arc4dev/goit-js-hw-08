import Vimeo from '@vimeo/player';
import _, { throttle } from 'lodash';

const iframe = document.getElementById('vimeo-player');
const player = new Vimeo(iframe);

const setLastTime = () => {
  player.setCurrentTime(+localStorage.getItem('videoplayer-current-time') || 0);
};

setLastTime();

//events
player.on(
  'timeupdate',
  _.throttle(e => {
    console.log(e.seconds);
    localStorage.setItem('videoplayer-current-time', e.seconds);
  }, 1000)
);
