<template>
	<div id="app">
		<div class="nav" v-if="['login'].includes($route.name)">
			<div class="nav__links" v-for="(navItem, index) in navItems" :key="index">
				<font-awesome-icon class="nav__icon" :icon="navItem.icon"/>
				<router-link class="nav__link" :to="navItem.route">{{ navItem.pageName }}</router-link>
			</div>
		</div>
		<router-view class="routerView"/>
	</div>
</template>

<script>
export default {
	data() {
		return {
			navItems: [
				{
					pageName: 'Home',
					icon: 'home',
					route: '/'
				},
				{
					pageName: 'Exercises',
					icon: 'dumbbell',
					route: '/exercises'
				},
				{
					pageName: 'Profile',
					icon: 'user',
					route: '/profile'
				},
				{
					pageName: 'Calender',
					icon: 'calendar',
					route: '/calender'
				},
				{
					pageName: 'Goals',
					icon: 'bullseye',
					route: '/goals'
				}
			]
		}
	}
}
</script>


<style lang="scss" scoped>
#app {
	display: grid;
	grid-template-areas: 'nav routerView';
	grid-template-columns: 300px 1fr;
	height: 100vh;
}

.nav {
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);

	&__links {
		display: flex;
		align-items: flex-start;
		margin: 1rem 0;
		width: 10rem;

		a {
			color: #868e96;
			text-decoration: none;
		}
	}

	&__link {
		&.router-link-exact-active {
			color: #42b983;
			font-weight: bold;
		}
	}

	&__icon {
		margin-right: 1rem;
		color: #868e96;
	}
}
</style>
