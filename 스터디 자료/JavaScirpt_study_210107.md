 * const, let,  var
(변수를 선언하는 명령어)
const - > 변수를 한번 설정하면 추 후에 바꿀 수 없음.
let ,var -> 변수를 바꿀 수 있지만 보안에 취약함.

* element.classList 메소드 -> 해당 element의 클래스목록에 접근하는 간편한 방법.
ex) 
element.classList.add(‘’) > element에 클래스를 추가.
element.classList. remove(‘’) > element에 클래스를 제거.
element.classList.toggle (‘’)> element에 클래스가 존재하면 제거하고 없으면 추가.
element.classList.contain(‘’) > element에 클래스가 존재하는지 확인.
element.classList.replace(‘’,‘’) > element에 클래스를 새로운 클래스로 대체.



* querySelector
기본형태 : element = baseElement.querySelector(selectors);
리턴되는 값은 인자를 받아 일치하는 baseElement의 자손의 엘리먼트를 갖고 옴.
이 엘리먼트를 갖고오면 js로 html의 값을 *//변경 할 수 있음.//*
// 예제 1) index.html
 
 예제 1) index.html
<body>
<div class = "test">
Hello Selector 
</div>
<script = src="main.js"></script>
</body>
//
예제 2) main.js
main.js
const myDiv = document.querySelector(".test"),
        myH1 = myDiv.querySelector("h1");

console.log(myDiv);
console.log(myH1);

위처럼 main.js에서 index.html의 엘리먼트를 갖고와서 값을 변경시킬 수 있음.

* addEventListener // EVENT를 등록함

EVENT란?
쉽게 말해 사용자가 결과를 야기시키기 위한 행동이다.
예를 들어, 사용자가 어떤 버튼을 클릭했을 때 경고창을 뜨게 할 때같은 경우가 이벤트를 활용한 경우다.
자바스크립트에서는 특정 이벤트가 발생했을 때특정함수를 실행할 수 있게 해주는 addEventListener이라는 기능이 있다.

addEventListener 등으로 등록할 수 있는 이벤트 중 자주 쓰이는 이벤트 목록
change : 변동이 있을 때 발생
click : 클릭시 발생
focus : 포커스를 얻었을 때 발생
keydown : 키를 눌렀을 때 발생
keyup : 키에서 손을 땟을 때 발생
load : 로드가 완료되었을 때 발생
mousedown : 마우스를 클릭했을 때 발생
mouseout : 로드가 완료되었을 때 발생
mouseover : 마우스가 특정 객체 밖으로 나갔을 때 발생 
mousemove : 마우스가 움직였을 때 발생
mouseup : 마우스에서 손을 땟을 때 발생
select : option 태그 등에서 선택했을 때 발생
사용 예시)
var ex = document.getElementByld(“”);
ex.addEventListener(‘lick(이벤트종류)’,‘함수이름’);

* localStorage

 로컬스토리지를 설명하기 전에 앞서,
스토리지에 대해 알아야한다.
스토리지란, 쉽게 말해 저장소라고 할 수 있다.
보통 개발을 할 때 데이터베이스(DB)나 클라우드를 이용하여 데이터를 저장하지만,
저장할 데이터가 중요하지 않거나 유실되도 무방할 데이터라면 서버나 데이터베이스 서버에 저장하는게 낭비일 수 있다. 그래서 우리는 스토리지라는 기술을 사용하여 데이터를 저장할 수 있다.

웹스토리지는 로컬과 세션으로 나뉜다.
이 매커니즘의 차이점은  데이터가 어떤 범위에 얼마나 오래 보존되어있느냐에 있다.
세션 스토리지는 웹페이지의 세션이 끝날 때 데이터가 지워지는 반면, 로컬 스토리지는 웹페이지의 세션이 끝나도 데이터가 지워지지 않는다.

하지만, 로컬스토리지의 데이터 영속성은 동일한 컴퓨터에서 동일한 브라우저를 사용할 때만 해당이 된다. 만약 다른 브라우저를 사용하거나 다른 컴퓨터를 사용하는 경우 로컬 스토리지가 연속되지 않고 각각의 다른 로컬 스토리지로 저장이 된다. 
(다른 기기나 브라우저간의 데이터 공유를 하고싶다면 데이터베이스나 클라우드플랫폼을 이용해야한다.)


