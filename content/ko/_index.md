---
# 메인 페이지 - Modern Minimalism Design
title:
date: 2025-10-05
type: landing

  
sections:
  - block: slider
    content:
      slides:
      - title: About Me
        content: 컴퓨터와 더 친해지고 싶은
        align: center
        background:
          image:
            filename: desk.png
            filters:
              brightness: 0.35
          position: center
          color: '#000'

      - title: Interests
        content: 다양한 분야에 관심이 많은
        align: center
        background:
          image:
            filename: data_science.jpg
            filters:
              brightness: 0.35
          position: center
          color: '#000'

      - title: Travel
        content: 여행을 사랑하는
        align: center
        background:
          image:
            filename: fukuoka.jpg
            filters:
              brightness: 0.35
          position: center
          color: '#000'

      - title: Developer
        content: 끊임없이 성장하는 개발자
        align: center
        background:
          image:
            filename: coding.jpg
            filters:
              brightness: 0.35
          position: center
          color: '#000'

      - title: Contact
        content: 저에 대해 더 알고 싶으신가요?
        align: center
        background:
          image:
            filename: web_develop.jpg
            filters:
              brightness: 0.35
          position: center
          color: '#000'
        link:
          icon: arrow-right
          icon_pack: fas
          text: 자세히 보기
          url: contact

    design:
      slide_height: '100vh'
      is_fullscreen: true
      loop: true
      interval: 4000

  - block: features
    id: features
    content:
      title: Information
      text: 이가은의 기본 정보
      items:
        - name: 이름
          icon: user
          icon_pack: fas
          description: 이가은
        - name: 생년월일
          icon: calendar-days
          icon_pack: fas
          description: 2003.01.23
        - name: 위치
          icon: location-dot
          icon_pack: fas
          description: 전북대학교 공과대학 7호관
        - name: 연락처
          icon: phone
          icon_pack: fas
          description: 010-5906-5988
        - name: 이메일
          icon: envelope
          icon_pack: fas
          description: igaeun8@gmail.com
        - name: 학력
          icon: graduation-cap
          icon_pack: fas
          description: 전북대학교 컴퓨터인공지능학부
    design:
      columns: '3'


  - block: collection
    content:
      id: section-1
      title: Projects
      subtitle: 진행했던 프로젝트들을 확인해보세요
      text:
      count: 3
      offset: 0
      order: desc
      filters:
        folders:
          - project
    design:
      view: community/custom_card
      columns: '2'

  - block: markdown
    content:
      title: Travel
      subtitle: 여행 기록을 함께 나눠요
      text: |
        <div class="row">
          <div class="col-md-4 mb-4">
            <div class="card h-100" style="border: none; box-shadow: 0 4px 12px rgba(0,0,0,0.1); border-radius: 12px; overflow: hidden; transition: transform 0.3s ease;">
              <img src="/media/jejudo.jpg" class="card-img-top" alt="제주도" style="height: 200px; object-fit: cover;">
              <div class="card-body d-flex flex-column">
                <h5 class="card-title mb-2">제주도</h5>
                <p class="card-text text-muted mb-3 flex-grow-1">한국의 아름다운 섬, 제주도의 자연과 문화를 만나보세요.</p>
                <a href="/travel_jejudo" class="btn btn-primary mt-auto" style="background-color: #e91e63; border: none; border-radius: 25px; padding: 8px 20px;">자세히 보기</a>
              </div>
            </div>
          </div>
          <div class="col-md-4 mb-4">
            <div class="card h-100" style="border: none; box-shadow: 0 4px 12px rgba(0,0,0,0.1); border-radius: 12px; overflow: hidden; transition: transform 0.3s ease;">
              <img src="/media/hanoi.jpg" class="card-img-top" alt="하노이" style="height: 200px; object-fit: cover;">
              <div class="card-body d-flex flex-column">
                <h5 class="card-title mb-2">하노이</h5>
                <p class="card-text text-muted mb-3 flex-grow-1">베트남의 수도, 하노이의 역사와 현대가 공존하는 도시를 탐험해보세요.</p>
                <a href="/travel_hanoi" class="btn btn-primary mt-auto" style="background-color: #e91e63; border: none; border-radius: 25px; padding: 8px 20px;">자세히 보기</a>
              </div>
            </div>
          </div>
          <div class="col-md-4 mb-4">
            <div class="card h-100" style="border: none; box-shadow: 0 4px 12px rgba(0,0,0,0.1); border-radius: 12px; overflow: hidden; transition: transform 0.3s ease;">
              <img src="/media/philippines.jpg" class="card-img-top" alt="필리핀" style="height: 200px; object-fit: cover;">
              <div class="card-body d-flex flex-column">
                <h5 class="card-title mb-2">필리핀</h5>
                <p class="card-text text-muted mb-3 flex-grow-1">열대의 천국, 필리핀의 아름다운 해변과 문화를 경험해보세요.</p>
                <a href="/travel_philippines" class="btn btn-primary mt-auto" style="background-color: #e91e63; border: none; border-radius: 25px; padding: 8px 20px;">자세히 보기</a>
              </div>
            </div>
          </div>
        </div>
        
        <style>
        .card:hover {
          transform: translateY(-5px);
        }
        .btn-primary:hover {
          background-color: #c2185b !important;
          transform: translateY(-1px);
        }
        </style>


 
---