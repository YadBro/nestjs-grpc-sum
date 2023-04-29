import type * as grpc from '@grpc/grpc-js';
import type { MessageTypeDefinition } from '@grpc/proto-loader';

import type { AppControllerClient as _app_AppControllerClient, AppControllerDefinition as _app_AppControllerDefinition } from './app/AppController';

type SubtypeConstructor<Constructor extends new (...args: any) => any, Subtype> = {
  new(...args: ConstructorParameters<Constructor>): Subtype;
};

export interface ProtoGrpcType {
  app: {
    AppController: SubtypeConstructor<typeof grpc.Client, _app_AppControllerClient> & { service: _app_AppControllerDefinition }
    NumberArray: MessageTypeDefinition
    SumOfNumberArray: MessageTypeDefinition
  }
}

