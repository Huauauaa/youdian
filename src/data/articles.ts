export type ArticleStatus = "已发布";

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
				title: "那条忠狗",
				description:
					"通勤时看见一条白狗，想起小时候家里那条老狗——计划生育那年它挣断链子咬退来人，护住了灶房里那口大水缸。",
				href: "articles/baigou/",
				category: "人和日子",
				status: "已发布",
				pubDate: "2026-05-15",
			},
		],
	},
];

export const articles = articleSections.flatMap((section) => section.articles);
