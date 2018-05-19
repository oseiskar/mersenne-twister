function CRandGenerator(seed) {
  if (seed === undefined) {
    seed = new Date().getTime();
  }
  let next = new Long(seed, 0, true);

  return () => {
    //next = (next * 1103515245 + 12345) % 4294967296;
    next = next.mul(1103515245).add(12345);
    next = new Long(next.getLowBitsUnsigned(), 0, true);
    return next.getLowBitsUnsigned();
    //return Math.floor(next.getLowBitsUnsigned() / 65536) % 32768;
    //return Math.floor(next / 65536) % 32768;
  };
}
