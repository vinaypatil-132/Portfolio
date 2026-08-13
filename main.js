var audio = document.getElementById("audioPlayer"),
    loader = document.getElementById("preloader");

function settingtoggle() {
    document.getElementById("setting-container").classList.toggle("settingactivate");
    document.getElementById("visualmodetogglebuttoncontainer").classList.toggle("visualmodeshow");
    document.getElementById("soundtogglebuttoncontainer").classList.toggle("soundmodeshow");
}

function playpause() {
    !1 == document.getElementById("switchforsound").checked ? audio.pause() : audio.play();
}

function visualmode() {
    document.body.classList.toggle("light-mode");
    document.querySelectorAll(".needtobeinvert").forEach(function (e) {
        e.classList.toggle("invertapplied");
    });
}

window.addEventListener("load", function () {
    loader.style.display = "none";
    document.querySelector(".hey").classList.add("popup");
});

let emptyArea = document.getElementById("emptyarea"),
    mobileTogglemenu = document.getElementById("mobiletogglemenu");

function hamburgerMenu() {
    document.body.classList.toggle("stopscrolling");
    document.getElementById("mobiletogglemenu").classList.toggle("show-toggle-menu");
    document.getElementById("burger-bar1").classList.toggle("hamburger-animation1");
    document.getElementById("burger-bar2").classList.toggle("hamburger-animation2");
    document.getElementById("burger-bar3").classList.toggle("hamburger-animation3");
}

function hidemenubyli() {
    document.body.classList.toggle("stopscrolling");
    document.getElementById("mobiletogglemenu").classList.remove("show-toggle-menu");
    document.getElementById("burger-bar1").classList.remove("hamburger-animation1");
    document.getElementById("burger-bar2").classList.remove("hamburger-animation2");
    document.getElementById("burger-bar3").classList.remove("hamburger-animation3");
}

const sections = document.querySelectorAll("section"),
    navLi = document.querySelectorAll(".navbar .navbar-tabs .navbar-tabs-ul li"),
    mobilenavLi = document.querySelectorAll(".mobiletogglemenu .mobile-navbar-tabs-ul li");

window.addEventListener("scroll", () => {
    let e = "";
    sections.forEach(t => {
        let o = t.offsetTop;
        t.clientHeight, pageYOffset >= o - 200 && (e = t.getAttribute("id"));
    });
    mobilenavLi.forEach(t => {
        t.classList.remove("activeThismobiletab");
        t.classList.contains(e) && t.classList.add("activeThismobiletab");
    });
    navLi.forEach(t => {
        t.classList.remove("activeThistab");
        t.classList.contains(e) && t.classList.add("activeThistab");
    });
});

console.log("%c Designed and Developed by Vinay Patil ", "background-image: linear-gradient(90deg,#8000ff,#6bc5f8); color: white;font-weight:900;font-size:1rem; padding:20px;");

let mybutton = document.getElementById("backtotopbutton");

function scrollFunction() {
    document.body.scrollTop > 400 || document.documentElement.scrollTop > 400 ? mybutton.style.display = "block" : mybutton.style.display = "none";
}

function scrolltoTopfunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

window.onscroll = function () {
    scrollFunction();
};

document.addEventListener("contextmenu", function (e) {
    "IMG" === e.target.nodeName && e.preventDefault();
}, !1);

let Pupils = document.getElementsByClassName("footer-pupil"),
    pupilsArr = Array.from(Pupils),
    pupilStartPoint = -10,
    pupilRangeX = 20,
    pupilRangeY = 15,
    mouseXStartPoint = 0,
    mouseXEndPoint = window.innerWidth,
    currentXPosition = 0,
    fracXValue = 0,
    mouseYEndPoint = window.innerHeight,
    currentYPosition = 0,
    fracYValue = 0,
    mouseXRange = mouseXEndPoint - mouseXStartPoint;

const mouseMove = e => {
    fracXValue = (currentXPosition = e.clientX - mouseXStartPoint) / mouseXRange;
    fracYValue = (currentYPosition = e.clientY) / mouseYEndPoint;
    let t = pupilStartPoint + fracXValue * pupilRangeX,
        o = pupilStartPoint + fracYValue * pupilRangeY;
    pupilsArr.forEach(e => {
        e.style.transform = `translate(${t}px, ${o}px)`;
    });
};

const windowResize = e => {
    mouseXEndPoint = window.innerWidth;
    mouseYEndPoint = window.innerHeight;
    mouseXRange = mouseXEndPoint - mouseXStartPoint;
};

window.addEventListener("mousemove", mouseMove);
window.addEventListener("resize", windowResize);

