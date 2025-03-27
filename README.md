# 캡스톤 디자인 프로젝트

## 프로젝트 제목
**가상 피팅 최적화 서비스: 관절 추적 및 동작 유사도 기반**  
*Virtual Try on Optimization Service through Pose Similarity Analysis and Body Tracking*

## 팀원 소개

|<img src="https://avatars.githubusercontent.com/u/75584814?v=4" width="150" height="150"/>|<img src="https://avatars.githubusercontent.com/u/137462767?v=4" width="150" height="150"/>|
|:-:|:-:|
|Jinsoo Park<br/>[@jinny908](https://github.com/jinny908)|Jayoung Kim<br/>[@jaeyo03](https://github.com/jaeyo03)|
| 백엔드 + 인프라 구성 + 아키텍처 설계 | 프론트엔드 + 포즈 유사도 + 아키텍처 설계 |

---

## 목차
1. [프로젝트 소개](#프로젝트-소개)
2. [프로젝트 목표](#프로젝트-목표)
3. [주요 기능](#주요-기능)
4. [진행 방법 및 아키텍처](#진행-방법-및-아키텍처)
5. [결과 및 성과](#결과-및-성과)
6. [향후 개선 방향](#향후-개선-방향)
7. [발표 영상](#발표-영상)

---

## 프로젝트 소개

**가상 피팅(Virtual Try-on)** 이란 사용자가 원하는 옷을 특정 모델에게 가상으로 입혀보는 기술입니다. 본 프로젝트는 사용자의 자세를 BlazePose를 이용해 분석하고, 최적의 자세를 취했을 때 가상 피팅의 품질이 향상됨을 입증하고자 합니다.

---

## 프로젝트 목표
- 사용자가 선택한 옷을 더 정확하게 입혀보는 가상 피팅 서비스 제공
- 자세 유사도를 분석하여 최적의 자세를 가이드하고, 사용자의 자세를 실시간으로 평가
- 다양한 체형과 자세에서도 정확한 피팅 결과를 제공할 수 있는 시스템 구축

| Problems | Goals |
|:---:|:---:|
| ![목표 이미지1](https://github.com/user-attachments/assets/29e8f238-f88e-46f2-8c6f-174c786ea74d) | ![목표 이미지2](https://github.com/user-attachments/assets/cb493713-69ce-42fa-9606-132f5583b91a) |




---

## 주요 기능

### 1. 자세 유사도 분석
- BlazePose를 활용한 정확한 신체 트래킹  
  ![BlazePose](https://github.com/user-attachments/assets/c3bffd10-398f-45e0-86e5-6b84bc8e8477)
- 코사인 유사도 기반으로 자세 유사도 수치화  
  ![코사인 유사도](https://github.com/user-attachments/assets/8b6efa42-baa1-4e5f-a5d4-b6719eb6229e)

### 2. Grid 기반 가상 피팅
- 자세 유사도 점수가 0.9 이상일 때 최적 피팅 진행
- 사용자가 최적의 자세를 쉽게 취할 수 있도록 화면에 그리드 표시  
  ![Grid 기반 가상 피팅](https://github.com/user-attachments/assets/8c5fee73-59b5-4b22-bb1b-17fbc050f3b6)

### 3. 반응형 UI
- 모바일과 데스크탑 모두에서 원활한 사용 경험을 제공하도록 UI 설계  
  ![반응형 UI](https://github.com/user-attachments/assets/e2e97f74-b2d1-47bf-a86e-e9e55102b5d2)

---

## 진행 방법 및 아키텍처

### 최적 가상 피팅 진행 순서
- 사용자가 의류 선택 및 최적 자세 촬영
- 촬영된 자세의 유사도 평가
- Stable Viton 기반의 고품질 가상 피팅 처리
![목표 이미지3](https://github.com/user-attachments/assets/53474486-ddf3-4d1c-a02c-e882c5bf32e4)

### 백엔드 개발
- 원래는 모든 백엔드 기능을 Spring Boot 기반의 Java 서버로 통합 개발하고자 했으나, Hugging Face의 Gradio API 사용을 위해 Python 기반의 FastAPI 서버를 병행하여 구성

- Spring Boot는 사용자 인증, CRUD 및 주요 비즈니스 로직 처리 담당

- FastAPI는 AI 모델 호출 및 이미지 처리 관련 기능 수행 (Gradio API 연동 포함)

### 인프라 아키텍처
  ![AWS 인프라](https://github.com/user-attachments/assets/98e556a3-b49e-4f3e-848d-8254ae3aa816)

| 항목 | 내용 |
|:--|:--|
| **클라우드 플랫폼** | AWS 기반의 가상 사설 클라우드(VPC) 구조 사용 |
| **도메인 관리** | Gabia와 ACM을 통한 도메인 구매 및 연결 |
| **프론트엔드** | React 기반 SPA 웹앱을 Public Subnet에서 서비스 |
| **백엔드 서버** | Spring Boot (Java): 사용자 데이터 처리, DB 연동, API 제공<br>FastAPI (Python): Hugging Face Gradio API 연동 및 AI 이미지 처리 |
| **DB 및 스토리지** | RDS: 사용자 정보 및 이력 저장용 관계형 데이터베이스<br>S3: AI 결과 이미지 저장 및 제공 |
| **서브넷 구성** | Public Subnet: Load Balancer, React 앱 배포<br>Private Subnet: Spring Boot, FastAPI, RDS 등 내부 보안 서비스 운영 |
| **콘텐츠 전송 최적화** | CloudFront를 활용해 정적 콘텐츠를 전 세계에 빠르게 전송<br>특히 태국 현지 발표를 고려해 지연 시간을 최소화함 |


### 다이어그램

| Use Case Diagram | Sequence Diagram | Class Diagram |
|:---:|:---:|:---:|
| ![Use Case](https://github.com/user-attachments/assets/dc377f5f-f65d-4779-a03e-43f185a7ed1d) | ![Sequence](https://github.com/user-attachments/assets/40e87fc3-7636-4225-9228-6bb36a35a372) | ![Class](https://github.com/user-attachments/assets/4588d171-6063-4ba8-9642-ed5206cf9b37) |



---

## 결과 및 성과

### 결과
- **SSIM (Structural Similarity Index Measure)**: 1에 가까울수록 원본 이미지와 유사도가 높음  
- **LPIPS (Learned Perceptual Image Patch Similarity)**: 0에 가까울수록 원본 이미지와 유사도가 높음  

| SSIM & LPIPS | 결과 |
|:---:|:---:|
| ![결과 이미지1](https://github.com/user-attachments/assets/fa23abc4-4189-4a37-adcb-f5f28b47898a) | ![결과 이미지2](https://github.com/user-attachments/assets/74172b4a-d5e3-4f53-836b-6ec19c90bd83) |


### 성과
- 한국IT서비스학회 논문 제출 및 발표
- Wrtn Ideathon 대회 참가
  ![성과 이미지](https://github.com/user-attachments/assets/ef4ebc97-8563-4bd7-87e7-cc526701dda4)

---

## 향후 개선 방향
- 사용자가 따라할 수 있는 다양한 자세 추가
- 다양한 체형에 대응하는 모델 설정 기능 추가
- 더욱 성능이 뛰어난 가상 피팅 모델 도입 계획  
  ![향후 개선 이미지](https://github.com/user-attachments/assets/b186c7c5-6b68-459e-85a1-a278f5206a65)

---

## 발표 영상
[발표 영상 바로가기](https://www.youtube.com/watch?v=3Z11fcEMB6k)
