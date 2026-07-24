export type TokenType =
  | "comment"
  | "keyword"
  | "property"
  | "function"
  | "string"
  | "number"
  | "boolean"
  | "operator"
  | "punctuation"
  | "plain";

export type Token = {
  text: string;
  type: TokenType;
};
