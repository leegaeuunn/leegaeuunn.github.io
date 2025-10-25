---
title: 'Chatbot System'

# Authors
# If you created a profile for a user (e.g. the default `admin` user), write the username (folder name) here
# and it will be replaced with their full name and linked to their profile.
authors:
  - Gaeun Lee

# Author notes (optional)
author_notes:
  - 'Corresponding author'
# {{equal}}

# Schedule page publish date (NOT publication's date).
publishDate: '2025-07-31'

# Publication type.
# Accepts a single type but formatted as a YAML list (for Hugo requirements).
# Enter a publication type from the CSL standard.
publication_types: ['paper-conference']

# Publication name and optional abbreviated publication name.
publication: Internship
publication_short: Internship

abstract: I developed a hybrid AI chatbot system that utilizes a generative AI (GPT, etc.) based document Q&A (RAG) system to provide responses to user questions along with relevant paragraphs and corresponding images.

# Summary. An optional shortened abstract.
summary: ''

tags: ['GitHub', 'Hugo Template', 'Personal Project']

# Display this page in the Featured widget?
featured: true
# url_pdf: 'AI 챗봇 시스템 중간 발표 최종.pdf'

---

{{< icon name="download" pack="fas" >}} [Download Presentation PDF](AI%20챗봇%20시스템%20중간%20발표%20최종.pdf)

# AIManual
[Gaeun Lee] Manual chatbot development using generative AI

---

## **Project Overview**

This project is a **PDF manual-based RAG (Retrieval-Augmented Generation) chatbot system**.

* **Streamlit**: Frontend UI
* **FastAPI**: API server providing LLM responses
  
---

## **Project Structure**

```
project/
 ├─ .env                # Environment variables (OpenAI key, etc.)
 ├─ requirements.txt    # Dependency packages
 ├─ app/
 │   ├─ __init__.py
 │   ├─ api.py          # FastAPI server
 │   ├─ llm.py    # PDF loading, vector DB, RAG chain
 │   ├─ config.py       # answer_examples and other settings
 ├─ frontend/
 │   ├─ chat.py   # Streamlit UI
 └─ extracted_images/   # Path for storing images extracted from PDF
```

| File Name | Role Description |
|-----------|------------------|
| `llm.py` | Core functionality including LangChain-based RAG processing, image extraction, search |
| `chat.py` | Streamlit UI, chat interface, session management |
| `config.py` | Example sentence settings for GPT response guidance |
| `.env` | OpenAI API key |

---

### **1. Package Installation**

```bash
pip install -r requirements.txt
```

---

## **How to Run**

### **1. Run Streamlit UI**

Run the chatbot by calling FastAPI API from Streamlit UI:

```bash
cd project/frontend
streamlit run chat.py
```

### **2. Run FastAPI Server**

Run the FastAPI server to provide API:

```bash
cd project
uvicorn app.api:app --reload
```