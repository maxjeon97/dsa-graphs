import { UGraphNodeStr } from "../common/graph";
import { Queue } from "../common/queue";

/** Number of fewest edges between start and end.
 * If no path can be found, return Infinity. */

function fewestEdges(start: UGraphNodeStr, sought: UGraphNodeStr): number {
  const toSearch = new Queue<[UGraphNodeStr, number]>([[start, 0]]);
  const seenSet = new Set<UGraphNodeStr>([start]);

  while (!toSearch.isEmpty()) {
    const [currNode, currDistance] = toSearch.dequeue();

    if (currNode === sought) return currDistance;

    for (const node of currNode.adjacent) {
      if (!seenSet.has(node)) {
        toSearch.enqueue([node, currDistance + 1]);
        seenSet.add(node);
      }
    }
  }

  return Infinity;
}

export { fewestEdges };
