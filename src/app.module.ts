import { Module } from "@nestjs/common";
import { PrismaModule } from "@/database/prisma.module.js";
import { HealthModule } from "@/modules/health/health.module.js";

@Module({
    imports: [PrismaModule, HealthModule],
    controllers: [],
    providers: [],
})
export class AppModule {}
