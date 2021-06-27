package des

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/nescampos/des/x/des/keeper"
	"github.com/nescampos/des/x/des/types"
)

// InitGenesis initializes the capability module's state from a provided genesis
// state.
func InitGenesis(ctx sdk.Context, k keeper.Keeper, genState types.GenesisState) {
	// this line is used by starport scaffolding # genesis/module/init
	// Set all the vote
	for _, elem := range genState.VoteList {
		k.SetVote(ctx, *elem)
	}

	// Set vote count
	k.SetVoteCount(ctx, uint64(len(genState.VoteList)))

	// Set all the election
	for _, elem := range genState.ElectionList {
		k.SetElection(ctx, *elem)
	}

	// Set election count
	k.SetElectionCount(ctx, uint64(len(genState.ElectionList)))

}

// ExportGenesis returns the capability module's exported genesis.
func ExportGenesis(ctx sdk.Context, k keeper.Keeper) *types.GenesisState {
	genesis := types.DefaultGenesis()

	// this line is used by starport scaffolding # genesis/module/export
	// Get all vote
	voteList := k.GetAllVote(ctx)
	for _, elem := range voteList {
		elem := elem
		genesis.VoteList = append(genesis.VoteList, &elem)
	}

	// Get all election
	electionList := k.GetAllElection(ctx)
	for _, elem := range electionList {
		elem := elem
		genesis.ElectionList = append(genesis.ElectionList, &elem)
	}

	return genesis
}
