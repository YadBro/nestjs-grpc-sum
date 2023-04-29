import { Controller, Get, Logger } from '@nestjs/common';
import { AppService } from './app.service';
import { GrpcMethod } from '@nestjs/microservices';
import { NumberArray } from './appGRPC/app/NumberArray';
import { SumOfNumberArray } from './appGRPC/app/SumOfNumberArray';
import { MathService } from './math/math.service';

@Controller()
export class AppController {
  private logger = new Logger('AppController');
  constructor(
    private readonly appService: AppService,
    private math: MathService,
  ) {}

  // @Get()
  // getHello(): string {
  //   return this.appService.getHello();
  // }

  @GrpcMethod()
  accumulate(numberArray: { data: [number] }, metadata: any): SumOfNumberArray {
    console.log(numberArray);
    // this.logger.log('Adding ' + numberArray.data.toString());
    return { sum: this.math.accumulate(numberArray.data) };
  }
}
