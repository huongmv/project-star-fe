<template>
  <div :class="cTable">
    <div class="table-data">
      <a-table
        :columns="inCol"
        :data-source="inData"
        :pagination="false"
        @change="onChange"
        theme="dark"
        :scroll="xScroll"
      >
        <template #headerCell="{ column }">
          <span>
            {{ $t(column.title) }}
          </span>
          <!-- <slot name="header" :header="column.key"></slot> -->
        </template>

        <template #bodyCell="{ column, record }">
          <!-- <template v-if="column.key === 'name'">
        <a>
          {{ record.name }}
        </a>
      </template>
      <template v-else-if="column.key === 'tags'">
        <span>
          <a-tag
            v-for="tag in record.tags"
            :key="tag"
            :color="tag === 'loser' ? 'volcano' : tag.length > 5 ? 'geekblue' : 'green'"
          >
            {{ tag.toUpperCase() }}
          </a-tag>
        </span>
      </template> -->
          <template v-if="column.key === 'action'">
            <slot name="action" :action="record.id"></slot>
            <!-- <span>
          <a>Invite 一 {{ record.name }}</a>
          <a-divider type="vertical" />
          <a>Delete</a>
          <a-divider type="vertical" />
          <a class="ant-dropdown-link">
            More actions
            <down-outlined />
          </a>
        </span> -->
          </template>
          <template v-if="column.key === 'roleId'">
            <slot name="roleId" :action="record.roleId"></slot>
          </template>
          <template v-if="column.key === 'rankId'">
            <slot name="rankId" :action="record.rankId"></slot>
          </template>
        </template>
        
      </a-table>
      <Pagination
        :current="current"
        :total="total"
        :pageSize="pageSize"
        :float="float"
        @changeCurrent="changeCurrent"
        @changeCurrentBack="changeCurrentBack"
        @changeCurrentNext="changeCurrentNext"
      ></Pagination>
      <!-- <div :class="float">
        <a-pagination
          :current="current"
          :total="total"
          @change="changeCurrent"
          :pageSize="pageSize"
        >
          <template #itemRender="{ type, originalElement }">
            <a v-if="type === 'prev'"
              ><span @click="changeCurrentBack">Previous</span></a
            >
            <a v-else-if="type === 'next'"
              ><span @click="changeCurrentNext">Next</span></a
            >
            <component :is="originalElement" v-else></component>
          </template>
        </a-pagination>
      </div> -->
    </div>
    <div class="table-mobile">
      <Pagination
        :current="current"
        :total="total"
        :pageSize="pageSize"
        float="cmn-paging-center"
        @changeCurrent="changeCurrent"
        @changeCurrentBack="changeCurrentBack"
        @changeCurrentNext="changeCurrentNext"
      ></Pagination>
      <slot name="mobile" :action="dataResApi"></slot>
      <Pagination
        :current="current"
        :total="total"
        :pageSize="pageSize"
        float="cmn-paging-center"
        @changeCurrent="changeCurrent"
        @changeCurrentBack="changeCurrentBack"
        @changeCurrentNext="changeCurrentNext"
      ></Pagination>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { ref, onMounted, watch, computed } from "vue";
import { SmileOutlined, DownOutlined } from "@ant-design/icons-vue";
import { apiPost, apiGetNoParam, apiGet } from "@/api/index";
import { V1_VEW } from "@/api/const/view";
import type { TableProps } from "ant-design-vue";
import TableMobile from "./TableMobile.vue";
import Pagination from "./Pagination.vue";
interface props {
  apiCode: any;
  float: any;
  xScroll: any;
  cTable: any;
  param: any;
  condition: any;
}
const define = withDefaults(defineProps<props>(), {
  apiCode: "",
  float: "cmn-paging-right",
  xScroll: "",
  param: "",
  condition: "",
});
onMounted(async () => {
  await loadData();
});
const current = ref(1);
const pageSize = ref(10);
const inData = ref([]);
const inCol = ref([]);
const total = ref(0);

const pagination = computed(() => ({
  total: total.value,
  current: current.value,
  pageSize: pageSize.value,
}));
const dataResApi = ref()
const loadData = async () => {
  let param = "?page=" + current.value + "&size=" + pageSize.value + "&param=" + define.param + "&conditions=" + define.condition;
  searh(param)
};

const loadDataSearch = async () => {
  let param = "?page=" + 1 + "&size=" + 10 + "&param=" + define.param + "&conditions=" + define.condition;
  searh(param)
};

const searh = async (param: any) => {
  await apiGetNoParam(V1_VEW + define.apiCode + param).then((res) => {
    let response: any = res;
    let dataRes = response.data.data;
    total.value = dataRes.total;
    inData.value = dataRes.body;
    inCol.value = dataRes.fieldName;
    pagination.value.total = dataRes.total;
    pagination.value.current = dataRes.page + 1;
    pagination.value.pageSize = dataRes.size;
    dataMobile(dataRes);
  });
}

const dataMobile = async (dataRes:any) => {
  dataResApi.value = dataRes
};

const changeCurrent = async (val:any) => {
  current.value = val.current;
  pageSize.value = val.pageSize;
  await loadData();
};
const changeCurrentBack = async () => {
  await loadData();
};
const changeCurrentNext = async () => {
  await loadData();
};
function onChange(pagination:any, filters:any, sorter:any, extra:any) {
  // console.log("params", pagination, filters, sorter, extra);
  changeSort(sorter);
}
const changeSort = async (sorter:any) => {
  // let order = JSON.parse(JSON.stringify(sorter));
  console.log(sorter)
  // inData.value.sort((a, b) => {
  //   if (order.order == "descend") {
  //     if (a[order.field] > b[order.field]) {
  //       return 1;
  //     } else if (a[order.field] < b[order.field]) {
  //       return -1;
  //     } else {
  //       return 0;
  //     }
  //   } else {
  //     if (a[order.field] < b[order.field]) {
  //       return 1;
  //     } else if (a[order.field] > b[order.field]) {
  //       return -1;
  //     } else {
  //       return 0;
  //     }
  //   }
  // });
};

function stringify(obj:any) {
  let cache: any = [];
  let str = JSON.stringify(obj, function(key, value) {
    if (typeof value === "object" && value !== null) {
      if (cache.indexOf(value) !== -1) {
        // Circular reference found, discard key
        return;
      }
      // Store value in our collection
      cache.push(value);
    }
    return value;
  });
  cache = null; // reset the cache
  console.log(str)
  return str;
}

const defineParam = computed(() => {
    return define.param
})
const defineCondition = computed(() => {
    return define.condition
})
watch([defineParam, defineCondition], async ([newValueParam, oldValueParam], [newValueCondition, oldValueCondition]) => {
  await loadDataSearch();
})

</script>
<style scoped>
@media only screen and (min-width: 100px) and (max-width: 767px) {
  /* For tablets: */
  .table-mobile {
    display: block;
  }
  .table-data {
    display: none;
  }
}
@media only screen and (min-width: 768px) {
  /* For desktop: */
  .table-mobile {
    display: none;
  }
  .table-data {
    display: block;
  }
}
.table-data,
.table-mobile {
  overflow: hidden;
}

.cmn-paging-center {
  padding: 15px;
  text-align: center;
}
.cmn-paging-left {
  padding: 15px;
  text-align: left;
}
.cmn-paging-right {
  padding: 15px;
  text-align: right;
}
</style>
