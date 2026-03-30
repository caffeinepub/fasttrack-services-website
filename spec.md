# AllWay Services Website

## Current State
A 7-page professional business website for AllWay Services (manpower recruitment & staffing company) built with React + TypeScript + Tailwind. Pages: Home, About, Services, Industries, Job Seekers, Employers, Contact. Corporate blue/white/grey brand. Backend-connected contact form and job application modal.

## Requested Changes (Diff)

### Add
- New `/presentation` route and `PresentationPage.tsx` — a full-screen, print-optimized slide deck presentation about AllWay Services
- Slide content covering: Cover/Title, About Us, Our Services, 9 Key Industries, For Job Seekers, For Employers, Why Choose Us, Contact Information
- "Print / Save as PDF" button visible on screen but hidden during printing
- Slide navigation (prev/next) for screen view
- @media print CSS that renders all slides as A4/Letter pages cleanly

### Modify
- App.tsx: Add route `/presentation` pointing to the new page

### Remove
- Nothing

## Implementation Plan
1. Create `src/frontend/src/pages/PresentationPage.tsx` with:
   - 8 slides as data objects (title, subtitle, body content)
   - Slide 1: Cover — company logo area, slogan, tagline
   - Slide 2: About Us — company overview, mission, values
   - Slide 3: Our Services — core service offerings (6 services)
   - Slide 4: 9 Key Industries served
   - Slide 5: For Job Seekers — process + benefits
   - Slide 6: For Employers — process + benefits
   - Slide 7: Why Choose AllWay — key differentiators + stats
   - Slide 8: Contact — phone, email, address, CTA
   - Screen view: full-screen slide viewer with prev/next navigation and slide counter
   - Print view: all slides rendered as separate A4 pages via @media print
   - "Save as PDF" / Print button (screen only, hidden on print)
2. Update `App.tsx` to register `/presentation` route
