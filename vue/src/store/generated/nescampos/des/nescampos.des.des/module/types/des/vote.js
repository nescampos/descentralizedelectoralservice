/* eslint-disable */
import * as Long from "long";
import { util, configure, Writer, Reader } from "protobufjs/minimal";
export const protobufPackage = "nescampos.des.des";
const baseVote = { creator: "", id: 0, electionID: "", candidate: "" };
export const Vote = {
    encode(message, writer = Writer.create()) {
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
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseVote };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.string();
                    break;
                case 2:
                    message.id = longToNumber(reader.uint64());
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
    fromJSON(object) {
        const message = { ...baseVote };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = String(object.creator);
        }
        else {
            message.creator = "";
        }
        if (object.id !== undefined && object.id !== null) {
            message.id = Number(object.id);
        }
        else {
            message.id = 0;
        }
        if (object.electionID !== undefined && object.electionID !== null) {
            message.electionID = String(object.electionID);
        }
        else {
            message.electionID = "";
        }
        if (object.candidate !== undefined && object.candidate !== null) {
            message.candidate = String(object.candidate);
        }
        else {
            message.candidate = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.id !== undefined && (obj.id = message.id);
        message.electionID !== undefined && (obj.electionID = message.electionID);
        message.candidate !== undefined && (obj.candidate = message.candidate);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseVote };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = object.creator;
        }
        else {
            message.creator = "";
        }
        if (object.id !== undefined && object.id !== null) {
            message.id = object.id;
        }
        else {
            message.id = 0;
        }
        if (object.electionID !== undefined && object.electionID !== null) {
            message.electionID = object.electionID;
        }
        else {
            message.electionID = "";
        }
        if (object.candidate !== undefined && object.candidate !== null) {
            message.candidate = object.candidate;
        }
        else {
            message.candidate = "";
        }
        return message;
    },
};
var globalThis = (() => {
    if (typeof globalThis !== "undefined")
        return globalThis;
    if (typeof self !== "undefined")
        return self;
    if (typeof window !== "undefined")
        return window;
    if (typeof global !== "undefined")
        return global;
    throw "Unable to locate global object";
})();
function longToNumber(long) {
    if (long.gt(Number.MAX_SAFE_INTEGER)) {
        throw new globalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
    }
    return long.toNumber();
}
if (util.Long !== Long) {
    util.Long = Long;
    configure();
}
