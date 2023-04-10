import { Test, TestingModule } from '@nestjs/testing';
import { ExercicesOnUsersService } from './exercices-on-users.service';

describe('ExercicesOnUsersService', () => {
  let service: ExercicesOnUsersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ExercicesOnUsersService],
    }).compile();

    service = module.get<ExercicesOnUsersService>(ExercicesOnUsersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
