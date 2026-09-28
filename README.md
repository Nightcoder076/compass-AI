# COMPASS AI
**Competitive Monitoring, Pattern Analysis & Strategic Signal System**

A production-quality AI Competitive Intelligence platform engineered to monitor market competitors, remember historical activities via persistent Hindsight memory, detect cyclical strategic patterns over time, and synthesize evidence-backed executive briefings.

---

## 🧭 Executive Overview & Value Proposition

**COMPASS AI is NOT a generic chatbot.**
Traditional AI chatbots suffer from recency bias, session amnesia, and citation hallucinations. In contrast, COMPASS AI is designed around three pillars:

1. **Persistent Competitive Memory**: Structured storage (Hindsight) of company movements, executive pivots, pricing changes, product releases, and entity relationships spanning 24+ months.
2. **Temporal Pattern Analysis**: Autonomous recognition of counter-cyclical product launches, margin dilution maneuvers, and repeated competitive playbooks.
3. **Evidence-Backed Attribution**: Every factual claim is bound to a verified source URL, timestamp, verbatim quotation, confidence rating, and conflicting evidence detector.

---

## 🛠 Tech Stack

- **Frontend**: Next.js 14 (App Router), TypeScript, Tailwind CSS, Lucide Icons, Recharts, Framer Motion
- **Design System**: Dark navy (`#080c16`, `#0a101d`) with subtle glassmorphic panels, high information density, tactical enterprise badges, zero cartoonish AI graphics
- **Backend & APIs**: Next.js API Routes (Server-Side), OpenAI Responses API, Agent Orchestration Engine
- **Memory Engine**: Hindsight structured memory system (`RETAIN`, `RECALL`, `REFLECT`)
- **Database**: PostgreSQL (Supabase compatible schema with DDL and indexes; embedded local JSON persistence fallback for demo reliability)
- **Deployment**: Vercel

---

## 🤖 5 Core Agents Architecture

```
                    ┌─────────────────────────┐
                    │      USER / TRIGGER     │
                    └────────────┬────────────┘
                                 │
     ┌───────────────────────────▼───────────────────────────┐
     │ 1. RESEARCH AGENT                                     │
     │    - Real-time web intelligence scan                 │
     │    - Extracts title, category, metrics, confidence    │
     │    - Verifies sources & flags conflicting evidence    │
     └───────────────────────────┬───────────────────────────┘
                                 │
     ┌───────────────────────────▼───────────────────────────┐
     │ 2. HISTORICAL MEMORY AGENT (Hindsight RETAIN)         │
     │    - Extracts entities, temporal anchors & causal links│
     │    - Stores structured memory vectors in long-term DB │
     └───────────────────────────┬───────────────────────────┘
                                 │
     ┌───────────────────────────▼───────────────────────────┐
     │ 3. HISTORICAL MEMORY AGENT (Hindsight RECALL)         │
     │    - Queries past 24-month behavioral precedents      │
     │    - Retrieves prior pricing changes & rival moves    │
     └───────────────────────────┬───────────────────────────┘
                                 │
     ┌───────────────────────────▼───────────────────────────┐
     │ 4. HISTORICAL MEMORY AGENT (Hindsight REFLECT)        │
     │    - Synthesizes: "What patterns emerge when current  │
     │      events are compared with historical behavior?"   │
     └───────────────────────────┬───────────────────────────┘
                                 │
     ┌───────────────────────────▼───────────────────────────┐
     │ 5. SIGNAL DETECTION AGENT                             │
     │    - Identifies emerging trends, recurring patterns,  │
     │      strategic shifts, threats & market opportunities │
     └───────────────────────────┬───────────────────────────┘
                                 │
     ┌───────────────────────────▼───────────────────────────┐
     │ 6. STRATEGIC INSIGHT AGENT                            │
     │    - Synthesizes formatted executive briefing:        │
     │      CURRENT EVENT + HISTORICAL MEMORY + PATTERN      │
     │      + INTERPRETATION + SOURCE EVIDENCE               │
     └───────────────────────────────────────────────────────┘
```

---

## 📊 Complete Feature Walkthrough

