import { Module } from "@nestjs/common";
import { APP_GUARD } from "@nestjs/core";

import { AuthModule } from "./auth/auth.module";
import { UsersModule } from "./users/users.module";
import { InstitutionsModule } from "./institutions/institutions.module";
import { AffiliationsModule } from "./affiliations/affiliations.module";
import { SubmissionsModule } from "./submissions/submissions.module";
import { ReviewsModule } from "./reviews/reviews.module";
import { GovernanceModule } from "./governance/governance.module";
import { AuditModule } from "./audit/audit.module";
import { SearchModule } from "./search/search.module";

import { AuthGuard } from "./common/guards/auth.guards";
import { RbacGuard } from "./common/guards/rbac.guard";

@Module({
  imports: [
    AuthModule,
    UsersModule,
    InstitutionsModule,
    AffiliationsModule,
    SubmissionsModule,
    ReviewsModule,
    GovernanceModule,
    AuditModule,
    SearchModule,
  ],
  providers: [
    { provide: APP_GUARD, useClass: AuthGuard },
    { provide: APP_GUARD, useClass: RbacGuard },
  ],
})
export class AppModule {}
