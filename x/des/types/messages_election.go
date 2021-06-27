package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

var _ sdk.Msg = &MsgCreateElection{}

func NewMsgCreateElection(creator string, title string, candidates []string) *MsgCreateElection {
	return &MsgCreateElection{
		Creator:    creator,
		Title:      title,
		Candidates: candidates,
	}
}

func (msg *MsgCreateElection) Route() string {
	return RouterKey
}

func (msg *MsgCreateElection) Type() string {
	return "CreateElection"
}

func (msg *MsgCreateElection) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgCreateElection) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgCreateElection) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}

var _ sdk.Msg = &MsgUpdateElection{}

func NewMsgUpdateElection(creator string, id uint64, title string, candidates []string) *MsgUpdateElection {
	return &MsgUpdateElection{
		Id:         id,
		Creator:    creator,
		Title:      title,
		Candidates: candidates,
	}
}

func (msg *MsgUpdateElection) Route() string {
	return RouterKey
}

func (msg *MsgUpdateElection) Type() string {
	return "UpdateElection"
}

func (msg *MsgUpdateElection) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgUpdateElection) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgUpdateElection) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}

var _ sdk.Msg = &MsgCreateElection{}

func NewMsgDeleteElection(creator string, id uint64) *MsgDeleteElection {
	return &MsgDeleteElection{
		Id:      id,
		Creator: creator,
	}
}
func (msg *MsgDeleteElection) Route() string {
	return RouterKey
}

func (msg *MsgDeleteElection) Type() string {
	return "DeleteElection"
}

func (msg *MsgDeleteElection) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgDeleteElection) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgDeleteElection) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
