<template>
    <div class="dot-thaotac">
        <el-dropdown size="large">
            <i class="fas fa-ellipsis-h"></i>
            <template #dropdown>
                <slot name="content"></slot>
            </template>
        </el-dropdown>
    </div>
</template>
<style scoped>
.dot-thaotac .fa-ellipsis {
    cursor: pointer;
    font-size: 1.5em;
}

.dot-thaotac-tittle {
    text-align: center;
    font-size: 1.3em;
    padding: 10px 5px;
    background: var(--el-color-primary-light-5);
    color: var(--el-color-white);
}

.dot-thaotac .el-popper {
    border-radius: 5px;
}

.dot-thaotac .el-popper__arrow::before {
    background: var(--el-color-primary-light-5) !important;
}
</style>