<template>
	<div class="exercises">
		<img class="underConstruction" src="@/assets/under-construction.png" alt>
		<h1>Exercises Under Construction</h1>
	</div>
</template>

<script>
// @ is an alias to /src

export default {
	name: 'exercises',
	components: {}
}
</script>

<style lang="scss">
.exercises {
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	color: #868e96;
}
.underConstruction {
	width: 50rem;
}
</style>

