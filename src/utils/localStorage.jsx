const employees = [
    {
        id: 1,
        firstName: "Aarav",
        email: "e1@e.com",
        password: "123",
        taskCount: {
            active: 1,
            newTask: 3,
            completed: 6,
            failed: 0
        },
        tasks: [
            {
                title: "Prepare report",
                description: "Monthly sales report",
                date: "2026-04-10",
                category: "Reports",
                active: true,
                newTask: true,
                completed: false,
                failed: false
            },
            {
                title: "Client meeting",
                description: "Discuss project requirements",
                date: "2026-04-11",
                category: "Meetings",
                active: false,
                newTask: false,
                completed: true,
                failed: false
            },
            {
                title: "Fix bugs",
                description: "Resolve login issues",
                date: "2026-04-12",
                category: "Development",
                active: false,
                newTask: false,
                completed: false,
                failed: true
            }
        ]
    },
    {
        id: 2,
        firstName: "Vihaan",
        email: "employee2@example.com",
        password: "123",
        taskCount: {
            active: 2,
            newTask: 1,
            completed: 1,
            failed: 0
        },
        tasks: [
            {
                title: "Design UI",
                description: "Create dashboard layout",
                date: "2026-04-10",
                category: "Design",
                active: true,
                newTask: true,
                completed: false,
                failed: false
            },
            {
                title: "Update website",
                description: "Refresh homepage content",
                date: "2026-04-11",
                category: "Development",
                active: false,
                newTask: false,
                completed: true,
                failed: false
            },
            {
                title: "Team sync",
                description: "Weekly sync meeting",
                date: "2026-04-12",
                category: "Meetings",
                active: true,
                newTask: false,
                completed: false,
                failed: false
            }
        ]
    },
    {
        id: 3,
        firstName: "Aditya",
        email: "employee3@example.com",
        password: "123",
        taskCount: {
            active: 1,
            newTask: 1,
            completed: 1,
            failed: 1
        },
        tasks: [
            {
                title: "Database backup",
                description: "Backup production DB",
                date: "2026-04-10",
                category: "Maintenance",
                active: false,
                newTask: false,
                completed: true,
                failed: false
            },
            {
                title: "API integration",
                description: "Integrate payment gateway",
                date: "2026-04-11",
                category: "Development",
                active: true,
                newTask: true,
                completed: false,
                failed: false
            },
            {
                title: "Code review",
                description: "Review teammate code",
                date: "2026-04-12",
                category: "Development",
                active: false,
                newTask: false,
                completed: false,
                failed: true
            }
        ]
    },
    {
        id: 4,
        firstName: "Rohan",
        email: "employee4@example.com",
        password: "123",
        taskCount: {
            active: 1,
            newTask: 1,
            completed: 1,
            failed: 1
        },
        tasks: [
            {
                title: "Write tests",
                description: "Unit testing for modules",
                date: "2026-04-10",
                category: "Testing",
                active: true,
                newTask: true,
                completed: false,
                failed: false
            },
            {
                title: "Fix UI bugs",
                description: "Resolve navbar issue",
                date: "2026-04-11",
                category: "Development",
                active: false,
                newTask: false,
                completed: true,
                failed: false
            },
            {
                title: "Deploy app",
                description: "Deploy to staging",
                date: "2026-04-12",
                category: "Deployment",
                active: false,
                newTask: false,
                completed: false,
                failed: true
            }
        ]
    },
    {
        id: 5,
        firstName: "Karan",
        email: "employee5@example.com",
        password: "123",
        taskCount: {
            active: 1,
            newTask: 1,
            completed: 1,
            failed: 1
        },
        tasks: [
            {
                title: "Market research",
                description: "Analyze competitors",
                date: "2026-04-10",
                category: "Research",
                active: true,
                newTask: true,
                completed: false,
                failed: false
            },
            {
                title: "Content writing",
                description: "Write blog post",
                date: "2026-04-11",
                category: "Content",
                active: false,
                newTask: false,
                completed: true,
                failed: false
            },
            {
                title: "Email campaign",
                description: "Send newsletter",
                date: "2026-04-12",
                category: "Marketing",
                active: false,
                newTask: false,
                completed: false,
                failed: true
            }
        ]
    }
];

const admin = [
    {
        id: 1,
        email: "admin@example.com",
        password: "123"
    }
];

export const setLocalStorage = () => {
    localStorage.setItem('employees',JSON.stringify(employees))
    localStorage.setItem('admin',JSON.stringify(admin))
}

export const getLocalStorage = () => {
    const employees = JSON.parse(localStorage.getItem('employees'))
    const admin = JSON.parse(localStorage.getItem('admin'))

    return {employees,admin}
}