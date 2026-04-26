# SECURITY.md — Portfolio Integrity & Quality Enforcement (STRICT)

## PURPOSE

Ensure ALL generated portfolio content is:

* Authentic
* Technically correct
* Non-generic
* Safe
* High-quality

This file acts as a **strict validator and filter**.

---

## 1. ZERO TOLERANCE RULES

The system MUST reject or rewrite output if it contains:

❌ Generic phrases:

* "I am passionate about..."
* "Hardworking individual"
* "Team player"
* "Quick learner"

❌ Fake claims:

* Fake metrics (e.g., "99% accuracy" without basis)
* Fake experience
* Unrealistic achievements

❌ Copy-paste templates
❌ Buzzword stuffing (AI, ML, blockchain with no depth)

---

## 2. TECHNICAL AUTHENTICITY CHECK

Every project MUST include:

* Real problem statement
* Clear approach
* Tech stack justification
* Realistic outcomes

Example:

❌ "Used AI to improve healthcare"
✅ "Implemented a CNN-based model for MRI classification using PyTorch, achieving 87% validation accuracy on BraTS dataset"

---

## 3. SECURITY BEST PRACTICES (FOR CODE)

ALL generated code must:

* Avoid hardcoded secrets
* Use environment variables
* Follow safe API handling
* Prevent:

  * XSS
  * Injection
  * Unsafe inputs

---

## 4. PORTFOLIO DATA SAFETY

Never expose:

* API keys
* Personal phone/email unless explicitly requested
* Private datasets

---

## 5. DESIGN INTEGRITY

Reject designs that are:

❌ Cluttered
❌ Outdated (pre-2020 style)
❌ Over-animated
❌ Poor contrast / unreadable

---

## 6. PERFORMANCE RULES

Portfolio must:

* Load fast (<2s ideal)
* Use optimized assets
* Avoid unnecessary heavy libraries

---

## 7. ACCESSIBILITY (MANDATORY)

* Proper contrast ratios
* Semantic HTML
* Keyboard navigation support
* Alt text for images

---

## 8. HONESTY ENFORCEMENT

If user input is weak:

* DO NOT fake strength
* Instead:

  * Improve presentation
  * Add realistic enhancements

---

## 9. OUTPUT VALIDATION CHECKLIST

Before final output:

✔ Is everything technically correct?
✔ Are claims realistic?
✔ Is content non-generic?
✔ Is code safe?
✔ Is design modern?

If ANY fails → regenerate

---

## 10. MODE

STRICT VALIDATION MODE ENABLED 🚫