웹 스토리지는 기본적으로 키와 값으로 이루어진 데이터를 저장할 수 있다.
기본적인 사용법은 다음과 같다.

// 키에 데이터 쓰기
localStorage .setItem ("key", value )

// 키로 부터 데이터 읽기
localStorage .getItem ("key")

// 키의 데이터 삭제
localStorage .removeItem ("key")

// 모든 키의 데이터 삭제
localStorage .clear ()

// 저장된 키/값 쌍의 개수
localStorage .length


하지만, 오직 문자형(String)데이터 타입만 지원한다.
예를 들어 숫자형 데이터를 로컬 스토리지에 쓰고 다시 읽어보면 문자로 나오게된다.
이러한 문제를 해결하기 위해서는 JSON형태로 데이터를 읽고 쓰면 된다.
예시)
> localStorage .setItem ('json',JSON .stringify ({a :1 , b :2 }))
undefined
>JSON .parse (localStorage .getItem ('json'))
{a :1 , b :2 }
위와 같이 JSON.stringify()를 사용해서 로컬스토리지에 저장하게 되면
데이터를 읽을 때 문자형으로 읽어지는게 아닌 원본 그대로의 데이터를 얻을 수 있다.

JSON.stringify() -> 자바스크립트는 로컬저장소에 있는 데이터를 문자열string으로 저장함, boolean으로 저장하기 위해서는
                      JSON.stringify()를 사용해서 데이터를 변환해줘야함.
JSON.parse() 메서드는 JSON 문자열의 구문을 분석하고, 그 결과에서 JavaScript 값이나 객체를 생성합니다. 
선택적으로, reviver 함수를 인수로 전달할 경우, 결과를 반환하기 전에 변형할 수 있습니다.



* preventDefault 
-> 이벤트를 취소할 수 있는 경우, 이벤트의 전파를 막지 않고 그 이벤트를 취소한다.

a태그나 submit태그를 누르게 되면 href를 통해 창이 이동하거나 새로고침하여 실행하게 된다.
사용되는 경우)
1. a 태그를 눌러도 href링크로 이동하지 않게 할 경우
2. form 안에 submit 역할을 하는 버튼을 눌렀어도 새로 실행하지않게 하고 싶을 경우.
예시)
덧셈식의 결과를 입력하는 form이 있다고 치자.
이 함수를 실행하면 정답이나 오답이라고 문구가 뜨게 만들었다고 치자.
이 함수를 실행하면 정답이나 오답이 뜰거라고 생각하겠지만, 0.1초 정도 결과가 뜨고 사라질 것이다.
event에 대해 preventDefault를 해주지 않았기 때문에 submit과 동시에 창이 새로고침이 되기 때문에 초기화면으로 오게된다.
이럴 때 preventDefault()를 사용한다면 새로고침이 되지 않고 정상적으로 결과가 나오게 된다.


* .createElement()
자바스크립트를 이용하여 html에 요소를 추가하는 것.

ex)
var 예시 = document.createElement(‘button’); ->버튼 생성
var 예시텍스트 = document.createTextNode(‘Click’); ->버튼에 Click 텍스트생성
예시.appendChild(예시택스트); -> 예시택스트를 예시버튼에 넣음
* appendChild => father element안에 넣는 것.
document.body.appendChild(예시); -> 예시를 body의 자식요소로 넣는다.

forEach() 메서드란?
배열에 활용이 가능한 메서드로, 파라미터로 주어진 함수를 배열 요소 각각에 대해 실행하는 메서드.
즉 순서대로 배열의 각 요소를 한번씩 호출한다.
map()메서드와 거의 비슷하지만 차이점은 따로  return하는 값이 없다는 점이다.


Navigator.geolocation 
읽기 전용 속성은 웹에서 장치의 위치를 알아낼 때 사용할 수 있는 Geolocation 객체를 반환함
웹 사이트나 웹 앱은 위치정보를 사용해 결과 화면을 맞춤 설정할 수 있음.

출처 
https://junlab.tistory.com/13
https://m.blog.naver.com/PostView.nhn?blogId=qbxlvnf11&logNo=220877806711&proxyReferer=https:%2F%2Fwww.google.com%2F
https://www.daleseo.com/js-web-storage/
https://programming119.tistory.com/100
https://www.codingfactory.net/10436
