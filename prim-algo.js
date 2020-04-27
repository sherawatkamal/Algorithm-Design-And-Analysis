primsMST() {
   const MST = new Graph();
   if (this.nodes.length === 0) {
      return MST;
   }



   let s = this.nodes[0];



   let edgeQueue = new PriorityQueue(this.nodes.length * this.nodes.length);
   let explored = new Set();
   explored.add(s);
   MST.addNode(s);



   this.edges[s].forEach(edge => {
      edgeQueue.enqueue([s, edge.node], edge.weight);
   });



   let currentMinEdge = edgeQueue.dequeue();
   while (!edgeQueue.isEmpty()) {

      while (!edgeQueue.isEmpty() && explored.has(currentMinEdge.data[1])) {
         currentMinEdge = edgeQueue.dequeue();
      }
      let nextNode = currentMinEdge.data[1];


      if (!explored.has(nextNode)) {
         MST.addNode(nextNode);
         MST.addEdge(currentMinEdge.data[0], nextNode, currentMinEdge.priority);
    
         this.edges[nextNode].forEach(edge => {
            edgeQueue.enqueue([nextNode, edge.node], edge.weight);
         });


         // Mark this node as explored explored.add(nextNode);
         s = nextNode;
      }
   }
   return MST;
}
