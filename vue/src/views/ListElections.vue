<template>
	<div>
		<div class="container">
      	<!-- this line is used by starport scaffolding # 4 -->
		<SpH3>
		    Here are all elections you can vote. Remember you must vote for one candidate in each election.
		</SpH3>
		<election-list />
		</div>
	</div>
</template>

<script>
import ElectionList from "../components/ElectionList";

export default {
  name: 'ListElections',
  components: { ElectionList },
}
</script>