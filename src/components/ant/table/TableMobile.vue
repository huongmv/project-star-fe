<template>
  <div class="content">
    <div class="container-fluid">
      <div class="row">
        <div
          class="col-xl-6 col-lg-6 col-md-6 col-sm-12"
          v-for="inData in data.body"
          :key="inData"
        >
          <div class="card">
            <div class="card-header border-0">
              <div class="d-flex justify-content-between">
                <h3 class="card-title"></h3>
                <div><EyeOutlined /></div>
              </div>
            </div>
            <div class="card-body">
              <div v-for="inCol in data.fieldName" :key="inCol">
                <div v-for="(dataValue, dataKey) in inData" :key="dataKey">
                  <div class="row-col" v-if="inCol.key == dataKey">
                    <div class="title-col">{{ $t(inCol.title) }}</div>
                    <div class="content-col">: {{ dataValue }}</div>
                  </div>
                </div>
              </div>
              <!-- <div class="d-flex">
                <p class="d-flex flex-column">
                  <span class="text-bold text-lg">820</span>
                  <span>Visitors Over Time</span>
                </p>
                <p class="ml-auto d-flex flex-column text-right">
                  <span class="text-success">
                    <i class="fas fa-arrow-up"></i> 12.5%
                  </span>
                  <span class="text-muted">Since last week</span>
                </p>
              </div>

              <div class="position-relative mb-4">
                <canvas id="visitors-chart" height="200"></canvas>
              </div>

              <div class="d-flex flex-row justify-content-end">
                <span class="mr-2">
                  <i class="fas fa-square text-primary"></i> This Week
                </span>

                <span> <i class="fas fa-square text-gray"></i> Last Week </span>
              </div> -->
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>

interface props {
  data: any;
}
const define = withDefaults(defineProps<props>(), {
  data: [],
});
</script>
<style scoped>
.title-col {
  font-weight: 600;
  text-align: left;
}
.content-col {
  text-align: left;
}
.row-col {
  display: flex;
}
/* @media (min-width: 576px) {
  .col-sm-6 {
    padding-right: 5px;
    padding-left: 5px;
  }
} */
</style>
