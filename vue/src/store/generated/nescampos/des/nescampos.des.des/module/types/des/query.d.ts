import { Reader, Writer } from "protobufjs/minimal";
import { Vote } from "../des/vote";
import { PageRequest, PageResponse } from "../cosmos/base/query/v1beta1/pagination";
import { Election } from "../des/election";
export declare const protobufPackage = "nescampos.des.des";
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
export declare const QueryGetVoteRequest: {
    encode(message: QueryGetVoteRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryGetVoteRequest;
    fromJSON(object: any): QueryGetVoteRequest;
    toJSON(message: QueryGetVoteRequest): unknown;
    fromPartial(object: DeepPartial<QueryGetVoteRequest>): QueryGetVoteRequest;
};
export declare const QueryGetVoteResponse: {
    encode(message: QueryGetVoteResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryGetVoteResponse;
    fromJSON(object: any): QueryGetVoteResponse;
    toJSON(message: QueryGetVoteResponse): unknown;
    fromPartial(object: DeepPartial<QueryGetVoteResponse>): QueryGetVoteResponse;
};
export declare const QueryAllVoteRequest: {
    encode(message: QueryAllVoteRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryAllVoteRequest;
    fromJSON(object: any): QueryAllVoteRequest;
    toJSON(message: QueryAllVoteRequest): unknown;
    fromPartial(object: DeepPartial<QueryAllVoteRequest>): QueryAllVoteRequest;
};
export declare const QueryAllVoteResponse: {
    encode(message: QueryAllVoteResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryAllVoteResponse;
    fromJSON(object: any): QueryAllVoteResponse;
    toJSON(message: QueryAllVoteResponse): unknown;
    fromPartial(object: DeepPartial<QueryAllVoteResponse>): QueryAllVoteResponse;
};
export declare const QueryGetElectionRequest: {
    encode(message: QueryGetElectionRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryGetElectionRequest;
    fromJSON(object: any): QueryGetElectionRequest;
    toJSON(message: QueryGetElectionRequest): unknown;
    fromPartial(object: DeepPartial<QueryGetElectionRequest>): QueryGetElectionRequest;
};
export declare const QueryGetElectionResponse: {
    encode(message: QueryGetElectionResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryGetElectionResponse;
    fromJSON(object: any): QueryGetElectionResponse;
    toJSON(message: QueryGetElectionResponse): unknown;
    fromPartial(object: DeepPartial<QueryGetElectionResponse>): QueryGetElectionResponse;
};
export declare const QueryAllElectionRequest: {
    encode(message: QueryAllElectionRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryAllElectionRequest;
    fromJSON(object: any): QueryAllElectionRequest;
    toJSON(message: QueryAllElectionRequest): unknown;
    fromPartial(object: DeepPartial<QueryAllElectionRequest>): QueryAllElectionRequest;
};
export declare const QueryAllElectionResponse: {
    encode(message: QueryAllElectionResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryAllElectionResponse;
    fromJSON(object: any): QueryAllElectionResponse;
    toJSON(message: QueryAllElectionResponse): unknown;
    fromPartial(object: DeepPartial<QueryAllElectionResponse>): QueryAllElectionResponse;
};
/** Query defines the gRPC querier service. */
export interface Query {
    /** this line is used by starport scaffolding # 2 */
    Vote(request: QueryGetVoteRequest): Promise<QueryGetVoteResponse>;
    VoteAll(request: QueryAllVoteRequest): Promise<QueryAllVoteResponse>;
    Election(request: QueryGetElectionRequest): Promise<QueryGetElectionResponse>;
    ElectionAll(request: QueryAllElectionRequest): Promise<QueryAllElectionResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    Vote(request: QueryGetVoteRequest): Promise<QueryGetVoteResponse>;
    VoteAll(request: QueryAllVoteRequest): Promise<QueryAllVoteResponse>;
    Election(request: QueryGetElectionRequest): Promise<QueryGetElectionResponse>;
    ElectionAll(request: QueryAllElectionRequest): Promise<QueryAllElectionResponse>;
}
interface Rpc {
    request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
