export enum Color {
  Red,
  Green,
  Blue,
  Yellow,
  Black,
}

export interface Hero {
  name: string;
  canfly: boolean;
  color: Color
}
