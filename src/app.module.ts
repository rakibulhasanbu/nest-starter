import { Module } from "@nestjs/common";
import { PrismaModule } from "@/database";
import { HealthModule } from "@/modules/health/health.module";

@Module({
    imports: [PrismaModule, HealthModule],
    controllers: [],
    providers: [],
})
export class AppModule {}
