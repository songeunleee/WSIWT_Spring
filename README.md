# WSIWT(What Should I Wear Today?) 
 
<p align="center">
<img src="https://github.com/songeunleee/WSIWT_Spring/assets/80832015/b8406c8d-2c10-437e-9115-168c1171ed02" width="300"/>
</p>

 외출 시 옷을 고르는 상황에서의 ```프로세스를 향상``` 시키고 싶었습니다. 
</br>일반적으로 일교차가 크거나 계절이 막 바뀐 시점에서는 어떤 옷을 입고 나갈지 고민하게 됩니다.</br>
보통 이런 과정을 통해 옷을 정하게 될텐데요.
```
1. 오늘의 기온을 검색한다.
2. 기온별 옷차림을 검색한다. (또는 따로 저장한 정보를 찾아 확인한다.)
3. 단계 1 에서 찾은 기온정보와 기온별 옷차림 정보를 대조하여 대략적인 옷 카테고리를 정한다.
4. 옷장을 확인하거나, 가지고 있는 옷을 생각하며 오늘 입을 옷을 정한다.
```

이러한 4가지의 과정을 한번의 웹 서비스 접속으로 해결할 수 있는 서비스를 만들고 싶었습니다.

## Function.
>- jwt토큰방식을 사용한 로그인 기능
>- Oauth2.0을 활용한 소셜 로그인 기능
>- 사용자 위치에 맞는 3일치 기온별 옷차림을 알려주는 기능
>    - 먼저 geolocation api로 사용자의 위치를 확인
>    - 위치정보를 기상청 api에 맞는 좌표로 변환하여 http요청
>    - 위치정보를 kakao api에 보내 현지 위치의 명칭을 응답받음 
>    - 받은 두가지의 정보로 하나는 기온별 옷차림 정보를 보여주고
>    - 나머지는 사용자의 위치를 표시함
>   - 시간별로 상세페이지가 있어, 더 자세한 날씨정보와 기온별 옷차림 정보 확인가능
>- 실제 사용자가 자신의 옷 데이터를 등록하는 기능 --- **MY CLOSET**
>    - 시간별 상세페이지에서 사용자가 등록한 옷 데이터도 기온별로 분류하여 보여줌
>- 오늘의 옷차림을 등록할 수 있는 커뮤니티 기능 --- **OOTD**
>    - 댓글과 대댓글을 등록할 수 있음

- 이와 같은 기능들을 통하여 1번의 사이트 접속으로 오늘 입을 옷을 정할 수 있습니다.

### [배포링크 - https://front.wsiwt.store](https://front.wsiwt.store)

또한 이 프로젝트는 React를 공부할때 ```firebase```로 백엔드를 구축하여 완성했던 프로젝트인데, 이 프로젝트를 하면서 백엔드에 대한 관심이 생겼고, 백엔드 공부를 하게 되면서 firebase로 구축했던 백엔드를 이번에 배운 것들로 바꿔보자라는 생각으로 진행하게 되었습니다.

## 🔧 Tech.
### Front 
<img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=JavaScript&logoColor=black"/> <img src="https://img.shields.io/badge/React-61DAFB?style=flat&logo=React&logoColor=black"/> 
<img src="https://img.shields.io/badge/HTML-E34F26?style=flat&logo=HTML5&logoColor=black"/>
<img src="https://img.shields.io/badge/Tailwind CSS-06B6D4?style=flat&logo=Tailwind CSS&logoColor=black"/>
<img src="https://img.shields.io/badge/React Query-FF4154?style=flat&logo=React Query&logoColor=black"/>
<img src="https://img.shields.io/badge/Axios-5A29E4?style=flat&logo=axios&logoColor=white"/>
 
#####
### back
<img src="https://img.shields.io/badge/JAVA-FF4119?style=flat&logo=&logoColor=black"/> <img src="https://img.shields.io/badge/Spring Boot-6DB33F?style=flat&logo=Spring Boot&logoColor=black"/> 
<img src="https://img.shields.io/badge/MySQL-4479A1?style=flat&logo=MySQL&logoColor=black"/> 
<img src="https://img.shields.io/badge/Swagger-85EA2D?style=flat&logo=Swagger&logoColor=black"/> 
<img src="https://img.shields.io/badge/Cloudinary-3448C5?style=flat&logo=Cloudinary&logoColor=black"/>

### deploy
<img src="https://img.shields.io/badge/GitHub Action-2088FF?style=flat&logo=githubactions&logoColor=black"/> <img src="https://img.shields.io/badge/Docker-2496ED?style=flat&logo=Docker&logoColor=black"/> 
<img src="https://img.shields.io/badge/AWS Elastic Beanstalk-232F3E?style=flat&logo=amazonaws&logoColor=white"/> 
<img src="https://img.shields.io/badge/Netlify-00C7B7?style=flat&logo=Netlify&logoColor=black"/>

## Open APIs and Data Source
### 기상청 API
- 날씨 정보를 위해 사용한 API
- 사용자의 위치와 함께 요청하면, 3일치의 기온별 날씨정보를 응답해 줍니다.
- 사용자의 위도와 경도를 알려주는게 아닌 기상청 자체의 좌표로 변환하여 요청해야 합니다.
### kakao API
- regeocoding을 위한 API
- 경도와 위도와 함께 요청하면, 그에 맞는 지명을 응답해 줍니다.

### 기온별 옷차림 정보
<img src="https://user-images.githubusercontent.com/80832015/212151074-5078be1b-3794-4534-abb1-5d1513bca1f9.jpg" width='300' />

- 이 사진을 기준으로 기온별로 분류하였습니다.


## Project Structure.
### 📄 Architecture
![WSIWT_acrchitecture](https://github.com/songeunleee/WSIWT_Spring/assets/80832015/0ef8d443-7f1b-4448-88c5-28410cfb9d54)
### 📄 ERD
![Untitled (1)](https://github.com/songeunleee/WSIWT_Spring/assets/80832015/f02ce2c5-0420-4683-8d3d-b3ac04d06f54)
### 📄 API document

### swagger로 작성  
### 🔗[링크](https://api.wsiwt.store/swagger-ui/) 

## Learning and Challenges.
- **기상청 API의 단기예보 데이터 분석**
    - 그 전에 사용했던 단순한 형태의 api와는 다른, 연속적인 날씨데이터를 접하고 어떤식으로 사용할지 고민하면서 데이터 분석이나, 처리에 대한 관심이 생겨 백엔드에 대해서 공부해 보고싶은 계기가 되었습니다.
- **SSL인증서와 https**
    - CS 공부를 통해 배운 내용들을 실제 웹 서비스에 적용하면서, 보안과 프라이버시에 대한 이해를 심화시킬 수 있었습니다.
- **AWS**
   - AWS 일래스틱 빈스톡으로 배포를 하면서, eb cli의 명령어, ssh 접속하는 방법에 대해서 알게 되었습니다.
- **CI/CD** 
    - 테스트코드를 작성하지는 못했지만, 깃허브 액션의 config 파일을 작성하면서 스크립트에 대해서도 좀 더 익숙해 지고, 자동화의 편의성을 알게 되었습니다.
- **쿼리 수행 성능 향상**
    - JPA의 N + 1 문제를 해결하면서 Jmeter로 http 요청 성능을 테스트하여 비교했는데, 효울이 높아진 것을 직접적인 수치로 확인할 수 있었습니다. 확실히 수치화된 것이 눈에 잘 들어온다는 것을 느꼈습니다.


## Screen.







