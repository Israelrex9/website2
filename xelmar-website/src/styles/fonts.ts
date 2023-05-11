import { Syne, Work_Sans } from "next/font/google";
import localFont from 'next/font/local';

const syne = Syne();
const work = Work_Sans();
const conthrax = localFont({ src: './conthrax-sb.otf' });

export { syne, work, conthrax };