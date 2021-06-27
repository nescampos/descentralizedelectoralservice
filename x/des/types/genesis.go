package types

import (
	"fmt"
)

// DefaultIndex is the default capability global index
const DefaultIndex uint64 = 1

// DefaultGenesis returns the default Capability genesis state
func DefaultGenesis() *GenesisState {
	return &GenesisState{
		// this line is used by starport scaffolding # genesis/types/default
		VoteList:     []*Vote{},
		ElectionList: []*Election{},
	}
}

// Validate performs basic genesis state validation returning an error upon any
// failure.
func (gs GenesisState) Validate() error {
	// this line is used by starport scaffolding # genesis/types/validate
	// Check for duplicated ID in vote
	voteIdMap := make(map[uint64]bool)

	for _, elem := range gs.VoteList {
		if _, ok := voteIdMap[elem.Id]; ok {
			return fmt.Errorf("duplicated id for vote")
		}
		voteIdMap[elem.Id] = true
	}
	// Check for duplicated ID in election
	electionIdMap := make(map[uint64]bool)

	for _, elem := range gs.ElectionList {
		if _, ok := electionIdMap[elem.Id]; ok {
			return fmt.Errorf("duplicated id for election")
		}
		electionIdMap[elem.Id] = true
	}

	return nil
}
