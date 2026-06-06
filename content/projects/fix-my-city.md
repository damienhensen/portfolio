---
featured: true

title: FixMyCity
description: A full-stack issue reporting platform for municipalities, built with Vue, Spring Boot, MySQL, JWT authentication, secure image handling, Cypress tests, and Docker-based deployment.

type: School Assignment

tags:
  - Vue
  - Spring Boot
  - MySQL
  - Docker
  - JWT
  - Cypress
  - S3

demo:
  source: https://github.com/damienhensen/fix-my-city

cover:
  src: /images/projects/fixmycity/feed.png
  alt: FixMyCity issue reporting dashboard

problem:
  title: The Problem
  text: Public space problems are easy to notice but not always easy to report or follow up on. Citizens need a simple way to submit reports, while administrators need a clear workflow for reviewing issues and keeping users updated.
  points:
    - Citizens need a simple way to report local problems.
    - Reports need useful context such as images, categories, urgency, and location.
    - Users need feedback after submitting a report.
    - Administrators need a central place to manage and update reports.

solution:
  title: The Solution
  text: FixMyCity is a full-stack platform where users can create issue reports, upload images, view reports on a map, track their own submissions, and receive notifications when administrators update the status of an issue.
  points:
    - Users can submit public space reports with images and location data.
    - Reports can be filtered by tag, urgency, and status.
    - Issues can be viewed in both a feed and an interactive map.
    - Admins can update issue statuses from a dedicated dashboard.
    - Users receive notifications when their reports are updated.

architecture:
  title: Full-Stack Application Flow
  description: The application consists of a Vue frontend, a Spring Boot REST API, and a MySQL database. Users can create reports, upload images, track issue statuses, and receive notifications when administrators update their reports. JWT authentication secures API access while Docker is used for deployment.
  tags:
    - Vue
    - REST API
    - JWT Auth
    - MySQL
    - S3
    - Docker

code:
  filename: NotificationService.java
  language: java
  content: |
    public void notificationAfterUpdate(
        Issue issue,
        Status issueStatus
    ) {
        StringBuilder message = new StringBuilder();

        message.append("The status of the post with title: \"")
            .append(issue.getTitle())
            .append("\" was changed to ");

        switch (issueStatus) {
            case OPEN -> message.append("open.");
            case IN_PROGRESS -> message.append("in progress.");
            case COMPLETED -> message.append("completed.");
            default -> message.append("unknown status.");
        }

        NotificationRequest request = new NotificationRequest();
        request.setMessage(message.toString());
        request.setRead(false);

        saveNotification(request, issue.getUser(), issue);
    }

screenshots:
  - src: /images/projects/fixmycity/home.png
    alt: FixMyCity landing page

  - src: /images/projects/fixmycity/feed.png
    alt: Issue feed with filtering and status tracking

  - src: /images/projects/fixmycity/map.png
    alt: Interactive map showing issue locations

  - src: /images/projects/fixmycity/profile.png
    alt: User profile and submitted reports

  - src: /images/projects/fixmycity/admin.png
    alt: Administrative issue management dashboard

technicalAnalysis:
  title: Technical Analysis

  decisions:
    - title: Frontend And Backend Separation
      description: The application was built as a separate Vue frontend and Spring Boot backend communicating through a REST API. This allowed both applications to be developed, tested, and deployed independently while maintaining a clear separation of responsibilities.

    - title: Authentication And Authorization
      description: JWT access tokens and refresh tokens were used to secure the API. Protected endpoints validate authenticated users before allowing access to features such as issue creation, profile management, notifications, and administrative actions.

    - title: Issue Management Workflow
      description: The core of the application revolves around issue reports. Users can create reports with location data and images, while administrators review submissions, update statuses, and trigger notifications that keep users informed about progress.

    - title: Deployment And Quality Assurance
      description: The project includes Dockerized services, automated deployments, and Cypress end-to-end tests. This helped ensure that important user flows continued to work correctly as new features were added.

challenge:
  title: Challenges
  description: The main challenge in this project was not one single difficult algorithm, but the amount of connected application features. Authentication affects protected routes, image access, user profiles, issue ownership, admin permissions, and notifications. The project needed enough structure to keep those parts separated while still making them work together as one application.

lessons:
  title: What This Project Demonstrates

  items:
    - title: Full-Stack Application Development
      description: The project combines frontend views, backend APIs, database persistence, authentication, image uploads, notifications, map integration, and deployment into one complete application.

    - title: Practical Backend Structure
      description: The backend is organized into controllers, DTOs, entities, repositories, services, filters, configuration classes, and seeders. This keeps request handling, business logic, persistence, security, and setup code separated.

    - title: Frontend Reuse
      description: Reusable services and composables handle repeated frontend concerns such as sessions, authenticated requests, secure image loading, image uploads, deletion, flash messages, and availability checks.

    - title: Production-Oriented Workflow
      description: The project goes beyond local development by including Docker, environment configuration, CI/CD, automated testing, test deployment, and production deployment.
---
