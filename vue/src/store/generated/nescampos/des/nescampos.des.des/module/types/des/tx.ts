/* eslint-disable */
import { Reader, util, configure, Writer } from "protobufjs/minimal";
import * as Long from "long";

export const protobufPackage = "nescampos.des.des";

/** this line is used by starport scaffolding # proto/tx/message */
export interface MsgCreateVote {
  creator: string;
  electionID: string;
  candidate: string;
}

export interface MsgCreateVoteResponse {
  id: number;
}

export interface MsgUpdateVote {
  creator: string;
  id: number;
  electionID: string;
  candidate: string;
}

export interface MsgUpdateVoteResponse {}

export interface MsgDeleteVote {
  creator: string;
  id: number;
}

export interface MsgDeleteVoteResponse {}

export interface MsgCreateElection {
  creator: string;
  title: string;
  candidates: string[];
}

export interface MsgCreateElectionResponse {
  id: number;
}

export interface MsgUpdateElection {
  creator: string;
  id: number;
  title: string;
  candidates: string[];
}

export interface MsgUpdateElectionResponse {}

export interface MsgDeleteElection {
  creator: string;
  id: number;
}

export interface MsgDeleteElectionResponse {}

const baseMsgCreateVote: object = {
  creator: "",
  electionID: "",
  candidate: "",
};

export const MsgCreateVote = {
  encode(message: MsgCreateVote, writer: Writer = Writer.create()): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.electionID !== "") {
      writer.uint32(18).string(message.electionID);
    }
    if (message.candidate !== "") {
      writer.uint32(26).string(message.candidate);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCreateVote {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgCreateVote } as MsgCreateVote;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.electionID = reader.string();
          break;
        case 3:
          message.candidate = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreateVote {
    const message = { ...baseMsgCreateVote } as MsgCreateVote;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.electionID !== undefined && object.electionID !== null) {
      message.electionID = String(object.electionID);
    } else {
      message.electionID = "";
    }
    if (object.candidate !== undefined && object.candidate !== null) {
      message.candidate = String(object.candidate);
    } else {
      message.candidate = "";
    }
    return message;
  },

  toJSON(message: MsgCreateVote): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.electionID !== undefined && (obj.electionID = message.electionID);
    message.candidate !== undefined && (obj.candidate = message.candidate);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgCreateVote>): MsgCreateVote {
    const message = { ...baseMsgCreateVote } as MsgCreateVote;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.electionID !== undefined && object.electionID !== null) {
      message.electionID = object.electionID;
    } else {
      message.electionID = "";
    }
    if (object.candidate !== undefined && object.candidate !== null) {
      message.candidate = object.candidate;
    } else {
      message.candidate = "";
    }
    return message;
  },
};

const baseMsgCreateVoteResponse: object = { id: 0 };

export const MsgCreateVoteResponse = {
  encode(
    message: MsgCreateVoteResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCreateVoteResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgCreateVoteResponse } as MsgCreateVoteResponse;
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

  fromJSON(object: any): MsgCreateVoteResponse {
    const message = { ...baseMsgCreateVoteResponse } as MsgCreateVoteResponse;
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    return message;
  },

  toJSON(message: MsgCreateVoteResponse): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgCreateVoteResponse>
  ): MsgCreateVoteResponse {
    const message = { ...baseMsgCreateVoteResponse } as MsgCreateVoteResponse;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    return message;
  },
};

const baseMsgUpdateVote: object = {
  creator: "",
  id: 0,
  electionID: "",
  candidate: "",
};

