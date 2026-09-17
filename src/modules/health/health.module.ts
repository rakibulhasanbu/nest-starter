import { Module } from "@nestjs/common";
import { TerminusModule } from "@nestjs/terminus";
import { PrismaModule } from "@/database/prisma.module.js";
import { HealthController } from "@/modules/health/health.controller.js";
import { PrismaHealthIndicator } from "@/modules/health/indicators/prisma.health.js";

@Module({
    imports: [TerminusModule, PrismaModule],
    controllers: [HealthController],
    providers: [PrismaHealthIndicator],
})
export class HealthModule {}
