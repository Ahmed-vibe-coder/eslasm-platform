# `[tenant]/courses/[courseId]/` — Course Detail

## Purpose
Full course detail page with description, curriculum, instructor info, pricing, and enrollment button.

## URL
`/courses/:courseId` (on tenant subdomain)

## Future Files
- `_components/course-header.tsx` — Course title, thumbnail, instructor, rating
- `_components/course-curriculum.tsx` — Lesson list with free preview indicators
- `_components/course-sidebar.tsx` — Price, enroll button, includes section
- `_components/instructor-card.tsx` — Instructor info card
- `_components/reviews.tsx` — Student reviews and ratings
- `learn/page.tsx` — Video player and lesson navigation (post-enrollment)
- `learn/[lessonId]/page.tsx` — Single lesson view
