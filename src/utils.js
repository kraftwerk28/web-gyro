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

export function round(n) {
  const rounded = Math.round(n * 100).toString();
  return rounded / 100;
  // return rounded.slice(0, -2).padStart(1, 0) + '.' + rounded.slice(-2);
}

export function quaternion2euler(q) {
  // roll (x-axis rotation)
  const [x, y, z, w] = q
  const sinr_cosp = 2 * (w * x + y * z);
  const cosr_cosp = 1 - 2 * (x * x + y * y);
  const roll = Math.atan2(sinr_cosp, cosr_cosp);
  // const roll = 0;

  // // pitch (y-axis rotation)
  // const pitch = 0;
  const sinp = 2 * (w * y - z * x);
  let pitch;
  if (Math.abs(sinp) >= 1) {
    pitch = Math.copysign(M_PI / 2, sinp); // use 90 degrees if out of range
  } else {
    pitch = Math.asin(sinp);
  }

  // yaw (z-axis rotation)
  const siny_cosp = 2 * (w * z + x * y);
  const cosy_cosp = 1 - 2 * (y * y + z * z);
  const yaw = Math.atan2(siny_cosp, cosy_cosp);

  return [roll, pitch, yaw].map(rad => rad * 180 / Math.PI);
}
