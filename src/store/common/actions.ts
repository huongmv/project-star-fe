export default {
    'setCallAPI'(context:any, countryChange:any) {
        context.commit('apiCall', countryChange)
    },
    'setCountryChange'(context:any, countryChange:any) {
        context.commit('countryChange', countryChange)
    },
    'setHistoryBack'(context:any, isHistoryBack:any) {
        context.commit('historyBack', isHistoryBack)
    },
    'setBreadcrumb'(context:any, isbreadcrumb:any) {
        context.commit('breadcrumb', isbreadcrumb)
    },
    'toggleMenuSidebar'(context:any) {
        context.commit('toggleMenuSidebar');
    },
    'toggleControlSidebar'(context:any) {
        context.commit('toggleControlSidebar');
    },
    'toggleResetSeting'(context:any) {
        context.commit('toggleResetSeting');
    },
    'toggleDarkMode'(context:any) {
        context.commit('toggleDarkMode');
    },
    // 'removeDarkMode'(context:any:any) {
    //     context.commit('removeDarkMode');
    // },
    'toggleNavbarFixed'(context:any) {
        context.commit('toggleNavbarFixed');
    },
    'toggleNoBorder'(context:any) {
        context.commit('toggleNoBorder');
    },
    'setNavbarVariant'(context:any, value:any) {
        context.commit('setNavbarVariant', value);
    },
    'setSidebarSkin' (context:any, value:any) {
        context.commit('setSidebarSkin', value);
    },
    'setActiveTab' (context:any, value:any) {
        context.commit('setActiveTab', value);
    },
    'setNotReadMsg' (context:any, value:any) {
        context.commit('setNotReadMsg', value);
    },
    'setReceiptId' (context:any, value:any) {
        context.commit('setReceiptId', value);
    },
    'setIsVip' (context:any, value:any) {
        context.commit('setIsVip', value);
    },
    'setIsCheckR' (context:any, value:any) {
        context.commit('setIsCheckR', value);
    },
    'setMenuChange' (context:any, value:any) {
        context.commit('setMenuChange', value);
    },
    'setStoreCategory' (context:any, value:any) {
        context.commit('setStoreCategory', value);
    },
    'setLoadCart' (context:any, value:any) {
        context.commit('setLoadCart', value);
    },
    'setLoadLogin' (context:any, value:any) {
        context.commit('setLoadLogin', value);
    },
    'setSearchKey' (context:any, value:any) {
        context.commit('setSearchKey', value);
    },
    'setLayoutClass' (context:any, value:any) {
        context.commit('setLayoutClass', value);
    },
};
