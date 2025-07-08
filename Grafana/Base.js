import http from 'k6/http';
import { sleep, check } from 'k6';

export const options = {
  vus: 10,            // Number of virtual users
  duration: '30s',    // Duration of the test
};

export default function () {
  const res = http.get('https://www.google.com');

  check(res, {
    'status is 200': (r) => r.status === 200,
    'response time < 500ms': (r) => r.timings.duration < 500,
  });

  sleep(1); // wait 1 second between requests
}
