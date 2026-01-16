module.exports = [
"[project]/app/favicon.ico.mjs { IMAGE => \"[project]/app/favicon.ico (static in ecmascript, tag client)\" } [app-rsc] (structured image object, ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/app/favicon.ico.mjs { IMAGE => \"[project]/app/favicon.ico (static in ecmascript, tag client)\" } [app-rsc] (structured image object, ecmascript)"));
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[project]/app/layout.js [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/app/layout.js [app-rsc] (ecmascript)"));
}),
"[project]/app/data/services.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "services",
    ()=>services
]);
const services = [
    {
        id: 'web-development',
        title: 'Web Design & Development',
        description: 'The internet is the future. We would like to help our customers master the digital space with awesome websites!',
        theme: 'dark',
        longDescription: "In today's digital-first world, your website is often the first interaction potential customers have with your brand. We don't just build websites; we create digital experiences that captivate, engage, and convert. Our team of expert developers and designers works collaboratively to ensure your site is not only visually stunning but also technically robust, fast, and mobile-responsive.",
        benefits: [
            "Custom-built designs tailored to your brand identity.",
            "Responsive layouts that look great on all devices.",
            "Optimized for speed and performance.",
            "Secure and scalable architecture."
        ],
        features: [
            "UI/UX Design",
            "Frontend & Backend Development",
            "E-commerce Solutions",
            "CMS Integration"
        ]
    },
    {
        id: 'social-media',
        title: 'Social Media Marketing',
        description: 'Be where the people are! Talk to them directly, through creatively created Social Media Content.',
        theme: 'lilac',
        longDescription: "Social media is more than just posting updates; it's about building a community and fostering meaningful connections with your audience. We develop comprehensive social media strategies that amplify your brand's voice across all major platforms. From content creation to community management, we handle it all so you can focus on running your business.",
        benefits: [
            "Increased brand awareness and visibility.",
            "Higher engagement rates with your target audience.",
            "Targeted advertising campaigns for better ROI.",
            "Consistent brand messaging across platforms."
        ],
        features: [
            "Strategy Development",
            "Content Creation & Curation",
            "Community Management",
            "Analytics & Reporting"
        ]
    },
    {
        id: 'graphic-design',
        title: 'Graphic Design',
        description: 'Design is the way to speak to the heart. Capture the eye and the hearts of those who matter through great designs.',
        theme: 'light',
        longDescription: "Great design transcends language and communicates directly with the emotions of your audience. Our graphic design services cover everything from logo creation and branding to marketing collateral and digital assets. We believe that good design solves problems and elevates brands, making them memorable and impactful.",
        benefits: [
            "Strong and consistent visual brand identity.",
            "Professional marketing materials that stand out.",
            "Effective communication of complex ideas through visuals.",
            "Enhanced credibility and trust with customers."
        ],
        features: [
            "Logo & Branding Identity",
            "Marketing Materials (Brochures, Flyers)",
            "Social Media Graphics",
            "Infographics & Illustrations"
        ]
    },
    {
        id: 'seo',
        title: 'Search Engine Optimization',
        description: 'Make of your websites to rank higher on Google Search Results! This will increase your visitors and sales.',
        theme: 'dark',
        longDescription: "Having a beautiful website is pointless if no one can find it. Our SEO strategies are designed to improve your search engine rankings and drive organic traffic to your site. We use white-hat techniques and data-driven insights to optimize your content, technical structure, and authority, ensuring sustainable long-term growth.",
        benefits: [
            "Higher visibility on search engine results pages (SERPs).",
            "Increased organic traffic and quality leads.",
            "Better user experience and site usability.",
            "Long-term cost-effectiveness compared to paid ads."
        ],
        features: [
            "Keyword Research & Strategy",
            "On-Page & Off-Page Optimization",
            "Technical SEO Audits",
            "Local SEO"
        ]
    },
    {
        id: 'business-automation',
        title: 'Business Automation',
        description: 'Get rid of costly hiring and outsourcing of work! Easily do them yourself with our automation services.',
        theme: 'lilac',
        longDescription: "Efficiency is the key to scaling your business. We help you automate repetitive tasks and streamline your workflows using cutting-edge technology. By reducing manual intervention, we help you save time, minimize errors, and reduce operational costs, allowing your team to focus on high-value strategic activities.",
        benefits: [
            "Significant time and cost savings.",
            "Reduced human error and increased consistency.",
            "Scalable operations without linear headcount growth.",
            "Improved data accuracy and reporting."
        ],
        features: [
            "Workflow Analysis & Design",
            "CRM & ERP Integration",
            "Chatbot & AI Implementation",
            "Custom Automation Scripts"
        ]
    },
    {
        id: 'content-writing',
        title: 'Content Writing',
        description: 'Good content should be simple and powerful enough to drive the point home. We will help you reach the right audience in the right way.',
        theme: 'light',
        longDescription: "Content is king, but context is queen. Our team of skilled writers creates compelling, SEO-friendly content that resonates with your audience and drives action. Whether it's website copy, blog posts, whitepapers, or email newsletters, we craft words that inform, entertain, and persuade.",
        benefits: [
            "Established thought leadership in your industry.",
            "Improved SEO rankings through quality content.",
            "Higher conversion rates with persuasive copy.",
            "Stronger connection with your audience."
        ],
        features: [
            "Website Copywriting",
            "Blog & Article Writing",
            "Technical Writing",
            "Email Marketing Content"
        ]
    }
];
}),
"[project]/app/services/[slug]/serviceDetail.module.css [app-rsc] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "backLink": "serviceDetail-module__2ukm0q__backLink",
  "benefitsCard": "serviceDetail-module__2ukm0q__benefitsCard",
  "checkIcon": "serviceDetail-module__2ukm0q__checkIcon",
  "contentSection": "serviceDetail-module__2ukm0q__contentSection",
  "ctaButton": "serviceDetail-module__2ukm0q__ctaButton",
  "dark": "serviceDetail-module__2ukm0q__dark",
  "description": "serviceDetail-module__2ukm0q__description",
  "featuresList": "serviceDetail-module__2ukm0q__featuresList",
  "grid": "serviceDetail-module__2ukm0q__grid",
  "heroSection": "serviceDetail-module__2ukm0q__heroSection",
  "light": "serviceDetail-module__2ukm0q__light",
  "lilac": "serviceDetail-module__2ukm0q__lilac",
  "longDescription": "serviceDetail-module__2ukm0q__longDescription",
  "mainContent": "serviceDetail-module__2ukm0q__mainContent",
  "pageContainer": "serviceDetail-module__2ukm0q__pageContainer",
  "sidebar": "serviceDetail-module__2ukm0q__sidebar",
  "title": "serviceDetail-module__2ukm0q__title",
});
}),
"[project]/app/services/[slug]/page.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ServiceDetail,
    "generateStaticParams",
    ()=>generateStaticParams
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$data$2f$services$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/data/services.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$api$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/next/dist/api/navigation.react-server.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/components/navigation.react-server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.react-server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Navbar$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/Navbar.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Footer$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/Footer.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$services$2f5b$slug$5d2f$serviceDetail$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/app/services/[slug]/serviceDetail.module.css [app-rsc] (css module)");
;
;
;
;
;
;
;
async function generateStaticParams() {
    return __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$data$2f$services$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["services"].map((service)=>({
            slug: service.id
        }));
}
async function ServiceDetail({ params }) {
    const { slug } = await params;
    const service = __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$data$2f$services$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["services"].find((s)=>s.id === slug);
    if (!service) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["notFound"])();
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$services$2f5b$slug$5d2f$serviceDetail$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].pageContainer,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$services$2f5b$slug$5d2f$serviceDetail$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].heroSection} ${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$services$2f5b$slug$5d2f$serviceDetail$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"][service.theme]}`,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "container",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                            href: "/services",
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$services$2f5b$slug$5d2f$serviceDetail$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].backLink,
                            children: "← Back to Services"
                        }, void 0, false, {
                            fileName: "[project]/app/services/[slug]/page.js",
                            lineNumber: 26,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$services$2f5b$slug$5d2f$serviceDetail$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].title,
                            children: service.title
                        }, void 0, false, {
                            fileName: "[project]/app/services/[slug]/page.js",
                            lineNumber: 27,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$services$2f5b$slug$5d2f$serviceDetail$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].description,
                            children: service.description
                        }, void 0, false, {
                            fileName: "[project]/app/services/[slug]/page.js",
                            lineNumber: 28,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/services/[slug]/page.js",
                    lineNumber: 25,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/services/[slug]/page.js",
                lineNumber: 24,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$services$2f5b$slug$5d2f$serviceDetail$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].contentSection,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "container",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$services$2f5b$slug$5d2f$serviceDetail$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].grid,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$services$2f5b$slug$5d2f$serviceDetail$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].mainContent,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        children: "Why Choose This Service?"
                                    }, void 0, false, {
                                        fileName: "[project]/app/services/[slug]/page.js",
                                        lineNumber: 36,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$services$2f5b$slug$5d2f$serviceDetail$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].longDescription,
                                        children: service.longDescription
                                    }, void 0, false, {
                                        fileName: "[project]/app/services/[slug]/page.js",
                                        lineNumber: 37,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$services$2f5b$slug$5d2f$serviceDetail$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].featuresList,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                children: "What We Offer"
                                            }, void 0, false, {
                                                fileName: "[project]/app/services/[slug]/page.js",
                                                lineNumber: 40,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                children: service.features.map((feature, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                        children: feature
                                                    }, index, false, {
                                                        fileName: "[project]/app/services/[slug]/page.js",
                                                        lineNumber: 43,
                                                        columnNumber: 41
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/app/services/[slug]/page.js",
                                                lineNumber: 41,
                                                columnNumber: 33
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/services/[slug]/page.js",
                                        lineNumber: 39,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/services/[slug]/page.js",
                                lineNumber: 35,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$services$2f5b$slug$5d2f$serviceDetail$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].sidebar,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$services$2f5b$slug$5d2f$serviceDetail$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].benefitsCard,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            children: "Key Benefits"
                                        }, void 0, false, {
                                            fileName: "[project]/app/services/[slug]/page.js",
                                            lineNumber: 51,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                            children: service.benefits.map((benefit, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$services$2f5b$slug$5d2f$serviceDetail$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].checkIcon,
                                                            children: "✓"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/services/[slug]/page.js",
                                                            lineNumber: 55,
                                                            columnNumber: 45
                                                        }, this),
                                                        benefit
                                                    ]
                                                }, index, true, {
                                                    fileName: "[project]/app/services/[slug]/page.js",
                                                    lineNumber: 54,
                                                    columnNumber: 41
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/app/services/[slug]/page.js",
                                            lineNumber: 52,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$services$2f5b$slug$5d2f$serviceDetail$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].ctaContainer,
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                                href: "/contact",
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$services$2f5b$slug$5d2f$serviceDetail$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].ctaButton,
                                                children: "Get Started"
                                            }, void 0, false, {
                                                fileName: "[project]/app/services/[slug]/page.js",
                                                lineNumber: 61,
                                                columnNumber: 37
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/services/[slug]/page.js",
                                            lineNumber: 60,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/services/[slug]/page.js",
                                    lineNumber: 50,
                                    columnNumber: 29
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/services/[slug]/page.js",
                                lineNumber: 49,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/services/[slug]/page.js",
                        lineNumber: 34,
                        columnNumber: 21
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/services/[slug]/page.js",
                    lineNumber: 33,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/services/[slug]/page.js",
                lineNumber: 32,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/services/[slug]/page.js",
        lineNumber: 23,
        columnNumber: 9
    }, this);
}
}),
"[project]/app/services/[slug]/page.js [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/app/services/[slug]/page.js [app-rsc] (ecmascript)"));
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__01eb6920._.js.map