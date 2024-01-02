import { Counter } from '@/components/counter';
import { ListView } from '@/components/list/ListView';
import { CounterWithContext } from '@/components/counter-with-context';
import Stars from '@/components/stars/Stars';

function Home() {
  return (
    <>
      <h1>Hello World</h1>
      {/*<Counter />*/}
      {/*<Counter />*/}
      {/*<CounterWithContext />*/}
      {/*<CounterWithContext />*/}
      <ListView />

      <Stars count={10} initialRate={8}></Stars>
    </>
  );
}

export default Home;
