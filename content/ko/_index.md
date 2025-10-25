
---
# 메인 페이지 - Modern Minimalism Design
title: "전북대학교 이가은 | 포트폴리오"
date: 2025-10-05
type: landing

  
sections:
  # - block: hero
  #   content:
  #     title: "전북대학교 이가은 | 포트폴리오"
  #     subtitle: "컴퓨터인공지능학부 학생의 포트폴리오 사이트"
  #     text_align: center
  #     background:
  #       image:
  #         filename: desk.png
  #         filters:
  #           brightness: 0.35
  #       position: center
  #       color: '#000'

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

  - block: markdown
    content:
      title: ""
      text: |
        <div style="text-align: justify; max-width: 800px; margin: 0 auto; padding: 40px 20px;">
          <h2 style="text-align: center;">안녕하세요, 이가은입니다</h2>
          <p>안녕하세요. 저는 전북대학교 컴퓨터 인공지능 학부에 재학 중 인 이가은입니다. 저는 무언갈 표현하고 만들어 내는 것을 좋아해서 입시 미술을 했었습니다. 
        개인 사정으로 입시 미술을 그만두게 되었지만 비슷한 매력을 가진 코딩에 흥미가 생겼고, 
        디자인 요소를 사용할 수 있는 프론트엔드에 관심을 가지게 되었습니다.
        여러 경험을 통해 다양한 기술과 능력을 향상시켜 편리한 UX를 제공할 수 있는 프론트엔드 개발자가 되고 싶습니다.</p>
        </div>

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
      columns: '3'

  - block: collection
    content:
      id: section-2
      title: More Projects
      subtitle: 추가 프로젝트
      text:
      count: 3
      offset: 3
      order: desc
      filters:
        folders:
          - project
    design:
      view: community/custom_list
      columns: '3'

  - block: collection
    content:
      id: section-3
      title: Travel Collections
      subtitle: 여행 기록을 함께 나눠요
      text:
      count: 3
      offset: 0
      order: desc
      filters:
        folders:
          - travel
    design:
      view: community/travel_card
      columns: '3'

 
---
