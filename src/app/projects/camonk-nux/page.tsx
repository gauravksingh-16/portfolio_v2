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
    "structural-issues",
    "competitive-research",
    "choosing-path",
    "wireframing",
    "visual-overhaul",
    "final-design",
    "subtle-delights",
    "impact"
];

const ASSETS_PATH = "/assets/projects/camonk-nux";

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

const ImageContainer = ({ src, alt, className = "", noPadding = false }: { src: string; alt: string; className?: string; noPadding?: boolean }) => (
    <div className={noPadding ? "w-full overflow-hidden" : "px-6 md:px-16 lg:px-24 py-8 md:py-12"}>
        <div className="w-full overflow-hidden">
            <img src={`${ASSETS_PATH}/${src}`} alt={alt} className={`w-full h-auto object-contain ${className}`} />
        </div>
    </div>
);

const InsightItem = ({ icon, title, description, iconAlt }: { icon: string; title: string; description: string; iconAlt?: string }) => (
    <div className="flex items-start gap-4">
        <img src={`${ASSETS_PATH}/${icon}`} alt={iconAlt || `${title} insight icon`} className="w-10 h-10 md:w-12 md:h-12 flex-shrink-0" />
        <Paragraph>
            <span className="font-[500] text-tangerine">{title}:</span> {description}
        </Paragraph>
    </div>
);

const QuoteItem = ({ quote, explanation }: { quote: string; explanation: string }) => (
    <div>
        <div className="flex items-start gap-4 mb-3">
            <img src={`${ASSETS_PATH}/chat.png`} alt="User interview quote icon" className="w-8 h-8 md:w-10 md:h-10 flex-shrink-0" />
            <p className="font-denton font-[400] italic text-base md:text-lg text-blue leading-relaxed">"{quote}"</p>
        </div>
        <Paragraph className="ml-12 md:ml-14">{explanation}</Paragraph>
    </div>
);

