/**
 * Inorder
 * recurseLeft()
 * visitNode()
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

  walk(curr.left!, path);

  // visit
  path.push(curr.value!);

  walk(curr.right!, path);

  return path;
}

export default function in_order_search(head: BinaryNode<number>): number[] {
  return walk(head, []);
}
