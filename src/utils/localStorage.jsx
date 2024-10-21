
const employees = [
  {
    "id": 1,
    "firstName": "Arjun",
    "email": "e@e.com",
    "password": "123",
    "tasks": [
      {
        "title": "Design new homepage",
        "description": "Create a new responsive homepage design.",
        "date": "2024-10-18",
        "category": "Design",
        "active": true,
        "new_task": false,
        "completed": false,
        "failed": false
      },
      {
        "title": "Fix login bug",
        "description": "Resolve issue with user login authentication.",
        "date": "2024-10-17",
        "category": "Development",
        "active": false,
        "new_task": false,
        "completed": true,
        "failed": false
      },
      {
        "title": "Client meeting",
        "description": "Discuss project requirements with the client.",
        "date": "2024-10-20",
        "category": "Meeting",
        "active": true,
        "new_task": true,
        "completed": false,
        "failed": false
      }
    ],
    "taskNumbers": {
      "active": 2,
      "new_task": 1,
      "completed": 1,
      "failed": 0
    }
  },
  {
    "id": 2,
    "firstName": "Rajesh",
    "email": "employee2@example.com",
    "password": "123",
    "tasks": [
      {
        "title": "Prepare monthly report",
        "description": "Compile and analyze monthly sales data.",
        "date": "2024-10-19",
        "category": "Reporting",
        "active": true,
        "new_task": true,
        "completed": false,
        "failed": false
      },
      {
        "title": "Database backup",
        "description": "Run backup of all company databases.",
        "date": "2024-10-15",
        "category": "IT",
        "active": false,
        "new_task": false,
        "completed": true,
        "failed": false
      },
      {
        "title": "Product launch plan",
        "description": "Develop a strategy for launching the new product.",
        "date": "2024-10-22",
        "category": "Marketing",
        "active": true,
        "new_task": false,
        "completed": false,
        "failed": false
      },
      {
        "title": "Fix email issue",
        "description": "Investigate issues with company email accounts.",
        "date": "2024-10-12",
        "category": "Support",
        "active": false,
        "new_task": false,
        "completed": false,
        "failed": true
      }
    ],
    "taskNumbers": {
      "active": 2,
      "new_task": 1,
      "completed": 1,
      "failed": 1
    }
  },
  {
    "id": 3,
    "firstName": "Meera",
    "email": "employee3@example.com",
    "password": "123",
    "tasks": [
      {
        "title": "Revise project plan",
        "description": "Update project timelines and milestones.",
        "date": "2024-10-21",
        "category": "Planning",
        "active": true,
        "new_task": false,
        "completed": false,
        "failed": false
      },
      {
        "title": "Team briefing",
        "description": "Hold a briefing session for the marketing team.",
        "date": "2024-10-18",
        "category": "Meeting",
        "active": false,
        "new_task": false,
        "completed": true,
        "failed": false
      },
      {
        "title": "Social media campaign",
        "description": "Create content for the new social media campaign.",
        "date": "2024-10-23",
        "category": "Marketing",
        "active": true,
        "new_task": true,
        "completed": false,
        "failed": false
      },
      {
        "title": "Fix website error",
        "description": "Resolve 404 error on product page.",
        "date": "2024-10-14",
        "category": "Development",
        "active": false,
        "new_task": false,
        "completed": false,
        "failed": true
      }
    ],
    "taskNumbers": {
      "active": 2,
      "new_task": 1,
      "completed": 1,
      "failed": 1
    }
  },
  {
    "id": 4,
    "firstName": "Priya",
    "email": "employee4@example.com",
    "password": "123",
    "tasks": [
      {
        "title": "Client feedback analysis",
        "description": "Analyze feedback from recent client survey.",
        "date": "2024-10-20",
        "category": "Research",
        "active": true,
        "new_task": false,
        "completed": false,
        "failed": false
      },
      {
        "title": "Update company policy",
        "description": "Draft changes to the remote work policy.",
        "date": "2024-10-15",
        "category": "HR",
        "active": false,
        "new_task": false,
        "completed": true,
        "failed": false
      },
      {
        "title": "Employee onboarding",
        "description": "Onboard new marketing staff.",
        "date": "2024-10-19",
        "category": "HR",
        "active": true,
        "new_task": true,
        "completed": false,
        "failed": false
      }
    ],
    "taskNumbers": {
      "active": 2,
      "new_task": 1,
      "completed": 1,
      "failed": 0
    }
  },
  {
    "id": 5,
    "firstName": "Vikram",
    "email": "employee5@example.com",
    "password": "123",
    "tasks": [
      {
        "title": "Server maintenance",
        "description": "Perform regular maintenance on the server.",
        "date": "2024-10-18",
        "category": "IT",
        "active": true,
        "new_task": true,
        "completed": false,
        "failed": false
      },
      {
        "title": "Create ad banners",
        "description": "Design banners for upcoming ad campaign.",
        "date": "2024-10-17",
        "category": "Design",
        "active": false,
        "new_task": false,
        "completed": true,
        "failed": false
      },
      {
        "title": "Fix security issues",
        "description": "Resolve vulnerabilities in security protocols.",
        "date": "2024-10-12",
        "category": "IT",
        "active": false,
        "new_task": false,
        "completed": false,
        "failed": true
      }
    ],
    "taskNumbers": {
      "active": 1,
      "new_task": 1,
      "completed": 1,
      "failed": 1
    }
  }
];

  
  const admin = [
    {
      "id": 1,
      "email": "admin@example.com",
      "password": "123"
    }
  ];
  
  export const setlocalStorage = ()=>{
    localStorage.setItem('employees',JSON.stringify(employees))
    localStorage.setItem('admin',JSON.stringify(admin))
  }

  export const getlocalStorage = ()=>{
    const employees = JSON.parse(localStorage.getItem('employees'));
    const admin = JSON.parse(localStorage.getItem('admin'));

    return{employees, admin}
  }