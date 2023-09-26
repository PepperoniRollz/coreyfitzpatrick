import { StringifyOptions } from "querystring";
import React from "react";

interface CardProps {
  card: string;
  front?: boolean;
  height: string;
  style: React.CSSProperties;
}

const cardCodes: Map<string, number> = new Map<string, number>([
  ["2c", 1],
  ["2d", 2],
  ["2h", 3],
  ["2s", 4],
  ["3c", 5],
  ["3d", 6],
  ["3h", 7],
  ["3s", 8],
  ["4c", 9],
  ["4d", 10],
  ["4h", 11],
  ["4s", 12],
  ["5c", 13],
  ["5d", 14],
  ["5h", 15],
  ["5s", 16],
  ["6c", 17],
  ["6d", 18],
  ["6h", 19],
  ["6s", 20],
  ["7c", 21],
  ["7d", 22],
  ["7h", 23],
  ["7s", 24],
  ["8c", 25],
  ["8d", 26],
  ["8h", 27],
  ["8s", 28],
  ["9c", 29],
  ["9d", 30],
  ["9h", 31],
  ["9s", 32],
  ["Tc", 33],
  ["Td", 34],
  ["Th", 35],
  ["Ts", 36],
  ["Jc", 37],
  ["Jd", 38],
  ["Jh", 39],
  ["Js", 40],
  ["Qc", 41],
  ["Qd", 42],
  ["Qh", 43],
  ["Qs", 44],
  ["Kc", 45],
  ["Kd", 46],
  ["Kh", 47],
  ["Ks", 48],
  ["Ac", 49],
  ["Ad", 50],
  ["Ah", 51],
  ["As", 52],
]);

export class Card {
  value: number;

  constructor(s: string) {
    this.value = cardCodes.get(s) || 0;
  }
}

export class CardSet {
  cards: Card[];

  constructor(s: string) {
    this.cards = [];
    for (let i = 0; i < s.length; i += 2) {
      this.cards.push(new Card(s.substring(i, i + 2)));
    }
  }
}
