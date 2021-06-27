package keeper

import (
	"context"
	"fmt"

	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/nescampos/des/x/des/types"
	"github.com/tendermint/tendermint/crypto"
)

func (k msgServer) CreateElection(goCtx context.Context, msg *types.MsgCreateElection) (*types.MsgCreateElectionResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	moduleAcct := sdk.AccAddress(crypto.AddressHash([]byte(types.ModuleName)))
    feeCoins, err := sdk.ParseCoinsNormalized("200token")
    if err != nil {
        return nil, err
    }
    creatorAddress, err := sdk.AccAddressFromBech32(msg.Creator)
    if err != nil {
        return nil, err
    }
    if err := k.bankKeeper.SendCoins(ctx, creatorAddress, moduleAcct, feeCoins); err != nil {
        return nil, err
    }

	id := k.AppendElection(
		ctx,
		msg.Creator,
		msg.Title,
		msg.Candidates,
	)

	return &types.MsgCreateElectionResponse{
		Id: id,
	}, nil
}

func (k msgServer) UpdateElection(goCtx context.Context, msg *types.MsgUpdateElection) (*types.MsgUpdateElectionResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	var election = types.Election{
		Creator:    msg.Creator,
		Id:         msg.Id,
		Title:      msg.Title,
		Candidates: msg.Candidates,
	}

	// Checks that the element exists
	if !k.HasElection(ctx, msg.Id) {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, fmt.Sprintf("key %d doesn't exist", msg.Id))
	}

	// Checks if the the msg sender is the same as the current owner
	if msg.Creator != k.GetElectionOwner(ctx, msg.Id) {
		return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "incorrect owner")
	}

	k.SetElection(ctx, election)

	return &types.MsgUpdateElectionResponse{}, nil
}

func (k msgServer) DeleteElection(goCtx context.Context, msg *types.MsgDeleteElection) (*types.MsgDeleteElectionResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	if !k.HasElection(ctx, msg.Id) {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, fmt.Sprintf("key %d doesn't exist", msg.Id))
	}
	if msg.Creator != k.GetElectionOwner(ctx, msg.Id) {
		return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "incorrect owner")
	}

	k.RemoveElection(ctx, msg.Id)

	return &types.MsgDeleteElectionResponse{}, nil
}
