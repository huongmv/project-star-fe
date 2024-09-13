import { useCookies } from "vue3-cookies"
const cookiesConFig = {
    setCokies(key: any, value: any) {
        const { cookies } = useCookies();
        cookies.set(key, value);
    },
    removeCokies(key: any) {
        const { cookies } = useCookies();
        return cookies.remove(key);
    },
    getCokies(key: any) {
        const { cookies } = useCookies();
        return cookies.get(key);
    }
    ,
    getCokiesBoolean(key: any) {
        const { cookies } = useCookies();
        let val = cookies.get(key);
        if(val == 'true') {
            return true;
        } else {
            return false;
        }
    }
}
export default cookiesConFig