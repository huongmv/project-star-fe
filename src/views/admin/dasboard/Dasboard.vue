<template>
  <section class="content">
    <a-space>
    <a-select v-model:value="value" style="width: 200px" @change="handleChange">
      <a-select-opt-group>
        <template #label>
          <span>
            Manager
          </span>
        </template>
        <a-select-option value="jack">Jack</a-select-option>
        <a-select-option value="lucy">Lucy</a-select-option>
      </a-select-opt-group>
    </a-select>
    <a-select v-model:value="value" style="width: 200px" @change="handleChange">
      <a-select-opt-group label="Auto refresh">
        <a-select-option value="Yiminghe">1m</a-select-option>
        <a-select-option value="Yiminghe1">2m</a-select-option>
      </a-select-opt-group>
    </a-select>
  </a-space>
    <div class="container-fluid">
      <div class="row">
        <!-- <canvas id="myChart"></canvas> -->
        <section class="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-sm-6 col-xs-6"><ChartCPU :time="time" :ip="ip"></ChartCPU></section>
        <section class="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-sm-6 col-xs-6"><ChartRAM :time="time" :ip="ip"></ChartRAM></section>
        <section class="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-sm-6 col-xs-6"><ChartCPU2 :time="time" :ip="ip"></ChartCPU2></section>
        <section class="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-sm-6 col-xs-6"><ChartRAM2 :time="time" :ip="ip"></ChartRAM2></section>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { ref, onMounted, onUpdated, computed } from "vue";
import ChartCPU from '@/components/Charts/ChartCPU.vue'
import ChartRAM from '@/components/Charts/ChartRAM.vue'
import ChartCPU2 from '@/components/Charts/ChartCPU2.vue'
import ChartRAM2 from '@/components/Charts/ChartRAM2.vue'
const time = ref('')
const ip = ref('')
const value = ref(['lucy']);
const setParam = () => {
    time.value = '12213312321'
    ip.value = '4534534534'
}
const handleChange = (value: string) => {
  console.log(`selected ${value}`);
};
</script>
