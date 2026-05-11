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

export default function ReactStoryPage({ base = "/" }) {
	const [activeIndex, setActiveIndex] = useState(0);
	const activePanel = storyPanels[activeIndex];
	const summary = useMemo(
		() => `${storyPanels.length} 个 React 状态卡片`,
		[],
	);

	return (
		<main className="mx-auto box-border w-full max-w-[68rem] px-5 pt-12 pb-20">
			<nav
				className="mb-14 flex flex-wrap items-center justify-between gap-4"
				aria-label="React 页面导航"
			>
				<a
					className="font-bold text-youdian-accent no-underline hover:underline focus-visible:underline"
					href={base}
				>
					← 返回首页
				</a>
				<span className="rounded-full border border-youdian-ink/10 bg-white/70 px-4 py-2 text-sm font-bold text-youdian-muted">
					React 组件页面
				</span>
			</nav>

			<section className="grid items-center gap-8 rounded-[2rem] border border-youdian-ink/10 bg-white/75 p-[clamp(1.5rem,5vw,3.5rem)] shadow-[0_1rem_3rem_rgba(23,32,51,0.08)] md:grid-cols-[1.1fr_0.9fr]">
				<div>
					<p className="mb-4 text-[0.78rem] font-extrabold uppercase tracking-[0.2em] text-youdian-accent">
						React Page
					</p>
					<h1 className="m-0 text-[clamp(2.5rem,7vw,5rem)] leading-[1.08]">
						用 React 做一个互动故事页
					</h1>
					<p className="my-6 max-w-[38rem] text-[1.08rem] leading-[1.85] text-youdian-muted">
						这个页面由 React 组件渲染，点击右侧卡片可以切换当前关注的村庄记忆主题。
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
				className="mt-8 rounded-[1.5rem] border border-youdian-ink/10 bg-white/65 p-6"
				aria-live="polite"
			>
				<p className="mb-2 text-sm font-bold uppercase tracking-[0.16em] text-youdian-accent">
					当前主题
				</p>
				<h2 className="m-0 text-2xl">{activePanel.title}</h2>
				<p className="mb-0 leading-[1.8] text-youdian-muted">{activePanel.detail}</p>
			</section>
		</main>
	);
}
