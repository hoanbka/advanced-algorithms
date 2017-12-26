#include<iostream>
#include <list>
using namespace std;

class Graph {
    int V;
    list <int> * adj;
    void DFSUtil(int v, bool visited[]);  // A function used by DFS
    
    
public:
    Graph(int V);
    void addEdge(int V, int w);
    void DFS();    // prints DFS traversal of the complete graph
    void BFS();
    
};

Graph::Graph(int V){
    this->V = V;
    adj = new list<int>[V];
}

void Graph::addEdge(int V, int w) {
    this->adj[V].push_back(w); // push back to add to the linked list
}

void Graph::DFSUtil(int v , bool visited[]) {
    visited[v] = true;
    cout << v << " ";
    
    list<int>:: iterator i;
    for (i = adj[v].begin(); i != adj[v].end(); ++i) {
        if (!visited[*i]) {
            DFSUtil(*i, visited);
        }
    }
}

void Graph::DFS(){
    
    // Mark all the vertices as not visited
    bool *visited = new bool[V];
    for(int i = 0; i < V; i++)
        visited[i] = false;
    
    // Call the recursive helper function to print DFS traversal
    // starting from all vertices one by one
    for(int i = 0; i < V; i++)
        if(visited[i] == false)
            DFSUtil(i, visited);
    
}

// To implement
void Graph::BFS(){
    queue <int> myQueue;
    bool * visited = new bool[V];
    for(int i = 0; i < V; i++)
        visited[i] = false;
    
    if (visited[0] == false) {
        
        myQueue.push(0);
        visited[0] = true;
        while (!myQueue.empty()) {
            list<int>::iterator i;
            int node = myQueue.front();
            for (i = adj[node].begin(); i != adj[node].end(); i++) {
                if (!visited[*i]) {
                    cout << *i <<endl;
                    visited[*i] = true;
                    myQueue.push(*i);
                }

            }
            myQueue.pop();
        }
    }   
}