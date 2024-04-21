/**
 * Preorder
 * visitNode()
 * recurseLeft()
 * recurseRight()
 * @param curr 
 * @param path 
 * @returns 
 */

function walk(curr: BinaryNode<number | null>, path: number[]): number[] {
  // Base Case
  if (!curr) {
    return path;
  }

  // visit
  path.push(curr.value!);

  walk(curr.left!, path);
  walk(curr.right!, path);

  return path;
}

export default function pre_order_search(head: BinaryNode<number>): number[] {
  return walk(head, []);
}
