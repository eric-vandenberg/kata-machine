export default class MinHeap {
    public length: number;
    private data: number[];

    constructor() {
        this.length = 0;
        this.data = [];
    }

    insert(value: number): void {
        this.data[this.length] = value;
        this.heapifyUp(this.length);
        this.length++;
    }

    // poll or pop or delete
    delete(): number {
        if (this.length === 0) {
            return -1;
        }

        const remove = this.data[0];
        this.length--;

        if (this.length === 0) {
            this.data = [];
            return remove;
        }

        this.data[0] = this.data[this.length];
        this.heapifyDown(0);

        return remove;
    }

    private heapifyDown(idx: number): void {
        const leftIdx = this.leftChild(idx);
        const rightIdx = this.rightChild(idx);

        if (leftIdx >= this.length || idx >= this.length) {
            return;
        }

        const leftValue = this.data[leftIdx];
        const rightValue = this.data[rightIdx];
        const value = this.data[idx];

        if (leftValue > rightValue && value > rightValue) {
            this.data[idx] = rightValue;
            this.data[rightIdx] = value;
            this.heapifyDown(rightIdx);
        } else if (rightValue > leftValue && value > leftValue) {
            this.data[idx] = leftValue;
            this.data[leftIdx] = value;
            this.heapifyDown(leftIdx);
        }
    }

    private heapifyUp(idx: number): void {
        if (idx === 0) {
            return;
        }

        const parent = this.parent(idx);
        const parentValue = this.data[parent];
        const value = this.data[idx];

        if (parentValue > value) {
            this.data[idx] = parentValue;
            this.data[parent] = value;

            this.heapifyUp(parent)
        }
    }

    private parent(idx: number): number {
        return Math.floor((idx - 1) / 2);
    }

    private leftChild(idx: number): number {
        return idx * 2 + 1;
    }

    private rightChild(idx: number): number {
        return idx * 2 + 2;
    }
}
