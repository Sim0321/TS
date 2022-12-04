function error(message: string): never {
  throw new Error(message);
}

function fail() {
  return error("falied");
}

function infiniteLoop(): never {
  while (true) {}
}

//예시
// let a: string = "hello";
declare const a: string | number;
if (typeof a !== "string") {
  a;
}

// type Indexable<T> = T extends string ? T & {[index : string ] : any } : never
