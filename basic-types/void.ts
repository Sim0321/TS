function returnVoid(message: string): void {
  console.log(message);

  return undefined;
}

const r = returnVoid("return이 없다");
