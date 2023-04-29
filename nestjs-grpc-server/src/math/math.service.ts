import { Injectable } from '@nestjs/common';
import { NumberArray } from 'src/appGRPC/app/NumberArray';

@Injectable()
export class MathService {
  accumulate(numberOfArray: number[]): number {
    const result = numberOfArray.reduce((a, b) => a + b);
    // console.log({ numberOfArray });
    return result;
  }
}
