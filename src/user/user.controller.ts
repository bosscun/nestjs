import { Crud, CrudController } from '@nestjsx/crud';
import { UserEntity } from './user.entity';
import { Controller } from '@nestjs/common';
import { UserService } from './user.service';

@Crud({
    model: {
        type: UserEntity
    }
})

@Controller('user')
export class UserController implements CrudController<UserEntity> {
    constructor(public service: UserService) {
    }
}
