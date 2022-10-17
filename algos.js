const mergeIntervals = (intervals) => {
  if (intervals.length <= 1) return intervals;
  intervals.sort((a, b) => a[0] - b[0]);
  let res = [];
  for (const i of intervals) {
    if (res.length > 0 && i[0] <= res[res.length - 1][1]) {
      res[res.length - 1][1] = Math.max(res[res.length - 1][1], i[1]);
    } else {
      res.push(i);
    }
  }
  return res;
};

console.log(
  mergeIntervals([
    [1, 3],
    [8, 10],
    [15, 18],
    [2, 6],
  ])
);

const c1 = "/baz";
const n1 = "/bar";

const cd = (currPath, newPath) => {
  let cmds = (currPath + "/" + newPath).split("/");
  let dest = [];
  if (newPath[0] === "/") {
    return newPath;
  }
  for (const cmd of cmds) {
    if (cmd === "." || cmd === "") {
      continue;
    } else if (cmd === "..") {
      if (dest) {
        dest.pop();
      }
    } else {
      dest.push(cmd);
    }
  }

  return "/" + dest.join("/");
};

console.log(cd("/facebook/anin", "/abc/def"));

// def simplifyPath(self, path):
//         stack = []
//         for p in path.split("/"):
//             if p == "..":
//                 if stack:
//                     stack.pop()
//             elif p and p != '.':
//                 stack.append(p)
//         return '/' + '/'.join(stack)

class RateLimiter {
  occupied = new this.LinkedList();

  constructor(maxRequests) {
    this.maxRequests = maxRequests;
  }

  canHandle(request) {
    if (this.occupied.length > 0) {
      if (request - this.occupied.peekLeft() >= 1000) {
        this.occupied.popLeft();
      }
    }

    if (this.occupied.length < this.maxRequests) {
      this.occupied.push(request);
      console.log("PASS");
    } else {
      console.log("FAIL");
    }
  }
}