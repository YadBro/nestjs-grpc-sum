import {
  Body,
  Controller,
  Get,
  Logger,
  OnModuleInit,
  Post,
} from '@nestjs/common';
import { AppService } from './app.service';
import { Client, ClientGrpc } from '@nestjs/microservices';
import { microserviceOptions } from './grpc.options';
import { IGrpcService } from './grpc.interface';

@Controller()
export class AppController implements OnModuleInit {
  private logger = new Logger('AppController');
  constructor(private readonly appService: AppService) {}

  @Client(microserviceOptions)
  private client: ClientGrpc;
  private grpcService: IGrpcService;

  onModuleInit() {
    this.grpcService = this.client.getService<IGrpcService>('AppController');
  }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('add')
  async accumulate(@Body('data') data: number[]) {
    console.log(data);
    this.logger.log('Adding ' + data.toString());

    return this.grpcService.accumulate({ data });
  }
  // @Get()
  // getHello(): string {
  //   return this.appService.getHello();
  // }
}
