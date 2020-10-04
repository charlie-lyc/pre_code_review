// 선물 상자에 대한 정보를 담은 배열과 문자열을 입력받아 조건에 맞는 선물이 있는지 여부를 리턴해야 합니다.

function unpackGiftbox(giftBox, wish) {
  if (giftBox.length === 0 || wish === '') {
    return false;
  }
  for (let i = 0; i < giftBox.length; i ++) {
    if (giftBox[i] === wish) {
      return true;
    } else if (Array.isArray(giftBox[i]) && giftBox[i].length !== 0) {
      return unpackGiftbox(giftBox[i], wish);
    }
  }
  return false;
}
