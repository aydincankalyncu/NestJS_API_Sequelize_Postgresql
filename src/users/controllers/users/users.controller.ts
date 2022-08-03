import { Body, Controller, Get, Param, ParseIntPipe, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { CreateUserDto } from 'src/users/dto/users.dtos';
import { UsersService } from 'src/users/services/users/users.service';

@Controller('users')
export class UsersController {

    constructor(private readonly userService : UsersService){};

    @Get()
    getUsers(){
        return this.userService.findAll();
    }

    @Get('id/:id')
    findUserById(@Param('id', ParseIntPipe) id: number){
        return this.userService.findOne(id);
    }

    @Post('create')
    @UsePipes(ValidationPipe)
    crateUser(@Body() createUserDto : CreateUserDto){
        return this.userService.createUser(createUserDto);
    }

}
