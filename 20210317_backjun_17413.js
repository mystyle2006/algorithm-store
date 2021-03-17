// link : https://www.acmicpc.net/problem/17413

function solution(string) {
  const stringList = string.split('');
  let temp = [];
  let answer = [];
  let isTag = false;
  for(let str of stringList) {
    if (str === ' ') {
      if (!isTag) {
        answer = [...answer, ...temp.reverse(), ' '];
        temp = [];
      } else {
        answer = [...answer, ' '];
      }
      continue;
    }

    if (str === '<') {
      isTag = true;
      answer = [...answer, ...temp.reverse(), '<'];
      temp = [];
      continue;
    }

    if (str === '>') {
      isTag = false;
      answer = [...answer, '>'];
      continue;
    }

    if (isTag) {
      answer = [...answer, str];
    } else {
      temp.push(str);
    }
  }

  answer = [...answer, ...temp.reverse()];

  return answer.join('');
};

console.log(solution('baekjoon online judge'));
console.log(solution('<open>tag<close>'));
console.log(solution('<ab cd>ef gh<ij kl>'));
console.log(solution('one1 two2 three3 4fourr 5five 6six'));
console.log(solution('<int><max>2147483647<long long><max>9223372036854775807'));
console.log(solution('<problem>17413<is hardest>problem ever<end>'));
console.log(solution('<   space   >space space space<    spa   c e>'));