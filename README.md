# 🧠 KikiOrBouba

> **Are you sharp and energetic, or soft and adaptable?**  
> *KikiOrBouba* is an interactive, psychology-inspired questionnaire web application built with **Angular** that uses **Fuzzy Logic** to determine whether you are a **Kiki** or a **Bouba** based on four core personality traits.

🎮 **[Play the Live Quiz Here!](https://xep165739.github.io/Kiki-or-Bouba.github.io/landing)**

---

## 🌟 Overview & Concept

The **Kiki-Bouba Effect** is a famous psychological phenomenon demonstrating sound-shape symbolism—where sharp, jagged shapes are naturally mapped to the name "Kiki" and soft, rounded shapes to "Bouba". 

This project applies that sensory intuition to human personality:
- Instead of simple binary scoring, **KikiOrBouba** uses **Fuzzy Logic algorithms** to measure degrees of membership across four key personality dimensions.
- Based on your responses, the system calculates your balance of sharp (*Kiki*) versus rounded (*Bouba*) traits to place you into one of **4 personality types**.

---

## 🎮 Play Online

You don't need to build or run this project locally to take the quiz! Visit the hosted GitHub Pages site:

👉 **[https://xep165739.github.io/Kiki-or-Bouba.github.io/landing](https://xep165739.github.io/Kiki-or-Bouba.github.io/landing)**

---

## 🦄 The 2 Trait Types

The classification evaluates your balance between **Kiki** (sharp, direct, structured, intense) and **Bouba** (soft, harmonious, flexible, gentle):

1. **Kiki** 🔺  
   *Kiki across Social, Behavioral, Cognitive, and Drive dimensions.*  
   Direct, analytical, decisive, and goal-focused.

2. **Bouba** 🔵  
   *Bouba across Social, Behavioral, Cognitive, and Drive dimensions.*  
   Warm, empathetic, adaptable, and naturally intuitive.

---

## 🔬 Core Dimensions & Fuzzy Logic Engine

The questionnaire evaluates four main personality traits:

* **💬 Social:** Direct and sharp communication (*Kiki*) vs. empathetic and harmonious connection (*Bouba*).
* **🔄 Behavior:** Structured, decisive actions (*Kiki*) vs. flexible, adaptable responses (*Bouba*).
* **🧠 Cognitive:** Analytical, systematic thinking (*Kiki*) vs. intuitive, holistic processing (*Bouba*).
* **⚡ Drive:** Intense, task-oriented motivation (*Kiki*) vs. steady, flow-state motivation (*Bouba*).

### How Fuzzy Logic Works
1. **Fuzzification:** Raw input choices are mapped onto continuous membership functions (0.0 to 1.0) for each of the four dimensions.
2. **Fuzzy Rules:** Evaluates overlapping memberships across Social, Behavior, Cognitive, and Drive vectors.
3. **Defuzzification:** Computes the final score to determine your overall placement among the 4 personality types.

---

## 🛠️ Built With

* **Framework:** [Angular](https://angular.dev/) (v22.0.8)
* **Hosting:** [GitHub Pages](https://pages.github.com/)
* **Testing:** [Vitest](https://vitest.dev/)
* **Logic Core:** Custom TypeScript Fuzzy Logic System
* **Styling:** Modern CSS3

---

## 💻 Local Development Setup

If you want to clone the repo and run or contribute to the source code locally:

### Prerequisites

* [Node.js](https://nodejs.org/) (v18 or higher)
* npm
* **[Angular CLI](https://angular.dev/tools/cli)** (v24) installed globally:
  ```bash
  npm install -g @angular/cli@24
  ```

### Installation & Run

1. **Clone the repository:**
   ```bash
   git clone https://github.com/XeP165739/Kiki-or-Bouba.github.io
   cd KikiOrBouba
   ```
2. **Install Dependenies:**
   ```Bash
   npm install
   ```
3. **Start Server:**
   ```Bash
   ng serve
   ```

## Licence
> This project is open-source and available under the MIT License.
---
