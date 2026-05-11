import { useMemo, useState } from "react";

const villageModules = [
	{
		title: "名称来源",
		kicker: "南游殿传说",
		detail:
			"游殿村村名相传与宋徽宗赵佶有关。传说宋徽宗邙山之行后，地方在其望见黄河的地方建南游殿，村庄由此得名。",
		points: ["宋徽宗邙山之行", "望见黄河处建南游殿", "村庄因殿得名"],
	},
	{
		title: "文化",
		kicker: "传统村落记忆",
		detail:
			"村内现存九连洞地坑院、地下街坊、月亮湾、玉皇阁、文昌阁等历史遗存，也保存有滑氏族谱及《游殿村志》。",
		points: ["九连洞地坑院", "地下街坊与月亮湾", "玉皇阁、文昌阁"],
	},
];

const cultureHighlights = [
	{
		title: "传统村落",
		description:
			"游殿村于2016年入选第四批河南省传统村落名录，2023年入选第六批中国传统村落名录。",
	},
	{
		title: "村志与族谱",
		description:
			"村内保存有滑氏族谱，并由老教师参与编著《游殿村志》，为村庄记忆留下文字线索。",
	},
	{
		title: "节庆活动",
		description:
			"每逢新春佳节，村里开展春季文艺活动，让乡村文化生活在节日里继续热闹起来。",
	},
];

