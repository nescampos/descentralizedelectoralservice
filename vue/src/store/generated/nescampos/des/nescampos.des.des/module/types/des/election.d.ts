import { Writer, Reader } from "protobufjs/minimal";
export declare const protobufPackage = "nescampos.des.des";
export interface Election {
    creator: string;
    id: number;
    title: string;
    candidates: string[];
}
export declare const Election: {
    encode(message: Election, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): Election;
    fromJSON(object: any): Election;
    toJSON(message: Election): unknown;
    fromPartial(object: DeepPartial<Election>): Election;
};
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
