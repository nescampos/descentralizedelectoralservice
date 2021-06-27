<template>
	<div>
		<div class="container">
      	<!-- this line is used by starport scaffolding # 4 -->
		<SpH3>
		 You can create a new election. Remember insert all candidates with full name.
		</SpH3>
		<election-form />
		</div>
	</div>
</template>

<script>
import ElectionForm from "../components/ElectionForm";

export default {
  name: 'CreateElection',
  components: { ElectionForm },
}
</script>

