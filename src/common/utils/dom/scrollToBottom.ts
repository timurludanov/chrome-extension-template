import { delay } from '../proccess';

async function scrollToButtom(start: number, step: number): Promise<number> {
  for (let i = start; i <= start + step; i += 3) {
    window.scroll(0, i);
    await delay(1);
  }

  return window.scrollY;
}

export default scrollToButtom;
