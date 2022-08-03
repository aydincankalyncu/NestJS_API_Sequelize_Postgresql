import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUserDto } from 'src/users/dto/users.dtos';
//import { User } from 'src/users/entities/user.entity';
import { Repository } from 'typeorm';


export type User = any;
@Injectable()
export class UsersService {
    private readonly users = [
        {
            userId: 1,
            username: 'john',
            password: 'changeme',
        },
        {
            userId: 2,
            username: 'maria',
            password: 'guess',
        },
    ];

    async findOne(username: string): Promise<User | undefined> {
        return this.users.find(user => user.username === username);
    }
    //For PostgreSql

    // constructor(@InjectRepository(User) private readonly userRepository: Repository<User>) { }

    // createUser(createUserDto: CreateUserDto) {
    //     const newUser = this.userRepository.create(createUserDto);
    //     return this.userRepository.save(newUser);
    // }

    // findAll(): Promise<User[]> {
    //     return this.userRepository.find();
    // }

    // findOne(id: number): Promise<User> {
    //     return this.userRepository.findOneBy({ id });
    // }

    // async remove(id: number): Promise<void> {
    //     await this.userRepository.delete(id);
    // }
}