// Home navigation scroll fix - scroll to absolute top of the page smoothly
document.querySelectorAll('a[href="#home"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
        history.pushState(null, null, '#home');
    });
});

// ==========================================
// Project Case Studies Data & Modal Controller
// ==========================================
const PROJECT_CASE_STUDIES = {
    serverdeck: {
        slug: "serverdeck",
        title: "ServerDeck",
        favicon: "src/png/main-favicon.png",
        image: "src/webp/serverdeck.png",
        imageAlt: "ServerDeck platform preview",
        overview: "A server monitoring and management platform for monitoring system resources, services, applications, logs, and network activity.",
        capabilities: [
            "System resources monitoring (CPU, memory, disk utilization, and load metrics)",
            "Service and background process monitoring and management",
            "Application health and status tracking",
            "Real-time system and service log monitoring",
            "Network activity and connection inspection"
        ],
        technologies: ["Rust", "Next.js", "TypeScript", "Linux", "Termux", "Tailscale"],
        repoStatus: "Source Code: Private Repository",
        repoDesc: "The source code for this project is hosted in a private repository. Technical architecture, design decisions, and implementation details can be discussed during interviews."
    },
    lifeops: {
        slug: "lifeops",
        title: "LifeOps",
        favicon: "src/png/main-favicon.png",
        image: "src/webp/lifeops.png",
        imageAlt: "LifeOps App preview",
        overview: "A full-stack personal operating system designed to help users manage notes, projects, tasks, architecture documents, and learning roadmaps from a single workspace.",
        capabilities: [
            "User registration, login, session management, and protected routes",
            "Notes, categories, and tags management",
            "Project planning, goal tracking, status management, and progress monitoring",
            "Task management with priorities, status tracking, project assignment, and filtering",
            "Architecture documentation, diagram storage, and project linking",
            "Learning roadmap tracking with progress and status monitoring",
            "Dashboard with statistics, activity tracking, and quick workspace access",
            "Global search with cross-module results and command center experience"
        ],
        technologies: [
            "Next.js 16",
            "React",
            "TypeScript",
            "Next.js App Router",
            "NextAuth",
            "PostgreSQL",
            "Prisma ORM",
            "Docker",
            "Docker Compose",
            "GitHub Actions",
            "Playwright E2E Testing",
            "Structured Logging",
            "Health Checks"
        ],
        repoStatus: "Source Code: Public Repository",
        repoDesc: "The source code for this project is publicly available on GitHub. The project includes authentication, PostgreSQL with Prisma, Docker, CI/CD with GitHub Actions, Playwright end-to-end testing, structured logging, and production-readiness features."
    },
    saptagiri: {
        slug: "saptagiri",
        title: "Saptagiri Computer Training Centre",
        favicon: "src/png/main-favicon.png",
        image: "src/webp/saptagiri.png",
        imageAlt: "Saptagiri Computer Training Centre preview",
        overview: "A full-stack training centre platform built for Saptagiri Computer Training Centre, providing a digital platform for presenting computer courses, student access, and institute information.",
        capabilities: [
            "Public-facing website for Saptagiri Computer Training Centre",
            "Computer course catalogue with course details, duration, mode, fees, and requirements",
            "Course enrollment entry points for prospective students",
            "Separate authentication access for administrators and students",
            "Institute information including programmes, features, contact details, and student-focused content",
            "Contact and enquiry interface for prospective students",
            "Responsive web experience for accessing the training centre platform across devices"
        ],
        technologies: ["Next.js", "PostgreSQL", "Authentication", "GitHub", "Git", "Jenkins", "Docker", "Vercel"],
        repoStatus: "Source Code: Private Repository",
        repoDesc: "This was a client project and the source code is not publicly available. The deployed website remains live and can be reviewed as part of the project case study."
    },
    testing: {
        slug: "nayara-ai",
        title: "Testing (NAYARAi)",
        favicon: "src/png/ailogo.png",
        image: "src/webp/safetext.png",
        imageAlt: "NAYARAi security preview",
        overview: "An AI-driven cybersecurity scanner utilizing custom threat rules for scanning, identifying, and flagging malicious binaries and code patterns.",
        capabilities: [
            "AI-driven scanning engine for analyzing suspicious files and binaries",
            "Custom YARA rule definitions for threat pattern matching",
            "Automated detection and flagging of malicious code patterns and executables",
            "Bash automation workflows and malware analysis pipeline integration"
        ],
        technologies: ["Python", "Yara Rules", "Bash Scripting", "Malware Analysis"],
        repoStatus: "Source Code: Private Repository",
        repoDesc: "The source code for this security research scanner is maintained in a private repository. Threat detection models, rule matching mechanics, and automation scripts can be discussed during technical interviews."
    },
    deardays: {
        slug: "deardays",
        title: "DearDays",
        favicon: "src/svg/folder.svg",
        faviconInvert: true,
        image: "src/webp/deardays.png",
        imageAlt: "DearDays App preview",
        overview: "A secure, private memory-journaling platform featuring calendar integrations, photo uploads, and client-side database persistence.",
        capabilities: [
            "Private memory journaling with secure local entry creation",
            "Interactive calendar integration for organizing memories chronologically",
            "Photo upload management for attaching images to journal memories",
            "Client-side database persistence utilizing browser LocalStorage"
        ],
        technologies: ["HTML5", "CSS3", "JavaScript (ES6+)", "LocalStorage"],
        repoStatus: "Source Code: Private Repository",
        repoDesc: "The source code for this personal journaling application is in a private repository. Client-side storage design, calendar integration, and UI implementation can be discussed during interviews."
    },
    lifeops: {
        slug: "lifeops",
        title: "LifeOps",
        favicon: "src/svg/folder.svg",
        faviconInvert: true,
        image: "src/webp/lifeops.png",
        imageAlt: "LifeOps App preview",
        overview: "A personal operations and productivity dashboard designed to manage schedules, track habits, and display graphical progress metrics.",
        capabilities: [
            "Personal operations and productivity management dashboard",
            "Schedule planning and task tracking workflow",
            "Daily habit logging and streak monitoring",
            "Graphical progress metrics and interactive charts using Chart.js"
        ],
        technologies: ["Python", "Flask", "SQLite", "JavaScript", "Chart.js"],
        repoStatus: "Source Code: Private Repository",
        repoDesc: "The source code for this productivity and habit operations platform is hosted in a private repository. Backend architecture, database schema, and dashboard metrics visualization can be discussed during interviews."
    }
};

