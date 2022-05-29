import React from "react";
import { useState, useCallback, useMemo } from "react";

// ①コンポーネントをメモ化
const Child_1 = React.memo(() => {
  return (
    <p>Child_1コンポーネント</p>
  );
});
const Child_2 = React.memo((props: { handleClick: () => void }) => {
  return (
    <p>Child_2コンポーネント</p>
    // <button onClick={props.handleClick}>Child_2コンポーネント</button>
  );
});

export default function Parent() {
  const [text, setText] = useState("");
  const changeText = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

// ②コールバック関数のメモ化
  const handleClick = useCallback(() => {
    console.log("click");
  },[]);

// ③重い処理をメモ化
  const [count, setCount] = useState(0);
  const double = (count: number) => {
    let i = 0;
    while (i < 1000000000) i++;
    return count * 2;
  };
  const doubledCount = useMemo(() => double(count),[count]);

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

Child_1.displayName = 'Child_1';
Child_2.displayName = 'Child_2';

Child_1.whyDidYouRender = true;
Child_2.whyDidYouRender = true;