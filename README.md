# PayWork - Redux Saga를 이용한 Todo List 구현하기

## 💁🏻‍♂ 실행 방법

### 설치

`yarn install`

### 실행

`expo start --dev-client`

ios 시뮬레이터 활성화 후

`Press i`

## 🗂 구현 목록

`API 서버 구현`

-   json-server를 이용하여 커스텀 API 서버 구현
-   heroku를 통해 배포
-   https://paywork-todo-json.herokuapp.com/todoList/

`Task 추가,삭제,수정`

-   BottomTab의 Create 탭을 통해 띄워지는 Modal에서 Task 추가
-   Todo Item을 오른쪽으로 스와이프 하여 삭제
-   Todo Item을 왼쪽으로 스와이으 하여 나온 수정 버튼으로 띄워지는 Modal에서 Task 수정

`Task 상태 및 중요도`

-   Task의 상태에 따라 탭을 나누어 Task List와 Done으로 구분
-   Task의 목표일정에 따라 Today, Later, Overdue로 구분
-   Task의 중요도는 ONGOING, RUNNING ,URGENT로 구분되며 각 초록색, 주황색, 빨강색으로 분류된다.

`생성일, 업데이트일, 완료목표일`

-   Task가 처음 생성될 때 생성일이 저장되며 Task는 생성일 순으로 정렬된다.
-   DatePicker를 이용하여 goalDate를 설정 가능

`Redux saga`

-   `API_REQUEST` action이 발생하면 saga에서 api를 호출하는 비동기 함수를 실행
-   api 호출 성공 시 `API_SUCCESS` action 호출, 실패 시 `API_FAIL` action 호출


## 📕 사용한 기타 라이브러리

`react-native-date-picker`

-   goalDate를 입력 받기 위한 datePicker를 위해 사용
-   ios, android 내부 설정이 필요하여 개별 build 필요

`react-native-swipe-list-view`

-   모바일 기기의 특성상 삭제, 수정 버튼 공간의 부족으로 스와이프 기능 구현을 위해 사용

`moment`

-   Date 표현식 사용과, Date 비교를 위해 사용

`axios`

-   API 호출을 위해 사용

## 🚀 스크린샷
### Task 추가
![Add Task](https://user-images.githubusercontent.com/65903404/131688863-8fa7f541-2636-4498-967f-1758b2cb3a3b.gif)ㄴ

### Task 수정
![Edit Task](https://user-images.githubusercontent.com/65903404/131689873-42d065c3-f2b2-4029-86c3-2b66d9ec8039.gif)

### Task 삭제
![Delete Task](https://user-images.githubusercontent.com/65903404/131689902-a3917515-9546-4bc8-8459-de539eab024f.gif)

### Task 완료
![Done Task](https://user-images.githubusercontent.com/65903404/131690178-bb6ba855-69e3-42ce-bc1a-ede480267c94.gif)




<br/><br/>