function openCaseStudy(projectId) {
    var data = PROJECT_CASE_STUDIES[projectId];
    if (!data) return;

    var modal = document.getElementById("case-study-modal");
    if (!modal) return;

    var slugEl = document.getElementById("cs-prompt-slug");
    if (slugEl) slugEl.textContent = data.slug;

    var faviconEl = document.getElementById("cs-favicon");
    if (faviconEl) {
        faviconEl.src = data.favicon;
        faviconEl.alt = data.title + " icon";
        if (data.faviconInvert) {
            faviconEl.style.filter = "invert(1)";
        } else {
            faviconEl.style.filter = "none";
        }
    }

    var titleEl = document.getElementById("cs-title");
    if (titleEl) titleEl.textContent = data.title;

    var repoTextEl = document.getElementById("cs-repo-text");
    if (repoTextEl) repoTextEl.textContent = data.repoStatus;

    var overviewEl = document.getElementById("cs-overview");
    if (overviewEl) overviewEl.textContent = data.overview;

    var capListEl = document.getElementById("cs-capabilities");
    if (capListEl) {
        capListEl.innerHTML = "";
        data.capabilities.forEach(function (cap) {
            var li = document.createElement("li");
            li.textContent = cap;
            capListEl.appendChild(li);
        });
    }

    var techGridEl = document.getElementById("cs-tech-tags");
    if (techGridEl) {
        techGridEl.innerHTML = "";
        data.technologies.forEach(function (tech) {
            var span = document.createElement("span");
            span.className = "case-study-tech-pill";
            span.textContent = tech;
            techGridEl.appendChild(span);
        });
    }

    var imgEl = document.getElementById("cs-preview-img");
    if (imgEl) {
        imgEl.src = data.image;
        imgEl.alt = data.imageAlt || (data.title + " preview");
    }

    var repoHeadingEl = document.getElementById("cs-repo-box-heading");
    if (repoHeadingEl) repoHeadingEl.textContent = data.repoStatus;
    var repoDescEl = document.getElementById("cs-repo-box-desc");
    if (repoDescEl) repoDescEl.textContent = data.repoDesc;

    modal.classList.add("case-study-modal-open");
    modal.setAttribute("aria-hidden", "false");
    document.body.classList.add("stopscrolling");
}

function closeCaseStudy() {
    var modal = document.getElementById("case-study-modal");
    if (!modal) return;
    modal.classList.remove("case-study-modal-open");
    modal.setAttribute("aria-hidden", "true");

    var mobileMenu = document.getElementById("mobiletogglemenu");
    if (!mobileMenu || !mobileMenu.classList.contains("show-toggle-menu")) {
        document.body.classList.remove("stopscrolling");
    }
}

document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" || e.key === "Esc") {
        closeCaseStudy();
    }
});