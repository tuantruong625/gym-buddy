<template>
	<div>
    <header>
      <h1>Exercises</h1>
    </header>

    <section  class="exercises">
      <span class="selectMuscleGroup" v-for="(icon, index) in muscleGroupIcons" :key="index">
        <img :src="icon" alt="">
      </span>

      <div class="exerciseList">
        <div v-for="exercise in exercises" :key="exercise.id">
          <h2>{{ exercise.name }}</h2>
          <p>{{ exercise.mainMuscles }}</p>
          <p>{{ exercise.secondaryMuscles }}</p>
          <img :src="exercise.image">
        </div>
      </div>
    </section>
	</div>
</template>

<script>
import db from '@/firebase/init'
import { muscleGroupIcons } from '@/assets/muscleGroupIcons'

export default {
	data() {
    return {
      exercises: [],
      muscleGroupIcons
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
  }
}
</script>

<style lang="scss">
.exercises {
display: grid;
	grid-template-areas: 'selectMuscleGroup exerciseList';
	grid-template-columns: 300px 1fr;
	height: 100vh;
}
</style>

