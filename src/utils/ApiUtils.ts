import { reactive, ref } from "vue";
import { apiPost, apiGetNoParam } from '@/api/index'
import { V1_VEW_HASHCODE } from "@/api/const/view";
const apiUtils = { 
   
   async getHashCodeParam(value: any) {
        let valuesParam = ''
      await apiPost(V1_VEW_HASHCODE, value).then(res => {
            let response: any = res
            valuesParam = response.data
        })
        return valuesParam;
    },
}
export default apiUtils