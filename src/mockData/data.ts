type sizeType = {
  [key: string]: Array<number>;
};

type appStoreSSType = {
  [key: string]: sizeType;
};

export const appStoreSS: appStoreSSType = {
  EN: {
    65: [1, 2, 3],
    61: [1, 2, 3],
    58: [1, 2, 3],
  },
  TR: {
    61: [1, 2, 3],
    58: [1, 2, 3],
    55: [1, 2, 3],
    47: [1, 2, 3],
    40: [1, 2, 3],
  },
  DE: {
    67: [1, 2, 3],
    65: [1, 2, 3],
    61: [1, 2, 3],
    55: [1, 2, 3],
  },
};
