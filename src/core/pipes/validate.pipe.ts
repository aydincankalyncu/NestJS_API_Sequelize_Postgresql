import { Injectable, ArgumentMetadata, BadRequestException, ValidationPipe, UnprocessableEntityException } from '@nestjs/common';

@Injectable()
export class ValidateInputPipe extends ValidationPipe {
   public async transform(value, metadata: ArgumentMetadata) {
      try {
        return await super.transform(value, metadata);
      } catch (e) {
         if (e instanceof BadRequestException) {
            console.log("Hata mesajı su sekildedir:     ",e.message);
            throw new UnprocessableEntityException(e.message).getResponse();
         }
      }
   }

   private handleError(errors) {
        return errors.map(error => error.constraints);
   }
}