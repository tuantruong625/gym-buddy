<template>
	<div id="app">
		<div class="nav">
			<router-link to="/">Home</router-link>
			<router-link to="/exercises">Exercises</router-link>
			<router-link to="/profile">Profile</router-link>
			<router-link to="/calender">Calender</router-link>
			<router-link to="/goals">Goals</router-link>
		</div>
		<router-view class="routerView"/>
	</div>
</template>

<style lang="scss">
#app {
	display: grid;
	grid-template-areas: 'nav routerView';
	grid-template-columns: 200px 1fr;
	height: 100vh;
}

.nav {
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);

	a {
		font-weight: bold;
		color: #2c3e50;
		text-decoration: none;
		padding: 1rem 0;

		&.router-link-exact-active {
			color: #42b983;
		}
	}
}
</style>
