<!-- 
	This is the user profile page, it uses the dashboard layout in: 
	"./layouts/Dashboard.vue" .
 -->

<template>
  <div>
   111111111111111111111
  </div>
</template>
<script lang="ts" setup>
import { watch, ref, onMounted, computed } from "vue";
import CardPlatformSettings from "../components/Cards/CardPlatformSettings.vue";
import CardProfileInformation from "../components/Cards/CardProfileInformation.vue";
import CardConversations from "../components/Cards/CardConversations.vue";
import CardProject from "../components/Cards/CardProject.vue";
const profileHeaderBtns = ref("overview");
const conversationsData = [
  {
    id: "1",
    title: "Sophie B.",
    code: "Hi! I need more information…",
    avatar: "images/face-3.jpg",
  },
  {
    id: "2",
    title: "Anne Marie",
    code: "Awesome work, can you…",
    avatar: "images/face-4.jpg",
  },
  {
    id: "3",
    title: "Ivan",
    code: "About files I can…",
    avatar: "images/face-5.jpeg",
  },
  {
    id: "4",
    title: "Peterson",
    code: "Have a great afternoon…",
    avatar: "images/face-6.jpeg",
  },
  {
    id: "5",
    title: "Nick Daniel",
    code: "Hi! I need more information…",
    avatar: "images/face-2.jpg",
  },
];

// Project cards data
const projects = [
  {
    id: 1,
    title: "Modern",
    content:
      "As Uber works through a huge amount of internal management turmoil.",
    cover: "images/home-decor-3.jpeg",
    team: [
      "images/face-1.jpg",
      "images/face-4.jpg",
      "images/face-2.jpg",
      "images/face-3.jpg",
    ],
  },
  {
    id: 2,
    title: "Scandinavian",
    content:
      "Music is something that every person has his or her own specific opinion about.",
    cover: "images/home-decor-2.jpeg",
    team: [
      "images/face-1.jpg",
      "images/face-4.jpg",
      "images/face-2.jpg",
      "images/face-3.jpg",
    ],
  },
  {
    id: 3,
    title: "Minimalist",
    content:
      "Different people have different taste, and various types of music, Zimbali Resort.",
    cover: "images/home-decor-1.jpeg",
    team: [
      "images/face-1.jpg",
      "images/face-4.jpg",
      "images/face-2.jpg",
      "images/face-3.jpg",
    ],
  },
];
</script>
<!-- 
<script>

	import CardPlatformSettings from "../components/Cards/CardPlatformSettings"
	import CardProfileInformation from "../components/Cards/CardProfileInformation"
	import CardConversations from "../components/Cards/CardConversations"
	import CardProject from "../components/Cards/CardProject"

	// Conversation's list data.
	const conversationsData = [
		{
			id: "1",
			title: "Sophie B.",
			code: "Hi! I need more information…",
			avatar: "images/face-3.jpg",
		},
		{
			id: "2",
			title: "Anne Marie",
			code: "Awesome work, can you…",
			avatar: "images/face-4.jpg",
		},
		{
			id: "3",
			title: "Ivan",
			code: "About files I can…",
			avatar: "images/face-5.jpeg",
		},
		{
			id: "4",
			title: "Peterson",
			code: "Have a great afternoon…",
			avatar: "images/face-6.jpeg",
		},
		{
			id: "5",
			title: "Nick Daniel",
			code: "Hi! I need more information…",
			avatar: "images/face-2.jpg",
		},
	] ;

	// Project cards data
	const projects = [
		{
			id: 1,
			title: "Modern",
			content: "As Uber works through a huge amount of internal management turmoil.",
			cover: "images/home-decor-3.jpeg",
			team: [
				"images/face-1.jpg",
				"images/face-4.jpg",
				"images/face-2.jpg",
				"images/face-3.jpg",
			],
		},
		{
			id: 2,
			title: "Scandinavian",
			content: "Music is something that every person has his or her own specific opinion about.",
			cover: "images/home-decor-2.jpeg",
			team: [
				"images/face-1.jpg",
				"images/face-4.jpg",
				"images/face-2.jpg",
				"images/face-3.jpg",
			],
		},
		{
			id: 3,
			title: "Minimalist",
			content: "Different people have different taste, and various types of music, Zimbali Resort.",
			cover: "images/home-decor-1.jpeg",
			team: [
				"images/face-1.jpg",
				"images/face-4.jpg",
				"images/face-2.jpg",
				"images/face-3.jpg",
			],
		},
	] ;

	export default ({
		components: {
			CardPlatformSettings,
			CardProfileInformation,
			CardConversations,
			CardProject,
		},
		data() {
			return {
				// Active button for the "User Profile" card's radio button group.
				profileHeaderBtns: 'overview',

				// Associating Conversation's list data with its corresponding property.
				conversationsData,

				// Project cards data
				projects,
			}
		},
	})

</script> -->

<style lang="scss"></style>
