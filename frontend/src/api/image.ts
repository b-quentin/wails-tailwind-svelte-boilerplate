import type { IImage } from '../interfaces/image';
import request from './request';

const image = {
	getImage: () => request.get<IImage>('/breeds/image/random')
};

export default image;
