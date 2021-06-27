/* eslint-disable */
import { Reader, util, configure, Writer } from "protobufjs/minimal";
import * as Long from "long";
import { Vote } from "../des/vote";
import {
  PageRequest,
  PageResponse,
} from "../cosmos/base/query/v1beta1/pagination";
import { Election } from "../des/election";

export const protobufPackage = "nescampos.des.des";

/** this line is used by starport scaffolding # 3 */
export interface QueryGetVoteRequest {
  id: number;
}

export interface QueryGetVoteResponse {
  Vote: Vote | undefined;
}

export interface QueryAllVoteRequest {
  pagination: PageRequest | undefined;
}

export interface QueryAllVoteResponse {
  Vote: Vote[];
  pagination: PageResponse | undefined;
}

export interface QueryGetElectionRequest {
  id: number;
}

export interface QueryGetElectionResponse {
  Election: Election | undefined;
}

export interface QueryAllElectionRequest {
  pagination: PageRequest | undefined;
}

export interface QueryAllElectionResponse {
  Election: Election[];
  pagination: PageResponse | undefined;
}

const baseQueryGetVoteRequest: object = { id: 0 };

export const QueryGetVoteRequest = {
  encode(
    message: QueryGetVoteRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetVoteRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryGetVoteRequest } as QueryGetVoteRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetVoteRequest {
    const message = { ...baseQueryGetVoteRequest } as QueryGetVoteRequest;
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    return message;
  },

  toJSON(message: QueryGetVoteRequest): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryGetVoteRequest>): QueryGetVoteRequest {
    const message = { ...baseQueryGetVoteRequest } as QueryGetVoteRequest;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    return message;
  },
};

const baseQueryGetVoteResponse: object = {};

