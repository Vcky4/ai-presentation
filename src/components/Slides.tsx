import React from 'react';
import { Quiz } from './Quiz';

export const Slide1_Intro: React.FC = () => (
    <div className="text-center animate-fade-up">
        <div className="badge">Architectural Planning</div>
        <h1>Beyond the Hype</h1>
        <h2>How to Choose Between LLMs, Agents, and Good Old Automation</h2>
        <p style={{ marginTop: '2rem', fontSize: '1.5rem', color: 'var(--accent-cyan)' }}>
            By Victor Okon
        </p>
        <p style={{ marginTop: '1rem', fontStyle: 'italic' }}>
            Target Audience: Technical Practitioners & Developers
        </p>
    </div>
);

export const Slide2_CoreProblem: React.FC = () => (
    <div className="animate-fade-up">
        <h1>The Core Problem</h1>
        <div className="split-slide">
            <div>
                <h3 style={{ color: '#ef4444' }}>The Pressure</h3>
                <p>
                    "Add AI" to everything. As the dust settles on the generative AI boom, a harsh reality is emerging:
                    <strong> we are over-engineering most of our solutions.</strong>
                </p>
            </div>
            <div>
                <h3 style={{ color: '#f59e0b' }}>The Symptoms</h3>
                <ul className="icon-list">
                    <li>Wasting time fitting complex AI into workflows a Python script could handle.</li>
                    <li>Struggling to force a simple chatbot to behave like an autonomous agent.</li>
                    <li>Treating AI as a hammer and every problem as a nail.</li>
                </ul>
            </div>
        </div>
    </div>
);

export const Slide3_LLMs: React.FC = () => (
    <div className="animate-fade-up">
        <div className="badge">The Foundation</div>
        <h1>Large Language Models (LLMs)</h1>
        <p style={{ fontSize: '1.5rem', marginBottom: '2rem' }}>
            <em>"A brain in a jar."</em>
        </p>

        <div className="feature-grid">
            <div className="feature-card">
                <div className="feature-icon">🧠</div>
                <h3>How it works</h3>
                <p>Stateless processing. You send text, it processes it, and sends it back. It doesn't "do" things outside of returning text.</p>
            </div>
            <div className="feature-card">
                <div className="feature-icon">✨</div>
                <h3>Best For</h3>
                <ul className="icon-list" style={{ marginLeft: 0 }}>
                    <li>Summarising large documents</li>
                    <li>Extracting structured data from messy text</li>
                    <li>Conversational Q&A (RAG)</li>
                </ul>
            </div>
        </div>
    </div>
);

export const Slide4_Agents: React.FC = () => (
    <div className="animate-fade-up">
        <div className="badge">The Evolution</div>
        <h1>AI Agents</h1>
        <p style={{ fontSize: '1.5rem', marginBottom: '2rem' }}>
            <em>"A brain given hands, a memory, and a to-do list."</em>
        </p>

        <div className="split-slide" style={{ gap: '2rem' }}>
            <div>
                <p>Agents use an LLM as their core reasoning engine, wrapped in an orchestration layer allowing them to:</p>
                <ol>
                    <li><strong>Access Tools:</strong> Serching web, querying DBs, calling APIs.</li>
                    <li><strong>Plan & Loop:</strong> Break down complex tasks, execute, evaluate, and decide next steps autonomously.</li>
                    <li><strong>Maintain State:</strong> They remember step 1 while executing step 4.</li>
                </ol>
            </div>
            <div className="feature-card" style={{ borderColor: 'var(--accent-purple)' }}>
                <h3 style={{ color: 'var(--accent-purple)' }}>The Architecture</h3>
                <p>Building an agent is about <strong>Orchestration, State Management, and Guardrails</strong> to prevent infinite loops or destructive actions.</p>
            </div>
        </div>
    </div>
);

