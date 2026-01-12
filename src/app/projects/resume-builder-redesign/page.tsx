"use client";

import { useState, useEffect } from "react";
import Header from "@/components/Header";
import FixedFooter from "@/components/FixedFooter";
import ScrollIndicator from "@/components/ScrollIndicator";
import { Flag } from "@phosphor-icons/react";

// Constants
const SECTIONS = [
    "hero",
    "context-goal",
    "problem-discovery",
    "research",
    "design-approach",
    "wireframing",
    "visual-design",
    "final-design",
    "speeding-up",
    "final-design-video",
    "impact"
];

const ASSETS_PATH = "/assets/projects/resume-builder-redesign";
const PROJECT_TITLE = "Optimized the AI Resume Builder Flow";

// Reusable Components
const SectionWrapper = ({ id, children, className = "" }: { id: string; children: React.ReactNode; className?: string }) => (
    <section id={id} className={`px-6 md:px-40 py-8 md:py-10 ${className}`}>
        <div className="px-0 md:px-12 lg:px-20">{children}</div>
    </section>
);

const SectionTitle = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
    <h2 className={`font-helvetica font-[500] text-2xl md:text-3xl lg:text-4xl text-black-mantle mb-4 ${className}`}>
        {children}
    </h2>
);

const Paragraph = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
    <p className={`font-helvetica font-[300] text-base md:text-lg text-black leading-relaxed ${className}`}>
        {children}
    </p>
);

const ImageContainer = ({ src, alt, noPadding = false }: { src: string; alt: string; noPadding?: boolean }) => (
    <div className={noPadding ? "w-full overflow-hidden" : "px-6 md:px-16 lg:px-24 py-8 md:py-12"}>
        <div className="w-full overflow-hidden">
            <img src={`${ASSETS_PATH}/${src}`} alt={alt} className="w-full h-auto object-contain" />
        </div>
    </div>
);


const ChatQuote = ({ children }: { children: React.ReactNode }) => (
    <div className="flex items-start gap-4">
        <img src={`${ASSETS_PATH}/chat.png`} alt="User feedback quote icon" className="w-8 h-8 md:w-10 md:h-10 flex-shrink-0" />
        <p className="font-denton font-[400] italic text-base md:text-lg text-blue leading-relaxed">{children}</p>
    </div>
);

const InsightWithIcon = ({ icon, title, description, titleColor = "text-tangerine", iconAlt }: { icon: string; title: string; description: string; titleColor?: string; iconAlt?: string }) => (
    <div className="flex items-start gap-4">
        <img src={`${ASSETS_PATH}/${icon}`} alt={iconAlt || `${title} insight icon`} className="w-10 h-10 md:w-12 md:h-12 flex-shrink-0" />
        <Paragraph>
            <span className={`font-[500] ${titleColor}`}>{title}:</span> {description}
        </Paragraph>
    </div>
);

const FrictionCard = ({ title, children }: { title: string; children: React.ReactNode }) => (
    <div className="border border-tangerine p-6">
        <div className="inline-block bg-tangerine text-white px-3 py-1 mb-4">
            <span className="font-helvetica font-[500] text-sm">{title}</span>
        </div>
        <Paragraph>{children}</Paragraph>
    </div>
);

const ImpactMetric = ({ title, description, iconAlt }: { title: string; description: string; iconAlt?: string }) => (
    <div className="flex items-start gap-4">
        <img src={`${ASSETS_PATH}/target.png`} alt={iconAlt || `Impact metric: ${title}`} className="w-10 h-10 md:w-12 md:h-12 flex-shrink-0" />
        <div>
            <h3 className="font-helvetica font-[500] text-lg md:text-xl text-blue mb-2">{title}</h3>
            <Paragraph>{description}</Paragraph>
        </div>
    </div>
);

// Data
const userQuotes = [
    "The process feels endless. Why are fields like 'Score' and 'Month-wise Dates' in the education section mandatory? I don't remember the exact month I finished high school.",
    "I know I saw a blue resume on your landing page, but I've been clicking around for 10 minutes and can't find how to change the color or the layout. I just gave up.",
    "It's honestly tedious. I tried copying my summary from my old resume, but the formatting broke instantly. I spent more time fixing spacing errors than actually writing.",
    "None of these templates resonate with my profile. They are too stiff and corporate. I need something modern that highlights my GitHub links and portfolio.",
    "I wanted to add a section for 'Volunteering' that wasn't in your default list. I tried using the Custom Section tool, but it's too limited—I couldn't format the dates or add bullets properly, so I just left it out."
];

