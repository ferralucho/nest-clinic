import { Test } from '@nestjs/testing';
import { Repository } from 'typeorm';
import { UsersService } from './users.service';
import { User } from './entities/user.entity';
import { UsersDTO } from './dto/create-user.dto';
import { Role } from './enums/role.enum';
import { getRepositoryToken } from '@nestjs/typeorm';

describe('UsersService', () => {
  let usersService: UsersService;
  let usersRepository: Repository<User>;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        UsersService,
        {
          provide: getRepositoryToken(User),
          useClass: Repository, // You can also use a mock repository if needed
        },
      ],
    }).compile();

    usersService = moduleRef.get<UsersService>(UsersService);
    usersRepository = moduleRef.get<Repository<User>>(getRepositoryToken(User));
  });

  describe('create', () => {
    it('should create a new user', async () => {
      const createUserDto: UsersDTO = {
        name: 'John Doe',
        email: 'john@example.com',
        password: 'password123',
      };

      const saveMock = jest.spyOn(usersRepository, 'save').mockResolvedValueOnce({
        id: 1,
        isActive: true,
        roles: [Role.doctor],
        ...createUserDto,
      } as User);

      const result = await usersService.create(createUserDto);

      expect(result).toEqual({
        id: 1,
        isActive: true,
        roles: [Role.doctor],
        ...createUserDto,
      });
      expect(saveMock).toHaveBeenCalledWith(expect.any(User));
    });
  });

  describe('findAll', () => {
    it('should return an array of users', async () => {
      const users: User[] = [
        {
          id: 1,
          name: 'John Doe',
          email: 'john@example.com',
          password: 'password123',
          isActive: true,
          roles: [Role.doctor],
        },
        {
          id: 2,
          name: 'Jane Smith',
          email: 'jane@example.com',
          password: 'password456',
          isActive: true,
          roles: [Role.doctor],
        },
      ];

      jest.spyOn(usersRepository, 'find').mockResolvedValueOnce(users);

      const result = await usersService.findAll();

      expect(result).toEqual(users);
    });
  });

  describe('findOne', () => {
    it('should find a user by email', async () => {
      const email = 'john@example.com';
      const user: User = {
        id: 1,
        name: 'John Doe',
        email,
        password: 'password123',
        isActive: true,
        roles: [Role.doctor],
      };

      jest.spyOn(usersRepository, 'findOne').mockResolvedValueOnce(user);

      const result = await usersService.findOne(email);

      expect(result).toEqual(user);
      expect(usersRepository.findOne).toHaveBeenCalledWith({ email });
    });
  });

  describe('remove', () => {
    it('should remove a user', async () => {
      const id = '1';
      const deleteMock = jest.spyOn(usersRepository, 'delete').mockResolvedValueOnce(undefined);

      await usersService.remove(id);

      expect(deleteMock).toHaveBeenCalledWith(id);
    });
  });
});
