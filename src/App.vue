<script setup>
import { ref, onMounted } from 'vue'
import { supabase } from './lib/supabaseClient'

const bendungan = ref({})

async function getLastBendungan() {
  const { data } = await supabase
    .from('bendungans')
    .select('*')
    .order('id', { ascending: false })
    .limit(1)
  bendungan.value = data[0] // Get the first (and only) record from the returned data array
}

async function refreshData() {
  await getLastBendungan()
}

onMounted(() => {
  getLastBendungan()

  // Refresh data every 5 seconds (adjust interval as needed)
  const intervalId = setInterval(refreshData, 5000)

  // Clear the interval when the component is unmounted to prevent memory leaks
  onUnmounted(() => clearInterval(intervalId))
})
</script>

<template>
  <div class="container mx-auto">
    <div class="card">
      <div class="card-header">
        <h1 class="text-2xl font-bold">Level Ketinggian Air</h1>
      </div>
      <div class="card-body">
        <p>{{ bendungan.jarak }} cm</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}

.card {
  width: 400px;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  background-color: #051e3a;
  color: rgb(255, 255, 255);
}

.card-header {
  padding: 1.5rem;
  border-bottom: 1px solid #e2e8f0;
}

.card-body {
  padding: 1.5rem;
  font-size: 24px;
}
</style>
