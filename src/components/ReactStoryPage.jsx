import { useMemo, useState } from "react";

const storyPanels = [
	{
		title: "旧街口",
		detail: "从街口开始记录老门楼、石阶和赶集路线，让空间记忆先清楚起来。",
	},
	{
		title: "家人片段",
		detail: "把长辈讲过的人名、称呼和小故事整理成可继续补充的卡片。",
	},
	{
		title: "四时农事",
		detail: "按春种、夏管、秋收、冬藏梳理村里的生活节奏。",
	},
];

const dailyMoments = [
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

export default function ReactStoryPage({ base = "/" }) {
	const [activeIndex, setActiveIndex] = useState(0);
	const [activeMomentIndex, setActiveMomentIndex] = useState(0);
	const activePanel = storyPanels[activeIndex];
	const activeMoment = dailyMoments[activeMomentIndex];
	const summary = useMemo(
		() => `${storyPanels.length + dailyMoments.length} 个 React + TailwindCSS 互动卡片`,
		[],
	);

	return (
		<main className="mx-auto box-border w-full max-w-[68rem] px-5 pt-12 pb-20">
			<nav
				className="mb-14 flex flex-wrap items-center justify-between gap-4"
				aria-label="React + TailwindCSS 页面导航"
			>
				<a
					className="font-bold text-youdian-accent no-underline hover:underline focus-visible:underline"
					href={base}
				>
					← 返回首页
				</a>
				<span className="rounded-full border border-youdian-ink/10 bg-white/70 px-4 py-2 text-sm font-bold text-youdian-muted">
					React + TailwindCSS
				</span>
			</nav>

			<section className="grid items-center gap-8 rounded-[2rem] border border-youdian-ink/10 bg-white/75 p-[clamp(1.5rem,5vw,3.5rem)] shadow-[0_1rem_3rem_rgba(23,32,51,0.08)] md:grid-cols-[1.1fr_0.9fr]">
				<div>
					<p className="mb-4 text-[0.78rem] font-extrabold uppercase tracking-[0.2em] text-youdian-accent">
						React + TailwindCSS Page
					</p>
					<h1 className="m-0 text-[clamp(2.5rem,7vw,5rem)] leading-[1.08]">
						用统一的 React 组件组织互动故事页
					</h1>
					<p className="my-6 max-w-[38rem] text-[1.08rem] leading-[1.85] text-youdian-muted">
						这个页面统一由 React 组件渲染，所有界面状态和视觉样式都通过 React 状态与 TailwindCSS 工具类组合完成。
					</p>
					<p className="inline-flex rounded-full bg-orange-50 px-4 py-2 text-sm font-bold text-youdian-rust">
						{summary}
					</p>
				</div>

				<div className="grid gap-3" aria-label="React 互动卡片">
					{storyPanels.map((panel, index) => {
						const isActive = index === activeIndex;

						return (
							<button
								type="button"
								key={panel.title}
								className={`rounded-2xl border p-4 text-left transition ${
									isActive
										? "border-youdian-accent bg-orange-50 shadow-[0_0.8rem_2rem_rgba(180,83,9,0.12)]"
										: "border-youdian-ink/10 bg-white/70 hover:border-youdian-accent/50"
								}`}
								onClick={() => setActiveIndex(index)}
							>
								<span className="text-sm font-bold text-youdian-accent">
									主题 {index + 1}
								</span>
								<strong className="mt-1 block text-xl text-youdian-ink">
									{panel.title}
								</strong>
							</button>
						);
					})}
				</div>
			</section>

			<section
				className="mt-8 grid gap-5 md:grid-cols-[0.95fr_1.05fr]"
				aria-live="polite"
			>
				<div className="rounded-[1.5rem] border border-youdian-ink/10 bg-white/65 p-6">
					<p className="mb-2 text-sm font-bold uppercase tracking-[0.16em] text-youdian-accent">
						当前主题
					</p>
					<h2 className="m-0 text-2xl">{activePanel.title}</h2>
					<p className="mb-0 leading-[1.8] text-youdian-muted">{activePanel.detail}</p>
				</div>
				<div className="rounded-[1.5rem] border border-youdian-accent/20 bg-orange-50 p-6">
					<p className="mb-2 text-sm font-bold uppercase tracking-[0.16em] text-youdian-accent">
						当前时刻
					</p>
					<h2 className="m-0 text-2xl">{activeMoment.title}</h2>
					<p className="mb-0 leading-[1.8] text-youdian-muted">{activeMoment.description}</p>
				</div>
			</section>

			<section
				className="mt-8 rounded-[1.5rem] border border-youdian-ink/10 bg-white/65 p-6"
				aria-labelledby="daily-moments-title"
			>
				<div className="mb-5 max-w-[40rem]">
					<p className="mb-2 text-sm font-bold uppercase tracking-[0.16em] text-youdian-accent">
						Daily Moments
					</p>
					<h2 id="daily-moments-title" className="m-0 text-2xl">
						村庄日常片段
					</h2>
				</div>
				<div className="grid gap-3 md:grid-cols-3" aria-label="React 互动列表">
					{dailyMoments.map((moment, index) => {
						const isActive = index === activeMomentIndex;

						return (
							<button
								type="button"
								key={moment.title}
								className={`rounded-2xl border p-4 text-left transition ${
									isActive
										? "border-youdian-accent bg-youdian-accent text-youdian-paper shadow-[0_0.8rem_2rem_rgba(180,83,9,0.16)]"
										: "border-youdian-ink/10 bg-white/70 text-youdian-ink hover:border-youdian-accent/50"
								}`}
								onClick={() => setActiveMomentIndex(index)}
							>
								<span
									className={`text-sm font-bold ${
										isActive ? "text-youdian-paper" : "text-youdian-accent"
									}`}
								>
									片段 {index + 1}
								</span>
								<strong className="mt-1 block text-xl">{moment.title}</strong>
								<small
									className={`mt-2 block leading-[1.7] ${
										isActive ? "text-youdian-paper/85" : "text-youdian-muted"
									}`}
								>
									{moment.description}
								</small>
							</button>
						);
					})}
				</div>
			</section>
		</main>
	);
}
