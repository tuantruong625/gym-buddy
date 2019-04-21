<template>
	<div class="login-wrapper">
		<div class="login-container">
			<div class="login-container__image">
				<img src="../assets/login-image.png" alt>
			</div>

			<form class="login-container__form">
				<h1 class="login-container__form--header">Login to Gym Buddy</h1>
				<label class="login-container__form--label" for="email">
					Email
					<input class="login-container__form--input" type="text" name="email">
				</label>

				<label for="password" class="login-container__form--label">
					Password
					<input type="password" name="password" class="login-container__form--input">
				</label>

				<button class="login-container__form--sumbit-button">Login</button>

				<span class="register-text">
					Don't have an account?
					<router-link to="/home" class="nav__link">Sign up</router-link>
				</span>
			</form>
		</div>
	</div>
</template>

<script>
export default {}
</script>

<style lang="scss">
.login-wrapper {
	display: flex;
	align-items: center;
	justify-content: center;
	width: 100vw;
	background-color: #e8f2e5;
	background-image: url("data:image/svg+xml,%3Csvg width='100' height='20' viewBox='0 0 100 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M21.184 20c.357-.13.72-.264 1.088-.402l1.768-.661C33.64 15.347 39.647 14 50 14c10.271 0 15.362 1.222 24.629 4.928.955.383 1.869.74 2.75 1.072h6.225c-2.51-.73-5.139-1.691-8.233-2.928C65.888 13.278 60.562 12 50 12c-10.626 0-16.855 1.397-26.66 5.063l-1.767.662c-2.475.923-4.66 1.674-6.724 2.275h6.335zm0-20C13.258 2.892 8.077 4 0 4V2c5.744 0 9.951-.574 14.85-2h6.334zM77.38 0C85.239 2.966 90.502 4 100 4V2c-6.842 0-11.386-.542-16.396-2h-6.225zM0 14c8.44 0 13.718-1.21 22.272-4.402l1.768-.661C33.64 5.347 39.647 4 50 4c10.271 0 15.362 1.222 24.629 4.928C84.112 12.722 89.438 14 100 14v-2c-10.271 0-15.362-1.222-24.629-4.928C65.888 3.278 60.562 2 50 2 39.374 2 33.145 3.397 23.34 7.063l-1.767.662C13.223 10.84 8.163 12 0 12v2z' fill='%23c8e7c7' fill-opacity='0.4' fill-rule='evenodd'/%3E%3C/svg%3E");
}

.login-container {
	display: grid;
	grid-template-columns: 1fr 1fr;
	width: 60rem;
	box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
	border-radius: 10px;

	&__image {
		display: flex;
		justify-items: center;
		align-items: center;
		background: #fff;
		background-position: center;
		background-repeat: no-repeat;
		background-size: cover;
		background-size: 30rem auto;
		justify-self: self-end;
		height: 35rem;
		width: 30rem;
		border-radius: 10px 0 0 10px;
	}

	&__form {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		justify-content: center;
		padding: 4rem;
		color: #fff;
		height: 35rem;
		width: 30rem;
		border-radius: 0 10px 10px 0;
		background: linear-gradient(135deg, rgba(126, 213, 111, 0.8), rgba(40, 100, 131, 0.8));

		&--header {
			font-size: 1.5rem;
			padding-bottom: 2.5rem;
			text-transform: uppercase;
			letter-spacing: 10px;
		}

		&--label {
			display: flex;
			flex-direction: column;
		}

		&--input {
			width: 20rem;
			padding: 1rem;
			margin-bottom: 1.5rem;
			border-radius: 10px;
			background: #fff;
			box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
			transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
			border-style: solid;
			border: none;
			border-width: 1px;
			margin-top: 0.5rem;

			&:hover {
				box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
			}
		}

		&--sumbit-button {
			width: 20rem;
			color: #fff;
			padding: 1rem;
			border-radius: 10px;
			font-size: 1rem;
			background: rgba(126, 213, 111, 0.8);
			border: none;
			cursor: pointer;
		}
	}

	.register-text {
		margin-top: 1rem;
	}
}
</style>
