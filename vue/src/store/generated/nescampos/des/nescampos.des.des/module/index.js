// THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.
import { SigningStargateClient } from "@cosmjs/stargate";
import { Registry } from "@cosmjs/proto-signing";
import { Api } from "./rest";
import { MsgDeleteVote } from "./types/des/tx";
import { MsgUpdateVote } from "./types/des/tx";
import { MsgCreateElection } from "./types/des/tx";
import { MsgCreateVote } from "./types/des/tx";
import { MsgDeleteElection } from "./types/des/tx";
import { MsgUpdateElection } from "./types/des/tx";
const types = [
    ["/nescampos.des.des.MsgDeleteVote", MsgDeleteVote],
    ["/nescampos.des.des.MsgUpdateVote", MsgUpdateVote],
    ["/nescampos.des.des.MsgCreateElection", MsgCreateElection],
    ["/nescampos.des.des.MsgCreateVote", MsgCreateVote],
    ["/nescampos.des.des.MsgDeleteElection", MsgDeleteElection],
    ["/nescampos.des.des.MsgUpdateElection", MsgUpdateElection],
];
const registry = new Registry(types);
const defaultFee = {
    amount: [],
    gas: "200000",
};
const txClient = async (wallet, { addr: addr } = { addr: "http://localhost:26657" }) => {
    if (!wallet)
        throw new Error("wallet is required");
    const client = await SigningStargateClient.connectWithSigner(addr, wallet, { registry });
    const { address } = (await wallet.getAccounts())[0];
    return {
        signAndBroadcast: (msgs, { fee = defaultFee, memo = null }) => memo ? client.signAndBroadcast(address, msgs, fee, memo) : client.signAndBroadcast(address, msgs, fee),
        msgDeleteVote: (data) => ({ typeUrl: "/nescampos.des.des.MsgDeleteVote", value: data }),
        msgUpdateVote: (data) => ({ typeUrl: "/nescampos.des.des.MsgUpdateVote", value: data }),
        msgCreateElection: (data) => ({ typeUrl: "/nescampos.des.des.MsgCreateElection", value: data }),
        msgCreateVote: (data) => ({ typeUrl: "/nescampos.des.des.MsgCreateVote", value: data }),
        msgDeleteElection: (data) => ({ typeUrl: "/nescampos.des.des.MsgDeleteElection", value: data }),
        msgUpdateElection: (data) => ({ typeUrl: "/nescampos.des.des.MsgUpdateElection", value: data }),
    };
};
const queryClient = async ({ addr: addr } = { addr: "http://localhost:1317" }) => {
    return new Api({ baseUrl: addr });
};
export { txClient, queryClient, };
