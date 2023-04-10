import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { CategoriesModule } from './categories/categories.module';
import { ExercicesModule } from './exercices/exercices.module';
import { ExercicesOnUsersModule } from './exercices-on-users/exercices-on-users.module';
import { PrismaService } from './prisma.service';

@Module({
  imports: [UsersModule, CategoriesModule, ExercicesModule, ExercicesOnUsersModule],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
