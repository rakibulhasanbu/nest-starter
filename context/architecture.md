Use Prisma version 7
use import alias please

the folder architecture should be:
src/
├── config/
├── common/
├── database/
├── integrations/
├── modules/
├── app.module.ts
└── main.ts

do not add barrel/index.ts re-export files inside modules/ (e.g. modules/health/index.ts). import directly from the source file (e.g. `@/modules/health/health.module`).
