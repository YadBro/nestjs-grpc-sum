// Original file: src/app.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { NumberArray as _app_NumberArray, NumberArray__Output as _app_NumberArray__Output } from '../app/NumberArray';
import type { SumOfNumberArray as _app_SumOfNumberArray, SumOfNumberArray__Output as _app_SumOfNumberArray__Output } from '../app/SumOfNumberArray';

export interface AppControllerClient extends grpc.Client {
  Accumulate(argument: _app_NumberArray, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_app_SumOfNumberArray__Output>): grpc.ClientUnaryCall;
  Accumulate(argument: _app_NumberArray, metadata: grpc.Metadata, callback: grpc.requestCallback<_app_SumOfNumberArray__Output>): grpc.ClientUnaryCall;
  Accumulate(argument: _app_NumberArray, options: grpc.CallOptions, callback: grpc.requestCallback<_app_SumOfNumberArray__Output>): grpc.ClientUnaryCall;
  Accumulate(argument: _app_NumberArray, callback: grpc.requestCallback<_app_SumOfNumberArray__Output>): grpc.ClientUnaryCall;
  accumulate(argument: _app_NumberArray, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_app_SumOfNumberArray__Output>): grpc.ClientUnaryCall;
  accumulate(argument: _app_NumberArray, metadata: grpc.Metadata, callback: grpc.requestCallback<_app_SumOfNumberArray__Output>): grpc.ClientUnaryCall;
  accumulate(argument: _app_NumberArray, options: grpc.CallOptions, callback: grpc.requestCallback<_app_SumOfNumberArray__Output>): grpc.ClientUnaryCall;
  accumulate(argument: _app_NumberArray, callback: grpc.requestCallback<_app_SumOfNumberArray__Output>): grpc.ClientUnaryCall;
  
}

export interface AppControllerHandlers extends grpc.UntypedServiceImplementation {
  Accumulate: grpc.handleUnaryCall<_app_NumberArray__Output, _app_SumOfNumberArray>;
  
}

export interface AppControllerDefinition extends grpc.ServiceDefinition {
  Accumulate: MethodDefinition<_app_NumberArray, _app_SumOfNumberArray, _app_NumberArray__Output, _app_SumOfNumberArray__Output>
}
