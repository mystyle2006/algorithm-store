const input = [];
let distances, graph, weight;

const strToNumArr = (str) => str.split(" ").map((numString) => Number(numString));

require("readline")
  .createInterface(process.stdin, process.stdout)
  .on("line", function (line) {
    input.push(line.trim());
  })
  .on("close", function () {
    const [N, M] = strToNumArr(input.shift());
    graph = [...Array(N+1)].map(() => []);
    weight = [...Array(N+1)].map(() => [...Array(N+1)]);
    distances = [...Array(N+1)].fill(Infinity);
    const start = input.shift();

    input.forEach((str)=>{
      [v1, v2, w] = strToNumArr(str);
      insertEdge(v1, v2, w);
    });

    bfs(+start);

    for(let i = 1; i < distances.length; i += 1) {
      if (distances[i] === Infinity) {
        console.log('INF');
      } else {
        console.log(distances[i]);
      }
    }
  });

const insertEdge = (vFront, vBack, w) => {
  if (graph[vFront].includes(vBack)) {
    weight[vFront][vBack] = Math.min(weight[vFront][vBack], w);
  } else {
    weight[vFront][vBack] = w;
    graph[vFront].push(vBack);
  }
};

function bfs(start) {
  const q = [start];
  const doneIndexList = [];
  distances[start] = 0;
  while(q.length) {
    const v = q.shift();

    for (let i = 0; i < graph[v].length; i += 1) {
      distances[graph[v][i]] = Math.min(distances[graph[v][i]], distances[v] + weight[v][graph[v][i]]);

      if (!doneIndexList.includes(graph[v][i])) {
        q.push(graph[v][i]);
      }
    }
    doneIndexList.push(v);
  }
}
