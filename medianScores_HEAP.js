const medianScores = scores => {
    const heapMax = [];
    const heapMin = [];
    
    return scores.map(score => {
        if (heapMax.length > heapMin.length) {
            if (score >= heapMax[0]) {
                pushHeap(heapMin, cmpMin, score);
            } else {
                pushHeap(heapMin, cmpMin, heapMax[0]);
                popHeap(heapMax, cmpMax);
                pushHeap(heapMax, cmpMax, score);
            }
        } else {
            if (heapMax.length === 0 || score <= heapMin[0]) {
                pushHeap(heapMax, cmpMax, score);
            } else {
                pushHeap(heapMax, cmpMax, heapMin[0]);
                popHeap(heapMin, cmpMin);
                pushHeap(heapMin, cmpMin, score);
            }
        }
        return heapMax.length > heapMin.length
            ? heapMax[0]
            : Math.ceil((heapMax[0] + heapMin[0]) / 2);
    });
};

const cmpMax = (a, b) => a > b;
const cmpMin = (a, b) => a < b;

const pushHeap = (heap, cmp, value) => {
    let i = heap.length;
    while (i > 0) {
        const parentIdx = Math.floor((i+1) / 2) - 1;
        if (!cmp(value, heap[parentIdx])) break;
        heap[i] = heap[parentIdx];
        i = parentIdx;
    }
    heap[i] = value;
};

const popHeap = (heap, cmp) => {
    let i = 0;
    while (i < heap.length) {
        const j = (i+1) * 2 - 1;
        if (j >= heap.length) break;
        const childIdx = j+1 === heap.length || cmp(heap[j], heap[j+1]) ? j : j+1;
        heap[i] = heap[childIdx];
        i = childIdx;
    }
    const value = heap.pop();
    if (i >= heap.length) return;
    while (i > 0) {
        const parentIdx = Math.floor((i+1) / 2) - 1;
        if (!cmp(value, heap[parentIdx])) break;
        heap[i] = heap[parentIdx];
        i = parentIdx;
    }
    heap[i] = value;
};