export default function ReactStoryPage({ base = "/" }) {
	const [activeIndex, setActiveIndex] = useState(0);
	const [activeHighlightIndex, setActiveHighlightIndex] = useState(0);
	const activeModule = villageModules[activeIndex];
	const activeHighlight = cultureHighlights[activeHighlightIndex];
	const summary = useMemo(
		() => `${villageModules.length} 个主题模块 · ${cultureHighlights.length} 条文化线索`,
		[],
	);

	return (
		<main className="mx-auto box-border w-full max-w-[64rem] px-5 pt-5 pb-16">
			<nav
				className="mb-12 flex flex-wrap items-center justify-between gap-4 border-b border-youdian-ink/10 py-4"
				aria-label="游殿村页面导航"
			>
				<a
					className="font-bold text-youdian-leaf-dark no-underline transition hover:text-youdian-ink focus-visible:text-youdian-ink"
					href={base}
				>
					← 返回首页
				</a>
				<span className="rounded-full bg-youdian-mint px-3 py-1 text-sm font-bold text-youdian-leaf-dark">
					游殿村
				</span>
			</nav>

			<section className="grid items-center gap-8 rounded-[1.6rem] border border-youdian-ink/10 bg-white/70 p-[clamp(1.4rem,5vw,3.5rem)] shadow-[0_1.5rem_4rem_rgba(23,32,51,0.08)] md:grid-cols-[1.1fr_0.9fr]">
				<div>
					<p className="mb-4 text-[0.78rem] font-extrabold uppercase tracking-[0.2em] text-youdian-leaf-dark">
						Youdian Village
					</p>
					<h1 className="m-0 text-[clamp(2.4rem,7vw,4.8rem)] font-extrabold leading-[1.06] tracking-[-0.04em]">
						游殿村
					</h1>
					<p className="my-6 max-w-[38rem] text-[1.08rem] leading-[1.85] text-youdian-muted">
						河南省洛阳市偃师区山化镇下辖行政村，东邻巩义市。这里既有村名传说，也留存着地坑院、阁楼、村志和节庆活动等乡土文化线索。
					</p>
					<p className="inline-flex rounded-full border border-youdian-leaf/20 bg-youdian-mint px-4 py-2 text-sm font-bold text-youdian-leaf-dark">
						{summary}
					</p>
				</div>

				<div className="grid gap-3" aria-label="游殿村主题模块">
					{villageModules.map((module, index) => {
						const isActive = index === activeIndex;

						return (
							<button
								type="button"
								key={module.title}
								className={`rounded-2xl border p-4 text-left transition hover:-translate-y-0.5 focus-visible:-translate-y-0.5 ${
									isActive
										? "border-youdian-leaf bg-youdian-mint shadow-[0_0.8rem_2rem_rgba(66,184,131,0.14)]"
										: "border-youdian-ink/10 bg-white/70 hover:border-youdian-leaf/60 focus-visible:border-youdian-leaf/60"
								}`}
								onClick={() => setActiveIndex(index)}
							>
								<span className="text-sm font-bold text-youdian-leaf-dark">
									模块 {index + 1}
								</span>
								<strong className="mt-1 block text-xl text-youdian-ink">
									{module.title}
								</strong>
								<small className="mt-2 block leading-[1.7] text-youdian-muted">
									{module.kicker}
								</small>
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
						当前模块
					</p>
					<h2 className="m-0 text-2xl">{activeModule.title}</h2>
					<p className="leading-[1.8] text-youdian-muted">{activeModule.detail}</p>
					<ul className="m-0 grid gap-2 p-0">
						{activeModule.points.map((point) => (
							<li
								key={point}
								className="list-none rounded-xl bg-youdian-mint px-3 py-2 text-sm font-bold text-youdian-leaf-dark"
							>
								{point}
							</li>
						))}
					</ul>
				</div>
				<div className="rounded-[1.4rem] border border-youdian-leaf/20 bg-youdian-mint p-6 shadow-[0_1rem_2.5rem_rgba(66,184,131,0.08)]">
					<p className="mb-2 text-sm font-bold uppercase tracking-[0.16em] text-youdian-leaf-dark">
						文化线索
					</p>
					<h2 className="m-0 text-2xl">{activeHighlight.title}</h2>
					<p className="mb-0 leading-[1.8] text-youdian-muted">
						{activeHighlight.description}
					</p>
				</div>
			</section>

			<section
				className="mt-8 rounded-[1.4rem] border border-youdian-ink/10 bg-white/65 p-6 shadow-[0_1rem_2.5rem_rgba(23,32,51,0.06)]"
				aria-labelledby="culture-highlights-title"
			>
				<div className="mb-5 max-w-[40rem]">
					<p className="mb-2 text-sm font-bold uppercase tracking-[0.16em] text-youdian-leaf-dark">
						Culture
					</p>
					<h2 id="culture-highlights-title" className="m-0 text-2xl">
						文化
					</h2>
				</div>
				<div className="grid gap-3 md:grid-cols-3" aria-label="游殿村文化线索">
					{cultureHighlights.map((highlight, index) => {
						const isActive = index === activeHighlightIndex;

						return (
							<button
								type="button"
								key={highlight.title}
								className={`rounded-2xl border p-4 text-left transition hover:-translate-y-0.5 focus-visible:-translate-y-0.5 ${
									isActive
										? "border-youdian-leaf bg-youdian-leaf text-white shadow-[0_0.8rem_2rem_rgba(66,184,131,0.18)]"
										: "border-youdian-ink/10 bg-white/70 text-youdian-ink hover:border-youdian-leaf/60 focus-visible:border-youdian-leaf/60"
								}`}
								onClick={() => setActiveHighlightIndex(index)}
							>
								<span
									className={`text-sm font-bold ${
										isActive ? "text-white" : "text-youdian-leaf-dark"
									}`}
								>
									线索 {index + 1}
								</span>
								<strong className="mt-1 block text-xl">{highlight.title}</strong>
								<small
									className={`mt-2 block leading-[1.7] ${
										isActive ? "text-white/85" : "text-youdian-muted"
									}`}
								>
									{highlight.description}
								</small>
							</button>
						);
					})}
				</div>
			</section>

			<p className="mt-6 text-sm leading-[1.7] text-youdian-muted">
				内容参考：
				<a
					className="font-bold text-youdian-leaf-dark no-underline hover:text-youdian-ink focus-visible:text-youdian-ink"
					href="https://baike.baidu.com/item/%E6%B8%B8%E6%AE%BF%E6%9D%91/6564788"
					target="_blank"
					rel="noreferrer"
				>
					百度百科“游殿村”
				</a>
			</p>
		</main>
	);
}