### 1. Dashboard
- **6 Real-Time KPIs**: Competitors Monitored, New Signals, Major Changes, Historical Patterns Detected, Threat Signals, Opportunity Signals.
- **"What Changed?" High-Impact Alert Section**:
  - Displays latest corporate movements with direct comparison to historical memory (e.g. *Tesla pricing cut 8.5% — Historical memory: Similar movement occurred 3 times previously — Pattern: Pricing change followed competitor inventory build — Confidence: 87% — [View Evidence]*).
- **Signal Taxonomy & Radar**: Visual distribution across Threats, Opportunities, Strategic Shifts, Patterns, and Emerging Trends.
- **Recent Intelligence Stream**: Chronological feed with confidence metrics.

### 2. Competitor Directory & Deep Profile Hub
- Tracks company overview, products, pricing models, threat ratings, and strategic postures (e.g. *Aggressive Expansion, Margin Defense, Product Innovation*).
- **"Memory-Backed Analysis"**: Dedicated view comparing the competitor's current 30-day activity against their 24-month historical playbook.

### 3. Intelligence Feed
- High-density enterprise feed filterable by Category (Pricing, Product Launch, Technology, M&A, Strategic Shift), Impact level, or keyword.
- Shows extracted metrics, historical memory connections, and **Conflicting Evidence Alerts** (displaying both divergent wire reports side-by-side).

### 4. Interactive Memory Graph
- Dynamic entity-relationship visualizer mapping **Companies, Products, Technologies, Events, and Markets**.
- Connects entities via relationship types: `competitor`, `product`, `pricing`, `temporal`, `partnership`, and `market_movement`.
- Click-to-inspect entity details and causal links.

### 5. Temporal Multi-Year Timeline
- Supports **Vertical Chronology** and **Horizontal Swimlanes** spanning 2024, 2025, and 2026.
- Direct click-to-view verified citations and historical memories.

### 6. Strategic Reports
- Formal executive briefings generated following the strict formula:
  $$\text{Insight} = \text{Current Event} + \text{Historical Memory} + \text{Pattern} + \text{Interpretation} + \text{Evidence}$$

### 7. Strategic AI Chat
- Answers complex queries using live retrieval + Hindsight memory:
  - *"What changed at Tesla this month?"*
  - *"How has OpenAI changed its AI pricing over the last 6 months?"*
  - *"Which competitor has shown the largest strategic shift?"*
  - *"Find recurring patterns in competitor product launches."*
  - *"What happened before the last three pricing changes?"*

### 8. Source Traceability & Evidence Drawer
- Full attribution modal displaying publisher, publication date, event date, verbatim quoted excerpt, confidence score, and external URL link.

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ (tested on Node v24)
- npm 9+

### Installation & Run
```bash
# Navigate to project directory
cd compass-ai

# Install dependencies (already completed)
npm install

# Start production server
npm run build
npm run start
```
The application will be live at `http://localhost:3000`.

### Environment Variables
Copy `.env.example` to `.env.local`:
```bash
OPENAI_API_KEY=your-openai-key    # Optional for live OpenAI agent generation
OPENAI_MODEL=gpt-4o
HINDSIGHT_API_KEY=your-key        # Optional for external Hindsight SaaS
NEXT_PUBLIC_ENABLE_DEMO_DATA=true
```

---

## 🗄 Database Schema (PostgreSQL / Supabase)

The complete SQL schema with tables and indexes is located in `supabase/schema.sql`:
- `users`: Analyst accounts and roles
- `competitors`: Corporate entities, tiers, strategic postures, revenue estimates
- `events`: Categorized competitor occurrences with extracted metrics
- `sources`: Verifiable URLs, publication dates, verbatim snippets, and conflict flags
- `memories`: Hindsight persistent memories, categories, and causal relationships
- `signals`: Detected threats, opportunities, anomalies, and recurring patterns
- `reports`: Formal executive intelligence dossiers
- `watchlists`: Alert interceptors and frequency rules
- `research_runs`: Multi-agent orchestration audit trails

---

## 🔒 Security & Performance
- **Zero API Key Leaks**: All AI model calls and memory indexing happen on the server.
- **Idempotent Deduplication**: Prevents cognitive noise by deduplicating corporate events before persisting.
- **Conflicting Evidence Detection**: Explicitly identifies and flags discrepancies across primary and secondary sources.
