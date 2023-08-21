# WSIWT (What Should I Wear Today?)

WSIWT는 아래 이미지와 같은 기온별 옷차림정보를 핸드폰에 저장 했음에도 불구하고 계속해서 인터넷에 검색하게 되는 것을 보고, 기온별 옷차림 정보를 날씨정보와 결합하여 웹 어플리케이션으로 만들어보자라는 생각에서 시작하게 된 프로젝트입니다.

<img src="https://user-images.githubusercontent.com/80832015/212151074-5078be1b-3794-4534-abb1-5d1513bca1f9.jpg" width='300' />

### 개발기간 : 2022/12/14 ~ 2023/01/12

### 사용스택 : <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=JavaScript&logoColor=black"/> <img src="https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=React&logoColor=black"/> <img src="https://img.shields.io/badge/Firebase-FFCA28?style=flat-square&logo=firebase&logoColor=white"/> <img src="https://img.shields.io/badge/Tailwind CSS-06B6D4?style=flat&logo=tailwindcss&logoColor=white"/>, 기상청 단기예보 API, 카카오 local API, Geolocation API

###

# Result

- geolocation APi와 카카오 local API로 현재 위치에 대한 정보와, 그 위치에 대한 3일동안의 시간별 날씨 정보,각 시간별 기온에 따른 옷차림을 간략한 픽토그램으로 보여주었습니다.

<p align="center"><img src="https://user-images.githubusercontent.com/80832015/212179069-88dbf11a-2051-4de7-8053-11286dfde3cf.png" width='600'></p>
<p align="center"><img src="https://user-images.githubusercontent.com/80832015/212178735-b1f4b469-7f76-4896-bcc5-2f0531ca1891.png" width='600'></p>
<p align="center"><img src="https://user-images.githubusercontent.com/80832015/212178814-051d2a82-c86c-412b-b888-65aaac4fdd00.png" width='600'></p>

- 시간별 카드를 클릭하면, 그 시간대의 좀 더 자세한 날씨정보와, 옷차림 정보를 보여주는 페이지로 이동합니다.
<p align="center"><img src="https://user-images.githubusercontent.com/80832015/212182705-b5844c24-4824-4bb8-8c6b-36701d51f1db.png" width='600'></p>

### 로그인

- 로그인은 파이어베이스의 인증을 이용하여 구글 계정으로 가능하도록 했습니다.
- 로그인을 하게되면, navbar에 구글 이메일 닉네임과 프로필 사진, 내 옷장으로 이동 할 수 있는 아이콘이 생성됩니다.

<p align="center"><img src="https://user-images.githubusercontent.com/80832015/212183782-abcc363b-f876-4e60-bdb3-6b921f002bd8.png" width='600'></p>

### 내 옷장

- 내 옷장으로 이동하면, 사용자가 등록한 옷들의 목록을 출력합니다.

<p align="center"><img src="https://user-images.githubusercontent.com/80832015/212186618-66da1493-a645-40c6-aa8b-23ffc5cdae3c.png" width='600'></p>

- +버튼을 누르면 이동하는 옷 추가 페이지 입니다.
- 사진 등록은 필수가 아니어서 등록하지 않으면 위의 사진처럼 기본 이미지가 보여집니다.

<p align="center"><img src="https://user-images.githubusercontent.com/80832015/212186793-116a4f23-d251-485d-8db6-0c158f00170e.png" width='600'></p>

- 사진 등록 버튼을 눌러 사진을 등록하면 미리보기가 보여집니다.
<p align="center"><img src="https://user-images.githubusercontent.com/80832015/212187091-833173b9-5262-4c32-beb8-09c6ae6321f0.png" width='600'></p>

- 내 옷장에 옷을 등록하면, 날씨, 옷차림의 상세정보를 보여주는 페이지에서 내 옷장에서 이 기온에 입을 수 있는 옷차림에 해당되는 옷들이 보여집니다.
<p align="center"><img src="https://user-images.githubusercontent.com/80832015/212187439-630b4f77-8449-4d82-880e-088186d2c999.png" width='600'></p>

## 반응형

- width가 줄어들면 화면에 맞게 ui가 변형 되도록 했습니다.

<img src="https://user-images.githubusercontent.com/80832015/212188018-0983f65b-ea73-4096-a62b-3712d4b8ea81.png" width='49%'>
<img src="https://user-images.githubusercontent.com/80832015/212188379-9c9540f9-d2d8-4789-a168-e190affd9daf.png" width='49%'>

- width가 줄어드면, 상세페이지에서 기온별 옷차림 정보밑에 내 옷장이 나오는 것이 사용자가 정보를 받아들일때 효율적일것 같지 않아서, 각 옷의 종류별로 내 옷장의 정보를 볼 수 있게 했습니다.

<img src="https://user-images.githubusercontent.com/80832015/212188233-6c0a5cd8-b361-4e04-ad41-60c0d5ed8660.png" width='49%'>
<img src="https://user-images.githubusercontent.com/80832015/212188290-4d4f0533-1624-4726-a494-a1d639bd4f31.png" width='49%'>
