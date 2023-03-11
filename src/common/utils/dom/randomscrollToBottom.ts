import { random, delay } from '../proccess';

async function randomScrollToBottom(correct: number = 0, speed: number = 0, multiplier: number = 1): Promise<void> {
  const clHeight = document.body.clientHeight;

  const startPoint = random(0, clHeight - correct);
  const endPoint = random(startPoint, clHeight - correct);

  for (let i = 1; i <= endPoint * multiplier; ++i) {
    window.scroll(0, i);
    await delay(random(2, speed || 11));
  }
}

export default randomScrollToBottom;