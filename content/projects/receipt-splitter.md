---
featured: false

title: Receipt Splitter
description: A Flutter mobile application for scanning receipts, creating shared bill drafts, splitting expenses between participants, and tracking open settlements using local Drift persistence.

type: School Assignment

date: 2026-06-06 19:11

tags:
  - Flutter
  - Dart
  - Drift
  - SQLite
  - Provider
  - OCR
  - ML Kit

demo:
  source: https://github.com/damienhensen/receipt-splitter

cover:
  src: /images/projects/receiptsplitter/dashboard.jpg
  alt: Receipt Splitter dashboard showing open settlements and bill summaries

problem:
  title: The Problem
  text: Splitting receipts between multiple people becomes messy when a bill contains several items, different payers, partial payments, and changing participants. A simple receipt scanner is not enough; the application also needs to turn scanned items into a bill that can be edited, split, finalized, and tracked until everyone has paid.
  points:
    - Receipt items should not have to be entered manually one by one.
    - A bill can contain multiple expenses, participants, payers, and debt splits.
    - Users need to know which bills are still open and who still owes money.
    - Bill, expense, participant, and payment data should remain available locally on the device.

solution:
  title: The Solution
  text: Receipt Splitter combines OCR-assisted receipt scanning with a local shared-expense workflow. Users can scan or import a receipt image, crop it for better recognition, convert detected receipt lines into draft expenses, add participants, assign payers, split costs, finalize bills, and track outstanding payments from a dashboard.
  points:
    - Scan receipt images using the device camera or gallery.
    - Convert OCR output into structured receipt items.
    - Create editable bill drafts from detected receipt items.
    - Add participants and split each expense between selected people.
    - Track draft, open, and settled bills.
    - View dashboard summaries for open settlements, biggest bills, and largest debtors.

architecture:
  title: Local-First Mobile Application Flow
  description: The application uses a layered Flutter architecture. The UI layer is split into pages, widgets, and ViewModels. ViewModels expose screen state and delegate persistence to a repository. The repository uses Drift tables and mappers to translate database rows into UI domain models. OCR follows a separate pipeline where an image is picked or captured, cropped, processed by ML Kit text recognition, parsed into receipt items, and inserted as draft expenses in the local database.
  tags:
    - Flutter UI
    - Provider ViewModels
    - Drift Repository
    - SQLite Persistence
    - OCR Pipeline
    - Receipt Parsing

code:
  filename: receipt_parser.dart
  language: dart
  content: |
    static List<ReceiptItem> parse(String rawText) {
      final lines = rawText
          .split('\n')
          .map(_normalizeLine)
          .where((line) => line.isNotEmpty)
          .toList();

      final separatedItems = _parseSeparatedItemsAndPrices(lines);
      if (separatedItems.isNotEmpty) {
        return separatedItems;
      }

      final inlineItems = _parseInlineItems(lines);
      return inlineItems;
    }

screenshots:
  - src: /images/projects/receiptsplitter/dashboard.jpg
    alt: Dashboard showing open settlements, latest draft bills, and the largest outstanding shared expenses

  - src: /images/projects/receiptsplitter/settled.jpg
    alt: Bills overview organized into draft, open, and settled categories

  - src: /images/projects/receiptsplitter/bill-draft.jpg
    alt: Bill creation screen with participants and imported expenses ready for review before finalization

  - src: /images/projects/receiptsplitter/bill.jpg
    alt: Bill detail page displaying participants, expenses, payers, and remaining outstanding balances

  - src: /images/projects/receiptsplitter/debtors.jpg
    alt: Debtors overview aggregating outstanding balances across multiple bills for each participant

technicalAnalysis:
  title: Technical Analysis

  decisions:
    - title: OCR As An Input Pipeline
      description: The OCR feature is not treated as a standalone demo. It feeds directly into the bill workflow by converting recognized receipt text into structured receipt items and creating a bill draft from the result.

    - title: Local-First Persistence With Drift
      description: Bills, participants, persons, expenses, and expense splits are stored locally using Drift. This makes the application usable without a backend while still keeping the data model relational and structured.

    - title: Repository And Mapper Layer
      description: Database access is kept behind a BillRepository. Drift rows are converted into UI models through mapper classes, which prevents screens from depending directly on database tables.

    - title: ViewModel-Driven Screens
      description: Screens use Provider-backed ViewModels to handle state, subscriptions, validation, and user actions. This keeps UI widgets focused on rendering instead of containing bill and payment logic.

    - title: Derived Settlement Data
      description: Dashboard statistics such as open settlement value, top bills, and largest debtors are calculated from bill, expense, and split data instead of being stored separately. This reduces duplicated state and keeps summaries tied to the source data.

    - title: Bill Lifecycle Validation
      description: A bill starts as a draft, can only be opened after expenses have a payer and valid splits, and becomes settled when all expense splits are fully paid. This gives the application a clear workflow instead of treating bills as simple CRUD records.

challenge:
  title: Challenges
  description: The main challenge was connecting OCR input to a real expense-splitting workflow. The application has to deal with unreliable OCR text, editable receipt items, participants, payers, split validation, draft bills, open bills, and settlement status. The technical difficulty is not one algorithm, but keeping those concerns separated while still making them work as one mobile flow.

lessons:
  title: What This Project Demonstrates

  items:
    - title: Mobile Application Architecture
      description: The project separates screens, reusable widgets, ViewModels, services, repositories, mappers, database tables, and domain models.

    - title: Local Data Modeling
      description: The Drift database models bills, people, participants, expenses, and expense splits as separate relational concepts instead of storing everything as one flat object.

    - title: OCR Integration
      description: The application integrates camera/gallery selection, image cropping, ML Kit text recognition, receipt parsing, and bill creation into one workflow.

    - title: Business Logic Outside The UI
      description: Payment validation, debt aggregation, settlement status updates, and receipt parsing are handled outside presentation widgets, making the application easier to reason about and extend.
---
