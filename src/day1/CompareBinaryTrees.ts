function walk(curr: BinaryNode<number> | null, path: number[]): number[] {
  if (!curr) {
    return path;
  }

  path.push(curr.value);

  walk(curr.left, path);
  walk(curr.right, path);

  return path;
}

function compare(a: BinaryNode<number> | null, b: BinaryNode<number> | null): boolean {
  const a_path = walk(a, []);
  const b_path = walk(b, []);
  let result: boolean = false;

  for (let i = 0; i < a_path.length; ++i) {
    if (a_path[i] === b_path[i]) {
      result = true;
      continue;
    }

    result = false;
  }

  return result;
}

export default function compareRecurse(a: BinaryNode<number> | null, b: BinaryNode<number> | null): boolean {
  if (a === null && b === null) {
    return true;
  }

  if (a === null || b === null) {
    return false;
  }

  if (a.value !== b.value) {
    return false;
  }

  return compareRecurse(a.left, b.left) && compareRecurse(a.right, b.right);
}
