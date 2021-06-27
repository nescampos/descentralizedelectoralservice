<template>
	<div>
		<div class="container">
			<img src="https://i.imgur.com/4leGh6F.png" alt="DES" />
			<div class="sp-token-send__holder">
			<div class="sp-component sp-token-send">
				<div class="sp-token-send__header sp-component-title"><h3>Create election</h3>
				<span >|</span><span>If you need to create a new election, please click here: </span>
				<SpLinkIcon link="/createelection" text="Create new election" icon="Form" />
				</div>
			</div>
			</div>
			<div class="sp-token-send__holder">
			<div class="sp-component sp-token-send">
				<div class="sp-token-send__header sp-component-title"><h3>Participate in election</h3>
				<span >|</span><span>If you want to participate and vote, please click here: </span>
				<SpLinkIcon link="/listelections" text="List of elections" icon="Form" />
				</div>
			</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'Index',
	computed: {
		address() {
			return this.$store.getters['common/wallet/address']
		}
	}
}
</script>
