// TestData.ts

import { iCity } from "../../App";
import uuid from 'react-native-uuid'

const testLahti: iCity = {
    id: uuid.v4().toString(),
    name: 'Lahti',
    country: 'Finland',
    locations: [
      {
        name: 'Ski Jumping Hill',
        info: 'Nice view tower',
        id: uuid.v4().toString(),
      },
      {
        name: 'Ice Hall',
        info: 'Pelicans home arena',
        id: uuid.v4().toString(),
      }
    ]
  };

const testHeinola: iCity = {
    id: uuid.v4().toString(),
    name: 'Heinola',
    country: 'Finland',
    locations: [
      {
        name: 'Bridge',
        info: 'Nice view over the lakes',
        id: uuid.v4().toString(),
      },
      {
        name: 'Ice Hall',
        info: 'Peliitat home arena',
        id: uuid.v4().toString(),
      }
    ]
};
  
export const testData: iCity[] = [
  testLahti,
  testHeinola
];