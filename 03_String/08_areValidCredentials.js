// 이름과 비밀번호를 입력받아 이름이 3글자보다 크고 비밀번호가 8글자 이상이면 true를 리턴해야 합니다.

function areValidCredentials(name, password) {
  return name.length > 3 && password.length >= 8;
}
