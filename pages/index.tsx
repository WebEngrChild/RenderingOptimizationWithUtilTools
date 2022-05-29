import { useState } from "react";

const Child = () => {
  console.log("子が再レンダリング");

  return (
    <>
      <p>子コンポーネントが表示されています</p>
    </>
  );
};

export default function Parent() {
  console.log("親が再レンダリング!");
  const [text, setText] = useState("");

  const changeText = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  return (
    <>
      <p>親コンポーネントで文字を入力</p>
      <input type="text" onChange={changeText} />
      <Child />
    </>
  );
}