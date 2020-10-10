// 영화 정보가 담긴 객체를 요소로 갖는 배열과 연도를 입력받아 해당 연도 이전의 영화를 요소로 갖는 배열을 리턴해야 합니다.
// arr[i]는 'title', 'year' 등의 속성을 갖는 객체
// 리턴되는 배열의 각 요소는 '영화 제목 by 영화 감독'의 형태를 가져야 합니다.
// 반복문(for, while) 사용은 금지됩니다.

function classicMovies(arr, year) {
  let filterArr = arr.filter(function(movie) {
    return movie.year < year;
  });
  return filterArr.map(function(movie) {
    return `${movie.title} by ${movie.director}`;
  });
}
