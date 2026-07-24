import type { ReactElement } from "react";

import {
  BooleanToken,
  CodeText,
  Comment,
  FunctionToken,
  Keyword,
  NumberToken,
  OperatorToken,
  PropertyToken,
  PunctuationToken,
  StringToken,
} from "./styles";

import type { Token } from "./types";

export function tokenize(line: string): Token[] {
  if (line.trim().startsWith("//")) {
    return [
      {
        text: line,
        type: "comment",
      },
    ];
  }

  const tokens: Token[] = [];

  const tokenRegex =
    /("(?:\\.|[^"\\])*")|(\b(?:const|let|var|interface|type|export|default|return|new|async|await|function|extends|implements|string|number|boolean)\b)|(\b(?:true|false|null|undefined)\b)|(\b\d+(?:\.\d+)?\b)|([A-Za-zÀ-ÿ_$][\wÀ-ÿ$]*)(?=\s*:)|([A-Za-zÀ-ÿ_$][\wÀ-ÿ$]*)(?=\s*\()|(=>|===|!==|==|!=|>=|<=|\+\+|--|&&|\|\||[=+*/<>!-])|([{}[\]():;,.])/g;

  let lastIndex = 0;
  let match: RegExpExecArray | null;

  while ((match = tokenRegex.exec(line)) !== null) {
    if (match.index > lastIndex) {
      tokens.push({
        text: line.slice(lastIndex, match.index),
        type: "plain",
      });
    }

    if (match[1]) {
      tokens.push({
        text: match[1],
        type: "string",
      });
    } else if (match[2]) {
      tokens.push({
        text: match[2],
        type: "keyword",
      });
    } else if (match[3]) {
      tokens.push({
        text: match[3],
        type: "boolean",
      });
    } else if (match[4]) {
      tokens.push({
        text: match[4],
        type: "number",
      });
    } else if (match[5]) {
      tokens.push({
        text: match[5],
        type: "property",
      });
    } else if (match[6]) {
      tokens.push({
        text: match[6],
        type: "function",
      });
    } else if (match[7]) {
      tokens.push({
        text: match[7],
        type: "operator",
      });
    } else if (match[8]) {
      tokens.push({
        text: match[8],
        type: "punctuation",
      });
    }

    lastIndex = tokenRegex.lastIndex;
  }

  if (lastIndex < line.length) {
    tokens.push({
      text: line.slice(lastIndex),
      type: "plain",
    });
  }

  return tokens;
}

export function renderTokens(line: string): ReactElement {
  const tokens = tokenize(line);

  return (
    <CodeText>
      {tokens.map((token, index) => {
        const key = `${token.type}-${index}`;

        switch (token.type) {
          case "comment":
            return <Comment key={key}>{token.text}</Comment>;

          case "keyword":
            return <Keyword key={key}>{token.text}</Keyword>;

          case "property":
            return <PropertyToken key={key}>{token.text}</PropertyToken>;

          case "function":
            return <FunctionToken key={key}>{token.text}</FunctionToken>;

          case "string":
            return <StringToken key={key}>{token.text}</StringToken>;

          case "number":
            return <NumberToken key={key}>{token.text}</NumberToken>;

          case "boolean":
            return <BooleanToken key={key}>{token.text}</BooleanToken>;

          case "operator":
            return <OperatorToken key={key}>{token.text}</OperatorToken>;

          case "punctuation":
            return <PunctuationToken key={key}>{token.text}</PunctuationToken>;

          default:
            return <span key={key}>{token.text}</span>;
        }
      })}
    </CodeText>
  );
}