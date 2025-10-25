---
title: 'Python Capital Quiz Game'

# Authors
# If you created a profile for a user (e.g. the default `admin` user), write the username (folder name) here
# and it will be replaced with their full name and linked to their profile.
authors:
  - Gaeun Lee
  - Jeongshik Choi
  - Jiyeon Jeong

# Author notes (optional)
author_notes:
  - 'Corresponding author'
# {{equal}}

# Schedule page publish date (NOT publication's date).
publishDate: '2023-06-23'

# Publication type.
# Accepts a single type but formatted as a YAML list (for Hugo requirements).
# Enter a publication type from the CSL standard.
publication_types: ['paper-conference']

# Publication name and optional abbreviated publication name.
publication: Computer Science and Coding
publication_short: Computer Science and Coding

abstract: I created a capital quiz game using Python.

# Summary. An optional shortened abstract.
summary: ''

tags: ['Python', 'Game', 'Capital Quiz', 'Team Project']

# Display this page in the Featured widget?
featured: true
# url_pdf: '수도_퀴즈_레포트.pdf'
---

{{< icon name="download" pack="fas" >}} [Report PDF Download](수도_퀴즈_레포트.pdf)

## 🎮 Project Overview

This project is an educational quiz game built with Python that tests players' knowledge of world capitals. The game features multiple difficulty levels, score tracking, and an intuitive command-line interface. It was developed as a team project to practice Python programming fundamentals and game development concepts.

### 🎯 Project Goals
- Create an engaging quiz game using Python
- Implement data structures for question storage
- Design a user-friendly command-line interface
- Track and display player scores
- Apply Python programming concepts (lists, dictionaries, functions)

### 🔧 Technologies Used
- **Language**: Python 3.x
- **Data Structures**: Lists, dictionaries, tuples
- **Features**: File I/O, random selection, input/output handling
- **Concepts**: Functions, loops, conditionals, error handling

## ✨ Key Features

### Game Modes
- **Easy Mode**: Focuses on well-known capitals
- **Medium Mode**: Includes moderately difficult questions
- **Hard Mode**: Challenges with lesser-known capitals

### Game Features
- **Question Bank**: Database of 100+ country-capital pairs
- **Score Tracking**: Keeps track of correct and incorrect answers
- **Feedback System**: Provides immediate feedback on player responses
- **Progress Display**: Shows current score and remaining questions

## 🏗️ Program Structure

### Main Components
- **Question Database**: Stores country-capital pairs in dictionaries
- **Game Logic**: Manages game flow and scoring
- **User Interface**: Handles input/output and displays
- **Statistics**: Tracks and displays player performance

### Code Organization
```python
# Main modules
- main.py           # Entry point and game loop
- questions.py      # Question database and selection
- scoring.py        # Score calculation and tracking
- display.py        # UI display functions
```

## 🎓 Learning Outcomes

- **Python Fundamentals**: Practiced core Python syntax and features
- **Data Structures**: Used lists and dictionaries effectively
- **File Handling**: Read and wrote data to files
- **User Input**: Implemented robust input validation
- **Error Handling**: Handled exceptions and edge cases
- **Teamwork**: Collaborated on code structure and features

## 💡 Key Programming Concepts Demonstrated

### 1. Data Management
Used dictionaries to store country-capital pairs:
```python
capitals = {
    'Korea': 'Seoul',
    'Japan': 'Tokyo',
    'France': 'Paris',
    # ... more countries
}
```

### 2. Random Selection
Implemented random question selection from the database

### 3. Control Flow
Used loops and conditionals for game logic

### 4. User Interaction
Handled user input with validation and error checking

## 🚀 Game Flow

1. **Startup**: Player selects difficulty level
2. **Question Display**: Random question shown to player
3. **Answer Input**: Player enters their answer
4. **Validation**: System checks answer correctness
5. **Feedback**: Immediate feedback provided
6. **Score Update**: Points added based on correct answers
7. **Summary**: Final score and statistics displayed

## 📊 Project Statistics
- **Team Size**: 3 members
- **Development Period**: 2 weeks
- **Lines of Code**: ~500 lines
- **Question Database**: 100+ questions
- **Features**: 3 difficulty levels

## 🎯 Impact

This project served as an excellent introduction to Python programming and game development. It demonstrated practical application of programming concepts while creating an enjoyable educational tool. The experience gained from this project laid the foundation for more complex software development projects.