export const MsgUpdateVote = {
  encode(message: MsgUpdateVote, writer: Writer = Writer.create()): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.id !== 0) {
      writer.uint32(16).uint64(message.id);
    }
    if (message.electionID !== "") {
      writer.uint32(26).string(message.electionID);
    }
    if (message.candidate !== "") {
      writer.uint32(34).string(message.candidate);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgUpdateVote {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgUpdateVote } as MsgUpdateVote;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        case 3:
          message.electionID = reader.string();
          break;
        case 4:
          message.candidate = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgUpdateVote {
    const message = { ...baseMsgUpdateVote } as MsgUpdateVote;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    if (object.electionID !== undefined && object.electionID !== null) {
      message.electionID = String(object.electionID);
    } else {
      message.electionID = "";
    }
    if (object.candidate !== undefined && object.candidate !== null) {
      message.candidate = String(object.candidate);
    } else {
      message.candidate = "";
    }
    return message;
  },

  toJSON(message: MsgUpdateVote): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.id !== undefined && (obj.id = message.id);
    message.electionID !== undefined && (obj.electionID = message.electionID);
    message.candidate !== undefined && (obj.candidate = message.candidate);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgUpdateVote>): MsgUpdateVote {
    const message = { ...baseMsgUpdateVote } as MsgUpdateVote;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    if (object.electionID !== undefined && object.electionID !== null) {
      message.electionID = object.electionID;
    } else {
      message.electionID = "";
    }
    if (object.candidate !== undefined && object.candidate !== null) {
      message.candidate = object.candidate;
    } else {
      message.candidate = "";
    }
    return message;
  },
};

const baseMsgUpdateVoteResponse: object = {};

export const MsgUpdateVoteResponse = {
  encode(_: MsgUpdateVoteResponse, writer: Writer = Writer.create()): Writer {
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgUpdateVoteResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgUpdateVoteResponse } as MsgUpdateVoteResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgUpdateVoteResponse {
    const message = { ...baseMsgUpdateVoteResponse } as MsgUpdateVoteResponse;
    return message;
  },

  toJSON(_: MsgUpdateVoteResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgUpdateVoteResponse>): MsgUpdateVoteResponse {
    const message = { ...baseMsgUpdateVoteResponse } as MsgUpdateVoteResponse;
    return message;
  },
};

const baseMsgDeleteVote: object = { creator: "", id: 0 };

export const MsgDeleteVote = {
  encode(message: MsgDeleteVote, writer: Writer = Writer.create()): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.id !== 0) {
      writer.uint32(16).uint64(message.id);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgDeleteVote {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgDeleteVote } as MsgDeleteVote;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgDeleteVote {
    const message = { ...baseMsgDeleteVote } as MsgDeleteVote;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    return message;
  },

  toJSON(message: MsgDeleteVote): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgDeleteVote>): MsgDeleteVote {
    const message = { ...baseMsgDeleteVote } as MsgDeleteVote;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    return message;
  },
};

const baseMsgDeleteVoteResponse: object = {};

export const MsgDeleteVoteResponse = {
  encode(_: MsgDeleteVoteResponse, writer: Writer = Writer.create()): Writer {
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgDeleteVoteResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgDeleteVoteResponse } as MsgDeleteVoteResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgDeleteVoteResponse {
    const message = { ...baseMsgDeleteVoteResponse } as MsgDeleteVoteResponse;
    return message;
  },

  toJSON(_: MsgDeleteVoteResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgDeleteVoteResponse>): MsgDeleteVoteResponse {
    const message = { ...baseMsgDeleteVoteResponse } as MsgDeleteVoteResponse;
    return message;
  },
};

const baseMsgCreateElection: object = {
  creator: "",
  title: "",
  candidates: "",
};

export const MsgCreateElection = {
  encode(message: MsgCreateElection, writer: Writer = Writer.create()): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.title !== "") {
      writer.uint32(18).string(message.title);
    }
    for (const v of message.candidates) {
      writer.uint32(26).string(v!);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCreateElection {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgCreateElection } as MsgCreateElection;
    message.candidates = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.title = reader.string();
          break;
        case 3:
          message.candidates.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreateElection {
    const message = { ...baseMsgCreateElection } as MsgCreateElection;
    message.candidates = [];
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.title !== undefined && object.title !== null) {
      message.title = String(object.title);
    } else {
      message.title = "";
    }
    if (object.candidates !== undefined && object.candidates !== null) {
      for (const e of object.candidates) {
        message.candidates.push(String(e));
      }
    }
    return message;
  },

  toJSON(message: MsgCreateElection): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.title !== undefined && (obj.title = message.title);
    if (message.candidates) {
      obj.candidates = message.candidates.map((e) => e);
    } else {
      obj.candidates = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<MsgCreateElection>): MsgCreateElection {
    const message = { ...baseMsgCreateElection } as MsgCreateElection;
    message.candidates = [];
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.title !== undefined && object.title !== null) {
      message.title = object.title;
    } else {
      message.title = "";
    }
    if (object.candidates !== undefined && object.candidates !== null) {
      for (const e of object.candidates) {
        message.candidates.push(e);
      }
    }
    return message;
  },
};

