<script setup>
import { computed, ref } from "vue";

defineProps({
	base: {
		type: String,
		default: "/",
	},
});

const moments = [
	{
		title: "早市声音",
		description: "清晨的叫卖声、邻里问候和车轮声，是一天开始时最容易被想起的部分。",
	},
	{
		title: "院落树影",
		description: "午后阳光落在老院墙上，树影把屋檐、石凳和小路连在一起。",
	},
	{
		title: "灯下闲谈",
		description: "晚饭后坐在门口聊天，零散的回忆往往就在这样的时间里冒出来。",
	},
];

const selectedIndex = ref(0);
const selectedMoment = computed(() => moments[selectedIndex.value]);
</script>

<template>
	<main class="mx-auto box-border w-full max-w-[68rem] px-5 pt-12 pb-20">
		<nav
			class="mb-14 flex flex-wrap items-center justify-between gap-4"
			aria-label="Vue 页面导航"
		>
			<a
				class="font-bold text-youdian-accent no-underline hover:underline focus-visible:underline"
				:href="base"
			>
				← 返回首页
			</a>
			<span class="rounded-full border border-youdian-ink/10 bg-white/70 px-4 py-2 text-sm font-bold text-youdian-muted">
				Vue 组件页面
			</span>
		</nav>

		<section class="grid gap-8 rounded-[2rem] border border-youdian-ink/10 bg-white/75 p-[clamp(1.5rem,5vw,3.5rem)] shadow-[0_1rem_3rem_rgba(23,32,51,0.08)] md:grid-cols-[0.95fr_1.05fr]">
			<div>
				<p class="mb-4 text-[0.78rem] font-extrabold uppercase tracking-[0.2em] text-youdian-accent">
					Vue Page
				</p>
				<h1 class="m-0 text-[clamp(2.5rem,7vw,5rem)] leading-[1.08]">
					用 Vue 组织一组村庄时刻
				</h1>
				<p class="my-6 max-w-[38rem] text-[1.08rem] leading-[1.85] text-youdian-muted">
					这个页面由 Vue 组件渲染，借助响应式状态在几个日常片段之间切换。
				</p>

				<div class="rounded-[1.5rem] border border-youdian-accent/20 bg-orange-50 p-5">
					<p class="mb-2 text-sm font-bold uppercase tracking-[0.16em] text-youdian-accent">
						当前时刻
					</p>
					<h2 class="m-0 text-2xl">{{ selectedMoment.title }}</h2>
					<p class="mb-0 leading-[1.8] text-youdian-muted">
						{{ selectedMoment.description }}
					</p>
				</div>
			</div>

			<div class="grid content-start gap-3" aria-label="Vue 互动列表">
				<button
					v-for="(moment, index) in moments"
					:key="moment.title"
					type="button"
					class="rounded-2xl border p-4 text-left transition"
					:class="
						index === selectedIndex
							? 'border-youdian-accent bg-orange-50 shadow-[0_0.8rem_2rem_rgba(180,83,9,0.12)]'
							: 'border-youdian-ink/10 bg-white/70 hover:border-youdian-accent/50'
					"
					@click="selectedIndex = index"
				>
					<span class="text-sm font-bold text-youdian-accent">片段 {{ index + 1 }}</span>
					<strong class="mt-1 block text-xl text-youdian-ink">{{ moment.title }}</strong>
					<small class="mt-2 block leading-[1.7] text-youdian-muted">
						{{ moment.description }}
					</small>
				</button>
			</div>
		</section>
	</main>
</template>
