import { createSignal, type JSX } from "solid-js";

interface Props {
  initialValue?: number;
  children:  JSX.Element;
}

export const Counter = (props: Props) => {

    const [count, setCount] = createSignal(props.initialValue ?? 0);

  return (
    <>
        {props.children}
        <h3>Value: {count()}</h3>

        <button onClick={() => setCount( prev => ++prev)} class="bg-blue-500 p-2 mr-2 rounded cursor-pointer">+1</button>
        <button onClick={() => setCount( prev => --prev)} class="bg-blue-500 p-2 mr-2 rounded cursor-pointer">-1</button>
    </>
  )
}