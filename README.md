## Emart 사전과제

Emart front-end 사전과제 입니다.

## 🤔 설계 flow

- 최대한 예시와 비슷하게
- pc에서도 볼 수 있게
- branch 관리는 master, develop, features로
- 화면에 쓰이는 아이콘은 material - icon으로
- 전역 상태 관리가 필요한가 ? - No (recoil 안씀)
- react-router가 필요한가 ? - No (페이지이동 없음)
- ajax 호출은 axios 라이브러리 이용
- 배포는 깃헙 페이지로

## 🧐구현 순서

1. 전체적인 레이아웃 구현
2. json 데이터 만들기
3. json 데이터 axios로 fetch
4. fetch한 데이터들 상태관리
5. state를 이용한 구체적 로직 관리
6. 리펙토링

## 주요 리펙토링

1. typescript type => model로 관리
2. 컴포넌트를 최대한 작게 나눔
3. 주석 작성

## 👀체크리스트

- [x] React 사용
- [x] API 통신하여 JSON 데이터 가져와서 화면 구성
- [x] 스크롤을 이용한 리스트 페이징
- [x] 메뉴 좌우 스크롤
- [x] 메뉴 클릭 시 데이터 필터링
- [x] 클릭된 메뉴 ON/OFF 표시
- [x] 스크롤 다운 메뉴 숨김 / 스크롤 업 메뉴늘 표시해주세요
- [x] 화면 해상도에 따라 리스트 배열 변경

## 라이브러리

- mui/icon
- axios
- gh-pasges (배포)
- react-intersection-observer ( 무한 스크롤링)