const QuestionItem = ({ question }: { question: string }) => (
    <div className="flex items-center gap-4">
        <img src={`${ASSETS_PATH}/question.png`} alt="Research question icon" className="w-8 h-8 md:w-10 md:h-10 flex-shrink-0" />
        <p className="font-denton font-[400] italic text-base md:text-lg text-black">{question}</p>
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
const userInsights = [
    { icon: "exit.png", title: "65% Drop-off at OTP", description: "The majority of users abandoned the flow the moment we asked for a phone number.", iconAlt: "Exit icon representing 65% user drop-off at OTP verification step" },
    { icon: "confused.png", title: "High Bounce Rate on Profile", description: "Non-CA users were reaching the profile page, seeing unrelated details, and bouncing off, killing conversion rates.", iconAlt: "Confused user icon representing high bounce rate on profile page" }
];

const userQuotes = [
    { quote: "I just wanted to check my Resume Score once. I shouldn't have to share my phone number and verify an OTP just for that. I'd rather use a free tool that doesn't ask for data.", explanation: 'Users felt the "Cost" (Data Privacy) outweighed the "Value" (One Resume Score). We needed to tip the scales back in our favor.' },
    { quote: "Wait, I get 50 coins for signing up and another 50 on profile completion? I didn't see that mentioned anywhere.", explanation: "We were actually paying users to sign up (via Monk Coins), but the UI was so silent about it that users treated it like a standard data-grab." },
    { quote: "I am an MBA student. The form asked for a 'CA related details' to complete the profile. I thought this platform wasn't for me, so I left.", explanation: "Our rigid database fields were actively turning away our new target audience." }
];

const researchQuestions = [
    "How do they handle friction?",
    "When do they ask for the phone number?",
    "How do they visualize value?"
];

const impactMetrics = [
    { title: "18% Reduction in Sign-up Abandonment", description: 'By surfacing the "50 Coin Reward" before the high-friction OTP step, we successfully shifted user perception. Users stopped seeing the phone number request as a data-grab and started seeing it as a necessary step to "secure their wallet."', iconAlt: "Target icon representing 18% reduction in sign-up abandonment" },
    { title: "28% Uplift in Profile Completion", description: "The combination of the Dashboard Nudge and the 7-Day Retention Modal created a powerful loop. Users who initially skipped the profile setup were successfully recaptured within the first week, driving higher activation rates.", iconAlt: "Target icon representing 28% increase in profile completion rate" },
];

const designSections = [
    { text: 'We needed a way to tell users: <span class="font-denton font-[400] italic text-blue">"If you finish this form, you get a reward."</span>', image: "design1.png", imageAlt: "Sign-up screen design showing coin reward incentive prominently displayed before OTP verification" },
    { text: 'When a user lands on the dashboard for the first time, we don\'t just drop them into a complex UI. We greet them with a <span class="font-[500]">Reward Modal</span>.', image: "design2.png", imageAlt: "Welcome reward modal design showing 50 Monk Coins bonus for new user sign-up completion" },
    { text: "Instead of forcing users to complete their profile immediately after OTP, we let them land on the Dashboard.", image: "design3.png", imageAlt: "Dashboard-first approach allowing users to explore features before completing profile setup" },
    { text: "I didn't just design for the first session; I designed for the drop-off.", image: "design4.png", imageAlt: "7-day retention modal design to re-engage users who skipped profile completion" },
    { text: "To accommodate our new non-finance audience, I refactored the profile form.", image: "design5.png", imageAlt: "Redesigned profile form with flexible fields supporting Engineers, MBAs, and non-CA users" }
];

const PROJECT_TITLE = "Redesigning CA Monk's New User Onboarding";

export default function CaMonkNuxPage() {
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
        } catch (error) {
            console.error("Error submitting feedback:", error);
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
                        Redesigning CA Monk's<br />New User Onboarding
                    </h1>
                    <div className="w-full overflow-hidden mb-8 md:mb-12">
                        <img src={`${ASSETS_PATH}/hero_image.png`} alt="CA Monk new user onboarding redesign showing value-first approach with reward incentives and streamlined sign-up flow" className="w-full h-auto object-cover" />
                    </div>
                    <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
                        <p className="font-helvetica font-[400] text-xl md:text-2xl text-black max-w-xl leading-tight">
                            Expanding a niche platform into a universal career launchpad.
                        </p>
                        <a
                            href="https://www.figma.com/proto/tOrbfBJgaakWahlJNe0EHj/Profile-Onboarding?page-id=0%3A1&node-id=127-1520&p=f&viewport=-684%2C172%2C0.21&t=XnR0Se9DNLtAneK7-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=122%3A694"
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
                    <Paragraph className="mb-10 md:mb-12">
                        CA Monk started as a home for Chartered Accountants. But we realized our core tools AI Mock Interviews, Resume Scorers, and Versant Tests are universal. They don't just help CAs; they help anyone looking for a job.
                    </Paragraph>

                    <div className="mb-12 md:mb-16">
                        <div className="inline-flex items-center gap-2 bg-green text-white px-3 py-1.5 mb-6">
                            <Flag size={24} weight="fill" />
                            <span className="font-helvetica font-[500] text-lg">The Goal</span>
                        </div>
                        <blockquote className="border-t border-b border-gray-300 py-6 md:py-8 px-6 md:px-8">
                            <p className="font-denton font-[400] italic text-xl md:text-2xl lg:text-[28px] text-black-mantle leading-snug">
                                We needed to generalize the platform to welcome non-finance users while fixing a leaky sign-up funnel that was scaring people away.
                            </p>
                        </blockquote>
                    </div>

                    <div>
                        <SectionTitle>Why were users leaving?</SectionTitle>
                        <Paragraph className="mb-3">
                            We knew we had a drop-off problem, but to fix it, I needed to understand the why. I combined quantitative analysis with qualitative interviews to triage the friction points.
                        </Paragraph>
                        <Paragraph className="mb-8">The funnel data painted a clear picture of where the bleeding was happening:</Paragraph>

                        <div className="px-6 md:px-16 lg:px-24 py-8 md:py-12">
                            <ImageContainer src="nux_funnel.png" alt="User funnel analytics showing 65% drop-off at OTP step and high bounce rate on profile page" noPadding />
                            <div className="space-y-6 mt-10 md:mt-12">
                                {userInsights.map((insight, i) => <InsightItem key={i} {...insight} />)}
                            </div>
                        </div>

                        <div className="mt-12 md:mt-16">
                            <Paragraph className="mb-8">
                                I conducted <span className="font-[500]">interviews with 20+ users</span> who abandoned the flow. Three critical insights emerged that reshaped our design strategy:
                            </Paragraph>
                            <div className="px-6 md:px-16 lg:px-24 py-8 md:py-12 space-y-8">
                                {userQuotes.map((q, i) => <QuoteItem key={i} {...q} />)}
                            </div>
                            <Paragraph className="mb-8">
                                Watching the playback of user sessions confirmed the interview data. I saw users repeatedly scrolling up and down, looking for a "Skip" button or a "Guest Mode." When they realized the phone number was mandatory and the form was CA-specific, they churned immediately.
                            </Paragraph>
                        </div>
                    </div>
                </SectionWrapper>

                {/* Structural Issues Section */}
                <SectionWrapper id="section-2">
                    <SectionTitle className="leading-tight">Beyond the user psychology,<br />we had structural issues.</SectionTitle>
                    <ImageContainer src="friction1.png" alt="Old user flow diagram highlighting friction points including mandatory OTP, CA-specific fields, and hidden rewards" />
                    <Paragraph>I conducted UX Audit to identify a few problems with the existing flow. Let me elaborate section by section:</Paragraph>
                    <div className="px-6 md:px-16 lg:px-24 py-8 md:py-12 space-y-8 md:space-y-12">
                        <ImageContainer src="friction2.png" alt="UX audit showing confusing value proposition with hidden coin rewards and unclear benefits" noPadding />
                        <ImageContainer src="friction3.png" alt="UX audit revealing CA-specific form fields alienating non-finance users" noPadding />
                        <ImageContainer src="friction4.png" alt="UX audit highlighting premature data collection before demonstrating product value" noPadding />
                        <ImageContainer src="friction5.png" alt="UX audit showing lack of skip options and guest mode for hesitant users" noPadding />
                    </div>
                </SectionWrapper>

                {/* Competitive Research Section */}
                <SectionWrapper id="section-3">
                    <Paragraph className="mb-3">
                        We didn't start in a vacuum. I analyzed onboarding flows from competitors (Final Round AI, Enhance CV, LinkedIn, Resume Worded, etc.) to understand industry standards.
                    </Paragraph>
                    <Paragraph className="mb-8">We looked for patterns:</Paragraph>
                    <div className="px-6 md:px-16 lg:px-24 py-8 md:py-12 space-y-6">
                        {researchQuestions.map((q, i) => <QuestionItem key={i} question={q} />)}
                    </div>
                    <ImageContainer src="research_insight.png" alt="Competitive analysis of Final Round AI, LinkedIn, and Resume Worded showing value-first onboarding patterns" noPadding />
                </SectionWrapper>

                {/* Choosing the Right Path Section */}
                <SectionWrapper id="section-4">
                    <SectionTitle>Choosing the Right Path</SectionTitle>
                    <Paragraph className="mb-8">
                        We didn't just want to "make it pretty." We had to decide the sequence of Data vs. Value. We whiteboarded 4 distinct approaches:
                    </Paragraph>
                    <ImageContainer src="flow_discussion.png" alt="Whiteboard showing four onboarding approaches: data-first, value-first, hybrid, and progressive disclosure" />
                </SectionWrapper>

                {/* Wireframing Section */}
                <SectionWrapper id="section-5">
                    <SectionTitle>Wireframing</SectionTitle>
                    <Paragraph className="mb-8">
                        Once we locked the flow of <span className="font-[500]">value-first approach</span>, I moved to layout and hierarchy.
                    </Paragraph>
                    <ImageContainer src="wireframe.png" alt="Low-fidelity wireframes showing new onboarding flow with reward modal, dashboard-first landing, and flexible profile form" noPadding />
                </SectionWrapper>

                {/* Visual Overhaul Section */}
                <SectionWrapper id="section-6">
                    <SectionTitle>Visual Overhaul</SectionTitle>
                    {designSections.map((section, i) => (
                        <div key={i}>
                            <p className="font-helvetica font-[300] text-base md:text-lg text-black leading-relaxed mb-8" dangerouslySetInnerHTML={{ __html: section.text }} />
                            <ImageContainer src={section.image} alt={section.imageAlt} />
                        </div>
                    ))}
                </SectionWrapper>

                {/* Final Design Section */}
                <SectionWrapper id="section-7">
                    <SectionTitle className="mb-8">And the final design</SectionTitle>
                    <div className="w-full py-12 md:py-16 flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #E8E4F0 0%, #F5F5F5 50%, #FCF5F0 100%)' }}>
                        <div className="w-auto max-w-md overflow-hidden">
                            <video src={`${ASSETS_PATH}/Prototype Recording.mp4`} autoPlay loop muted playsInline className="h-auto w-full object-contain" />
                        </div>
                    </div>
                </SectionWrapper>

                {/* Subtle Delights Section */}
                <SectionWrapper id="section-8">
                    <SectionTitle>Subtle Delights</SectionTitle>
                    <Paragraph className="mb-12">I used subtle UI animations to reinforce value.</Paragraph>
                    <div className="grid grid-cols-2 gap-2 md:gap-16 w-full px-6 md:px-16 lg:px-24 py-8 md:py-12">
                        <div className="w-full">
                            <img src={`${ASSETS_PATH}/Coin Animate.gif`} alt="Animated coin reward micro-interaction showing coins being added to user wallet on sign-up completion" className="w-full h-auto object-contain" />
                        </div>
                        <div className="w-full">
                            <img src={`${ASSETS_PATH}/File Opening.gif`} alt="Animated file opening micro-interaction showing smooth document reveal transition" className="w-full h-auto object-contain" />
                        </div>
                    </div>
                </SectionWrapper>

                {/* The Impact Section */}
                <SectionWrapper id="section-9">
                    <SectionTitle>The Impact</SectionTitle>
                    <Paragraph className="mb-10">
                        We launched the new onboarding flow in December and tracked the performance of the first 10,000 users.
                    </Paragraph>
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
