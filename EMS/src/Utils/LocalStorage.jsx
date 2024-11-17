const employees = [
	{
		id: 1,
		email: "alice@example.com",
		name: "Alice",
		password: "123",
		taskNumbers: {
			active: 1,
			newTask: 1,
			completed: 1,
			failed: 1,
		},
		tasks: [
			{
				active: true,
				newTask: true,
				completed: false,
				failed: false,
				title: "Design Mockups",
				description: "Create UI/UX mockups for the new app feature",
				date: "2023-11-10",
				category: "Design",
			},
			{
				active: false,
				newTask: false,
				completed: true,
				failed: false,
				title: "Team Meeting",
				description: "Weekly team sync-up meeting",
				date: "2023-11-12",
				category: "Meetings",
			},
			{
				active: false,
				newTask: false,
				completed: false,
				failed: true,
				title: "Prototype Testing",
				description: "Conduct user testing on prototype",
				date: "2023-11-13",
				category: "Testing",
			},
		],
	},
	{
		id: 2,
		email: "bob@example.com",
		name: "Bob",
		password: "123",
		taskNumbers: {
			active: 1,
			newTask: 1,
			completed: 1,
			failed: 0,
		},
		tasks: [
			{
				active: true,
				newTask: true,
				completed: false,
				failed: false,
				title: "API Integration",
				description: "Integrate backend APIs with frontend app",
				date: "2023-11-11",
				category: "Development",
			},
			{
				active: false,
				newTask: false,
				completed: true,
				failed: false,
				title: "Code Review",
				description: "Review code for the recent feature push",
				date: "2023-11-09",
				category: "Code Review",
			},
		],
	},
	{
		id: 3,
		email: "charlie@example.com",
		name: "Charlie",
		password: "123",
		taskNumbers: {
			active: 1,
			newTask: 1,
			completed: 1,
			failed: 1,
		},
		tasks: [
			{
				active: true,
				newTask: true,
				completed: false,
				failed: false,
				title: "User Interviews",
				description: "Conduct interviews with target users",
				date: "2023-11-10",
				category: "Research",
			},
			{
				active: false,
				newTask: false,
				completed: true,
				failed: false,
				title: "Competitive Analysis",
				description: "Analyze competitors' products",
				date: "2023-11-08",
				category: "Analysis",
			},
			{
				active: false,
				newTask: false,
				completed: false,
				failed: true,
				title: "Prepare Presentation",
				description: "Create slides for project update",
				date: "2023-11-06",
				category: "Presentation",
			},
		],
	},
	{
		id: 4,
		email: "david@example.com",
		name: "David",
		password: "123",
		taskNumbers: {
			active: 1,
			newTask: 1,
			completed: 1,
			failed: 0,
		},
		tasks: [
			{
				active: true,
				newTask: true,
				completed: false,
				failed: false,
				title: "Database Migration",
				description: "Migrate data to new database",
				date: "2023-11-10",
				category: "Database",
			},
			{
				active: false,
				newTask: false,
				completed: true,
				failed: false,
				title: "Performance Tuning",
				description: "Optimize database queries",
				date: "2023-11-07",
				category: "Optimization",
			},
		],
	},
	{
		id: 5,
		email: "eve@example.com",
		name: "Eve",
		password: "123",
		taskNumbers: {
			active: 1,
			newTask: 1,
			completed: 1,
			failed: 1,
		},
		tasks: [
			{
				active: true,
				newTask: true,
				completed: false,
				failed: false,
				title: "Social Media Campaign",
				description: "Plan and schedule posts for campaign",
				date: "2023-11-12",
				category: "Marketing",
			},
			{
				active: false,
				newTask: false,
				completed: false,
				failed: true,
				title: "Email Newsletter",
				description: "Write and design monthly newsletter",
				date: "2023-11-09",
				category: "Content",
			},
			{
				active: false,
				newTask: false,
				completed: true,
				failed: false,
				title: "Product Launch",
				description: "Launch new product with PR",
				date: "2023-11-08",
				category: "Launch",
			},
		],
	},
];

const admin = [
	{
		id: 1,
		email: "adminuser@example.com",
		name: "AdminUser",
		password: "123",
	},
];

export const setLocalStorage = () => {
	localStorage.setItem("Employee", JSON.stringify(employees));
	localStorage.setItem("Admin", JSON.stringify(admin));
};
export const getLocalStorage = () => {
	const employeeData = JSON.parse(localStorage.getItem("Employee"));
	const adminData = JSON.parse(localStorage.getItem("Admin"));

	return { employees, admin };
};
