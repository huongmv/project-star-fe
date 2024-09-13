import ApiService from '../services/servicesApi'
// import { GOOGLE_API } from '@/config/app'
import { ElNotification } from 'element-plus'
import store from '@/store/index'
import { useCookies } from "vue3-cookies"
import { useRouter } from 'vue-router'

const getError = (error:any) => {
    const { cookies } = useCookies()
    const router = useRouter()
    // store.dispatch('setLoggedIn', false)
    // cookies.remove('user')
    // localStorage.removeItem('user')
    // router.push({  name: 'managerPdf', params: {} })
};
const changeToken = () => {
    ApiService.init()
};

// export const uploadFileAlfresco = async (files: []) => {
//   console.log("files", files)
//   let dataReq = new FormData();
//   files.forEach((file: any) => {
//     dataReq.append("files", file.raw);
//   })
//   dataReq.append("relativePath", '/demo/upload');
//   return await apiPost(API_POST_UPLOAD_MULTI_FILE, dataReq);
// }

// export const getFileAlfresco = async (nodeId, attachment) => {
//   return await apiGetFileNoParam(`${API_GET_DOWNLOAD_FILE}?nodeId=${nodeId}&attachment=${attachment}`)
// }

export const apiPost = async (url: string, data: any) => {
    store.dispatch("setLoading", true);
    // changeToken()
    return new Promise((resolve, reject) => {
        ApiService.post(url, data).then(response => {
            store.dispatch("setLoading", false);
            resolve(response)
        }).catch(error => {
            store.dispatch("setLoading", false);
            throw getError(error);
        })
    })
};

export const apiPatch = async (url: string, data: any) => {
    store.dispatch("setLoading", true);
    changeToken()
    return new Promise((resolve, reject) => {
        ApiService.patch(url, data).then(response => {
            store.dispatch("setLoading", false);
            resolve(response)
        }).catch(error => {
            store.dispatch("setLoading", false);
            throw getError(error);
        })
    })
};
export const apiGet = async (url: string, data: any) => {
    store.dispatch("setLoading", true);
    changeToken()
    return new Promise((resolve, reject) => {
        ApiService.get(url, data).then(response => {
            store.dispatch("setLoading", false);
            resolve(response)
        }).catch(error => {
            store.dispatch("setLoading", false);
            throw getError(error);
        })
    })
};
export const apiGetNoParam = async (url: string) => {
    changeToken()
    store.dispatch("setLoading", true);
    return new Promise((resolve, reject) => {
        ApiService.getNoParam(url).then(response => {
            store.dispatch("setLoading", false);
            resolve(response)
        }).catch(error => {
            store.dispatch("setLoading", false);
            throw getError(error);
        })
    })
};
export const apiGetFileNoParam = async (url: string) => {
    store.dispatch("setLoading", true);
    changeToken()
    return new Promise((resolve, reject) => {
        ApiService.getFileNoParam(url).then(response => {
            store.dispatch("setLoading", false);
            resolve(response)
        }).catch(error => {
            store.dispatch("setLoading", false);
            throw getError(error);
        })
    })
};
export const apiPostNoParam = async (url: string) => {
    store.dispatch("setLoading", true);
    changeToken()
    return new Promise((resolve, reject) => {
        ApiService.postNoParam(url).then(response => {
            store.dispatch("setLoading", false);
            resolve(response)
        }).catch(error => {
            store.dispatch("setLoading", false);
            throw getError(error);
        })
    })
};

// export const apiAddressGoogleMaps = async (lat: number, lng: number) => {
//     store.dispatch("setLoading", true);
//     return new Promise((resolve, reject) => {
//         let url = "https://maps.googleapis.com/maps/api/geocode/json?latlng=" +
//         lat +
//         "," +
//         lng +
//         "&key=" + GOOGLE_API
//         ApiService.postNoParam(url).then(response => {
//             store.dispatch("setLoading", false);
//             resolve(response)
//         }).catch(error => {
//             store.dispatch("setLoading", false);
//             throw getError(error);
//         })
//     })
// };

