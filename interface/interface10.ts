//type alias 와 interface차이

//  1. function
type EatType = (food: string) => void; //type alias

interface IEat {
  //interface
  (food: string): void;
}

//  2. array
type personList = string[]; // type alias

interface IPersonList {
  //interface
  [index: number]: string;
}

//  3. intersection
interface ErrorHandling {
  success: boolean;
  error?: { message: string };
}

interface ArtistData {
  artist: { name: string }[];
}

type ArtistsResponseType = ArtistData & ErrorHandling; // type alias

interface IArtistsResponse extends ArtistData, ErrorHandling {} // interface

let art: ArtistsResponseType;
let iar: IArtistsResponse;

// 4. union type  union type은 interface로 표현하기 어려움
interface Bird {
  fly(): void;
  layEggs(): void;
}

interface Fish {
  swim(): void;
  layEggs(): void;
}

type PetType = Bird | Fish; //type alias

// interface IPet extends PetType {} //Error
// class Pet implements PetType {} //Error

// Declaration Merging - interface
interface MergingInterface {
  a: string;
}

interface MergingInterface {
  b: string;
}

let mi: MergingInterface;
mi.a = "sdlf";
