import { createRouter, createWebHistory } from 'vue-router'
import Index from '@/views/Index.vue'
import Types from '@/views/Types.vue'
import ListElections from '@/views/ListElections.vue'
import CreateElection from '@/views/CreateElection.vue'

const routerHistory = createWebHistory()
const routes = [
	{
		path: '/',
		component: Index
	},
	{ path: '/types', component: Types }
	,{ path: '/listelections', component: ListElections }
	,{ path: '/createelection', component: CreateElection }
]

const router = createRouter({
	history: routerHistory,
	routes
})

export default router
