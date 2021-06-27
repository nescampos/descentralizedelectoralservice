package keeper

import (
	// this line is used by starport scaffolding # 1
	"github.com/nescampos/des/x/des/types"

	"github.com/cosmos/cosmos-sdk/codec"
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"

	abci "github.com/tendermint/tendermint/abci/types"
)

func NewQuerier(k Keeper, legacyQuerierCdc *codec.LegacyAmino) sdk.Querier {
	return func(ctx sdk.Context, path []string, req abci.RequestQuery) ([]byte, error) {
		var (
			res []byte
			err error
		)

		switch path[0] {
		// this line is used by starport scaffolding # 2
		case types.QueryGetVote:
			return getVote(ctx, path[1], k, legacyQuerierCdc)

		case types.QueryListVote:
			return listVote(ctx, k, legacyQuerierCdc)

		case types.QueryGetElection:
			return getElection(ctx, path[1], k, legacyQuerierCdc)

		case types.QueryListElection:
			return listElection(ctx, k, legacyQuerierCdc)

		default:
			err = sdkerrors.Wrapf(sdkerrors.ErrUnknownRequest, "unknown %s query endpoint: %s", types.ModuleName, path[0])
		}

		return res, err
	}
}
