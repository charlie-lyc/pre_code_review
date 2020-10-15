/**
 * 아래의 detectNetwork 함수는 어떤 카드 번호를 input으로 받아,
 * 카드 회사의 이름('MasterCard', 'American Express)을 return 하는 함수입니다.
 *
 * 예) detectNetwork('343456789012345') // 'American Express'
 *
 * 그럼 어떻게 카드 번호만 가지고, 카드회사를 알 수 있을까요?
 *
 * 2가지 방법이 있습니다.
 *  1. 앞 자리 숫자들 (이번 과제에서는 prefix라 부릅니다.)
 *  2. 숫자들의 길이 (이번 과제에서는 length라고 부릅니다.)
 */

/**
 * 주의사항: 'cardNumber'는 항상 문자열입니다.
 * Step One : 'Diner's Club' 카드 번호는 항상 38이나 39로 시작을하고, 14 자리 숫자입니다.
 *            'American Express' 카드 번호는 항상 34 나 37로 시작하고, 15 자리 숫자입니다.
 * Step Two : 'Visa' 카드 번호는 항상 4로 시작하고 13, 16 혹은 19자리의 숫자입니다.
 *            'MasterCard' 카드 번호는 항상 51, 52, 53, 54, 혹은 55로 시작하고  16자리의 숫자입니다.
 * Step Three : 'Discover'는 항상 6011, 65, 644에서 649까지의 숫자로 시작하고 16 또는 19자리의 숫자입니다.
 *              'Maestro' 카드번호는 항상 5018, 5020, 5038 또는 6304로 시작하고 12에서부터 19까지 자리의 숫자입니다.
 * Stem Four : 'China UnionPay'는 항상 622126-622925, 624-626, 혹은 6282-6288로 시작하고 16-19자리의 숫자입니다.
 *             'Switch'는 항상 4903, 4905, 4911, 4936, 564182, 633110, 6333 혹은 6759로 시작하고 16, 18, 혹은 19자리의 숫자입니다.
 */
 function detectNetwork(cardNumber) {

  const prefix1 = cardNumber[0];
  const prefix2 = cardNumber[1];
  const prefix3 = cardNumber.substring(0, 3);
  const prefix4 = cardNumber.substring(0, 4);
  const lenOfNum = cardNumber.length;

  if (prefix1 === '3' && (prefix2 === '8' || prefix2 === '9') && lenOfNum === 14) {
    return "Diner's Club";
  } else if (prefix1 === '3' && (prefix2 === '4' || prefix2 === '7') && lenOfNum === 15) {
    return 'American Express';
  } else if (prefix1 === '4' && (lenOfNum === 13 || lenOfNum === 16 || lenOfNum === 19)) {
    return 'Visa';
  } else if (prefix1 === '5' && (1 <= Number(prefix2) && Number(prefix2) <= 5) && lenOfNum === 16) {
    return 'MasterCard';
  } else if (((prefix1 === '6' &&  prefix2 === '5') || (644 <= Number(prefix3) && Number(prefix3) <= 649) || (prefix4 === '6011')) && (lenOfNum === 16 || lenOfNum === 19)) {
    return 'Discover';
  } else if ((prefix4 === '5018' || prefix4 === '5020' || prefix4 === '5038' || prefix4 === '6034') && (12 <= lenOfNum || lenOfNum <= 19)) {
    return 'Maestro';
  }

}
