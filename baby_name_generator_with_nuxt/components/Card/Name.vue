<script setup lang="ts">

interface NameProps {
    name: string;
    index: number
}

const props = defineProps<NameProps>()

const emit = defineEmits(["remove"])

const removeName = () => {
    emit("remove", props.index)
}
</script>

<template>
    <div class="card">
        <h4>{{ name }}</h4>
        <p @click="removeName">x</p>
    </div>
</template>

<style scoped>
.card {
  background-color: rgb(27, 60, 139);
  width: 28%;
  color: #fff;
  border-radius: 1rem;
  padding: 0.1rem;
  margin-left: 0.5rem;
  margin-bottom: 1rem;
  position: relative;
}

.card p {
  position: absolute;
  top: -29%;
  left: 95.5%;
  cursor: pointer;
  color: rgba(255, 255, 255, 0.178);
}
</style>