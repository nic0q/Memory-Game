function shuffle(o) {
  for (
    var j, x, i = o.length;
    i;
    j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x
  );
  return o
}

export default function shufflePositions(n) {
  const array = Array.from(Array(n).keys())
  return shuffle(array)
}
