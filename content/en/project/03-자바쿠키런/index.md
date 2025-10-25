---
title: 'Java Cookie Run + Chat Room'

# Authors
# If you created a profile for a user (e.g. the default `admin` user), write the username (folder name) here
# and it will be replaced with their full name and linked to their profile.
authors:
  - Gaeun Lee
  - Maeum
  - Jinseon Lee
  - Junhyeong Kim

# Author notes (optional)
author_notes:
  - 'Corresponding author'
# {{equal}}

# Schedule page publish date (NOT publication's date).
publishDate: '2024-06-21'

# Publication type.
# Accepts a single type but formatted as a YAML list (for Hugo requirements).
# Enter a publication type from the CSL standard.
publication_types: ['paper-conference']

# Publication name and optional abbreviated publication name.
publication: Object-Oriented Programming (Java)
publication_short: Object-Oriented Programming (Java)

abstract: I recreated the Cookie Run game and built a chat room within it.

# Summary. An optional shortened abstract.
summary: ''

tags: ['Java', 'Cookie Run', 'Chat Room', 'Socket Communication', 'Team Project']

# Display this page in the Featured widget?
featured: true
# url_pdf: '202312746_이가은_최종_보고서.pdf'
---

{{< icon name="download" pack="fas" >}} [Final Report PDF Download](202312746_이가은_최종_보고서.pdf)

## 🎮 Project Overview

This project is a recreation of the Cookie Run game implemented in Java, featuring a real-time chat room using socket communication. The game combines classic side-scrolling runner mechanics with multiplayer chat functionality, demonstrating object-oriented programming principles and network programming concepts.

### 🎯 Project Goals
- Recreate the Cookie Run game mechanics using Java
- Implement a multi-user chat room with socket communication
- Apply object-oriented programming principles (inheritance, polymorphism, encapsulation)
- Learn and implement network programming concepts

### 🔧 Technologies Used
- **Language**: Java
- **Network**: Socket Programming (Server-Client architecture)
- **GUI**: Java Swing/AWT
- **Concepts**: Multi-threading, Socket I/O, Object serialization

## ✨ Key Features

### Game Features
- **Character Movement**: Responsive character controls with jumping and running mechanics
- **Obstacle System**: Dynamic obstacle generation and collision detection
- **Score System**: Real-time scoring based on distance traveled and items collected
- **Game States**: Menu, playing, game over, and ranking screens

### Chat Room Features
- **Real-time Messaging**: Instant message delivery using socket communication
- **Multi-user Support**: Multiple clients can connect and chat simultaneously
- **User Management**: Login/logout functionality with user identification
- **Message Broadcasting**: Server broadcasts messages to all connected clients

## 🏗️ Architecture

### Client-Server Model
- **Server**: Manages game sessions and chat room
- **Client**: Connects to server, sends/receives game data and chat messages

### Class Structure
- Game main classes with sprite management
- Network client/server handlers
- UI components for game and chat interface
- Thread management for concurrent operations

## 📝 Development Process

### Phase 1: Game Implementation
- Designed game character and animation
- Implemented collision detection algorithms
- Created game loop with frame-based rendering

### Phase 2: Network Integration
- Implemented socket server for game hosting
- Developed client-side socket connection
- Added error handling for network communication

### Phase 3: Chat Room Implementation
- Built chat message protocol
- Implemented message broadcasting mechanism
- Created user interface for chat functionality

## 🎓 Learning Outcomes

- **Object-Oriented Design**: Applied inheritance and polymorphism in game entities
- **Network Programming**: Gained experience with socket programming and client-server architecture
- **Threading**: Learned to handle multiple clients concurrently
- **GUI Development**: Created interactive user interfaces with Java Swing
- **Team Collaboration**: Practiced version control and team-based development

## 🚀 Challenges & Solutions

### Challenge: Real-time Synchronization
Multiple clients needed synchronized game states.
**Solution**: Implemented a server-side game state manager that broadcasts updates to all clients.

### Challenge: Thread Safety
Concurrent client connections required thread-safe operations.
**Solution**: Used synchronized blocks and thread-safe data structures.

## 📊 Project Statistics
- **Team Size**: 4 members
- **Development Period**: 4 weeks
- **Lines of Code**: ~2,500 lines
- **Key Classes**: 15+ classes 