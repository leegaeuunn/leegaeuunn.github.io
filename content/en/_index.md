---
# Main Page - Modern Minimalism Design
title:
date: 2025-10-05
type: landing

sections:
  # - block: features
  #   content:
  #     title: 안녕하세요. 이가은 입니다. 
  #     text: 프론트에서 시작해 풀스택까지의 여정을 지켜봐주세요.

  - block: markdown
    content:
      title: 
      text: |
        <link rel="stylesheet" href="/projects/scroll-animation-demo/style.css" />
        
        <section class="scene" id="scene1">
          <div class="stage">
            <div class="plate-wrap">
              <img class="plate" src="/projects/scroll-animation-demo/images/plate-arm.png" alt="접시와 팔">
            </div>
            <img class="person" src="/projects/scroll-animation-demo/images/person.png" alt="사람">
          </div>
        </section>
        
        <script src="/projects/scroll-animation-demo/script.js"></script>

  - block: slider
    content:
      slides:
      - title: About Me
        content: Wanting to be closer to computers
        align: center
        background:
          image:
            filename: desk.png
            filters:
              brightness: 0.35
          position: center
          color: '#000'

      - title: Interests
        content: Interested in various fields
        align: center
        background:
          image:
            filename: data_science.jpg
            filters:
              brightness: 0.35
          position: center
          color: '#000'

      - title: Travel
        content: Loving to travel
        align: center
        background:
          image:
            filename: fukuoka.jpg
            filters:
              brightness: 0.35
          position: center
          color: '#000'

      - title: Developer
        content: Continuously growing developer
        align: center
        background:
          image:
            filename: coding.jpg
            filters:
              brightness: 0.35
          position: center
          color: '#000'

      - title: Contact
        content: Want to know more about me?
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
          text: Learn More
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
      text: Basic Information of Gaeun Lee
      items:
        - name: Name
          icon: user
          icon_pack: fas
          description: Gaeun Lee
        - name: Date of Birth
          icon: calendar-days
          icon_pack: fas
          description: 2003.01.23
        - name: Location
          icon: location-dot
          icon_pack: fas
          description: Jeonbuk National University, College of Engineering, Building 7
        - name: Contact
          icon: phone
          icon_pack: fas
          description: 010-5906-5988
        - name: Email
          icon: envelope
          icon_pack: fas
          description: igaeun8@gmail.com
        - name: Education
          icon: graduation-cap
          icon_pack: fas
          description: Department of Computer Science and Artificial Intelligence, Jeonbuk National University
    design:
      columns: '3'


  - block: collection
    content:
      id: section-1
      title: Projects
      subtitle: Check out my previous projects
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
      subtitle: Let's share travel memories together
      text:
      count: 3
      filters:
        folders:
          - travel_jejudo
          - travel_hanoi
          - travel_philippines
    design:
      view: community/custom_card
      columns: '2'


 
---