export default {
    apiCall(state:any, isCallApi:any) {
        state.isCallApi = isCallApi
    },
    countryChange(state:any, isCountryChange:any) {
        state.isCountryChange = isCountryChange
    },
    historyBack(state:any, isHistoryBack:any) {
        state.isHistoryBack = [...state.isHistoryBack, isHistoryBack]
    },
    breadcrumb(state:any, isBreadcrumb:any) {
        state.isBreadcrumb = [isBreadcrumb]
    },
    toggleMenuSidebar(state:any) {
        state.menuSidebarCollapsed = !state.menuSidebarCollapsed;
    },
    toggleControlSidebar(state:any) {
        state.controlSidebarCollapsed = !state.controlSidebarCollapsed;
    },
    toggleDarkMode(state:any) {
        state.darkModeSelected = !state.darkModeSelected;
    },
    // removeDarkMode(state) {
    //     state.darkModeSelected = false;
    // },
    toggleResetSeting(state:any) {
        state.actionReseted = true;
    },
    toggleNavbarFixed(state:any) {
        state.navbarFixed = !state.navbarFixed;
    },
    toggleNoBorder(state:any) {
        state.noBorderSelected = !state.noBorderSelected;
    },
    setNavbarVariant (state:any, value:any) {
        state.navbarVariant = value;
    },
    setSidebarSkin (state:any, value:any) {
        state.sidebarSkin = value;
    },
    setActiveTab (state:any, value:any) {
        state.activeTab = value;
    },
    setNotReadMsg (state:any, value:any) {
        state.notReadMsg = value;
    },
    setReceiptId (state:any, value:any) {
        state.receiptId = value;
    },
    setIsVip (state:any, value:any) {
        state.isVip = value;
    },
    setIsCheckR (state:any, value:any) {
        state.isCheckR = value;
    },
    setMenuChange (state:any, value:any) {
        state.isMenuChange = value;
    },
    setStoreCategory (state:any, value:any) {
        state.isStoreCategory = value;
    },
    setLoadCart (state:any, value:any) {
        state.isLoadCart = value;
    },
    setLoadLogin (state:any, value:any) {
        state.isLoadLogin = value;
    },
    setSearchKey (state:any, value:any) {
        state.isSearchKey = value;
    },
    setLayoutClass (state:any, value:any) {
        state.isLayoutClass = value;
    },
};
