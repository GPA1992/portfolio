export type Visitor = {
	id: number;
	name: string;
	position: string;
	comment: string;
	avatar: string;
	createdAt: Date;
	updatedAt: Date;
};

export interface VisitorsResponse {
	visitors: Visitor[];
}

export type VisitorToSend = {
	name: string;
	position: string;
	comment: string;
	avatar: string;
};

export type EventTarget = {
	name: string;
	value: string;
	src: string;
};
