import styled from "styled-components";
import { useState } from "react";

export default function CodeAnimation(props) {
  const [index, setIndex] = useState(0);
  const [finished, setFinished] = useState(false);  

  const code = `AUHacks hacks = new AUHacks(2020);\n
    hacks.init();\n`;
  const result = <p i={3}>{`>>> Welcome to Auburn Hacks 2020\n`}</p>

  const getCode = (done) => {
    if (done) {
        return getRenderAtIndex(index).concat(result)
    }
    if (index >= code.length) {
        // done.
        setTimeout(() => setFinished(true), 500)
    }
    setTimeout(() => setIndex(index + 1), Math.random(80, 100) * 100);
    const renderString = getRenderAtIndex(index);
    return renderString;
  };

  const getRenderAtIndex = (ind) => {
    return code
    .slice(0, ind)
    .split("\n")
    .map((line, i) => <p key={i}>{line}</p>);
  }

  return (
    <CodeContainer>
      <Code>{getCode(finished)}</Code>
    </CodeContainer>
  );
}

const Code = styled.h2`
font-size: 2rem;
  font-family: "Roboto Mono", monospace;
  color: white;

  @media(max-width: 700px) {
      font-size: 1.5rem;
  }
`;

const CodeContainer = styled.div`
  background: rgb(25, 23, 36);
  padding: 0.5em;
  border-radius: 5px;
`;
