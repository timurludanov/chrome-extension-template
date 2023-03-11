function delay(ms: number): Promise<number> {
  return new Promise(resolve => setTimeout(resolve, ms));
}

export default delay;