const baseMsgCreateElectionResponse: object = { id: 0 };

export const MsgCreateElectionResponse = {
  encode(
    message: MsgCreateElectionResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgCreateElectionResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgCreateElectionResponse,
    } as MsgCreateElectionResponse;
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

  fromJSON(object: any): MsgCreateElectionResponse {
    const message = {
      ...baseMsgCreateElectionResponse,
    } as MsgCreateElectionResponse;
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    return message;
  },

  toJSON(message: MsgCreateElectionResponse): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgCreateElectionResponse>
  ): MsgCreateElectionResponse {
    const message = {
      ...baseMsgCreateElectionResponse,
    } as MsgCreateElectionResponse;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    return message;
  },
};

const baseMsgUpdateElection: object = {
  creator: "",
  id: 0,
  title: "",
  candidates: "",
};

export const MsgUpdateElection = {
  encode(message: MsgUpdateElection, writer: Writer = Writer.create()): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.id !== 0) {
      writer.uint32(16).uint64(message.id);
    }
    if (message.title !== "") {
      writer.uint32(26).string(message.title);
    }
    for (const v of message.candidates) {
      writer.uint32(34).string(v!);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgUpdateElection {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgUpdateElection } as MsgUpdateElection;
    message.candidates = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        case 3:
          message.title = reader.string();
          break;
        case 4:
          message.candidates.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgUpdateElection {
    const message = { ...baseMsgUpdateElection } as MsgUpdateElection;
    message.candidates = [];
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    if (object.title !== undefined && object.title !== null) {
      message.title = String(object.title);
    } else {
      message.title = "";
    }
    if (object.candidates !== undefined && object.candidates !== null) {
      for (const e of object.candidates) {
        message.candidates.push(String(e));
      }
    }
    return message;
  },

  toJSON(message: MsgUpdateElection): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.id !== undefined && (obj.id = message.id);
    message.title !== undefined && (obj.title = message.title);
    if (message.candidates) {
      obj.candidates = message.candidates.map((e) => e);
    } else {
      obj.candidates = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<MsgUpdateElection>): MsgUpdateElection {
    const message = { ...baseMsgUpdateElection } as MsgUpdateElection;
    message.candidates = [];
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    if (object.title !== undefined && object.title !== null) {
      message.title = object.title;
    } else {
      message.title = "";
    }
    if (object.candidates !== undefined && object.candidates !== null) {
      for (const e of object.candidates) {
        message.candidates.push(e);
      }
    }
    return message;
  },
};

const baseMsgUpdateElectionResponse: object = {};

export const MsgUpdateElectionResponse = {
  encode(
    _: MsgUpdateElectionResponse,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgUpdateElectionResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgUpdateElectionResponse,
    } as MsgUpdateElectionResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgUpdateElectionResponse {
    const message = {
      ...baseMsgUpdateElectionResponse,
    } as MsgUpdateElectionResponse;
    return message;
  },

  toJSON(_: MsgUpdateElectionResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgUpdateElectionResponse>
  ): MsgUpdateElectionResponse {
    const message = {
      ...baseMsgUpdateElectionResponse,
    } as MsgUpdateElectionResponse;
    return message;
  },
};

const baseMsgDeleteElection: object = { creator: "", id: 0 };

