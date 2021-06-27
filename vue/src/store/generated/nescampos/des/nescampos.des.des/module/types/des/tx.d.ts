import { Reader, Writer } from "protobufjs/minimal";
export declare const protobufPackage = "nescampos.des.des";
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
export interface MsgUpdateVoteResponse {
}
export interface MsgDeleteVote {
    creator: string;
    id: number;
}
export interface MsgDeleteVoteResponse {
}
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
export interface MsgUpdateElectionResponse {
}
export interface MsgDeleteElection {
    creator: string;
    id: number;
}
export interface MsgDeleteElectionResponse {
}
export declare const MsgCreateVote: {
    encode(message: MsgCreateVote, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgCreateVote;
    fromJSON(object: any): MsgCreateVote;
    toJSON(message: MsgCreateVote): unknown;
    fromPartial(object: DeepPartial<MsgCreateVote>): MsgCreateVote;
};
export declare const MsgCreateVoteResponse: {
    encode(message: MsgCreateVoteResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgCreateVoteResponse;
    fromJSON(object: any): MsgCreateVoteResponse;
    toJSON(message: MsgCreateVoteResponse): unknown;
    fromPartial(object: DeepPartial<MsgCreateVoteResponse>): MsgCreateVoteResponse;
};
export declare const MsgUpdateVote: {
    encode(message: MsgUpdateVote, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgUpdateVote;
    fromJSON(object: any): MsgUpdateVote;
    toJSON(message: MsgUpdateVote): unknown;
    fromPartial(object: DeepPartial<MsgUpdateVote>): MsgUpdateVote;
};
export declare const MsgUpdateVoteResponse: {
    encode(_: MsgUpdateVoteResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgUpdateVoteResponse;
    fromJSON(_: any): MsgUpdateVoteResponse;
    toJSON(_: MsgUpdateVoteResponse): unknown;
    fromPartial(_: DeepPartial<MsgUpdateVoteResponse>): MsgUpdateVoteResponse;
};
export declare const MsgDeleteVote: {
    encode(message: MsgDeleteVote, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgDeleteVote;
    fromJSON(object: any): MsgDeleteVote;
    toJSON(message: MsgDeleteVote): unknown;
    fromPartial(object: DeepPartial<MsgDeleteVote>): MsgDeleteVote;
};
export declare const MsgDeleteVoteResponse: {
    encode(_: MsgDeleteVoteResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgDeleteVoteResponse;
    fromJSON(_: any): MsgDeleteVoteResponse;
    toJSON(_: MsgDeleteVoteResponse): unknown;
    fromPartial(_: DeepPartial<MsgDeleteVoteResponse>): MsgDeleteVoteResponse;
};
export declare const MsgCreateElection: {
    encode(message: MsgCreateElection, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgCreateElection;
    fromJSON(object: any): MsgCreateElection;
    toJSON(message: MsgCreateElection): unknown;
    fromPartial(object: DeepPartial<MsgCreateElection>): MsgCreateElection;
};
export declare const MsgCreateElectionResponse: {
    encode(message: MsgCreateElectionResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgCreateElectionResponse;
    fromJSON(object: any): MsgCreateElectionResponse;
    toJSON(message: MsgCreateElectionResponse): unknown;
    fromPartial(object: DeepPartial<MsgCreateElectionResponse>): MsgCreateElectionResponse;
};
export declare const MsgUpdateElection: {
    encode(message: MsgUpdateElection, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgUpdateElection;
    fromJSON(object: any): MsgUpdateElection;
    toJSON(message: MsgUpdateElection): unknown;
    fromPartial(object: DeepPartial<MsgUpdateElection>): MsgUpdateElection;
};
export declare const MsgUpdateElectionResponse: {
    encode(_: MsgUpdateElectionResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgUpdateElectionResponse;
    fromJSON(_: any): MsgUpdateElectionResponse;
    toJSON(_: MsgUpdateElectionResponse): unknown;
    fromPartial(_: DeepPartial<MsgUpdateElectionResponse>): MsgUpdateElectionResponse;
};
export declare const MsgDeleteElection: {
    encode(message: MsgDeleteElection, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgDeleteElection;
    fromJSON(object: any): MsgDeleteElection;
    toJSON(message: MsgDeleteElection): unknown;
    fromPartial(object: DeepPartial<MsgDeleteElection>): MsgDeleteElection;
};
export declare const MsgDeleteElectionResponse: {
    encode(_: MsgDeleteElectionResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgDeleteElectionResponse;
    fromJSON(_: any): MsgDeleteElectionResponse;
    toJSON(_: MsgDeleteElectionResponse): unknown;
    fromPartial(_: DeepPartial<MsgDeleteElectionResponse>): MsgDeleteElectionResponse;
};
/** Msg defines the Msg service. */
export interface Msg {
    /** this line is used by starport scaffolding # proto/tx/rpc */
    CreateVote(request: MsgCreateVote): Promise<MsgCreateVoteResponse>;
    UpdateVote(request: MsgUpdateVote): Promise<MsgUpdateVoteResponse>;
    DeleteVote(request: MsgDeleteVote): Promise<MsgDeleteVoteResponse>;
    CreateElection(request: MsgCreateElection): Promise<MsgCreateElectionResponse>;
    UpdateElection(request: MsgUpdateElection): Promise<MsgUpdateElectionResponse>;
    DeleteElection(request: MsgDeleteElection): Promise<MsgDeleteElectionResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    CreateVote(request: MsgCreateVote): Promise<MsgCreateVoteResponse>;
    UpdateVote(request: MsgUpdateVote): Promise<MsgUpdateVoteResponse>;
    DeleteVote(request: MsgDeleteVote): Promise<MsgDeleteVoteResponse>;
    CreateElection(request: MsgCreateElection): Promise<MsgCreateElectionResponse>;
    UpdateElection(request: MsgUpdateElection): Promise<MsgUpdateElectionResponse>;
    DeleteElection(request: MsgDeleteElection): Promise<MsgDeleteElectionResponse>;
}
interface Rpc {
    request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
