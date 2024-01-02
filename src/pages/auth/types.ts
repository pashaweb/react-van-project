export type FirebaseUser = {
  displayName: string;
  email: string;
  photoURL: string;
  uid: string;
};

export type User = FirebaseUser & {
  id: string;
};

//const map = <T, K>(f: (x: T) => K, arr: T[]) => arr.map((x) => f(x));
//
// const result1 = map((x) => x.toString(), [1, 2, 3]);
// const result2 = map((x) => parseInt(x), ['1', '2', '3']);
//
// const result3 = map((x) => x % 2 === 0, [1, 2, 3]);
//
// const result4 = map((x) => (x ? 0 : 1), [false, true, false]);
//
// const result5 = map((x) => x.length, [['a', 'b'], [1, 2, 3], []]);
//
// parseInt(result1[0]);
// result1[0].toUpperCase();
