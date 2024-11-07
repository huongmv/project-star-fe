<template>

	<!-- Conversations Card -->
	<a-card :bordered="false" class="header-solid h-full" :bodyStyle="{paddingTop: 0, paddingBottom: '16px' }">
		<template #title>
			<h6 class="font-semibold m-0">Conversations</h6>
		</template>
		<a-list item-layout="horizontal" :data-source="data">
			<template #renderItem="{ item }">
			<a-list-item>
				<a-list-item-meta>
				<template #title>
					<a href="https://www.antdv.com/">{{ item.title }}</a>
				</template>
				<template #description>
					{{ item.code }}
				</template>
				<template #avatar>
					<!-- <a-avatar src="https://joeschmoe.io/api/v1/random" /> -->
					<a-avatar
					slot="avatar"
					:size="48"
					shape="square"
					 src="https://joeschmoe.io/api/v1/random"
					/>
				</template>
				</a-list-item-meta>
			</a-list-item>
			</template>
		</a-list>

		<!-- <a-list
			class="conversations-list"
			item-layout="horizontal"
			:split="false"
			:data-source="data"
		>
			<a-list-item slot="renderItem" slot-scope="item">
				<a-button slot="actions" type="link">
					REPLY
				</a-button>
				<a-list-item-meta
					:title="data.title"
					:description="data.code"
				>
					<a-avatar
					slot="avatar"
					:size="48"
					shape="square"
					:src="data.avatar"
					/>
				</a-list-item-meta>
			</a-list-item>
		</a-list> -->
	</a-card>
	<!-- / Conversations Card -->

</template>

<script lang="ts" setup>
interface props {
	data: any;
}
const propsData = withDefaults(defineProps<props>(), {
  data: [],
});
</script>