// export const apiLatlngGoogleMaps = async (address: string) => {
//     store.dispatch("setLoading", true);
//     return new Promise((resolve, reject) => {
//         let url = "https://maps.googleapis.com/maps/api/geocode/json?address=" +
//         address +
//         "," + "&key=" + GOOGLE_API
//         ApiService.postNoParam(url).then(response => {
//             store.dispatch("setLoading", false);
//             resolve(response)
//         }).catch(error => {
//             store.dispatch("setLoading", false);
//             throw getError(error);
//         })
//     })
// };

// export const apiDistanceMatrix = async (lat: number, lng: number) => {
//     store.dispatch("setLoading", true);
//     return new Promise((resolve, reject) => {
//         let url = "https://maps.googleapis.com/maps/api/geocode/json?latlng=" +
//         lat +
//         "," +
//         lng +
//         "&key=" + GOOGLE_API
//         ApiService.postNoParam(url).then(response => {
//             store.dispatch("setLoading", false);
//             resolve(response)
//         }).catch(error => {
//             store.dispatch("setLoading", false);
//             throw getError(error);
//         })
//     })
// };

export const apiGetIP = async () => {
    store.dispatch("setLoading", true);
    return new Promise((resolve, reject) => {
        let url = "https://ipinfo.io/?token=94ada7ae90eb94"
        ApiService.getNoParam(url).then(response => {
            store.dispatch("setLoading", false);
            resolve(response)
        }).catch(error => {
            store.dispatch("setLoading", false);
            throw getError(error);
        })
    })
};

export const apiGetCaptcha = async (secret: string, token: string) => {
    store.dispatch("setLoading", true);
    return new Promise((resolve, reject) => {
        let url = "https://www.google.com/recaptcha/api/siteverify?secret=" +
        secret +
        "&response=" +
        token
        ApiService.getNoParam(url).then(response => {
            store.dispatch("setLoading", false);
            resolve(response)
        }).catch(error => {
            store.dispatch("setLoading", false);
            throw getError(error);
        })
    })
};

export const apiGetCaptcha2 = async (data: string) => {
    store.dispatch("setLoading", true);
    return new Promise((resolve, reject) => {
        let url = "https://www.google.com/recaptcha/api/siteverify"
        ApiService.postNoParam(url).then(response => {
            store.dispatch("setLoading", false);
            resolve(response)
        }).catch(error => {
            store.dispatch("setLoading", false);
            throw getError(error);
        })
    })
};

export const uploadFile = async (url: string, data: object) => {
    store.dispatch("setLoading", true);
    return new Promise((resolve, reject) => {
        ApiService.uploadFile(url, data).then(response => {
            let status = response.data.httpStatus
            if(status == 200) {
                store.dispatch("setLoading", false);
                resolve(response)
            } else {
                store.dispatch("setLoading", false);
                ElNotification({
                    title: "Thêm ảnh phòng thất bại",
                    message: "Bạn đang dùng miễn phí vì vậy không up được ảnh, vui lòng nâng cấp VIP để up date ảnh CMND và ảnh phòng",
                    type: 'error',
                })
            }
        }).catch(error => {
            throw getError(error);
        })
    })
};

export const apiDelete = async (url: string) => {
    store.dispatch("setLoading", true);
    return new Promise((resolve, reject) => {
        ApiService.deleteNoParam(url).then(response => {
            let status = response.data.httpStatus
            if(status == 200) {
                store.dispatch("setLoading", false);
                resolve(response)
            } else {
                store.dispatch("setLoading", false);
                ElNotification({
                    title: url,
                    message: response.data.errorMessage,
                    type: 'error',
                })
            }
        }).catch(error => {
            throw getError(error);
        })
    })
};

export const localhostPost = async (strUrl: any, params: any) => {
    store.dispatch("setLoading", true);
    return new Promise((resolve, reject) => {
        let url = "locahost:8075" + strUrl
        ApiService.post(url, params).then(response => {
            store.dispatch("setLoading", false);
            resolve(response)
        }).catch(error => {
            store.dispatch("setLoading", false);
            throw getError(error);
        })
    })
};

