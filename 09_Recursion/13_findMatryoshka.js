// 러시아 전통인형 마트료시카에 대한 정보를 담은 객체와 수를 입력받아 조건에 맞는 인형이 있는지 여부를 리턴해야 합니다.

function findMatryoshka(matryoshka, size) {
  if (matryoshka === null || matryoshka === undefined) {
    return false;
  }
  if (matryoshka.size === size  && matryoshka.matryoshka === null) {
    return true;
  }
  return findMatryoshka(matryoshka.matryoshka, size);
}
