# VedRaq: The Active Brain for Your Entire Company

> **The Causal Intelligence Platform & Unified Context Layer for Modern Enterprise Agents.**
> 
> Inspired by the vision of a single source of truth for organizational memory, VedRaq actively ingests, classifies, maps, and coordinates the scattered knowledge, workflows, and agents across your company.

---

## The Problem

* **Company knowledge is scattered everywhere:** Essential facts, decisions, and documentation live isolated in Slack, Notion, Jira, emails, and databases. There is no single source of truth.
* **AI agents operate in silos:** Agents can run tactical scripts, but they lack overall context of company policies, historical incidents, active workflows, and cross-team dependencies.
* **No central coordinator:** As companies deploy multiple AI agents, there is no shared memory layer or policy-grounded execution bus to monitor correctness, manage conflict resolutions, or maintain safety guardrails.

---

## The Solution: VedRaq

An **active operational brain** that runs alongside your enterprise tools. It:
1. **Reads & Reacts:** Ingests live streams of organizational events (messages, code, commits, tickets, docs).
2. **Constructs Causal Graphs:** Maps how decisions connect to outcomes, teams to processes, and agents to resources.
3. **Orchestrates Agents:** Evaluates agent behaviors against policies, shares high-speed operational snapshots, and flags anomalies.
4. **Keeps Humans in the Loop:** Creates active approval paths for low-confidence claims and operational conflicts.



## Unified Core Tech Stack

### Frontend & Visuals
* **Next.js 15 (App Router)** - Server-rendered routing framework.
* **React 19 & Tailwind CSS v4** - Component architecture and sleek, modern layout engines.
* **ShadCN UI** - Beautiful Radix UI primitives.
* **React Flow** - Direct node-based visualization of corporate SOPs, causal graphs, and active pipelines.

### High-Performance Backend
* **FastAPI** - Async routing, validation, and high-throughput ingestion interfaces.
* **LangChain & LangGraph** - Complex agent orchestration, structured loops, and state machines.
* **Claude API (Anthropic)** - Advanced semantic analysis, agent reasoning, and structural synthesis.
* **Socket.IO** - Live event pushes, agent logs streaming, and user console telemetry.

### Memory & Event Infrastructures
* **Kafka (Upstash)** - Resilient, parallel event stream and adapter bus.
* **Redis (Upstash)** - Real-time hot memory, caching state snapshots, and agent event pub/sub.
* **Neo4j** - Causal knowledge graph representing entities, timelines, and dependencies.
* **PostgreSQL (Supabase)** - Cold relational storage, vector lookup (`pgvector`), and tenant metadata.

---

## Core Infrastructure Engines

### 1. Ingestion Engine: Kafka (Upstash)



* **Zero Event Loss:** Slack logs, Jira updates, email webhooks, and commit histories are pushed instantly into high-durability queues.
* **Pipeline Isolation:** Decoupled architecture prevents slow downstream LLM pipelines from bottlenecking fast ingest paths.
* **Parallel Fan-out:** Stream events are simultaneously routed to multiple consumers (embeddings creation, raw storage, live active agent triggers).

### 2. Live State Engine: Redis (Upstash)



* **Hot Memory State:** Stores fast-changing, high-access runtime info: who is on call, open incident tickets, active task queues, and agent session context.
* **Sub-Millisecond Read Latency:** Empowers reasoning steps to query active company states instantly without requesting heavy database joins.
* **Agent-to-Agent Pub/Sub:** Enables instant cross-agent coordination and decentralized feedback loops.

### 3. Causal Intelligence Engine: Neo4j Knowledge Graph



* **Relational Mapping:** Instead of isolated document indexes, Neo4j maps relationships between teams, resources, actions, policies, and systems.
* **Causal Outage/Incident Diagnosis:** Allows deep graph traversals to immediately resolve complex organizational questions:
  > *"What software deploy caused this support spike, who authorized it, and what policy covers this service?"*
* **Dynamic Policy Dependency Checks:** Alerts teams when a change in one policy implicitly conflicts with steps in another process.

---

## Design & Aesthetic Reference

Our landing page and console design take direct inspiration from top-tier, developer-centric active AI platforms:

* **[Sim.ai](https://sim.ai/)** — Dark modes, neon glassmorphism nodes, and beautiful active animation trails.
* **[Retool](https://retool.com/)** — Highly interactive dashboards, smooth drag-and-drop mechanics, and custom panel configurations.
* **[Vellum.ai](https://www.vellum.ai/)** — Advanced playground panels, side-by-side prompt tuning tools, and clean, high-density visualization components.

---

## Setting Up the Development Server

### 1. Frontend Landing Page Setup
Move to the `landing-page` directory and spin up the development compiler:
```bash
cd landing-page
npm install
npm run dev
```

### 2. Next Steps
* Spin up PostgreSQL with the `pgvector` extension enabled.
* Run a local Neo4j desktop instance or link to a cloud Aura database.
* Configure Upstash Kafka & Redis tokens inside a root `.env` file.