const quantitativeInsights = [
    { icon: "clicks.png", title: "Rage clicks", description: "Heatmaps showed intense clicking on static elements, proving users were trying to edit the preview directly but couldn't.", iconAlt: "Mouse cursor icon representing rage click analytics" },
    { icon: "zoom.png", title: "The Zoom struggle", description: "Session recordings showed mobile users repeatedly pinching-and-zooming just to read the text, confirming our layout was broken for small screens.", iconAlt: "Magnifying glass icon representing mobile zoom usability issues" },
    { icon: "exit.png", title: "Drop-offs", description: "We saw a massive drop-off rate after the 10-minute mark, correlating with the \"Form Fatigue\" users described.", iconAlt: "Exit door icon representing user drop-off rate" },
    { icon: "hourglass.png", title: "Effort-to-Success Gap", description: "Users spent an average of 2.5 to 3 hours on the builder, yet the final export rate was alarmingly low.", iconAlt: "Hourglass icon representing time spent vs success rate" }
];

const personaInsights = [
    { icon: "ca-user.png", title: "The Legacy User (CA)", description: "Views the resume as a \"Ledger.\" They need rigid, dense data tables for Articleship details. If we simplify too much, the tool becomes useless to them.", iconAlt: "Chartered Accountant user persona icon" },
    { icon: "creative-user.png", title: "The New User (Engineer/MBA)", description: "Views the resume as a \"Portfolio.\" They need flexible, visual blocks for GitHub links and Projects. If we keep the rigid CA structure, the tool feels ancient to them.", iconAlt: "Engineer and MBA user persona icon" },
    { icon: "mobile-user.png", title: "The Mobile Constraint", description: "Both users are \"Mobile Sprinters.\" They expect the ease of Instagram but the formatting power of Word.", iconAlt: "Mobile user persona icon representing smartphone-first users" }
];

const frictionPoints = [
    { title: "High Effort, Low Success", description: "There was a critical mismatch between time spent and results. Users were investing 2.5 to 3 hours on the platform, yet a high percentage failed to reach the \"Export\" step. They were losing the battle against the interface." },
    { title: "Broken Mobile Experience", description: "With 80% of traffic on mobile, the legacy desktop interface became a blocker. The reliance on tiny touch targets and rigid templates that broke on small screens made \"quick edits\" functionally impossible." },
    { title: "Rigid & Inflexible", description: "While our standard forms worked for CAs, our new diverse audience (Engineers, MBAs) required unique column structures (e.g., Project Links, Portfolio details) that weren't there. The Custom Section was too limited to support these needs, and the Templates failed." },
    { title: "Hidden Features", description: "High-value features (e.g. Resume Scoring, Color Customization) existed but were invisible. Users churned because they perceived the product as \"basic,\" not realizing the power features were buried at the bottom of the scroll." }
];

const impactMetrics = [
    { title: "~33% Faster Creation", description: "The combination of AI Import and Accordion navigation drastically reduced the manual friction, bringing the average session time down to a healthy benchmark.", iconAlt: "Target icon representing 33% faster resume creation metric" },
    { title: "~18% Less Abandonment", description: "The mobile-first navigation and \"save-as-you-go\" accordions stopped users from rage-quitting. We saw a significant increase in users reaching the \"Preview\" stage on mobile devices.", iconAlt: "Target icon representing 18% reduction in user abandonment" },
    { title: "High Feature Adoption", description: "By moving Color and Layout tools upstream (into the Template & Preview tabs), users actually started using them. Resume variety exploded, proving users wanted to customize but previously couldn't find the buttons.", iconAlt: "Target icon representing increased feature adoption rate" }
];


