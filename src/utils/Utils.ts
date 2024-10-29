import moment from 'moment'
const Utils = {
    convertDateLocal(date: any, format: any, local: any) {
        return moment(date).locale(local).format(format)
    },
    convertDate(date: any, format: any) {
        return moment(date).format(format)
    },
    convertDDMMYYYYToYYYYMMDD(date: any) {
        var dateRep = date.replaceAll('/', '-')
        return dateRep.split("-").reverse().join("-");
    },
    getDateNow() {
        return moment().format('LLLL')
    },
    getDateNowAdd(number: any, type: any) {
        return moment().add(number, type).format('LLLL')
    },
    getDateMomentAdd(date: any, number: any, type: any) {
        return moment(date).add(number, type).format('LLLL')
    },
    getDateNowByFormat(format: any) {
        return moment.utc().format(format)
    },
    getDateNowLocal(styleDate: any, local: any) {
        /**https://momentjs.com/docs/*/
        moment.locale(local);
        return moment().format(styleDate)
    },
    /**
     * @param date
     * @param dateformat
     * @returns date
     */
    parseDate(date: any, format: any) {
        if (date !== null) {
            return moment.parseZone(date).format(format)
        } else {
            return date
        }
    },
    parseMoney(money: any) {
        try {
            if (money == 'null' || money == null || money == undefined) {
                return 0
            }
            return (money).replace(/\B(?=(\d{3})+(?!\d))/g, ',')
        } catch (error) {
            return 0
        }
    },
    converMoney(money: any) {
        try {
            if (money == 'null' || money == null || money == undefined) {
                return 0
            }
            return (money.replaceAll(',', ''))
        } catch (error) {
            return 0
        }

    },
    getMomentTimestamp(date: any) {
        return moment(date).toDate();
    },
    /**
     * formatMoney(num, fix, type)
     * 
     * @param num Number parse
     * @param fix leng . number (123.00)
     * @param type   $, VND
     */
    formatMoney(money: any) {
        try {
            if (money == 'null' || money == null || money == undefined) {
                return 0
            }
            return new Intl.NumberFormat().format(money)
        } catch (error) {
            return 0
        }
    },
    getNumber(number: any) {
        try {
            if (number == 'null' || number == null || number == undefined) {
                return 0
            }
            return number
        } catch (error) {
            return 0
        }
    },
    getDateNowFomat(format: any) {
        let startDate = new Date()
        if (format !== null) {
            return moment.parseZone(startDate).format(format)
        } else {
            return startDate
        }
    },
    isNumber(number: any) {
        return /^-?[\d.]+(?:e-?\d+)?$/.test(number)
    },
    isDate(date: any) {
        return moment(date).isValid()
    },
    parseStringToFloatNumber(str: any) {
        return parseFloat(str);
    },
    setLocalStorageToken(key: any, value: any, ttl: any) {
        // ttl = (1000 * 60 * 20) would be 20 mins
        // `item` is an object which contains the original value
        // as well as the time when it's supposed to expire
        const item = {
            value: value,
            expiry: ttl <= 0 ? -1 : new Date().getTime() + ttl
        }
        localStorage.setItem(key, JSON.stringify(item))
    },
    setLocalStorage(key: any, value: any) {
        localStorage.setItem(key, value)
    },
    getLocalStorage(key: any) {
        return localStorage.getItem(key)
    },
    getLocalStorageToken(key: any) {
        const itemStr = localStorage.getItem(key)
        // if the item doesn't exist, return null
        if (!itemStr) {
            return null
        }
        const item = JSON.parse(itemStr)
        // compare the expiry time of the item with the current time
        if (item.expiry > 0 && new Date().getTime() > item.expiry) {
            // If the item is expired, delete the item from storage
            // and return null
            localStorage.removeItem(key)
            return null
        }
        return item.value
    },
    removeLocalStorageToken(key: any) {
        localStorage.removeItem(key)
    },
    randomText(lenght: any) {
        let text = ''
        let chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
        for (let i = 0; i < lenght; i++) {
            text += chars.charAt(Math.floor(Math.random() * chars.length))
        }
        return text
    },
    proxyToJson(value: any) {
        return JSON.parse(JSON.stringify(value))
    },
    removevietnamese(value: String) {
        return value.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '')
    },
    dateToISOString(date: any) {
        let value = moment(date).toISOString();
        return value.substring(0, value.length - 1);
    },
    getStringFloor(data: any) {
        if (data > 1) {
            let number = Number(data) - 1
            return number + " tầng (Gồm 1 trệt + " + number + " tầng)"
        } else {
            return "Tầng trệt(Gồm 1 trệt)"
        }
    },
    inputNumber(evt: any) {
        const keysAllowed: string[] = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.'];
        const keyPressed: string = evt.key;

        if (!keysAllowed.includes(keyPressed)) {
            evt.preventDefault()
        }
    }

}
export default Utils
