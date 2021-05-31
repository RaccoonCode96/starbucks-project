# Starbucks Clone Project (스타벅스 클론 프로젝트)

<br/>

## 프로젝트 진행 배경

- 기존의 HTML, CSS, JS, React의 경험에서 체계적이고 깊은 기본기가 부족함을 느낌
- 특히 HTML, CSS 작업 관련 사용에만 집중하고 클린하고 체계적이고 가독성 좋은 코드를 쓰지 못했음
  - 후손 선택자와 일치선택자를 사용해 HTML을 유추 가능하게 깔끔한 코드 작성을 하지 못하고, 클래스를 여러가지로 남발 했었음

## 프로젝트 개요

- Starbucks site의 client 단의 모습을 클론하는 프로젝트 (Server 통신은 없음)
- 일반적인 사이트의 모습을 HTML, CSS, JS, JS관련 라이브러리를 통한 구현

<br/>

<img src="./images/result_starbucks.gif" alt="Starbucks Site Gif" />

<br/>
<br/>

## Deployment (배포)

Netlify를 통한 배포

- [배포된 데모 사이트 확인](https://hardcore-stonebraker-43a6e7.netlify.app/)

<br/>

## 프로젝트 후

- 주먹구구 식의 HTML, CSS 구조에서 체계적인 구조를 익히고 숙달함.
- JS에서 Lodash, Youtube API(Iframe), Gsap, ScrollMagic, Swiper의 사용을 통해 경험함
- Git branch 사용을 통한 분할 개발 방식과 제품 버전화
  - pull request 를 통한 원격 병합 (Remote Merge) 경험
  - reset에 대한 이해
  - 로컬과 원격 저장소의 커밋 및 내용 충돌로 인한 로컬 병합 (Local Merge: pull -> conflict -> merge)
- Netlify를 통한 배포 경험

## HTML

- HTML Head에서 제공하는 정보 및 기능 연결 (meta tag 및 CDN 연결, CSS, JS 연결)
- HTML 요소(Elements), 속성(Attirbutes) 공부
- HTML ul li 요소를 다중적으로 이용하여 복잡한 HTML 구조 연습하기 (HEADER -> Drop menu 작업)
- inner의 사용 (내용 중앙 통일)
- 클래스 명 관리 (BEM, Block Element Modifier)
- google font, Material Icons 사용

## CSS

- CSS에서 제공하는 다양한 속성
- 공통적으로 쓰이는 CSS를 분리하여 효율적인 코드 작성
- 선택자 우선순위 점수 연산
- Iline, Block 요소의 원리를 고려한 속성의 사용
- absolute와 margin을 통한 배치 그리고 flex를 이용한 배치 및 정렬
- 선택자, 가상요소, 가상클래스의 이해를 통한 디테일한 CSS 작업
- 2d, 3d 애니메이션 (transition, transform) 작업
- 버튼 속성별 css 클래스 작업 (HTML에 넣어서 사용하도록, CSS를 먼저 만들고 HTML에서 사용하는 반대적 사고)

## JS

- 전체적인 DOM 조작과, 라이브러리 경험
  - Lodash
  - Gsap & scrollToPlugin
  - ScrollMagic
  - Youtube API
- setAttribute를 통한 HTML 제어
- classList의 class의 변경을 통한 CSS 제어
- 이벤트 관련 함수로 CSS 제어

<br/>

## Dev Blog Posts (개발 블로그 글)

1. [20210527 StarbucksClone01](https://goforit.tistory.com/115)

- 오픈 그래프, fonts, Icons, 헤더 만들기( absolute를 활용한 정렬), 서브 메뉴(구분선, a태그 임시 href, JS로 요소 강제 focus 시키기, classList, setAttribute, 이벤트 함수로 CSS 제어

<br/>

2. [20210527 StarbucksClone02](https://goforit.tistory.com/116)

- 메인메뉴(드롭다운 메뉴, 체계적인 html 구조), BEM(클래스 명 관리), 전역 배지(Badge), Lodash, Gsap 활용, Section영역 순차적 애니메이션, 버튼별 CSS 지정

<br/>

3. [20210528 StarbucksClone03](https://goforit.tistory.com/117)

- Notice 수직 슬라이드(Swiper.js), 반응형 요소 중간 배치, Promotion 수평 이미지 슬라이드(Pagination, Navigation Botton), 슬라이드 Toggle, Rewards 영역, 요소 비율 맞추기, 유튜브 영상 넣기

<br/>

4. [20210530 StarbucksClone04](https://goforit.tistory.com/118)

- 반복 애니메이션(Gsap), 고정이미지 배경(background-attachment), 3D 애니메이션(rotateY, backface-visibility), 스크롤 위치 계산(ScrollMagic), 푸터, 특정 위치에 스크롤 위치 시키기(Gsap-scrollTo)

5. [20210531 StarbucksClone05](https://goforit.tistory.com/119)

- 배포(Netlify), 로그인 페이지, 모듈화 관리, Git(기본 명령어, reset, clone, branch 올리기), GitHub(pullRequest, 충돌, 로컬병합)
