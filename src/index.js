module.exports = function multiply(first, second) {

  let prev;
  let result = [];
  let finalRes = [];
  let t = 2;
  let pr = 0;
  let res;
  if (first.length < second.length) {
    let v = first;
    first = second;
    second = v;
  }
  for (let i = second.length - 1; i >= 0; i--) {
    let arr = [];
    for (let j = first.length - 1; j >= 0; j--) {
      let m = second[i] * first[j];

      if (j === first.length - 1) {
        if (m < 10) {
          arr.unshift(m);
          prev = 0;
        } else {
          arr.unshift(m % 10);
          prev = Math.floor(m / 10);
        }
      } else {
        if (j === 0) {
          if (m + prev < 10) {
            arr.unshift(m + prev);
          } else {
            arr.unshift((m + prev) % 10);
            arr.unshift(Math.floor((m + prev) / 10));
          }

        } else if ((m + prev) < 10) {
          arr.unshift(m + prev);
          prev = Math.floor(m / 10);
        } else {
          arr.unshift((m + prev) % 10);
          prev = Math.floor((m + prev) / 10);
        }
      }

    }
    if (i === second.length - 1) {
      let pp = arr.pop();
      finalRes.unshift(pp);
      result = arr;
    } else {
      let k = result.length - 1;
      let d = arr.length - 1;

      if (d > k) {
        for (k; k >= 0; k--) {
          res = result[k] + arr[d] + pr;
          if (res < 10) {
            result[k] = res;
            pr = 0;
          } else {
            result[k] = res % 10;
            pr = Math.floor(res / 10);
          }
          d--;
        }
        while (d >= 0) {
          if ((arr[d] + pr) < 10) {
            result.unshift(arr[d] + pr);
            pr = 0;
            d--;
          } else if((arr[d] + pr) >= 10 && d == 1){
            result.unshift((arr[d] + pr)%10);
            result.unshift(arr[d-1] + 1);
            d = -1;
          } else {
            result.unshift((arr[d] + pr)%10);
            result.unshift(Math.floor((arr[d] + pr)/10));
            d--;
          }

        }

        pp = result.pop();
        finalRes.unshift(pp);
        pr = 0;

      } else {
        for (k; k >= 0; k--) {
          res = result[k] + arr[d] + pr;
          if (res < 10) {
            result[k] = res;
            pr = 0;
          } else {
            result[k] = res % 10;
            pr = Math.floor(res / 10);
            if (k === 0) {
              result.unshift(pr);
              pr = 0;
            }
          }
          d--;
        }
        pp = result.pop();
        finalRes.unshift(pp);
        pr = 0;
      }
    }
  }

  finalRes = result.concat(finalRes);
  return finalRes.join('');

}
