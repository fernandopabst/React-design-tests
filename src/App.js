import React, { Component, useState } from "react";
import styled, { css } from "styled-components";
import { useSpring, animated } from "react-spring";

function App() {
  const [flip, set] = useState(false);
  const props = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0 },
    reset: true,
    reverse: flip,
    delay: 200,
    onRest: () => set(!flip)
  });
  return (
    <Stack>
      <svg
        viewBox="0 0 245 245"
        style={{
          top: 0,
          left: 0,
          width: 245,
          height: 245,
          position: "absolute"
        }}
      >
        <ellipse
          stroke="rgba(230, 230, 230,1)"
          strokeWidth={0}
          fill="rgba(230, 230, 230,1)"
          cx={123}
          cy={123}
          rx={123}
          ry={123}
        ></ellipse>
      </svg>
      <Rect>
        <animated.div style={props}>
          <HirIaith>hir iaith</HirIaith>
        </animated.div>
      </Rect>
    </Stack>
  );
}

const Stack = styled.div`
  width: 574px;
  height: 245px;
  margin-top: 189px;
  margin-left: 323px;
  position: relative;
  display: flex;
`;

const Rect = styled.div`
  top: 74px;
  left: 101px;
  width: 473px;
  height: 121px;
  position: absolute;
  background-color: rgba(212, 249, 250, 0.49);
  shadow-radius: 0px;
  border-width: 1px;
  border-color: rgba(45, 120, 209, 0.49);
  flex-direction: column;
  display: flex;
  border-style: solid;
  box-shadow: 10px 10px 0px 1px rgba(53, 29, 29, 1);
`;

const HirIaith = styled.span`
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  font-style: normal;
  font-weight: 700;
  color: #121212;
  font-size: 69px;
  text-align: center;
  width: 379px;
  height: 83px;
  letter-spacing: 8px;
  margin-top: 23px;
  margin-left: 55px;
`;

export default App;