export const MsgDeleteElection = {
  encode(message: MsgDeleteElection, writer: Writer = Writer.create()): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.id !== 0) {
      writer.uint32(16).uint64(message.id);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgDeleteElection {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgDeleteElection } as MsgDeleteElection;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgDeleteElection {
    const message = { ...baseMsgDeleteElection } as MsgDeleteElection;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    return message;
  },

  toJSON(message: MsgDeleteElection): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgDeleteElection>): MsgDeleteElection {
    const message = { ...baseMsgDeleteElection } as MsgDeleteElection;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    return message;
  },
};

const baseMsgDeleteElectionResponse: object = {};

export const MsgDeleteElectionResponse = {
  encode(
    _: MsgDeleteElectionResponse,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgDeleteElectionResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgDeleteElectionResponse,
    } as MsgDeleteElectionResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgDeleteElectionResponse {
    const message = {
      ...baseMsgDeleteElectionResponse,
    } as MsgDeleteElectionResponse;
    return message;
  },

  toJSON(_: MsgDeleteElectionResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgDeleteElectionResponse>
  ): MsgDeleteElectionResponse {
    const message = {
      ...baseMsgDeleteElectionResponse,
    } as MsgDeleteElectionResponse;
    return message;
  },
};

/** Msg defines the Msg service. */
export interface Msg {
  /** this line is used by starport scaffolding # proto/tx/rpc */
  CreateVote(request: MsgCreateVote): Promise<MsgCreateVoteResponse>;
  UpdateVote(request: MsgUpdateVote): Promise<MsgUpdateVoteResponse>;
  DeleteVote(request: MsgDeleteVote): Promise<MsgDeleteVoteResponse>;
  CreateElection(
    request: MsgCreateElection
  ): Promise<MsgCreateElectionResponse>;
  UpdateElection(
    request: MsgUpdateElection
  ): Promise<MsgUpdateElectionResponse>;
  DeleteElection(
    request: MsgDeleteElection
  ): Promise<MsgDeleteElectionResponse>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
  }
  CreateVote(request: MsgCreateVote): Promise<MsgCreateVoteResponse> {
    const data = MsgCreateVote.encode(request).finish();
    const promise = this.rpc.request(
      "nescampos.des.des.Msg",
      "CreateVote",
      data
    );
    return promise.then((data) =>
      MsgCreateVoteResponse.decode(new Reader(data))
    );
  }

  UpdateVote(request: MsgUpdateVote): Promise<MsgUpdateVoteResponse> {
    const data = MsgUpdateVote.encode(request).finish();
    const promise = this.rpc.request(
      "nescampos.des.des.Msg",
      "UpdateVote",
      data
    );
    return promise.then((data) =>
      MsgUpdateVoteResponse.decode(new Reader(data))
    );
  }

  DeleteVote(request: MsgDeleteVote): Promise<MsgDeleteVoteResponse> {
    const data = MsgDeleteVote.encode(request).finish();
    const promise = this.rpc.request(
      "nescampos.des.des.Msg",
      "DeleteVote",
      data
    );
    return promise.then((data) =>
      MsgDeleteVoteResponse.decode(new Reader(data))
    );
  }

  CreateElection(
    request: MsgCreateElection
  ): Promise<MsgCreateElectionResponse> {
    const data = MsgCreateElection.encode(request).finish();
    const promise = this.rpc.request(
      "nescampos.des.des.Msg",
      "CreateElection",
      data
    );
    return promise.then((data) =>
      MsgCreateElectionResponse.decode(new Reader(data))
    );
  }

  UpdateElection(
    request: MsgUpdateElection
  ): Promise<MsgUpdateElectionResponse> {
    const data = MsgUpdateElection.encode(request).finish();
    const promise = this.rpc.request(
      "nescampos.des.des.Msg",
      "UpdateElection",
      data
    );
    return promise.then((data) =>
      MsgUpdateElectionResponse.decode(new Reader(data))
    );
  }

  DeleteElection(
    request: MsgDeleteElection
  ): Promise<MsgDeleteElectionResponse> {
    const data = MsgDeleteElection.encode(request).finish();
    const promise = this.rpc.request(
      "nescampos.des.des.Msg",
      "DeleteElection",
      data
    );
    return promise.then((data) =>
      MsgDeleteElectionResponse.decode(new Reader(data))
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
