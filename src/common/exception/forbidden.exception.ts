import { HttpException, HttpStatus } from "@nestjs/common"

export class ForbiddenException extends HttpException {
    constructor() {
        super({
            error: 'Custom forbidden exception',
            status: HttpStatus.FORBIDDEN
        }, HttpStatus.FORBIDDEN);
    }
}