export type ListData = {
	date: string;
	title: string;
	description: string;
	tag?: string;

	href?: string;

	image?: string;

	writer?: {
		name: string;
		role: string;
		avatar: string;
		href?: string;
	};
};
