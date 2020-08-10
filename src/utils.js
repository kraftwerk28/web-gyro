/**
 * Add n vectors together
 */
export const addVecs = (...vectors) =>
  vectors[0].map((_dim, idx) =>
    vectors.reduce((result, currVec) => result + currVec[idx], 0)
  );

/**
 * Multiply vector by number (scale)
 */
export const vecMulNum = (vector, multiplier) =>
  vector.map(t => t * multiplier);

export const vecToRot = arr =>
  `rotateX(${arr[0]}deg) rotateY(${arr[1]}deg) rotateZ(${arr[2]}deg)`;


export let titles = ['Front', 'Back', 'Left', 'Right', 'Top', 'Bottom'];
const initRotations = [
  [-90, 0, 0],
  [90, 0, 180],

  [0, -90, 90],
  [0, 90, -90],

  [0, 0, 0],
  [0, 180, 0],
];

const mixinTransform = ['translateZ(100px)']

export function computeStyle(rotations) {
  return [
    'transform:',
    `rotateX(${rotations[0]}deg)`,
    `rotateY(${-rotations[1]}deg)`,
    `rotateZ(${rotations[2]}deg)`,
  ].join(' ');
}

export function faceStyle(i) {
  return `transform: ${vecToRot(initRotations[i])} ${mixinTransform.join(' ')}`;
}
