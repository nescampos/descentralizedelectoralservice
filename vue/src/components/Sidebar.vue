<template>
  <SpSidebar
					v-on:sidebar-open="sidebarOpen = true"
					v-on:sidebar-close="sidebarOpen = false"
				>
					<template v-slot:default>
						<SpLinkIcon link="/" text="Start" icon="Dashboard" />
					<!--	<SpLinkIcon link="/types" text="Custom Type" icon="Form" /> -->
						<SpLinkIcon link="/createelection" text="Create new election" icon="Form" />
						<SpLinkIcon link="/listelections" text="List of elections" icon="Form" />
						<div class="sp-dash"></div>
					</template>
					<template v-slot:footer>
						<SpStatusAPI :showText="sidebarOpen" />
						<SpStatusRPC :showText="sidebarOpen" />
						<SpStatusWS :showText="sidebarOpen" />
						<div class="sp-text">Build: v0.3.8</div>
					</template>
				</SpSidebar>
</template>

<script>
export default {
  name: 'Sidebar',
	data() {
		return {
			sidebarOpen: true
		}
	},
	computed: {
		hasWallet() {
			return this.$store.hasModule([ 'common', 'wallet'])
		}
	},
}
</script>
