<template>
      <div :class="float">
        <a-pagination
          :current="current"
          :total="total"
          @change="changeCurrent"
          :pageSize="pageSize"
        >
          <template #itemRender="{ type, originalElement }">
            <a v-if="type === 'prev'"
              ><span @click="changeCurrentBack"><i class="fas fa-step-backward"></i></span></a
            >
            <a v-else-if="type === 'next'"
              ><span @click="changeCurrentNext"><i class="fas fa-step-forward"></i></span></a
            >
            <component :is="originalElement" v-else></component>
          </template>
        </a-pagination>
      </div>
</template>
<script lang="ts" setup>
interface props {
  current: any;
  float: any;
  pageSize: any;
  total: any;
}
const define = withDefaults(defineProps<props>(), {
    current: 1,
    total: 0,
    pageSize: 10,
    float: "cmn-paging-right",
});

const emits = defineEmits(["changeCurrent", "changeCurrentBack", "changeCurrentNext"])

const changeCurrent = async (val:any, size:any) => {
    let nextPage = {current: val, pageSize: size}
    emits('changeCurrent', nextPage)
};

const changeCurrentBack = async (val:any) => {
    emits('changeCurrentBack', val)
};
const changeCurrentNext = async (val:any) => {
    emits('changeCurrentNext', val)
};

// onMounted(async () => {
//   await loadData();
// });
// const current = ref(1);
// const pageSize = ref(20);
// const inData = ref([]);
// const inCol = ref([]);
// const total = ref(0);

// const pagination = computed(() => ({
//   total: total.value,
//   current: current.value,
//   pageSize: pageSize.value,
// }));
// const loadData = async () => {
//   let param = "?page=" + current.value + "&size=" + pageSize.value;
//   await apiGetNoParam(V1_VEW + define.apiCode + param).then((res) => {
//     let response: any = res;
//     let dataRes = response.data.data;
//     total.value = dataRes.total;
//     inData.value = dataRes.body;
//     inCol.value = dataRes.fieldName;
//     pagination.value.total = dataRes.total;
//     pagination.value.current = dataRes.page + 1;
//     pagination.value.pageSize = dataRes.size;
//   });
// };
// const changeCurrent = async (val, size) => {
//   current.value = val;
//   pageSize.value = size;
//   await loadData();
// };
// const changeCurrentBack = async () => {
//   await loadData();
// };
// const changeCurrentNext = async () => {
//   await loadData();
// };
// function onChange(pagination, filters, sorter, extra) {
//   // console.log("params", pagination, filters, sorter, extra);
//   changeSort(sorter);
// }
// const changeSort = async (sorter) => {
//   let order = JSON.parse(JSON.stringify(sorter));
//   inData.value.sort((a, b) => {
//     if (order.order == "descend") {
//       if (a[order.field] > b[order.field]) {
//         return 1;
//       } else if (a[order.field] < b[order.field]) {
//         return -1;
//       } else {
//         return 0;
//       }
//     } else {
//       if (a[order.field] < b[order.field]) {
//         return 1;
//       } else if (a[order.field] > b[order.field]) {
//         return -1;
//       } else {
//         return 0;
//       }
//     }
//   });
// };

</script>

