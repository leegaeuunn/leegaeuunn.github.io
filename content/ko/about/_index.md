---
#로고를 누르면 나타나는 페이지
# Leave the homepage title empty to use the site title
title:
date: 2024-03-25
type: landing

sections:
  - block: features
    content:
      title: 안녕하세요. 이가은 입니다. 
      text: 프론트에서 시작해 풀스택까지의 여정을 지켜봐주세요.


  - block: slider
    content:
      slides:
      - title: About Me
        content: 컴퓨터와 더 친해지고 싶은
        align: center
        background:
          image:
            filename: web_develop.jpg
            filters:
              brightness: 0.4
          position: center
          color: '#000'

      - title: Interests
        content: 관심 분야가 많은
        align: center
        background:
          image:
            filename: data_science.jpg
            filters:
              brightness: 0.4
          position: center
          color: '#000'

      - title: Travel
        content: 여행을 좋아하는
        align: center
        background:
          image:
            filename: fukuoka.jpg
            filters:
              brightness: 0.4
          position: center
          color: '#000'

      - title: Front-end
        content: 프론트 엔드 개발 지망 학부생
        align: center
        background:
          image:
            filename: coding.jpg
            filters:
              brightness: 0.4
          position: center
          color: '#000'


      - title: 이가은
        content: 이가은에 대해 더 알아보기
        align: center
        background:
          image:
            filename: avatar.jpg
            filters:
              brightness: 0.4
          position: center
          color: '#000'
        link:
          icon: user
          icon_pack: fas
          text: Click me
          text-color: '#000'
          url: contact

    design:
      # Slide height is automatic unless you force a specific height (e.g. '400px')
      slide_height: '350px'
      is_fullscreen: true
      # Automatically transition through slides?
      loop: true
      # Duration of transition between slides (in ms)
      interval: 3000

  
---