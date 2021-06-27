<template>
	<div>
		<div class="container">
      	<!-- this line is used by starport scaffolding # 4 -->
		<SpH3>
		Election Module
		</SpH3>
		<election-form />
		<election-list />
		</div>
	</div>
</template>

<script>
import ElectionForm from "../components/ElectionForm";
import ElectionList from "../components/ElectionList";

export default {
  name: 'Types',
  components: { ElectionForm, ElectionList },
}
</script>

