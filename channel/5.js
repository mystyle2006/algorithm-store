PLACES 테이블은 공간 임대 서비스에 등록된 공간의 정보를 담은 테이블입니다. PLACES 테이블의 구조는 다음과 같으며 ID, NAME, HOST_ID는 각각 공간의 아이디, 이름, 공간을 소유한 유저의 아이디를 나타냅니다. ID는 기본키입니다.

  NAME	TYPE
ID	INT
NAME	VARCHAR
HOST_ID	INT
PLACE_REVIEWS 테이블은 공간을 임대한 사람이 남긴 후기를 담은 테이블입니다. PLACE_REVIEWS 테이블의 구조는 다음과 같으며 ID, PLACE_ID, CREATED_AT, REVIEWER_ID, COMMENTS는 각각 아이디, 공간의 아이디, 후기를 남긴 날짜, 후기를 남긴 유저의 아이디, 내용을 나타냅니다. ID는 기본키입니다.

  NAME	TYPE
ID	INT
PLACE_ID	INT
CREATED_AT	DATE
REVIEWER_ID	INT
COMMENTS	VARCHAR
문제
임대 서비스에서는 후기가 하나도 안 달린 공간, 50개 미만인 공간, 100개 미만인 공간, 100개 이상인 공간은 각각 몇 개인지 구하려 합니다. 후기 수 별로 공간이 몇 개인지 조회하는 SQL문을 작성해주세요. 이때 후기가 하나도 안 달린 공간은 0, 50개 미만인 공간은 < 50, 100개 미만인 공간은 < 100, 100개 이상인 공간은 >= 100으로 표시해야 합니다. 또한 결과는 후기수가 작은 순서대로 보여주세요. 자세한 포맷은 하단의 예제를 참고해주세요.

  예시
예를 들어, PLACES 테이블이 다음과 같고

PLACES

ID	NAME	HOST_ID
1001457	Docklands Apartment with River Views	5507453
5194998	BOUTIQUE STAYS - Elwood Beaches 3, Pet Friendly	760849
11762465	Fabulous single room	20584468
13627321	Sunny, Modern Apartment with Cityscape Views	10810140
17810814	Stylish Bayside Retreat with a Luscious Garden	760849
22002927	Junction of CBD,Casino&Yarra River* FREE PARKING	133472555
PLACE_REVIEWS 테이블의 레코드에

1001457번 공간에는 후기가 73개,
  11762465번 공간에는 후기가 0개,
  5194998번 공간에는 후기가 2개,
  17810814번 공간에는 후기가 5개,
  22002927번 공간에는 후기가 51개,
  13627321번 공간에는 후기가 200개
라면 SQL 문을 실행한 결과는 다음과 같이 나와야 합니다.

  후기 수	공간 수
0	1
< 50	2
< 100	2
>= 100	1
※ < 50, < 100 등을 표시할 때에는 띄어쓰기에 주의하세요.