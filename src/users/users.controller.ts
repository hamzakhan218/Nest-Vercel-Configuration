import { Body, Controller, Get, Param, Post } from '@nestjs/common';

@Controller('users')
export class UsersController {
    @Get()
     getUser(): string{
        return "This will return all the users in the Database."
    }

    @Post(":id")
    createUser(@Param("id") id: string, @Body() usersBody: {
        email: string,
        password: string
    } ): string{
        return `User will be created with id ${id} using these credentials email: ${usersBody.email} and password: ${usersBody.password}`

    }
}
