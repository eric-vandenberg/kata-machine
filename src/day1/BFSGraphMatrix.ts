export default function bfs(
  graph: WeightedAdjacencyMatrix,
  source: number,
  needle: number): number[] | null {

  const seen = new Array(graph.length).fill(false);
  const prev = new Array(graph.length).fill(-1);

  seen[source] = true;

  const q: number[] = [source];

  do {
    const curr = q.shift() as number;

    if (curr === needle) {
      break;
    }

    const adjs = graph[curr];

    for (let i = 0; i < adjs.length; ++i) {
      if (adjs[i] === 0) {
        continue;
      }

      if (seen[i]) {
        continue;
      }

      seen[i] = true;
      prev[i] = curr;
      q.push(i); // or unshift
    }
  } while (q.length)

  if (prev[needle] === -1) {
    return null;
  }

  let current = needle;
  const out: number[] = [];

  while (prev[current] !== -1) {
    out.push(current);

    current = prev[current];
  }

  return [source].concat(out.reverse());
}