export default function ResumeBuilderRedesignPage() {
    const [currentSection, setCurrentSection] = useState(0);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

    const handleFeedbackSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus("idle");

        const form = e.currentTarget;
        const formData = new FormData(form);
        const message = formData.get("message") as string;

        try {
            const response = await fetch("/api/project-feedback", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ projectTitle: PROJECT_TITLE, message }),
            });
            setSubmitStatus(response.ok ? "success" : "error");
            if (response.ok) form.reset();
        } catch {
            setSubmitStatus("error");
        } finally {
            setIsSubmitting(false);
        }
    };

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY + window.innerHeight / 3;
            for (let i = SECTIONS.length - 1; i >= 0; i--) {
                const section = document.getElementById(`section-${i}`);
                if (section && section.offsetTop <= scrollPosition) {
                    setCurrentSection(i);
                    break;
                }
            }
        };
        window.addEventListener("scroll", handleScroll);
        handleScroll();
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            <Header isInHero={false} currentSection={currentSection} hideInFooter={false} />
            <ScrollIndicator sections={SECTIONS.length} currentSection={currentSection} isInHero={false} />

            <main className="min-h-screen bg-white pb-24">
                {/* Hero Section */}
                <section id="section-0" className="px-6 md:px-40 pt-24 md:pt-32 pb-10">
                    <h1 className="font-helvetica font-[500] text-3xl md:text-5xl lg:text-[56px] leading-tight mb-8 md:mb-12 text-black">
                        Optimized the AI<br />Resume Builder Flow
                    </h1>
                    <div className="w-full overflow-hidden mb-8 md:mb-12">
                        <img src={`${ASSETS_PATH}/hero-image.png`} alt="AI Resume Builder redesign showing mobile-first interface with streamlined navigation and modern template options" className="w-full h-auto object-cover" />
                    </div>
                    <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
                        <p className="font-helvetica font-[400] text-xl md:text-2xl text-black max-w-xl leading-tight">
                            How we transformed a desktop-heavy<br />tool into a mobile-first career accelerant.
                        </p>
                        <a
                            href="https://www.figma.com/proto/lviArdn0yRvcAHKcNGWEHq/CA-Monk-Designs?page-id=3001%3A7244&node-id=3001-8185&p=f&viewport=374%2C77%2C0.04&t=Y0XIPPmex486cVyF-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=3001%3A9928"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center px-6 py-3 bg-[#4ADE80] hover:bg-[#3FCF70] text-black font-helvetica font-[500] text-base transition-colors"
                        >
                            View Prototype
                        </a>
                    </div>
                </section>

                {/* Context & Goal Section */}
                <SectionWrapper id="section-1">
                    <Paragraph className="mb-6">
                        CA Monk started as a niche platform for Chartered Accountants. Our original resume builder was a reflection of that audience: dense, detailed, and built for desktop screens.
                    </Paragraph>
                    <Paragraph className="mb-10 md:mb-12">
                        But as we scaled our company to serve a general audience (Engineers, MBAs, Graduates), our legacy tool became a major bottleneck. We realized that what worked for a meticulous accountant on a laptop was completely failing for a fresh graduate on a smartphone.
                    </Paragraph>
                    <div className="mb-12 md:mb-16">
                        <div className="inline-flex items-center gap-2 bg-green text-white px-3 py-1.5 mb-6">
                            <Flag size={24} weight="fill" />
                            <span className="font-helvetica font-[500] text-lg">The Goal</span>
                        </div>
                        <blockquote className="border-t border-b border-gray-300 py-6 md:py-8 px-6 md:px-8">
                            <p className="font-denton font-[400] italic text-xl md:text-2xl lg:text-[28px] text-black-mantle leading-snug">
                                To reduce high abandonment rates and user frustration by redesigning the resume creation workflow from a 3-hour desktop task into a streamlined, mobile-responsive experience.
                            </p>
                        </blockquote>
                    </div>
                </SectionWrapper>


                {/* Problem Discovery Section */}
                <SectionWrapper id="section-2">
                    <SectionTitle>From Noise to Insight</SectionTitle>
                    <Paragraph className="mb-6">We didn't just guess that the design was broken; the users told us.</Paragraph>
                    <Paragraph className="mb-6">
                        As we expanded to a diverse audience (Engineers, MBAs), support tickets spiked. Unlike our legacy CA users, these <span className="font-[500]">new groups found the tool rigid and the templates irrelevant</span>.
                    </Paragraph>
                    <Paragraph className="mb-6">
                        <span className="font-[500]">Feedback was blunt:</span> the input forms were endless, and the mobile experience was broken, creating friction instead of resumes.
                    </Paragraph>
                    <Paragraph className="mb-8">
                        To find the root cause, we got on calls with users. We asked them to walk us through their struggle, and their feedback revealed specific pain points:
                    </Paragraph>

                    <div className="px-6 md:px-16 lg:px-24 py-8 md:py-12 space-y-6">
                        {userQuotes.map((quote, i) => <ChatQuote key={i}>"{quote}"</ChatQuote>)}
                    </div>

                    <Paragraph className="mb-8 mt-12">
                        We took these qualitative insights and looked for quantitative proof using Zoho PageSense. The data confirmed what users told us:
                    </Paragraph>

                    <div className="px-6 md:px-16 lg:px-24 py-8 md:py-12 space-y-6">
                        {quantitativeInsights.map((insight, i) => <InsightWithIcon key={i} {...insight} />)}
                    </div>
                </SectionWrapper>

                {/* Research Section - The Diagnosis */}
                <SectionWrapper id="section-3">
                    <SectionTitle>The Diagnosis</SectionTitle>
                    <Paragraph className="mb-8">Armed with this data, we audited the interface and mapped the critical flaws:</Paragraph>
                    <div className="px-6 md:px-16 lg:px-24 py-8 md:py-12 space-y-8 md:space-y-12">
                        <ImageContainer src="problem1.png" alt="UX audit showing cluttered desktop interface with overwhelming form fields and poor information hierarchy" noPadding />
                        <ImageContainer src="problem2.png" alt="UX audit highlighting broken mobile experience with tiny touch targets and unresponsive layout" noPadding />
                        <ImageContainer src="problem3.png" alt="UX audit revealing hidden customization features buried at bottom of long scrolling form" noPadding />
                    </div>
                </SectionWrapper>

                {/* Design Approach Section - The Persona Paradox */}
                <SectionWrapper id="section-4">
                    <SectionTitle>The Persona Paradox</SectionTitle>
                    <Paragraph className="mb-8">
                        The interviews revealed a fundamental conflict. We weren't just designing for "users"; we were designing for opposing mental models trying to use the same tool.
                    </Paragraph>
                    <div className="px-6 md:px-16 lg:px-24 py-8 md:py-12 space-y-6">
                        {personaInsights.map((insight, i) => <InsightWithIcon key={i} {...insight} titleColor="text-blue" />)}
                    </div>
                    <Paragraph className="mt-8">
                        We realized we couldn't serve both by showing everything by default. We had to make a <span className="font-[500]">trade-off:</span> Prioritize Modularity over Visibility. Instead of exposing every possible field at once, we decided to hide niche sections by default and let users "toggle" the blocks they need. This was the only way to balance depth for CAs with simplicity for General users.
                    </Paragraph>
                </SectionWrapper>


                {/* Wireframing Section - A System at Odds */}
                <SectionWrapper id="section-5">
                    <SectionTitle>A System at Odds with its Users</SectionTitle>
                    <Paragraph className="mb-8">
                        Our investigation proved that the issue wasn't just "bad UI"; it was a fundamental misalignment between the tool's architecture and user intent. We identified four core friction points:
                    </Paragraph>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-6 md:px-16 lg:px-24 py-8 md:py-12">
                        {frictionPoints.map((point, i) => <FrictionCard key={i} title={point.title}>{point.description}</FrictionCard>)}
                    </div>
                </SectionWrapper>

                {/* Visual Design Section - Flipping the Flow */}
                <SectionWrapper id="section-6">
                    <SectionTitle>Flipping the Flow</SectionTitle>
                    <Paragraph className="mb-6">
                        Before fixing individual screens, we had to fix the foundation. Our research revealed that users don't create resumes linearly; they want to visualize the outcome before committing to the effort.
                    </Paragraph>
                    <Paragraph className="mb-8">
                        The legacy tool forced a <span className="font-[500] text-tangerine">Data-First</span> approach, but our users wanted a <span className="font-[500] text-blue">Visual-First</span> interaction. They wanted to define the "vibe" (Template & Color) early to ensure their content would fit the design.
                    </Paragraph>

                    <ImageContainer src="flow-redesign.png" alt="Comparison diagram showing old data-first linear flow versus new visual-first user journey with template selection upfront" />

                    <Paragraph className="mb-8">Our desktop version used a spacious three-panel layout. Translating this to mobile was our first hurdle.</Paragraph>
                    <ImageContainer src="design1.png" alt="Mobile navigation wireframes exploring bottom tab bar, hamburger menu, and swipe gesture patterns" />

                    <Paragraph className="mb-8">A resume requires massive data entry. Showing all fields at once caused "Form Fatigue."</Paragraph>
                    <ImageContainer src="design2.png" alt="Accordion form design reducing cognitive load by collapsing sections and showing progress indicators" />

                    <Paragraph className="mb-8 mt-12">
                        Critical features like Layout Reordering, Color Picker, and Export were scattered or buried at the bottom of the long scrolling form. Users often finished writing but couldn't find the ways to customize their resumes. We also struggled with where to put the "Reorder Sections" tool.
                    </Paragraph>
                    <ImageContainer src="design3.png" alt="Drag-and-drop section reordering interface allowing users to customize resume layout structure" />
                    <ImageContainer src="design4.png" alt="Split view showing template selection mode and live preview mode with real-time resume rendering" />

                    <Paragraph className="mb-8 mt-12">
                        A "Standard" resume doesn't exist. Our legacy templates were text-heavy tables perfect for CAs but "stiff and corporate" for Engineers or Marketers who needed white space and modern typography.
                    </Paragraph>
                    <ImageContainer src="design5.png" alt="Expanded template library with modern, minimal, and professional designs for different industries and roles" />
                    <Paragraph className="mt-4">We expanded our library to target specific visual needs, moving away from a "One-Size-Fits-All" approach.</Paragraph>
                </SectionWrapper>


                {/* Designing for Data Section */}
                <SectionWrapper id="section-7">
                    <SectionTitle>Designing for Data</SectionTitle>
                    <Paragraph className="mb-6">Designing a Resume Builder isn't just drawing rectangles; it's understanding the Hiring Algorithm.</Paragraph>
                    <Paragraph className="mb-8">
                        We didn't randomly decide which fields were mandatory. We conducted a deep dive into how <span className="font-[500]">ATS (Applicant Tracking Systems)</span> parse resumes and interviewed HR managers to identify common rejection triggers.
                    </Paragraph>
                    <ImageContainer src="data1.png" alt="Real-time ATS validation layer showing field-level feedback for resume optimization and keyword matching" />
                    <Paragraph className="mb-8 mt-12">To make this validation work instantly without server lag, I designed the UI components to map directly to a standardized JSON Resume Schema.</Paragraph>
                    <ImageContainer src="data2.png" alt="Technical diagram mapping UI form components to standardized JSON Resume Schema for instant validation" />
                </SectionWrapper>

                {/* Speeding It Up Section */}
                <SectionWrapper id="section-8">
                    <SectionTitle>Speeding It Up</SectionTitle>
                    <Paragraph className="mb-8">
                        To truly solve the "High Effort" problem, we needed to do more than just fix the UI buttons. We wanted to minimize the manual effort required to go from a <span className="font-[500]">Blank Page → Finished Profile</span>.
                    </Paragraph>
                    <ImageContainer src="ai1.png" alt="AI-powered features including LinkedIn import, PDF parsing, and smart content suggestions for faster resume creation" />
                </SectionWrapper>

                {/* Final Design Video Section */}
                <SectionWrapper id="section-9">
                    <SectionTitle className="mb-8">And the final design</SectionTitle>
                    <div className="w-full py-12 md:py-16 flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #E8E4F0 0%, #F5F5F5 50%, #FCF5F0 100%)' }}>
                        <div className="w-auto max-w-md overflow-hidden">
                            <video src={`${ASSETS_PATH}/Prototype_Resume_builder.mp4`} autoPlay loop muted playsInline className="h-auto w-full object-contain" />
                        </div>
                    </div>
                </SectionWrapper>

                {/* Impact Section */}
                <SectionWrapper id="section-10">
                    <SectionTitle>The Impact</SectionTitle>
                    <Paragraph className="mb-10">By shifting from a "Data Entry" tool to a "Smart Assistant," the impact was immediate:</Paragraph>
                    <div className="px-6 md:px-16 lg:px-24 py-8 md:py-12 space-y-10">
                        {impactMetrics.map((metric, i) => <ImpactMetric key={i} {...metric} />)}
                    </div>
                </SectionWrapper>


                {/* Anonymous Feedback Section */}
                <section className="px-6 md:px-40 py-12 md:py-16">
                    <div className="max-w-2xl mx-auto">
                        <h3 className="font-helvetica text-2xl md:text-5xl text-black text-center mb-12 md:mb-16">
                            Share Your Thoughts
                        </h3>
                        <form onSubmit={handleFeedbackSubmit} className="space-y-6 md:space-y-8" aria-label="Feedback form">
                            <textarea
                                name="message"
                                placeholder="Your feedback *"
                                rows={4}
                                required
                                aria-label="Your anonymous feedback"
                                className="w-full px-0 py-3 border-0 border-b border-black-mantle font-helvetica text-sm md:text-base text-black focus:outline-none focus:border-black bg-transparent resize-none"
                            />
                            {submitStatus === "success" && (
                                <p className="text-center text-green-mantle font-helvetica text-sm md:text-base">Thank you for your feedback!</p>
                            )}
                            {submitStatus === "error" && (
                                <p className="text-center text-tangerine font-helvetica text-sm md:text-base">Something went wrong. Please try again.</p>
                            )}
                            <div className="text-center pt-6 md:pt-8">
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="cursor-pointer font-helvetica font-[500] text-black text-base md:text-xl relative inline-block pb-1 disabled:opacity-50 transition-all hover:after:w-full after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[1px] after:bg-black after:transition-all after:duration-300 after:w-0"
                                >
                                    {isSubmitting ? "Sending..." : "Send Anonymously"}
                                </button>
                            </div>
                        </form>
                    </div>
                </section>
            </main>

            <FixedFooter isInHero={false} hideInFooter={false} />
        </>
    );
}
