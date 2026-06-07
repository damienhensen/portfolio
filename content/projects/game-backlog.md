---
featured: false

title: Game Backlog
description: A full-stack game backlog application built with Flutter and Laravel, featuring interchangeable local and remote data sources, automatic game metadata enrichment, CI/CD, and Docker deployment.

type: School Assignment

date: 2026-06-06 15:08

tags:
  - Flutter
  - Dart
  - Laravel
  - SQLite
  - REST API
  - Docker
  - GitLab CI/CD

demo:
  source: https://github.com/damienhensen/game-backlog

cover:
  src: /images/projects/gamebacklog/home.jpg
  alt: Game Backlog application overview
  type: mobile

problem:
  title: The Problem
  text: The goal of this project was not simply to build another game tracker, but to explore how a mobile application can be designed around interchangeable data sources and a clean separation between presentation, business logic, and persistence.
  points:
    - Mobile applications should not depend on a single storage implementation.
    - Business logic should remain independent from the UI.
    - Additional game information should be retrieved automatically instead of entered manually.
    - The architecture should be maintainable and easy to extend.

solution:
  title: The Solution
  text: The application uses Flutter as the client and communicates through a repository abstraction instead of directly accessing storage. Depending on the implementation, requests can be handled by a local SQLite database or a Laravel REST API. The backend enriches games with additional metadata, reducing manual input while demonstrating a scalable full-stack architecture.
  points:
    - Manage a personal game backlog and wishlist.
    - Track play and ownership status.
    - Retrieve additional game metadata automatically.
    - Switch between local and remote data sources through a shared abstraction.

architecture:
  title: Full-Stack Application Flow
  description: The application is built around a repository abstraction that separates the Flutter frontend from the underlying storage implementation. Instead of communicating directly with a database or API, the UI interacts with a common interface that can delegate requests to either a local SQLite data source or a Laravel REST API. The backend exposes CRUD endpoints, processes background enrichment jobs, and persists data, allowing the application to switch data sources without changing the rest of the codebase.
  tags:
    - Flutter
    - Repository Pattern
    - SQLite
    - Laravel REST API
    - Background Jobs
    - Docker

code:
  filename: game_data_source.dart
  language: dart
  content: |
    abstract class GameDataSource {
        Future<List<Game>> retrieveGames();
        Future<Game?> getGame(int id);
        Future<Game> insertGame(Game game);
        Future<Game> updateGame(Game game);
        Future<void> removeGame(int id);
        Future<void> deleteAllGames();
    }

screenshots:
  - src: /images/projects/gamebacklog/home.jpg
    alt: Game Backlog overview showing tracked games
    type: mobile

  - src: /images/projects/gamebacklog/create.jpg
    alt: Creating a new game with play and ownership status
    type: mobile

  - src: /images/projects/gamebacklog/detail.jpg
    alt: Game detail page with automatically enriched metadata
    type: mobile

  - src: /images/projects/gamebacklog/edit.jpg
    alt: Editing an existing game using the management interface
    type: mobile

technicalAnalysis:
  title: Technical Analysis

  decisions:
    - title: Repository Abstraction
      description: Rather than tightly coupling the UI to a specific storage solution, the application communicates with a repository interface. This makes it possible to switch between local SQLite storage and a REST API without changing the rest of the application.

    - title: Separation Of Responsibilities
      description: The project follows a layered architecture where presentation, business logic, and data access are separated. This keeps widgets lightweight and makes the application easier to maintain and extend.

    - title: Automatic Metadata Enrichment
      description: Newly added games are enriched by backend jobs that retrieve additional information such as artwork and metadata from an external source. This improves the user experience while demonstrating asynchronous backend processing.

    - title: Deployment And Automation
      description: The project includes a GitLab CI/CD pipeline and Dockerized services for reproducible deployments. Automated testing helps verify that important functionality continues to work as new features are introduced.

challenge:
  title: Challenges
  description: The biggest challenge was designing an architecture that could support multiple storage implementations without affecting the rest of the application. Building clear abstractions between the UI, repository layer, and backend services made the project significantly more flexible and easier to maintain.

lessons:
  title: What This Project Demonstrates

  items:
    - title: Cross-Platform Development
      description: The project demonstrates building a mobile application using Flutter while integrating it with a custom backend.

    - title: Clean Application Architecture
      description: The application is organized into separate layers for presentation, repositories, services, and data sources, reducing coupling between components.

    - title: Full-Stack Engineering
      description: The project combines mobile development, backend APIs, databases, background jobs, CI/CD, and Docker into a single application.

    - title: Production-Oriented Workflow
      description: Beyond local development, the project includes automated deployment, containerization, environment configuration, and testing practices that mirror real-world software development.
---
