package keeper

import (
	"context"

	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/cosmos/cosmos-sdk/types/query"
	"github.com/nescampos/des/x/des/types"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
)

func (k Keeper) ElectionAll(c context.Context, req *types.QueryAllElectionRequest) (*types.QueryAllElectionResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	var elections []*types.Election
	ctx := sdk.UnwrapSDKContext(c)

	store := ctx.KVStore(k.storeKey)
	electionStore := prefix.NewStore(store, types.KeyPrefix(types.ElectionKey))

	pageRes, err := query.Paginate(electionStore, req.Pagination, func(key []byte, value []byte) error {
		var election types.Election
		if err := k.cdc.UnmarshalBinaryBare(value, &election); err != nil {
			return err
		}

		elections = append(elections, &election)
		return nil
	})

	if err != nil {
		return nil, status.Error(codes.Internal, err.Error())
	}

	return &types.QueryAllElectionResponse{Election: elections, Pagination: pageRes}, nil
}

func (k Keeper) Election(c context.Context, req *types.QueryGetElectionRequest) (*types.QueryGetElectionResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	var election types.Election
	ctx := sdk.UnwrapSDKContext(c)

	if !k.HasElection(ctx, req.Id) {
		return nil, sdkerrors.ErrKeyNotFound
	}

	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.ElectionKey))
	k.cdc.MustUnmarshalBinaryBare(store.Get(GetElectionIDBytes(req.Id)), &election)

	return &types.QueryGetElectionResponse{Election: &election}, nil
}
