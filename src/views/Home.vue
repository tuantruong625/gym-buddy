<template>
	<div class="home">
		<img class="underConstruction" src="@/assets/under-construction.png" alt>
		<h1>Dashboard Under Construction</h1>
	</div>
</template>

<script>
// @ is an alias to /src

export default {
	name: 'home',
	components: {}
}
</script>

<style lang="scss">
.home {
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

