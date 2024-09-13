export default {
    isCallApi: (state: { isCallApi: any; }) => state.isCallApi,
    isCountryChange: (state: { isCountryChange: any; }) => state.isCountryChange,
    isHistoryBack: (state: { isHistoryBack: any; }) => state.isHistoryBack,
    isBreadcrumb : (state: { isBreadcrumb: any; }) => state.isBreadcrumb ,
    menuSidebarCollapsed: (state: any): boolean => state.menuSidebarCollapsed,
    controlSidebarCollapsed: (state: any): boolean => state.controlSidebarCollapsed,
    actionReseted: (state: any): boolean => state.actionReseted,
    darkModeSelected: (state: any): boolean => state.darkModeSelected,
    navbarFixed: (state: any): boolean => state.navbarFixed,
    noBorderSelected: (state: any): boolean => state.noBorderSelected,
    navbarVariant: (state: any): string => state.navbarVariant,
    sidebarSkin: (state: any): string => state.sidebarSkin,
    activeTab:(state:any):number => state.activeTab,
    notReadMsg:(state:any):number => state.notReadMsg,
    receiptId:(state:any):number => state.receiptId,
    isVip:(state:any):boolean => state.isVip,
    isCheckR:(state:any):number => state.isCheckR,
    isMenuChange:(state:any):string => state.isCheckR,
    isStoreCategory:(state:any):number => state.isStoreCategory,
    isLoadCart:(state:any):string => state.isLoadCart,
    isLoadLogin:(state:any):string => state.isLoadLogin,
    isSearchKey:(state:any):string => state.isSearchKey,
    isLayoutClass:(state:any):string => state.isLayoutClass,
};
