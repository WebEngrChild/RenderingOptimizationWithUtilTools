import React from "react";
import { useState } from "react";

const Child = React.memo(() => {
  console.log("子が再レンダリング");

  return (
      <>
        <p>子コンポーネントが表示されています</p>
      </>
  );
});

// ①esLintエラー対策
Child.displayName = 'Child';

export default function Parent() {
  console.log("親が再レンダリング!");
  const [text, setText] = useState("");

  const changeText = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  return (
// ②Reactフラグメントを削除してdivタグを追加
    <div>
      <p>親コンポーネントで文字を入力</p>
      <input type="text" onChange={changeText} />
      <Child />
    </div>
  );
}

// whyDidYouRenderで利用します
Child.whyDidYouRender = true