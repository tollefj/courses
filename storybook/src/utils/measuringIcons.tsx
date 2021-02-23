import current from '../assets/measuring/current.png';
import depth from '../assets/measuring/depth.png';
import wave from '../assets/measuring/wave.png';
import wind from '../assets/measuring/wind.png';

const getImage = (image: string, alt: string) => <img src={image} alt={alt} />

export const measuringIcons = {
    'current': getImage(current, 'current'),
    'depth': getImage(depth, 'depth'),
    'wave': getImage(wave, 'wave'),
    'wind': getImage(wind, 'wind'),
}