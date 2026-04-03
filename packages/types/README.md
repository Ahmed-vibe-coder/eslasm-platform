# `packages/types/` — Shared TypeScript Types

## Purpose
Central repository for all TypeScript interfaces and type definitions used across the platform. Every app and package imports types from here.

## Role
Ensures type consistency between frontend, API client, and future backend. When the database schema changes, types are updated here first and propagate everywhere.

## Current Files
| File | Contents |
|---|---|
| `src/tenant.ts` | `Tenant`, `PlanTier`, `AgencyStatus` |
| `src/user.ts` | `User`, `UserRole` |
| `src/course.ts` | `Course`, `Lesson`, `CourseStatus`, `CourseLevel` |
| `src/builder.ts` | `BuilderPage`, `GrapesJSData`, `Template` |
| `src/plan.ts` | `Plan` with pricing and limits |
| `src/api.ts` | `ApiResponse<T>`, `PaginatedResponse<T>`, `ApiError` |
| `src/index.ts` | Barrel re-export of everything |

## Future Files
- `src/enrollment.ts` — `Enrollment`, `EnrollmentStatus`, `Progress`
- `src/certificate.ts` — `Certificate`, `CertificateTemplate`
- `src/payment.ts` — `Payment`, `Invoice`, `Subscription`
- `src/notification.ts` — `Notification`, `NotificationPreferences`
- `src/media.ts` — `MediaAsset`, `VideoAsset`, `UploadResult`
- `src/analytics.ts` — `AnalyticsEvent`, `DashboardMetrics`
- `src/auth.ts` — `Session`, `AuthProvider`, `Permission`
