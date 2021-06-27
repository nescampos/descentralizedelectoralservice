package types

import (
	"github.com/cosmos/cosmos-sdk/codec"
	cdctypes "github.com/cosmos/cosmos-sdk/codec/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/cosmos/cosmos-sdk/types/msgservice"
)

func RegisterCodec(cdc *codec.LegacyAmino) {
	// this line is used by starport scaffolding # 2
	cdc.RegisterConcrete(&MsgCreateVote{}, "des/CreateVote", nil)
	cdc.RegisterConcrete(&MsgUpdateVote{}, "des/UpdateVote", nil)
	cdc.RegisterConcrete(&MsgDeleteVote{}, "des/DeleteVote", nil)

	cdc.RegisterConcrete(&MsgCreateElection{}, "des/CreateElection", nil)
	cdc.RegisterConcrete(&MsgUpdateElection{}, "des/UpdateElection", nil)
	cdc.RegisterConcrete(&MsgDeleteElection{}, "des/DeleteElection", nil)

}

func RegisterInterfaces(registry cdctypes.InterfaceRegistry) {
	// this line is used by starport scaffolding # 3
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgCreateVote{},
		&MsgUpdateVote{},
		&MsgDeleteVote{},
	)
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgCreateElection{},
		&MsgUpdateElection{},
		&MsgDeleteElection{},
	)

	msgservice.RegisterMsgServiceDesc(registry, &_Msg_serviceDesc)
}

var (
	amino     = codec.NewLegacyAmino()
	ModuleCdc = codec.NewAminoCodec(amino)
)
