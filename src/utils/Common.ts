import { useRouter } from 'vue-router'
import { ElMessage } from 'element-plus'
import { useCookies } from "vue3-cookies"
import { ElNotification } from 'element-plus'
import { BUILDING_ADDRESS, BUILDING_ID, BUILDING_NAME, ROOM_ID, ROOM_NAME, CONTRACT_ID, CONTRACT_NAME, RECEIPT_ID, NEWS_ID,
 TOKEN, USER_LOGINED, USER_ROLES, USER_TYPE, USER_RANK } from '@/const/cookie'
import {
    STORE_LANGUAGE, USER, TOKEN_INFORM_LS, USER_INFORM_LS,
    USER_FULL_NAME_LS, USER_STATUS_LS, USER_LOGON_LS, USER_NAME_LS, CLIENT_MESSAGE_ID,
    ROULETTE_POINT_LS, POINT_USER_LS, USER_INTRO_LC, USER_QRCODE_LC, WHELL_CHECK_LS, USER_VIEW_IFNORM_LC,
    CART_ORDER_LC, FAVOURITE_LC, SEARCH_DATA_LC, CART_LIST, CART_ORDER_BY
} from '@/const/localStorage'
import store from '@/store/index'
import Utils from './Utils'

const commons = {

    setStore(key: any, value: any) {
        store.dispatch(key, value)
    },
    setCokies(key: any, value: any) {
        const { cookies } = useCookies();
        cookies.set(key, value)
    },
    setRoomId(value: any) {
        const { cookies } = useCookies();
        cookies.set(ROOM_ID, value)
    },
    setBuildId(value: any) {
        const { cookies } = useCookies();
        cookies.set(BUILDING_ID, value)
    },
    setBuildName(value: any) {
        const { cookies } = useCookies();
        cookies.set(BUILDING_NAME, value)
    },
    setContractId(value: any) {
        const { cookies } = useCookies();
        cookies.set(CONTRACT_ID, value)
    },
    setContractName(value: any) {
        const { cookies } = useCookies();
        cookies.set(CONTRACT_NAME, value)
    },
    setStoreChange() {
        store.dispatch('setBuildingChange', Utils.randomText(5))
    },
    setMenuChange() {
        store.dispatch('setMenuChange', Utils.randomText(5))
    },
    setLoadCart() {
        store.dispatch('setLoadCart', Utils.randomText(5))
    },
    setLoadLogin() {
        store.dispatch('setLoadLogin', Utils.randomText(5))
    },
    getSearchKey() {
        return store.getters.isSearchKey
     },
    setSearchKey(val: any) {
        store.dispatch('setSearchKey', val)
    },
    setStoreCategory(val: any) {
        store.dispatch('setStoreCategory', val)
    },
    getStoreCategory() {
       return store.getters.isStoreCategory
    },
    getNewsId() {
        const { cookies } = useCookies();
        return cookies.get(NEWS_ID);
    },
    getReceiptId() {
        const { cookies } = useCookies();
        return cookies.get(RECEIPT_ID);
    },
    getBuildId() {
        const { cookies } = useCookies();
        return cookies.get(BUILDING_ID);
    },
    removeBuildId() {
        const { cookies } = useCookies();
        return cookies.remove(BUILDING_ID);
    },
    getBuildName() {
        const { cookies } = useCookies();
        return cookies.get(BUILDING_NAME);
    },
    removeBuildName() {
        const { cookies } = useCookies();
        return cookies.remove(BUILDING_NAME);
    },
    getContractId() {
        const { cookies } = useCookies();
        return cookies.get(CONTRACT_ID);
    },
    getContractName() {
        const { cookies } = useCookies();
        return cookies.get(CONTRACT_NAME);
    },
    getBuildAddtress() {
        const { cookies } = useCookies();
        return cookies.get(BUILDING_ADDRESS);
    },
    getRoomId() {
        const { cookies } = useCookies();
        return cookies.get(ROOM_ID);
    },
    getRoomName() {
        const { cookies } = useCookies();
        return cookies.get(ROOM_NAME);
    },
    routerGo(val: number) {
        const router = useRouter()
        router.go(val)
        return false
    },
    downloadFile(url: any) {
        let element = document.createElement('a');
        element.href = url;
        element.target = '_blank';
        element.setAttribute('download', 'download');
        element.click();

    },
    downloadFileStatic(url: any) {
        let element = document.createElement('a');
        element.href = process.env.VUE_APP_DOMAIN_ADMIN + url;
        element.target = '_blank';
        element.setAttribute('download', 'download');
        element.click();

    },
    getSubString(msgCode: any, start: any, end: any) {
        if (msgCode == '') return msgCode
        if (msgCode == undefined) return msgCode
        if (msgCode == null) return msgCode
        return msgCode.substring(start, end)
    },
    getPercent( smallNumber: any, bigNumber: any, fixed: any) {
        let dataBig = Number(bigNumber.replaceAll(',','').replaceAll('.','').replaceAll('đ',''))
        let dataSmall = Number(smallNumber.replaceAll(',','').replaceAll('.','').replaceAll('đ',''))
        let percen = 100 - ( (dataSmall / dataBig) * 100);

        return Math.round( percen )
    },
    getNumber( number: any) {
        return Number(number.replaceAll(',','').replaceAll('.','').replaceAll('đ',''))
    },
    showMsgSuccess(msgCode: any) {
        ElMessage({
            message: msgCode,
            type: 'success',
        })
    },
    showMsgWarning(msgCode: any) {
        ElMessage({
            message: msgCode,
            type: 'warning',
        })
    },
    showMsgError(msgCode: any) {
        ElMessage({
            message: msgCode,
            type: 'error',
        })
    },
    showMsg(msgCode: any) {
        ElMessage(msgCode)
    },
    redirectPage(url: any, param: any) {
        const router = useRouter()
        router.push({ name: url, params: param });
    },
    redirectPageNoParram(url: any) {
        const router = useRouter()
        router.push({ name: url });
    },
    getBuildingId() {
        return localStorage.getItem('buildingId') || 0
    },
    showNotificationSuccess(msgCode: any) {
        ElNotification({
            title: 'Success',
            message: msgCode,
            type: 'success',
            offset: 100,
        })
    },
    showNotificationWarning(msgCode: any) {
        ElNotification({
            title: 'Warning',
            message: msgCode,
            type: 'warning',
            offset: 100,
        })
    },
    showNotificationInfo(msgCode: any) {
        ElNotification({
            title: 'Info',
            message: msgCode,
            type: 'info',
            offset: 100,
        })
    },
    showNotificationError(msgCode: any) {
        ElNotification({
            title: 'Error',
            message: msgCode,
            type: 'error',
            offset: 100,
        })
    },
    showNotificationError2(title: any, msgCode: any) {
        ElNotification({
            title: title,
            message: msgCode,
            type: 'error',
            offset: 100,
        })
    },
    showNotificationSuccess2(title: any, msgCode: any) {
        ElNotification({
            title: title,
            message: msgCode,
            type: 'success',
            offset: 100,
        })
    },
    setCategoryId(val: any) {
        localStorage.setItem('categoryId', val)
    },
    getCategoryId() {
       return localStorage.getItem('categoryId')
    },
    setProductId(val: any) {
        localStorage.setItem('productId', val)
    },
    productId() {
        localStorage.getItem('productId')
    },
    setUserInform(value: any) {
        const now = new Date()
        localStorage.setItem(USER_INFORM_LS, JSON.stringify(value))
        localStorage.setItem(TOKEN_INFORM_LS, value.accessToken)
        localStorage.setItem(USER_FULL_NAME_LS, value.name)
        localStorage.setItem(USER_STATUS_LS, value.status)
        localStorage.setItem(USER_NAME_LS, value.userName)
        localStorage.setItem(USER_QRCODE_LC, value.code)
        localStorage.setItem(USER_LOGON_LS, 'true')
        localStorage.setItem(STORE_LANGUAGE, value)
        store.dispatch("setLoggedIn", true);
        localStorage.setItem(USER, store.getters.isLoggedIn);
        /** set to cookie */
        const { cookies } = useCookies();
        cookies.set(TOKEN, JSON.stringify(value.accessToken));
        cookies.set('status', JSON.stringify(value.status));
        cookies.set(USER_LOGINED, 'true');
        cookies.set(USER_ROLES, JSON.stringify(value.role));
        cookies.set(USER_TYPE, JSON.stringify(value.type));
        cookies.set(USER_RANK, JSON.stringify(value.rank));
    },
    getLcUserInform() {
        return localStorage.getItem(USER_INFORM_LS)
    },
    setLcRoultte(val: any) {
        return localStorage.setItem(ROULETTE_POINT_LS, val)
    },
    getLcRoultte() {
        return localStorage.getItem(ROULETTE_POINT_LS)
    },
    setLcPoint(val: any) {
        return localStorage.setItem(POINT_USER_LS, val)
    },
    getLcPoint() {
        return localStorage.getItem(POINT_USER_LS)
    },
    getLcToken() {
        return localStorage.getItem(TOKEN_INFORM_LS)
    },
    getLcFullName() {
        return localStorage.getItem(USER_FULL_NAME_LS)
    },
    getLcUserStatus() {
        return localStorage.getItem(USER_STATUS_LS)
    },
    getLcUserIsLogin() {
        return localStorage.getItem(USER_LOGON_LS)
    },
    getLcLanguageSelected() {
        return localStorage.getItem(STORE_LANGUAGE)
    },
    goIndex() {
        const router = useRouter();
        router.push({ path: "/index" });
    },
    setClientMessageId(val: any) {
        localStorage.setItem(CLIENT_MESSAGE_ID, val)
    },
    setUserIntro(val: any) {
        localStorage.setItem(USER_INTRO_LC, val)
    },
    getUserIntro() {
        return localStorage.getItem(USER_INTRO_LC)
    },
    removeUserIntro() {
        localStorage.removeItem(USER_INTRO_LC)
    },
    setLcQRCode(val: any) {
        localStorage.setItem(USER_QRCODE_LC, val)
    },
    getLcQRCode() {
        return localStorage.getItem(USER_QRCODE_LC)
    },
    setLcWhellCheck(val: any) {
        localStorage.setItem(WHELL_CHECK_LS, val)
    },
    getLcWhellCheck() {
        return localStorage.getItem(WHELL_CHECK_LS)
    },
    setLcUserViews(val: any) {
        localStorage.setItem(USER_VIEW_IFNORM_LC, val)
    },
    setLcDataSearch(val: any) {
        localStorage.setItem(SEARCH_DATA_LC, val)
    },
    getLcDataSearch() {
        return localStorage.getItem(SEARCH_DATA_LC)
    },
    setCartList(val: any) {
        localStorage.setItem(CART_LIST, val)
    },
    getCartList() {
        return localStorage.getItem(CART_LIST)
    },
    setCartOrderBy(val: any) {
        localStorage.setItem(CART_ORDER_BY, val)
    },
    getCartOrderBy() {
        return localStorage.getItem(CART_ORDER_BY)
    },
    logOutService() {
        store.dispatch("setLoggedIn", false);
        localStorage.setItem(USER, 'false');
        localStorage.removeItem(USER_INFORM_LS)
        localStorage.removeItem(USER_LOGON_LS)
        this.setLcRoultte(0)
        this.setLcPoint(0)
    },
    logOut() {
        store.dispatch("setLoggedIn", false);
        localStorage.setItem(USER, 'false');
        localStorage.removeItem(USER_INFORM_LS)
        localStorage.removeItem(USER_LOGON_LS)
        const { cookies } = useCookies();
        cookies.remove("user");
        cookies.remove(USER_LOGINED);
        cookies.set(USER_LOGINED, "false");

    },
    setLcCart(val: any) {
        val.quantity = 1
        let dataCart = []
        let dataOrder = localStorage.getItem(CART_ORDER_LC)
        let j= 0;
        if(dataOrder != null && dataOrder != undefined && dataOrder.length > 10) {
            let dataOld = this.parseStringToArray(dataOrder)
            let isExits = false
            for (let i = 0; i< dataOld.length; i++) {
                let item = dataOld[i].id
                let valId = val.id
                if(item == valId) {
                    j = i
                    isExits = true
                }
            }
            if(isExits) {
                dataOld[j].quantity = dataOld[j].quantity + 1
                dataOld[j].priceUse =  (dataOld[j].price - dataOld[j].priceDiff) * dataOld[j].quantity
            } else {
                dataOld.push(val)
            }
            dataCart = dataOld
        } else {
            let cartOrder = JSON.parse(JSON.stringify(val))
            cartOrder.quantity = 1
            dataCart.push(cartOrder)
        }
        
        localStorage.setItem(CART_ORDER_LC, JSON.stringify(dataCart))
        this.setLoadCart()
    },
    getLcCart() {
        let dataOrder = localStorage.getItem(CART_ORDER_LC)
        if(dataOrder != null && dataOrder != undefined) { 
            return this.parseStringToArray(dataOrder).reverse()
        } else {
            return []
        }
    },
    getLcCartObject() {
        let dataOrder = localStorage.getItem(CART_ORDER_LC)
        let quantity  = 0
        let money  = 0
        let totalMoney  = 0
        // let diffMoney  = 0
        let orderList: any = []
        if(dataOrder != null && dataOrder != undefined) { 
           orderList = this.parseStringToArray(dataOrder).reverse()
            for (let i = 0; i < orderList.length; i++) {
                let item = orderList[i]
                quantity = quantity + item.quantity
                money = money + item.priceUse
                // let priceDiff = item.priceDiff
                // if(priceDiff == null) {
                //     diffMoney = diffMoney + 0
                // } else {
                //     diffMoney = diffMoney + item.priceDiff
                // }
              }
              totalMoney = money 
              let output = {orderList: orderList, quantity: quantity, totalMoney: totalMoney}
              return output
        } else {
            return {orderList: orderList, quantity: quantity, totalMoney: totalMoney}
        }
    },
    parseStringToArray(val: any) {
        return JSON.parse( val.replace(/'/g, '"'))
     },
     removeLcCart(val: any) {
        let dataCart = []
        let dataOrder = localStorage.getItem(CART_ORDER_LC)
        if(dataOrder != null && dataOrder != undefined) {
            let dataOld = this.parseStringToArray(dataOrder)
            dataCart = dataOld
            for (let i = 0; i< dataOld.length; i++) {
                let item = dataOld[i].id
                if(item == val) {
                    dataCart.splice(i, 1)
                }
            }
        } 
        localStorage.setItem(CART_ORDER_LC, JSON.stringify(dataCart))
        this.setLoadCart()
    },
    setLcFavourite(val: any) {
        let dataCart = []
        let dataOrder = localStorage.getItem(FAVOURITE_LC)
        if(dataOrder != null && dataOrder != undefined && dataOrder.length > 10) {
            let dataOld = this.parseStringToArray(dataOrder)
            dataCart = dataOld
            let isExits = true
            for (let i = 0; i< dataOld.length; i++) {
                let item = dataOld[i].id
                let valId = val.id
                if(item == valId) {
                    dataCart.splice(i, 1)
                    isExits = false
                }
            }
            if(isExits) {
                dataCart.push(val)
            }
           
        } else {
            let cartOrder = JSON.parse(JSON.stringify(val))
            dataCart.push(cartOrder)
        }
        
        localStorage.setItem(FAVOURITE_LC, JSON.stringify(dataCart))
    },
    setLcOrderChange(val: any) {
        let dataCart = []
        let dataOrder = localStorage.getItem(CART_ORDER_LC)
        if(dataOrder != null && dataOrder != undefined && dataOrder.length > 10) {
            let dataOld = this.parseStringToArray(dataOrder)
            dataCart = dataOld
            for (let i = 0; i< dataOld.length; i++) {
                let item = dataOld[i].id
                let valId = val.id
                if(item == valId) {
                    dataCart[i].quantity = val.quantity
                    dataCart[i].priceUse = (dataCart[i].price - dataCart[i].priceDiff) * val.quantity
                }
            }

        }
        
        localStorage.setItem(CART_ORDER_LC, JSON.stringify(dataCart))
        this.setLoadCart()
    },
    getLcFavourite() {
        let dataOrder = localStorage.getItem(FAVOURITE_LC)
        if(dataOrder != null && dataOrder != undefined) { 
            return this.parseStringToArray(dataOrder).reverse()
        } else {
            return []
        }
    },
    getItemFavourite(item: any) {
        let favourite = this.getLcFavourite()
        let isFav = false
        for(let j = 0; j < favourite.length; j++) {
            let favItem =  favourite[j]
            let proId = item.id
            let favId = favItem.id
            if(proId == favId) {
                isFav = true
            }
        }

        if(isFav) {
            item.vcoinValue = 2
        } else {
            item.vcoinValue = 1
        }

        return item
    },
}
export default commons