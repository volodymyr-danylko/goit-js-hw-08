import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const LOCAL_STORAGE_VIMEO_PLAYER_KEY = 'videoplayer-current-time';
const storageData = localStorage.getItem(LOCAL_STORAGE_VIMEO_PLAYER_KEY);

const player = new Player('vimeo-player');

if (storageData) {
  player.setCurrentTime(storageData);
}

function onPlay(data) {
  localStorage.setItem(LOCAL_STORAGE_VIMEO_PLAYER_KEY, JSON.stringify(data.seconds));
}

player.on('timeupdate', throttle(onPlay, 1000));
