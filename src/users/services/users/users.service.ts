import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUserDto } from 'src/users/dto/users.dtos';
import { User } from 'src/users/entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
    constructor(@InjectRepository(User) private readonly userRepository: Repository<User>) { }

    createUser(createUserDto: CreateUserDto) {
        const newUser = this.userRepository.create(createUserDto);
        return this.userRepository.save(newUser);
    }

    findAll(): Promise<User[]> {
        return this.userRepository.find();
    }

    findOne(id: number): Promise<User> {
        return this.userRepository.findOneBy({ id });
    }

    async remove(id: number): Promise<void> {
        await this.userRepository.delete(id);
    }
}
