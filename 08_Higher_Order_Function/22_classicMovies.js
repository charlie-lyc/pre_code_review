// 영화 정보가 담긴 객체를 요소로 갖는 배열과 연도를 입력받아 해당 연도 이전의 영화를 요소로 갖는 배열을 리턴해야 합니다.
function classicMovies(arr, year) {
  let newArr = [];
  arr.forEach(function(ar) {
    if (ar.year < year) {
      newArr.push(ar.title + ' by ' + ar.director);
    }
  });
  return newArr;
}