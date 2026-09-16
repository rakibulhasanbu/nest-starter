import { Module } from "@nestjs/common";
import { TerminusModule } from "@nestjs/terminus";
import { PrismaModule } from "@/database";
import { HealthController } from "@/modules/health/health.controller";
import { PrismaHealthIndicator } from "@/modules/health/indicators/prisma.health";

@Module({
    imports: [TerminusModule, PrismaModule],
    controllers: [HealthController],
    providers: [PrismaHealthIndicator],
})
export class HealthModule {}
