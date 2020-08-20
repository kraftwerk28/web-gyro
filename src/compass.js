import { readable } from 'svelte/store';
import { quaternion2euler, euler2quaternion } from './utils';

const PERMS = ['accelerometer', 'gyroscope', 'magnetometer'];
async function requestPermissions() {
  const queries = PERMS.map(name => navigator.permissions.query({ name }));
  const results = await Promise.all(queries);
  return results.every(result => result.state === 'granted');
}

function absSensorInit(set) {
  let sensor;
  function sensorListener() {
    set(quaternion2euler(this.quaternion));
  };

  requestPermissions().then(result => {
    if (!result) return;
    sensor = new AbsoluteOrientationSensor({ frequency: 60 });
    sensor.addEventListener('reading', sensorListener);
    sensor.start();
  })

  return () => {
    if (sensor) {
      sensor.stop();
      sensor.removeEventListener('reading', sensorListener);
    }
  }
}

function relSensorInit(set) {
  function listener({ alpha, beta, gamma }) {
    set([beta, gamma, alpha]);
  }

  window.addEventListener('deviceorientation', listener);

  return () => {
    window.removeEventListener('deviceorientation', listener);
  }
}

export const relCompassState = readable([0, 0, 0], relSensorInit);
export const absCompassState = readable([0, 0, 0], absSensorInit);
