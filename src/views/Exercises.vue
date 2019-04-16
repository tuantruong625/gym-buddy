<template>
	<div class="exercises">
		<img class="underConstruction" src="@/assets/under-construction.png">
		<h1>Exercises Under Construction</h1>
    {{ exercises }}
	</div>
</template>

<script>
import db from '@/firebase/init'

export default {
	data() {
    return {
      exercises: []
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

