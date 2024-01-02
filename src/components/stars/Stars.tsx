import { useReducer } from 'react';

interface StarsProps {
  count: number;
  initialRate: number;
}

type TStar = {
  active: boolean;
};

function mutateStars(stars: TStar[], index: number) {
  return stars.map((star: TStar, i: number) => {
    i < index ? (star.active = true) : (star.active = false);
    return star;
  });
}

export const Stars = (props: StarsProps) => {
  const { count, initialRate } = props;
  const initialStars: TStar[] = [];
  for (let i = 0; i < count; i++) {
    initialStars.push({ active: i < initialRate });
  }

  const initialState = {
    stars: initialStars,
    rate: initialRate,
    initialRate: initialRate,
  };

  type State = typeof initialState;
  type Action = {
    type: 'hover' | 'out' | 'click' | 'reset';
    payload: number;
  };

  const starsSeducer = (state: State, action: Action) => {
    let stars: TStar[] = [];
    switch (action.type) {
      case 'hover':
        stars = mutateStars(state.stars, action.payload);

        return {
          ...state,
          stars,
        };
      case 'out':
        stars = mutateStars(state.stars, state.rate);
        return {
          ...state,
          stars,
        };

      case 'click':
        stars = mutateStars(state.stars, action.payload);
        return {
          ...state,
          stars,
          rate: action.payload,
        };

      case 'reset':
        stars = mutateStars(state.stars, state.initialRate);
        return {
          ...state,
          stars,
          rate: state.initialRate,
        };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(starsSeducer, initialState);
  const hover = (index: number) => {
    dispatch({ type: 'hover', payload: index + 1 });
  };

  const out = () => {
    dispatch({ type: 'out', payload: 0 });
  };

  const click = (index: number) => {
    dispatch({ type: 'click', payload: index + 1 });
  };

  const reset = () => {
    dispatch({ type: 'reset', payload: 0 });
  };

  return (
    <>
      {state.stars.map((star, index) => {
        return (
          <>
            <button
              onMouseOver={() => hover(index)}
              onMouseOut={() => out()}
              onClick={() => click(index)}
            >
              {star.active ? ' ⭐ ' : ' 💧 '}
            </button>
          </>
        );
      })}
      <button onClick={reset}>Reset</button>
    </>
  );
};
export default Stars;
