import React from "react";
import { useState } from "react";

// ①Propsの受け取りはない子コンポーネント
const Child_1 = () => {
  return (
    <p>Child_1コンポーネント</p>
  );
};

// ②callback関数をPropsで受け取っている子コンポーネント
const Child_2 = (props: { handleClick: () => void }) => {
  return (
    <p>Child_2コンポーネント</p>
// <button onClick={props.handleClick}>Child_2コンポーネント</button>
  );
};

export default function Parent() {
  const [text, setText] = useState("");
  const changeText = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const handleClick = () => {
    console.log("click");
  };


  const [count, setCount] = useState(0);
  const double = (count: number) => {
    let i = 0;
    while (i < 1000000000) i++;
    return count * 2;
  };

// ③計算に時間が掛かる重い処理結果を格納している値
  const doubledCount = double(count);

  return (
    <div>
      <p>親コンポーネントで文字を入力</p>
      <input type="text" onChange={changeText} />
      <Child_1 />
      <Child_2 handleClick={handleClick} />
      <p>親コンポーネント側での重い処理</p>
      <p>
        Counter: {count}, {doubledCount}
      </p>
      <button onClick={() => setCount(count + 1)}>Increment count2</button>
    </div>
  );
}

Child_1.whyDidYouRender = true;
Child_2.whyDidYouRender = true;