---
#로고를 누르면 나타나는 페이지
# Leave the homepage title empty to use the site title
title:
date: 2024-03-25
type: landing

sections:

  - block: features
    content:
      title: 
      text: <br><span style="font-size:125%">안녕하세요. 웹 개발자가 되고 싶은 이가은 입니다. 프론트에서 시작해 풀스택까지의 여정을 지켜봐주세요.</span></br>


  - block: slider
    content:
      slides:
      - title: <span style="font-size:90%">About Me</span>
        content: <span style="font-size:90%">컴퓨터와 더 친해지고 싶은<span style="font-size:90%">
        align: center
        background:
          image:
            filename: web_develop.jpg
            filters:
              brightness: 0.4
          position: center
          color: '#000'

      - title: <span style="font-size:90%">Interests</span>
        content: <span style="font-size:90%">관심 분야가 많은 </span>
        align: center
        background:
          image:
            filename: data_science.jpg
            filters:
              brightness: 0.4
          position: center
          color: '#000'

      - title: <span style="font-size:90%">Travel</span>
        content: <span style="font-size:90%">여행을 좋아하는</span>
        align: center
        background:
          image:
            filename: fukuoka.jpg
            filters:
              brightness: 0.4
          position: center
          color: '#000'

      - title: <span style="font-size:90%">Front-end</span>
        content: <span style="font-size:90%">프론트 엔드 개발 지망 학부생</span>
        align: center
        background:
          image:
            filename: coding.jpg
            filters:
              brightness: 0.4
          position: center
          color: '#000'


      - title: <span style="font-size:90%">이가은</span>
        content: <span style="font-size:90%">이가은에 대해 더 알아보기</span>
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
          text: <span style="font-size:60%">Click me</span>
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