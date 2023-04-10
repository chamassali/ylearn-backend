import { Test, TestingModule } from '@nestjs/testing';
import { ExercicesOnUsersController } from './exercices-on-users.controller';

describe('ExercicesOnUsersController', () => {
  let controller: ExercicesOnUsersController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ExercicesOnUsersController],
    }).compile();

    controller = module.get<ExercicesOnUsersController>(ExercicesOnUsersController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
