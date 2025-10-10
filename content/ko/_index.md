---
# 메인 페이지 - Modern Minimalism Design
title:
date: 2024-10-05
type: landing

sections:

  - block: features
    content:
      title: 안녕하세요 👋 웹 개발자가 되고 싶은 이가은입니다
      text: 프론트엔드에서 시작해 풀스택까지의 여정을 함께해주세요

  - block: slider
    content:
      slides:
      - title: About Me
        content: 컴퓨터와 더 친해지고 싶은
        align: center
        background:
          image:
            filename: human_computer_interaction.jpg
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
      slide_height: '550px'
      is_fullscreen: false
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

  - block: collection
    content:
      title: Travel
      subtitle: 여행 기록을 함께 나눠요
      text:
      count: 3
      filters:
        folders:
          - travel_jejudo
          - travel_fukuoka
          - travel_danang
    design:
      view: community/custom_card
      columns: '2'


 
---