import {
  CounterStoreProvider,
  useCounterStoreContext,
} from '../../stores/use-counter-store-context';

const Counter = () => {
  const { count, inc } = useCounterStoreContext((state) => state);

  return (
    <div>
      <h2>Counter Store Context</h2>
      <h4>{count}</h4>
      <button onClick={inc}>One Up</button>
    </div>
  );
};

const CountPresenter = () => {
  const { count } = useCounterStoreContext((state) => state);
  return <div className="presenter">Count: {count}</div>;
};

export const CounterWithContext = () => {
  return (
    <>
      <CounterStoreProvider>
        <Counter />
      </CounterStoreProvider>
      <CounterStoreProvider>
        <CountPresenter />
      </CounterStoreProvider>
    </>
  );
};
