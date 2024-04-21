type Node<T> = {
    value: T,
    next?: Node<T>,
    prev?: Node<T>
}

export default class DoublyLinkedList<T> {
    public length: number;
    private head?: Node<T>;
    private tail?: Node<T>;

    constructor() {
        this.length = 0;
        this.head = undefined;
        this.tail = undefined;
    }

    public debug() {
        let current = this.head;
        let out = '';

        for (let i = 0; i < this.length; ++i) {
            out += `${i} => ${current?.value}`;
            current = current?.next;
        }

        console.log(out);
    }

    prepend(item: T): void {
        const node = { value: item } as unknown as Node<T>;

        this.length++;

        if (!this.head) {
            this.head = this.tail = node;
            return;
        }

        node.next = this.head;
        this.head.prev = node;

        this.head = node;

    }

    insertAt(item: T, idx: number): void {
        if (idx > this.length) {
            throw new Error('oops');
        } else if (idx === 0) {
            this.prepend(item);
        } else if (idx === this.length) {
            this.append(item);
        }

        this.length++;
        const current = this.getAt(idx) as Node<T>;
        const node = { value: item } as unknown as Node<T>;

        node.next = current;
        node.prev = current.prev;
        current.prev = node;

        if (node.prev) {
            node.prev.next = node;
        }
    }

    append(item: T): void {
        const node = { value: item } as unknown as Node<T>;

        this.length++;

        if (!this.tail) {
            this.tail = this.head = node;
            return;
        }

        node.prev = this.tail;
        this.tail.next = node;

        this.tail = node;
    }

    remove(item: T): T | undefined {
        let current = this.head;
        for (let i = 0; current && i < this.length; ++i) {
            if (current.value === item) {
                break;
            }

            current = current.next;
        }

        if (!current) {
            return undefined;
        }

        return this.removeNode(current);
    }

    get(idx: number): T | undefined {
        return this.getAt(idx)?.value;
    }

    removeAt(idx: number): T | undefined {
        const current = this.getAt(idx) as Node<T>;

        if (!current) {
            return undefined;
        }

        return this.removeNode(current);
    }

    private removeNode(node: Node<T>): T | undefined {
        this.length--;

        if (this.length === 0) {
            const last = this.head?.value;
            this.head = this.tail = undefined;
            return last;
        }

        if (node.prev) {
            node.prev.next = node.next;
        }

        if (node.next) {
            node.next.prev = node.prev;
        }

        if (node === this.head) {
            this.head = node.next;
        }

        if (node === this.tail) {
            this.tail = node.prev;
        }

        node.prev = node.next = undefined;

        return node.value;
    }

    private getAt(idx: number): Node<T> | undefined {
        let current = this.head;

        for (let i = 0; current && i < idx; ++i) {
            current = current.next;
        }

        return current;
    }
}
