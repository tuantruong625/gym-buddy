<template>
	<div class="exercise-container">
		<header class="exercise-header">
			<h1 class="exercise-header__main">Exercises</h1>
		</header>

		<div class="muscle-group">
			<!-- <h2 class="muscle-group__header">Select Muscle Group</h2> -->
			<span v-for="(icon, index) in muscleGroupIcons" :key="index">
				<button
					class="muscle-group__button"
					@click="filterExercise(icon.label)"
					:class="{ 'muscle-group-selected' : selectedMuscleGroup === icon.label }"
				>
					<img class="muscle-group__button--image" :src="icon.image" alt>
					<span class="muscle-group__button--label">{{ icon.label }}</span>
				</button>
			</span>
		</div>

		<div class="exercise-list">
			<div
				v-for="exercise in filteredExercise"
				:key="exercise.id"
				class="exercise-list__card"
				@click="show(exercise.name)"
			>
				<img class="exercise-list__image" :src="exercise.image" :alt="exercise.name">
				<h2 class="exercise-list__header">{{ exercise.name }}</h2>
				<p class="exercise-list__sub-header">{{ exercise.category }}</p>
			</div>
		</div>

		<modal
			class="exercise-details"
			name="exercise-details"
			v-for="exercise in renderSelectedExercise"
			:key="exercise.id"
			height="500"
			width="1000"
		>
			<img class="exercise-details__image" :src="exercise.image" :alt="exercise.name">

			<div class="exercise-details__info">
				<span class="exercise-details__header">{{ exercise.name }}</span>
				<span class="exercise-details__category">{{ exercise.category }}</span>
				<span class="exercise-details__main-muscle">{{ exercise.mainMuscle }}</span>
				<span class="exercise-details__secondary-muscle">{{ exercise.secondaryMuscles }}</span>
				<p class="exercise-details__description">{{ exercise.description }}</p>
			</div>
		</modal>
	</div>
</template>

<script>
import db from '@/firebase/init'
import { muscleGroupIcons } from '@/assets/muscleGroupIcons'

export default {
	data() {
		return {
			exercises: [],
			selectedMuscleGroup: 'all',
			selectedExercise: '',
			muscleGroupIcons
		}
	},
	computed: {
		filteredExercise() {
			return this.exercises.filter(exercise => {
				if (this.selectedMuscleGroup === 'all') {
					return exercise.category
				}
				return exercise.category.toLowerCase().includes(this.selectedMuscleGroup.toLowerCase())
			})
		},
		renderSelectedExercise() {
			return this.exercises.filter(exercise => {
				return exercise.name.toLowerCase().includes(this.selectedExercise.toLowerCase())
			})
		}
	},
	methods: {
		filterExercise(muscleGroup) {
			this.selectedMuscleGroup = muscleGroup
		},
		show(exercise) {
			this.selectedExercise = exercise
			this.$modal.show('exercise-details')
		}
	},
	created() {
		db.collection('exercises')
			.get()
			.then(snapshot => {
				snapshot.forEach(doc => {
					let exercise = doc.data()
					exercise.id = doc.id
					this.exercises.push(exercise)
				})
			})
	},
	mounted() {}
}
</script>

<style lang="scss">
.exercise-container {
	display: grid;
	grid-template-areas:
		'exercise-header exercise-header exercise-header'
		'muscle-group exercise-list exercise-list';
	grid-template-columns: 22rem 1fr 1fr;
	grid-template-rows: 13rem 1fr;
}

.exercise-header {
	grid-area: exercise-header;
	display: flex;
	align-items: flex-end;
	background-image: linear-gradient(to right, rgba(40, 100, 131, 0.8), rgba(126, 213, 111, 0.8)),
		url('../assets/workout.jpg');
	background-position: center;
	background-repeat: no-repeat;
	background-size: cover;

	&__main {
		margin-left: 2rem;
		color: #fff;
		font-size: 3rem;
		font-weight: 700;
		letter-spacing: 1px;
	}
}

.muscle-group {
	grid-area: muscle-group;
	display: grid;
	grid-template-columns: 1fr 1fr;
	align-self: center;
	padding: 3rem;

	&__header {
		text-align: center;
		grid-column: 1 / -1;
		margin-bottom: 2rem;
	}

	&__button {
		margin: 1rem;
		border: none;
		border-radius: 5px;
		padding: 1rem;
		cursor: pointer;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;

		&--image {
			width: 3rem;
		}

		&--label {
			padding-top: 1rem;
			text-transform: capitalize;
		}

		&:hover {
			box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
			transform: translateY(-0.3rem);
			transition: all 0.2s;
			font-weight: 800;
			letter-spacing: 0.5px;
		}
	}
}

.muscle-group-selected {
	box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
	transform: translateY(-0.3rem);
	font-weight: 800;
	letter-spacing: 0.5px;
	outline: none;
}

.exercise-list {
	display: grid;
	grid-area: exercise-list;
	grid-template-columns: 1fr 1fr 1fr;
	padding: 4rem;
	align-items: center;
	cursor: pointer;

	&__image {
		width: 6rem;
	}

	&__header {
		text-transform: capitalize;
		padding: 0.5rem;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}

	&__sub-header {
		text-transform: capitalize;
		color: #868e96;
	}

	&__card {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		justify-self: center;
		width: 15rem;
		height: 15rem;
		box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
		padding: 1rem;
		border-radius: 5px;
	}
}

.v--modal-box {
	display: grid;
	grid-template-columns: 1fr 1fr;
	padding: 3rem;
	align-items: center;
	justify-content: center;
	border-radius: 10px;
}

.exercise-details {
	&__image {
		width: 20rem;
		height: auto;
	}

	&__info {
	}

	&__header {
		display: block;
		text-transform: capitalize;
		font-size: 1.5rem;
		padding-bottom: 0.5rem;
	}

	&__category {
		text-transform: capitalize;
		padding: 0 1rem 0 0;
		color: #868e96;
	}

	&__main-muscle {
		text-transform: capitalize;
		padding: 0 1rem 0 0;
		color: #868e96;
	}

	&__secondary-muscle {
		padding: 0 1rem 0 0;
		text-transform: capitalize;
		color: #868e96;
	}

	&__description {
		padding-top: 1rem;
		line-height: 1.75;
	}
}
</style>

