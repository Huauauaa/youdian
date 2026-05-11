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
		<main className="mx-auto box-border w-full max-w-[64rem] px-5 pt-5 pb-16">
			<nav
				className="mb-12 flex flex-wrap items-center justify-between gap-4 border-b border-youdian-ink/10 py-4"
				aria-label="React + TailwindCSS 页面导航"
			>
				<a
					className="font-bold text-youdian-leaf-dark no-underline transition hover:text-youdian-ink focus-visible:text-youdian-ink"
					href={base}
				>
					← 返回首页
				</a>
				<span className="rounded-full bg-youdian-mint px-3 py-1 text-sm font-bold text-youdian-leaf-dark">
					React + TailwindCSS
				</span>
			</nav>

			<section className="grid items-center gap-8 rounded-[1.6rem] border border-youdian-ink/10 bg-white/70 p-[clamp(1.4rem,5vw,3.5rem)] shadow-[0_1.5rem_4rem_rgba(23,32,51,0.08)] md:grid-cols-[1.1fr_0.9fr]">
				<div>
					<p className="mb-4 text-[0.78rem] font-extrabold uppercase tracking-[0.2em] text-youdian-leaf-dark">
						React + TailwindCSS Page
					</p>
					<h1 className="m-0 text-[clamp(2.4rem,7vw,4.8rem)] font-extrabold leading-[1.06] tracking-[-0.04em]">
						用统一的 React 组件组织互动故事页
					</h1>
					<p className="my-6 max-w-[38rem] text-[1.08rem] leading-[1.85] text-youdian-muted">
						这个页面统一由 React 组件渲染，所有界面状态和视觉样式都通过 React 状态与 TailwindCSS 工具类组合完成。
					</p>
					<p className="inline-flex rounded-full border border-youdian-leaf/20 bg-youdian-mint px-4 py-2 text-sm font-bold text-youdian-leaf-dark">
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
								className={`rounded-2xl border p-4 text-left transition hover:-translate-y-0.5 focus-visible:-translate-y-0.5 ${
									isActive
										? "border-youdian-leaf bg-youdian-mint shadow-[0_0.8rem_2rem_rgba(66,184,131,0.14)]"
										: "border-youdian-ink/10 bg-white/70 hover:border-youdian-leaf/60 focus-visible:border-youdian-leaf/60"
								}`}
								onClick={() => setActiveIndex(index)}
							>
								<span className="text-sm font-bold text-youdian-leaf-dark">
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
				<div className="rounded-[1.4rem] border border-youdian-ink/10 bg-white/65 p-6 shadow-[0_1rem_2.5rem_rgba(23,32,51,0.06)]">
					<p className="mb-2 text-sm font-bold uppercase tracking-[0.16em] text-youdian-leaf-dark">
						当前主题
					</p>
					<h2 className="m-0 text-2xl">{activePanel.title}</h2>
					<p className="mb-0 leading-[1.8] text-youdian-muted">{activePanel.detail}</p>
				</div>
				<div className="rounded-[1.4rem] border border-youdian-leaf/20 bg-youdian-mint p-6 shadow-[0_1rem_2.5rem_rgba(66,184,131,0.08)]">
					<p className="mb-2 text-sm font-bold uppercase tracking-[0.16em] text-youdian-leaf-dark">
						当前时刻
					</p>
					<h2 className="m-0 text-2xl">{activeMoment.title}</h2>
					<p className="mb-0 leading-[1.8] text-youdian-muted">{activeMoment.description}</p>
				</div>
			</section>

			<section
				className="mt-8 rounded-[1.4rem] border border-youdian-ink/10 bg-white/65 p-6 shadow-[0_1rem_2.5rem_rgba(23,32,51,0.06)]"
				aria-labelledby="daily-moments-title"
			>
				<div className="mb-5 max-w-[40rem]">
					<p className="mb-2 text-sm font-bold uppercase tracking-[0.16em] text-youdian-leaf-dark">
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
								className={`rounded-2xl border p-4 text-left transition hover:-translate-y-0.5 focus-visible:-translate-y-0.5 ${
									isActive
										? "border-youdian-leaf bg-youdian-leaf text-white shadow-[0_0.8rem_2rem_rgba(66,184,131,0.18)]"
										: "border-youdian-ink/10 bg-white/70 text-youdian-ink hover:border-youdian-leaf/60 focus-visible:border-youdian-leaf/60"
								}`}
								onClick={() => setActiveMomentIndex(index)}
							>
								<span
									className={`text-sm font-bold ${
										isActive ? "text-white" : "text-youdian-leaf-dark"
									}`}
								>
									片段 {index + 1}
								</span>
								<strong className="mt-1 block text-xl">{moment.title}</strong>
								<small
									className={`mt-2 block leading-[1.7] ${
										isActive ? "text-white/85" : "text-youdian-muted"
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
