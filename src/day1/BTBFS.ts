export default function bfs(head: BinaryNode<number>, needle: number): boolean {
  const queue: (BinaryNode<number | null>)[] = [head];

  while (queue.length) {
    const curr = queue.shift() as BinaryNode<number | null>;

    if (curr.value === needle) {
      return true;
    }

    if (curr.left) {
      queue.push(curr.left);
    }

    if (curr.right) {
      queue.push(curr.right);
    }
  }

  return false;
}
