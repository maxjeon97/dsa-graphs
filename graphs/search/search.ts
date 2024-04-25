import { Stack } from "../common/stack";
import { UGraphNodeStr } from "../graph/graph";
import { Queue } from "../common/queue";

/** Return array of nodes, in DFS order (recursive version)  */

function rDfs(
  start: UGraphNodeStr,
  result: string[] = [],
  visited = new Set([start])): string[] {

  result.push(start.value);

  for (const node of start.adjacent) {
    if (!visited.has(node)) {
      visited.add(node);
      result = rDfs(node, result, visited);
    }
  }

  return result;
}

/** Return array of nodes, in DFS order (iterative version)  */

function iDfs(start: UGraphNodeStr): string[] {
  const toSearch = new Stack<UGraphNodeStr>([start]);
  const seenSet = new Set<UGraphNodeStr>([start]);
  const seen = [];

  while (!toSearch.isEmpty()) {
    const currNode = toSearch.pop();

    seen.push(currNode.value);

    for (const node of currNode.adjacent) {
      if (!seenSet.has(node)) {
        toSearch.push(node);
        seenSet.add(node);
      }
    }
  }

  return seen;
}

/** Return array of nodes, in BFS order (iterative version)  */

function bfs(start: UGraphNodeStr): string[] {
  const toSearch = new Queue<UGraphNodeStr>([start]);
  const seenSet = new Set<UGraphNodeStr>([start]);
  const seen = [];

  while (!toSearch.isEmpty()) {
    const currNode = toSearch.dequeue();

    seen.push(currNode.value);

    for (const node of currNode.adjacent) {
      if (!seenSet.has(node)) {
        toSearch.enqueue(node);
        seenSet.add(node);
      }
    }
  }

  return seen;
}


export { iDfs, rDfs, bfs };