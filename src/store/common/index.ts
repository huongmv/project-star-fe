import mutations from './mutations';
import actions from './actions';
import getters from './getters';

const commonStore = {
    state: {
        isCallApi: '0',
        isCountryChange: 'vn',
        isHistoryBack: ['/'],
        isBreadcrumb: [{'/': 'home'}],
        menuSidebarCollapsed: false,
        controlSidebarCollapsed: false,
        actionReseted: false,
        darkModeSelected: false,
        navbarFixed: false,
        noBorderSelected: false,
        navbarVariant: '',
        sidebarSkin: '',
        activeTab:1,
        notReadMsg:0,
        receiptId: 0,
        isVip: 0,
        isCheckR: 0,
        isMenuChange: '',
        isStoreCategory: 0,
        isLoadCart: '',
        isLoadLogin: '',
        isSearchKey: '',
        isLayoutClass: ''
    },
    mutations,
    actions,
    getters
};

export default commonStore;
