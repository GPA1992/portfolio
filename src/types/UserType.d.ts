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
