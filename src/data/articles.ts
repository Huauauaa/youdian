export type ArticleStatus = "待补充" | "整理中" | "已发布";

export type Article = {
	title: string;
	description: string;
	href: string;
	category: string;
	status: ArticleStatus;
	pubDate: string;
};

export type ArticleSection = {
	title: string;
	description: string;
	articles: Article[];
};

export const articleSections: ArticleSection[] = [
	{
		title: "村庄档案",
		description: "先把游殿村的来处、方位和基本线索放在一起，作为后续故事的底稿。",
		articles: [
			{
				title: "游殿村从哪里来",
				description: "预留给村名来历、老地名和村庄沿革的文章。",
				href: "articles/village-origin/",
				category: "村庄档案",
				status: "待补充",
				pubDate: "2026-05-09",
			},
			{
				title: "一张村庄地图",
				description: "预留给村庄方位、道路、街巷和重要地点的整理。",
				href: "articles/village-map/",
				category: "村庄档案",
				status: "待补充",
				pubDate: "2026-05-09",
			},
		],
	},
	{
		title: "老房子与旧街",
		description: "记录村里的老宅、院落、街巷、庙阁和那些还留在记忆里的地方。",
		articles: [
			{
				title: "老宅、窑洞与地下街坊",
				description: "预留给老建筑、地坑院和街坊空间的文章。",
				href: "articles/old-houses/",
				category: "老房子与旧街",
				status: "待补充",
				pubDate: "2026-05-09",
			},
			{
				title: "村口与道路",
				description: "预留给村口、道路变迁和日常出行记忆的文章。",
				href: "articles/roads-and-gates/",
				category: "老房子与旧街",
				status: "待补充",
				pubDate: "2026-05-09",
			},
		],
	},
	{
		title: "人和日子",
		description: "把家人、邻里、农事、节令和日常生活慢慢写成村庄的故事。",
		articles: [
			{
				title: "女中豪杰",
				description: "写小姑从自己改名字到追回被偷的钱，那股有主意、有胆量又有分寸的劲儿。",
				href: "articles/xiaogu/",
				category: "人和日子",
				status: "已发布",
				pubDate: "2026-05-11",
			},
			{
				title: "家里的长辈们",
				description: "预留给长辈讲述、家族记忆和口述史的文章。",
				href: "articles/family-elders/",
				category: "人和日子",
				status: "待补充",
				pubDate: "2026-05-09",
			},
			{
				title: "麦田、玉米地和四季",
				description: "预留给农事节令、田地变化和一年四季的文章。",
				href: "articles/fields-and-seasons/",
				category: "人和日子",
				status: "待补充",
				pubDate: "2026-05-09",
			},
		],
	},
];

export const articles = articleSections.flatMap((section) => section.articles);