export const Slide5_DecisionMatrix: React.FC = () => (
    <div className="animate-fade-up">
        <h1>The Decision Matrix</h1>
        <p>Don't jump to the most advanced AI concept. Use this hierarchy:</p>

        <div className="feature-grid" style={{ gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
            <div className="feature-card">
                <div className="badge" style={{ background: 'rgba(16, 185, 129, 0.1)', color: '#10b981', border: 'none' }}>1. Good Old Automation</div>
                <h3>Zapier, Cron, Scripts</h3>
                <p><strong>Use when:</strong> Inputs are 100% predictable, rules are static. Faster, cheaper, won't hallucinate.</p>
            </div>
            <div className="feature-card">
                <div className="badge" style={{ background: 'rgba(245, 158, 11, 0.1)', color: '#f59e0b', border: 'none' }}>2. Standard Code</div>
                <h3>Algorithms & Math</h3>
                <p><strong>Use when:</strong> Strict logic and deterministic outcomes needed (e.g. Dijkstra's routing).</p>
            </div>
            <div className="feature-card">
                <div className="badge" style={{ background: 'rgba(59, 130, 246, 0.1)', color: '#3b82f6', border: 'none' }}>3. LLMs</div>
                <h3>Text Processing</h3>
                <p><strong>Use when:</strong> Input is messy natural language requiring human-like comprehension and insight extraction.</p>
            </div>
            <div className="feature-card">
                <div className="badge" style={{ background: 'rgba(139, 92, 246, 0.1)', color: '#8b5cf6', border: 'none' }}>4. AI Agents</div>
                <h3>Multi-system Orchestration</h3>
                <p><strong>Use when:</strong> Multi-step reasoning, dynamic decision-making, and tooling access across systems is required.</p>
            </div>
        </div>
    </div>
);

export const Slide6_DecisionFlow: React.FC = () => (
    <div className="animate-fade-up">
        <h1>Quick Decision Flow</h1>

        <div className="decision-flow">
            <div className="flow-step">
                <div className="flow-condition">Are inputs 100% predictable & rules static?</div>
                <div className="flow-action">Use Traditional Automation</div>
            </div>
            <div className="flow-step">
                <div className="flow-condition">Is it strict math or deterministic operations?</div>
                <div className="flow-action">Use Standard Code</div>
            </div>
            <div className="flow-step">
                <div className="flow-condition">Does it require understanding natural/messy text?</div>
                <div className="flow-action">Use an LLM</div>
            </div>
            <div className="flow-step" style={{ borderColor: 'var(--accent-purple)' }}>
                <div className="flow-condition">Does it require multi-step reasoning, memory, & API tools?</div>
                <div className="flow-action" style={{ background: 'rgba(139, 92, 246, 0.2)', borderColor: 'var(--accent-purple)', color: '#d8b4fe' }}>Use an AI Agent</div>
            </div>
        </div>
    </div>
);

export const Slide7_Takeaway: React.FC = () => (
    <div className="text-center animate-fade-up">
        <h1>The Takeaway</h1>
        <div style={{ margin: '3rem auto', maxWidth: '800px', padding: '2rem', background: 'rgba(59, 130, 246, 0.1)', borderRadius: '16px', borderLeft: '4px solid var(--accent-blue)' }}>
            <p style={{ fontSize: '1.8rem', color: 'var(--text-primary)', fontStyle: 'italic', marginBottom: '1.5rem' }}>
                "Always start at the bottom of the complexity ladder."
            </p>
            <p style={{ fontSize: '1.3rem' }}>
                Ask yourself: <em>"Can I solve this with a simple if/else statement?"</em> If yes, do that.
            </p>
        </div>
        <p style={{ fontSize: '1.5rem' }}>
            Matching architecture to actual problem complexity yields solutions <br /> that are <strong>faster, more reliable, and cheaper.</strong>
        </p>
    </div>
);

export const Slide8_Quiz: React.FC = () => (
    <div style={{ height: '100%', width: '100%' }}>
        <h1>Knowledge Check</h1>
        <Quiz />
    </div>
);

export const slides = [
    Slide1_Intro,
    Slide2_CoreProblem,
    Slide3_LLMs,
    Slide4_Agents,
    Slide5_DecisionMatrix,
    Slide6_DecisionFlow,
    Slide7_Takeaway,
    Slide8_Quiz
];
