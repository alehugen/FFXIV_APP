const URL = 'http://na.lodestonenews.com/news/maintenance';

export default async function maintenanceAPI() {
	const request = await fetch(URL);
	const response = await request.json();
	return response;
}
