/**
 * Postorder
 * recurseLeft()
 * recurseRight()
 * visitNode()
 * @param curr 
 * @param path 
 * @returns 
 */

function walk(curr: BinaryNode<number | null>, path: number[]): number[] {
  // Base Case
  if (!curr) {
    return path;
  }

  walk(curr.left!, path);
  walk(curr.right!, path);

  // visit
  path.push(curr.value!);

  return path;
}

export default function post_order_search(head: BinaryNode<number>): number[] {
  return walk(head, []);
}
