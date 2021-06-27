package keeper

import (
	"encoding/binary"
	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/nescampos/des/x/des/types"
	"strconv"
)

// GetElectionCount get the total number of election
func (k Keeper) GetElectionCount(ctx sdk.Context) uint64 {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.ElectionCountKey))
	byteKey := types.KeyPrefix(types.ElectionCountKey)
	bz := store.Get(byteKey)

	// Count doesn't exist: no element
	if bz == nil {
		return 0
	}

	// Parse bytes
	count, err := strconv.ParseUint(string(bz), 10, 64)
	if err != nil {
		// Panic because the count should be always formattable to iint64
		panic("cannot decode count")
	}

	return count
}

// SetElectionCount set the total number of election
func (k Keeper) SetElectionCount(ctx sdk.Context, count uint64) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.ElectionCountKey))
	byteKey := types.KeyPrefix(types.ElectionCountKey)
	bz := []byte(strconv.FormatUint(count, 10))
	store.Set(byteKey, bz)
}

// AppendElection appends a election in the store with a new id and update the count
func (k Keeper) AppendElection(
	ctx sdk.Context,
	creator string,
	title string,
	candidates []string,
) uint64 {
	// Create the election
	count := k.GetElectionCount(ctx)
	var election = types.Election{
		Creator:    creator,
		Id:         count,
		Title:      title,
		Candidates: candidates,
	}

	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.ElectionKey))
	value := k.cdc.MustMarshalBinaryBare(&election)
	store.Set(GetElectionIDBytes(election.Id), value)

	// Update election count
	k.SetElectionCount(ctx, count+1)

	return count
}

// SetElection set a specific election in the store
func (k Keeper) SetElection(ctx sdk.Context, election types.Election) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.ElectionKey))
	b := k.cdc.MustMarshalBinaryBare(&election)
	store.Set(GetElectionIDBytes(election.Id), b)
}

// GetElection returns a election from its id
func (k Keeper) GetElection(ctx sdk.Context, id uint64) types.Election {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.ElectionKey))
	var election types.Election
	k.cdc.MustUnmarshalBinaryBare(store.Get(GetElectionIDBytes(id)), &election)
	return election
}

// HasElection checks if the election exists in the store
func (k Keeper) HasElection(ctx sdk.Context, id uint64) bool {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.ElectionKey))
	return store.Has(GetElectionIDBytes(id))
}

// GetElectionOwner returns the creator of the election
func (k Keeper) GetElectionOwner(ctx sdk.Context, id uint64) string {
	return k.GetElection(ctx, id).Creator
}

// RemoveElection removes a election from the store
func (k Keeper) RemoveElection(ctx sdk.Context, id uint64) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.ElectionKey))
	store.Delete(GetElectionIDBytes(id))
}

// GetAllElection returns all election
func (k Keeper) GetAllElection(ctx sdk.Context) (list []types.Election) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.ElectionKey))
	iterator := sdk.KVStorePrefixIterator(store, []byte{})

	defer iterator.Close()

	for ; iterator.Valid(); iterator.Next() {
		var val types.Election
		k.cdc.MustUnmarshalBinaryBare(iterator.Value(), &val)
		list = append(list, val)
	}

	return
}

// GetElectionIDBytes returns the byte representation of the ID
func GetElectionIDBytes(id uint64) []byte {
	bz := make([]byte, 8)
	binary.BigEndian.PutUint64(bz, id)
	return bz
}

// GetElectionIDFromBytes returns ID in uint64 format from a byte array
func GetElectionIDFromBytes(bz []byte) uint64 {
	return binary.BigEndian.Uint64(bz)
}
