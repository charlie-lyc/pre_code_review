'use strict';
// _.each는 collection의 각 데이터에 반복적인 작업을 수행합니다.
//  1. collection(배열 혹은 객체)과 함수 iteratee(반복되는 작업)를 인자로 전달받아 (iteratee는 함수의 인자로 전달되는 함수이므로 callback 함수)
//  2. collection의 데이터(element 또는 property)를 순회하면서
//  3. iteratee에 각 데이터를 인자로 전달하여 실행합니다.

// iteratee에는 테스트 케이스에 따라서 다양한 함수가 할당됩니다.
// Arr.prototype.forEach 메소드를 사용할 때, 다양한 형태의 callback 함수를 사용할 수 있었던 걸 기억하시나요?
// 우리가 만드는 _.each 함수도 그렇게 잘 작동하게 하기 위한 방법을 고민해 봅시다.
// _.each는 명시적으로 어떤 값을 리턴하지 않습니다.
_.each = function (collection, iteratee) {

  if (Array.isArray(collection)) {
    for (let i = 0; i < collection.length; i ++) {
      iteratee(collection[i], i, collection);
    }
  } else {
    for (let key in collection) {
      iteratee(collection[key], key, collection);
    }
  }

};
