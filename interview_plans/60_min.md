# 60 Minute Interview

## Intro - 10 minutes
- Interview overview
  - 10 min intro & warm-up
  - 40 min collaborative technical question — focused on communicating your thought process and reasoning, less about memorizing syntax or having a perfect solution
  - 10 min feedback & Q&A
- My intro
- Candidate elevator pitch
- Tell me about a recent technical project and a challenge you faced during development.
- Anything else you want to share before we jump into the technical portion?

## Technical Question - 40 minutes
- **Step 1: Understand & Plan (5 min)**
  - Have the candidate read the prompt and inspect a sample transaction object.
  - Ask them to walk through their approach in plain English before writing code (filtering, grouping/summing, sorting, slicing).
- **Step 2: Part 1 — Top 3 Highest-Selling Products (15 min)**
  - Filter transactions to `days_ago <= 14`, sum `purchase_amount` per `product_id`, sort descending, and return/log the top 3.
  - Remind them exact table formatting isn't required; returning an array/object or logging is great.
- **Step 3: Part 2 — Accounting for Returns / Net Revenue (10 min)**
  - Introduce `refund_amount` and ask how their Part 1 logic adapts to calculate net revenue (`purchase_amount - refund_amount`).
- **Step 4: Extension & Discussion (if time remains, ~10 min)**
  - Edge cases: How would you handle ties for 3rd place? Missing/null `refund_amount`? Empty array?
  - Follow-up: How would you reuse this pattern to find the top-selling `state` or `city`?
  - Scaling: What happens if `transactions` has 1,000,000 rows?

## Feedback & Q&A - 10 minutes
- Communication & collaboration (thinking out loud, asking clarifying questions)
- Problem-solving & technical fundamentals (breaking down the problem, data structures, debugging)
- Actionable takeaways for future interviews
- Candidate questions for me
