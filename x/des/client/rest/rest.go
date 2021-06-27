package rest

import (
	"github.com/gorilla/mux"

	"github.com/cosmos/cosmos-sdk/client"
	// this line is used by starport scaffolding # 1
)

const (
	MethodGet = "GET"
)

// RegisterRoutes registers des-related REST handlers to a router
func RegisterRoutes(clientCtx client.Context, r *mux.Router) {
	// this line is used by starport scaffolding # 2
	registerQueryRoutes(clientCtx, r)
	registerTxHandlers(clientCtx, r)

	registerQueryRoutes(clientCtx, r)
	registerTxHandlers(clientCtx, r)

}

func registerQueryRoutes(clientCtx client.Context, r *mux.Router) {
	// this line is used by starport scaffolding # 3
	r.HandleFunc("/des/votes/{id}", getVoteHandler(clientCtx)).Methods("GET")
	r.HandleFunc("/des/votes", listVoteHandler(clientCtx)).Methods("GET")

	r.HandleFunc("/des/elections/{id}", getElectionHandler(clientCtx)).Methods("GET")
	r.HandleFunc("/des/elections", listElectionHandler(clientCtx)).Methods("GET")

}

func registerTxHandlers(clientCtx client.Context, r *mux.Router) {
	// this line is used by starport scaffolding # 4
	r.HandleFunc("/des/votes", createVoteHandler(clientCtx)).Methods("POST")
	r.HandleFunc("/des/votes/{id}", updateVoteHandler(clientCtx)).Methods("POST")
	r.HandleFunc("/des/votes/{id}", deleteVoteHandler(clientCtx)).Methods("POST")

	r.HandleFunc("/des/elections", createElectionHandler(clientCtx)).Methods("POST")
	r.HandleFunc("/des/elections/{id}", updateElectionHandler(clientCtx)).Methods("POST")
	r.HandleFunc("/des/elections/{id}", deleteElectionHandler(clientCtx)).Methods("POST")

}
