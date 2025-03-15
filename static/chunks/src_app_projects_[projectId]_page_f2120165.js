(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/src_app_projects_[projectId]_page_f2120165.js", {

"[project]/src/app/projects/[projectId]/page.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, d: __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>ProjectPage),
    "generateStaticParams": (()=>generateStaticParams)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$markdown$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__Markdown__as__default$3e$__ = __turbopack_context__.i("[project]/node_modules/react-markdown/lib/index.js [app-client] (ecmascript) <export Markdown as default>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
"use client";
;
;
;
;
// Example project data (replace with your data fetching logic)
const projects = {
    project1: {
        name: 'Budget Garden',
        description: 'A Chrome extension to help users track spending and manage budgets effectively.',
        images: [
            '/project1/BudgetGarden.png'
        ],
        details: `
### Budget Garden
Budget Garden is a Chrome extension designed to help users track their spending and manage their budgets effectively.

It automatically detects purchases on order confirmation pages (currently supporting **Amazon** and **Temu**) and saves the total amount spent.

Users can also manually add expenses, set a weekly budget, and track their remaining funds. As a fun twist, leftover money can be transferred to an in-game currency for a **Budget Garden Game**, where users can "spend" their savings on virtual plants and decorations.

---

### Key Features:
- **Automatic Spending Tracking**: Detects purchases on order confirmation pages and extracts the total amount spent.
- **Manual Expense Entry**: Allows users to manually add expenses for better budget tracking.
- **Weekly Budget Management**: Set a weekly budget and track remaining funds in real-time.
- **Leftover Money Transfer**: Simulate transferring leftover money to a fun in-game currency for the Budget Garden Game.
- **Reset Functionality**: Easily reset the budget and total spent at any time.

---

### Technologies Used:
- **Frontend**: HTML, CSS, JavaScript
- **Chrome Extensions API**: Storage, Tabs, Scripting, Active Tab
- **Game Integration**: Simple in-game economy using JavaScript and DOM manipulation
- **Tools**: Chrome Developer Tools, Git

---

### What I Learned:
- How to build and deploy a Chrome extension using Manifest V3.
- Integrating content scripts to interact with web pages and extract data dynamically.
- Managing user data with Chrome Storage API for persistence across sessions.
- Creating a simple game interface to simulate an in-game economy.
- Handling edge cases, such as detecting order confirmation pages and preventing infinite redirection loops.

---

### Why It Matters:
This project demonstrates my ability to create practical, user-focused tools that combine real-world utility with a touch of creativity. 
It showcases my skills in full-stack development, API integration, and problem-solving, all while delivering a product that helps users 
manage their finances in a fun and engaging way.
  `
    },
    project2: {
        name: 'Project 2',
        description: 'This is a description of Project 2.',
        images: [
            '/project2/image1.jpg',
            '/project2/image2.jpg'
        ],
        details: 'Additional details about Project 2.'
    }
};
function ProjectPage({ params }) {
    const { projectId } = params;
    const project = projects[projectId];
    if (!project) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["notFound"])(); // Render a 404 page
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-7xl mx-auto",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                    className: "text-4xl font-bold text-center mb-8",
                    children: project.name
                }, void 0, false, {
                    fileName: "[project]/src/app/projects/[projectId]/page.js",
                    lineNumber: 77,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-lg text-gray-700 mb-8",
                    children: project.description
                }, void 0, false, {
                    fileName: "[project]/src/app/projects/[projectId]/page.js",
                    lineNumber: 80,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8",
                    children: project.images.map((image, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "relative h-64",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                src: image,
                                alt: `Project Image ${index + 1}`,
                                fill: true,
                                className: "rounded-lg object-cover",
                                unoptimized: true
                            }, void 0, false, {
                                fileName: "[project]/src/app/projects/[projectId]/page.js",
                                lineNumber: 86,
                                columnNumber: 15
                            }, this)
                        }, index, false, {
                            fileName: "[project]/src/app/projects/[projectId]/page.js",
                            lineNumber: 85,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/src/app/projects/[projectId]/page.js",
                    lineNumber: 83,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-white rounded-lg shadow-lg p-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-2xl font-semibold mb-4",
                            children: "Details"
                        }, void 0, false, {
                            fileName: "[project]/src/app/projects/[projectId]/page.js",
                            lineNumber: 99,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-gray-700 overflow-auto break-words whitespace-pre-wrap  p-4",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$markdown$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__Markdown__as__default$3e$__["default"], {
                                components: {
                                    h3: ({ node, ...props })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-xl font-semibold mt-4 mb-2",
                                            ...props
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/projects/[projectId]/page.js",
                                            lineNumber: 103,
                                            columnNumber: 49
                                        }, void 0),
                                    ul: ({ node, ...props })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                            className: "list-disc list-inside ml-4",
                                            ...props
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/projects/[projectId]/page.js",
                                            lineNumber: 104,
                                            columnNumber: 49
                                        }, void 0),
                                    li: ({ node, ...props })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            className: "mb-2",
                                            ...props
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/projects/[projectId]/page.js",
                                            lineNumber: 105,
                                            columnNumber: 49
                                        }, void 0),
                                    p: ({ node, ...props })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "mb-4",
                                            ...props
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/projects/[projectId]/page.js",
                                            lineNumber: 106,
                                            columnNumber: 48
                                        }, void 0)
                                },
                                children: project.details.trim()
                            }, void 0, false, {
                                fileName: "[project]/src/app/projects/[projectId]/page.js",
                                lineNumber: 101,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/projects/[projectId]/page.js",
                            lineNumber: 100,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/projects/[projectId]/page.js",
                    lineNumber: 98,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/projects/[projectId]/page.js",
            lineNumber: 75,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/projects/[projectId]/page.js",
        lineNumber: 74,
        columnNumber: 5
    }, this);
}
_c = ProjectPage;
async function generateStaticParams() {
    return Object.keys(projects).map((projectId)=>({
            projectId
        }));
}
var _c;
__turbopack_context__.k.register(_c, "ProjectPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=src_app_projects_%5BprojectId%5D_page_f2120165.js.map