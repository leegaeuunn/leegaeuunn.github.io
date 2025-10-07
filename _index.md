---
# Leave the homepage title empty to use the site title
title:
date: 2024-09-30
type: landing

sections:
  - block: features
    content:
      title: <br><span style="font-size:125%">안녕하세요.웹 개발자가 되고 싶은 이가은입니다.</span>
      text: <br><span style="font-size:100%">프론트에서 시작해 풀스택까지의 여정을 지켜봐주세요.</span>

  - block: slider
    content:
      slides:
      - title: Who am I
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
    design:
      # Slide height is automatic unless you force a specific height (e.g. '400px')
      slide_height: '350px'
      is_fullscreen: false
      # Automatically transition through slides?
      loop: true
      # Duration of transition between slides (in ms)
      interval: 3000