export const QueryGetVoteResponse = {
  encode(
    message: QueryGetVoteResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.Vote !== undefined) {
      Vote.encode(message.Vote, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetVoteResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryGetVoteResponse } as QueryGetVoteResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.Vote = Vote.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetVoteResponse {
    const message = { ...baseQueryGetVoteResponse } as QueryGetVoteResponse;
    if (object.Vote !== undefined && object.Vote !== null) {
      message.Vote = Vote.fromJSON(object.Vote);
    } else {
      message.Vote = undefined;
    }
    return message;
  },

  toJSON(message: QueryGetVoteResponse): unknown {
    const obj: any = {};
    message.Vote !== undefined &&
      (obj.Vote = message.Vote ? Vote.toJSON(message.Vote) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryGetVoteResponse>): QueryGetVoteResponse {
    const message = { ...baseQueryGetVoteResponse } as QueryGetVoteResponse;
    if (object.Vote !== undefined && object.Vote !== null) {
      message.Vote = Vote.fromPartial(object.Vote);
    } else {
      message.Vote = undefined;
    }
    return message;
  },
};

const baseQueryAllVoteRequest: object = {};

export const QueryAllVoteRequest = {
  encode(
    message: QueryAllVoteRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryAllVoteRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryAllVoteRequest } as QueryAllVoteRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllVoteRequest {
    const message = { ...baseQueryAllVoteRequest } as QueryAllVoteRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllVoteRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryAllVoteRequest>): QueryAllVoteRequest {
    const message = { ...baseQueryAllVoteRequest } as QueryAllVoteRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryAllVoteResponse: object = {};

export const QueryAllVoteResponse = {
  encode(
    message: QueryAllVoteResponse,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.Vote) {
      Vote.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(
        message.pagination,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryAllVoteResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryAllVoteResponse } as QueryAllVoteResponse;
    message.Vote = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.Vote.push(Vote.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllVoteResponse {
    const message = { ...baseQueryAllVoteResponse } as QueryAllVoteResponse;
    message.Vote = [];
    if (object.Vote !== undefined && object.Vote !== null) {
      for (const e of object.Vote) {
        message.Vote.push(Vote.fromJSON(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllVoteResponse): unknown {
    const obj: any = {};
    if (message.Vote) {
      obj.Vote = message.Vote.map((e) => (e ? Vote.toJSON(e) : undefined));
    } else {
      obj.Vote = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryAllVoteResponse>): QueryAllVoteResponse {
    const message = { ...baseQueryAllVoteResponse } as QueryAllVoteResponse;
    message.Vote = [];
    if (object.Vote !== undefined && object.Vote !== null) {
      for (const e of object.Vote) {
        message.Vote.push(Vote.fromPartial(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryGetElectionRequest: object = { id: 0 };

export const QueryGetElectionRequest = {
  encode(
    message: QueryGetElectionRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetElectionRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetElectionRequest,
    } as QueryGetElectionRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetElectionRequest {
    const message = {
      ...baseQueryGetElectionRequest,
    } as QueryGetElectionRequest;
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    return message;
  },

  toJSON(message: QueryGetElectionRequest): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetElectionRequest>
  ): QueryGetElectionRequest {
    const message = {
      ...baseQueryGetElectionRequest,
    } as QueryGetElectionRequest;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    return message;
  },
};

const baseQueryGetElectionResponse: object = {};

export const QueryGetElectionResponse = {
  encode(
    message: QueryGetElectionResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.Election !== undefined) {
      Election.encode(message.Election, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryGetElectionResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetElectionResponse,
    } as QueryGetElectionResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.Election = Election.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetElectionResponse {
    const message = {
      ...baseQueryGetElectionResponse,
    } as QueryGetElectionResponse;
    if (object.Election !== undefined && object.Election !== null) {
      message.Election = Election.fromJSON(object.Election);
    } else {
      message.Election = undefined;
    }
    return message;
  },

  toJSON(message: QueryGetElectionResponse): unknown {
    const obj: any = {};
    message.Election !== undefined &&
      (obj.Election = message.Election
        ? Election.toJSON(message.Election)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetElectionResponse>
  ): QueryGetElectionResponse {
    const message = {
      ...baseQueryGetElectionResponse,
    } as QueryGetElectionResponse;
    if (object.Election !== undefined && object.Election !== null) {
      message.Election = Election.fromPartial(object.Election);
    } else {
      message.Election = undefined;
    }
    return message;
  },
};

const baseQueryAllElectionRequest: object = {};

export const QueryAllElectionRequest = {
  encode(
    message: QueryAllElectionRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryAllElectionRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllElectionRequest,
    } as QueryAllElectionRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllElectionRequest {
    const message = {
      ...baseQueryAllElectionRequest,
    } as QueryAllElectionRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllElectionRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllElectionRequest>
  ): QueryAllElectionRequest {
    const message = {
      ...baseQueryAllElectionRequest,
    } as QueryAllElectionRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryAllElectionResponse: object = {};

export const QueryAllElectionResponse = {
  encode(
    message: QueryAllElectionResponse,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.Election) {
      Election.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(
        message.pagination,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryAllElectionResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllElectionResponse,
    } as QueryAllElectionResponse;
    message.Election = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.Election.push(Election.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllElectionResponse {
    const message = {
      ...baseQueryAllElectionResponse,
    } as QueryAllElectionResponse;
    message.Election = [];
    if (object.Election !== undefined && object.Election !== null) {
      for (const e of object.Election) {
        message.Election.push(Election.fromJSON(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllElectionResponse): unknown {
    const obj: any = {};
    if (message.Election) {
      obj.Election = message.Election.map((e) =>
        e ? Election.toJSON(e) : undefined
      );
    } else {
      obj.Election = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllElectionResponse>
  ): QueryAllElectionResponse {
    const message = {
      ...baseQueryAllElectionResponse,
    } as QueryAllElectionResponse;
    message.Election = [];
    if (object.Election !== undefined && object.Election !== null) {
      for (const e of object.Election) {
        message.Election.push(Election.fromPartial(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

/** Query defines the gRPC querier service. */
export interface Query {
  /** this line is used by starport scaffolding # 2 */
  Vote(request: QueryGetVoteRequest): Promise<QueryGetVoteResponse>;
  VoteAll(request: QueryAllVoteRequest): Promise<QueryAllVoteResponse>;
  Election(request: QueryGetElectionRequest): Promise<QueryGetElectionResponse>;
  ElectionAll(
    request: QueryAllElectionRequest
  ): Promise<QueryAllElectionResponse>;
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
  }
  Vote(request: QueryGetVoteRequest): Promise<QueryGetVoteResponse> {
    const data = QueryGetVoteRequest.encode(request).finish();
    const promise = this.rpc.request("nescampos.des.des.Query", "Vote", data);
    return promise.then((data) =>
      QueryGetVoteResponse.decode(new Reader(data))
    );
  }

  VoteAll(request: QueryAllVoteRequest): Promise<QueryAllVoteResponse> {
    const data = QueryAllVoteRequest.encode(request).finish();
    const promise = this.rpc.request(
      "nescampos.des.des.Query",
      "VoteAll",
      data
    );
    return promise.then((data) =>
      QueryAllVoteResponse.decode(new Reader(data))
    );
  }

  Election(
    request: QueryGetElectionRequest
  ): Promise<QueryGetElectionResponse> {
    const data = QueryGetElectionRequest.encode(request).finish();
    const promise = this.rpc.request(
      "nescampos.des.des.Query",
      "Election",
      data
    );
    return promise.then((data) =>
      QueryGetElectionResponse.decode(new Reader(data))
    );
  }

  ElectionAll(
    request: QueryAllElectionRequest
  ): Promise<QueryAllElectionResponse> {
    const data = QueryAllElectionRequest.encode(request).finish();
    const promise = this.rpc.request(
      "nescampos.des.des.Query",
      "ElectionAll",
      data
    );
    return promise.then((data) =>
      QueryAllElectionResponse.decode(new Reader(data))
    );
  }
}

interface Rpc {
  request(
    service: string,
    method: string,
    data: Uint8Array
  ): Promise<Uint8Array>;
}

declare var self: any | undefined;
declare var window: any | undefined;
var globalThis: any = (() => {
  if (typeof globalThis !== "undefined") return globalThis;
  if (typeof self !== "undefined") return self;
  if (typeof window !== "undefined") return window;
  if (typeof global !== "undefined") return global;
  throw "Unable to locate global object";
})();

type Builtin = Date | Function | Uint8Array | string | number | undefined;
export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

function longToNumber(long: Long): number {
  if (long.gt(Number.MAX_SAFE_INTEGER)) {
    throw new globalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
  }
  return long.toNumber();
}

if (util.Long !== Long) {
  util.Long = Long as any;
  configure();
}
