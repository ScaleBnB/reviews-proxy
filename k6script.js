/* eslint-disable import/no-unresolved */
import http from 'k6/http';
import { check, sleep } from 'k6';
// import faker from 'faker';

export const options = {
  vus: 250,
  duration: '60s',
};

// export default function () {
//   const res = http.get(`http://localhost:3004/properties/${Math.floor(Math.random() * 10000000)}/reviews`);
//   check(res, {
//     'status was 200': (r) => r.status === 200,
//     'transaction time OK': (r) => r.timings.duration < 200,
//   });
//   sleep(0.05);
// }

const formData = {
  userName: 'Uzumaki',
  reviewComment: 'Rasengannnnnn',
  communication: Math.round(Math.random() * 1.3 + 3.7),
  check: Math.round(Math.random() * 1.3 + 3.7),
  clean: Math.round(Math.random() * 1.3 + 3.7),
  accuracy: Math.round(Math.random() * 1.3 + 3.7),
  location: Math.round(Math.random() * 1.3 + 3.7),
  value: Math.round(Math.random() * 1.3 + 3.7),
};

export default function () {
  const res = http.post(`http://localhost:3004/properties/${Math.floor(Math.random() * 10000000)}/reviews`, formData);
  check(res, {
    'status was 200': (r) => r.status === 200,
    'transaction time OK': (r) => r.timings.duration < 200,
  });
  sleep(0.05);
}
