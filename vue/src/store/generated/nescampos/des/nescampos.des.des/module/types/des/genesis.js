/* eslint-disable */
import { Vote } from "../des/vote";
import { Election } from "../des/election";
import { Writer, Reader } from "protobufjs/minimal";
export const protobufPackage = "nescampos.des.des";
const baseGenesisState = {};
export const GenesisState = {
    encode(message, writer = Writer.create()) {
        for (const v of message.voteList) {
            Vote.encode(v, writer.uint32(18).fork()).ldelim();
        }
        for (const v of message.electionList) {
            Election.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseGenesisState };
        message.voteList = [];
        message.electionList = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 2:
                    message.voteList.push(Vote.decode(reader, reader.uint32()));
                    break;
                case 1:
                    message.electionList.push(Election.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseGenesisState };
        message.voteList = [];
        message.electionList = [];
        if (object.voteList !== undefined && object.voteList !== null) {
            for (const e of object.voteList) {
                message.voteList.push(Vote.fromJSON(e));
            }
        }
        if (object.electionList !== undefined && object.electionList !== null) {
            for (const e of object.electionList) {
                message.electionList.push(Election.fromJSON(e));
            }
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.voteList) {
            obj.voteList = message.voteList.map((e) => e ? Vote.toJSON(e) : undefined);
        }
        else {
            obj.voteList = [];
        }
        if (message.electionList) {
            obj.electionList = message.electionList.map((e) => e ? Election.toJSON(e) : undefined);
        }
        else {
            obj.electionList = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseGenesisState };
        message.voteList = [];
        message.electionList = [];
        if (object.voteList !== undefined && object.voteList !== null) {
            for (const e of object.voteList) {
                message.voteList.push(Vote.fromPartial(e));
            }
        }
        if (object.electionList !== undefined && object.electionList !== null) {
            for (const e of object.electionList) {
                message.electionList.push(Election.fromPartial(e));
            }
        }
        return message;
    },
};
