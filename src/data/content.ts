export const trustItems = [
  { id: '01', title: 'Repeatable Evaluation', description: 'Standardize model testing across teams and releases.' },
  { id: '02', title: 'Controlled Experiments', description: 'Version configs and track every evaluation run.' },
  { id: '03', title: 'Performance Benchmarking', description: 'Measure latency, throughput, and resource cost.' },
  { id: '04', title: 'Model Comparison', description: 'Surface trade-offs before you ship to production.' },
]

export const inputs = [
  'AI Models',
  'Datasets',
  'Model Checkpoints',
  'Configurations',
  'Inference Environments',
  'GPU Infrastructure',
  'Performance Metrics',
]

export const outputs = [
  'Evaluation Results',
  'Benchmark Results',
  'Performance Insights',
  'Model Comparison',
  'Production Recommendations',
]

export const evalModels = [
  {
    name: 'Llama Model A',
    dataset: 'Production QA Dataset',
    score: 94.8,
    accuracy: 95.2,
    latency: 82,
    status: 'Passed' as const,
  },
  {
    name: 'Llama Model B',
    dataset: 'Latency Stress Set',
    score: 92.6,
    accuracy: 92.1,
    latency: 61,
    status: 'Passed' as const,
  },
  {
    name: 'Llama Model C',
    dataset: 'Multilingual Suite',
    score: 95.1,
    accuracy: 95.8,
    latency: 74,
    status: 'Passed' as const,
  },
]

export const experiments = [
  { id: 'EXP-3102', model: 'Model A · v1.4.2', dataset: 'Production QA', config: 'eval-v3.1', runtime: '12m 34s', status: 'Completed' as const, score: 94.8 },
  { id: 'EXP-3103', model: 'Model B · v2.0.1', dataset: 'Latency Stress', config: 'eval-v3.1', runtime: '9m 18s', status: 'Completed' as const, score: 92.6 },
  { id: 'EXP-3104', model: 'Model C · v0.9.8', dataset: 'Multilingual', config: 'eval-v3.2', runtime: '—', status: 'Running' as const, score: 95.1 },
  { id: 'EXP-3105', model: 'Model A · v1.4.1', dataset: 'Edge Cases', config: 'eval-v3.0', runtime: '—', status: 'Pending' as const, score: 0 },
  { id: 'EXP-3106', model: 'Model B · v1.9.0', dataset: 'Prod QA', config: 'eval-v2.9', runtime: '11m 02s', status: 'Failed' as const, score: 78.4 },
]

export const comparisonRows = [
  { metric: 'Accuracy', a: '94.8%', b: '92.6%', c: '95.1%', best: 'c' },
  { metric: 'Latency', a: '82ms', b: '61ms', c: '74ms', best: 'b' },
  { metric: 'Throughput', a: '120/s', b: '156/s', c: '138/s', best: 'b' },
  { metric: 'GPU Usage', a: '72%', b: '68%', c: '75%', best: 'b' },
]

export const howSteps = [
  { id: '01', title: 'Connect Models', description: 'Register endpoints, checkpoints, or serving stacks.' },
  { id: '02', title: 'Configure Evaluation', description: 'Select datasets, metrics, and pass thresholds.' },
  { id: '03', title: 'Run Experiments', description: 'Execute versioned, reproducible evaluation runs.' },
  { id: '04', title: 'Benchmark Performance', description: 'Stress-test under real production workloads.' },
  { id: '05', title: 'Select the Best Model', description: 'Ship with measurable production confidence.' },
]

export const features = [
  { title: 'Model Evaluation', description: 'Score models against configurable datasets and metrics.' },
  { title: 'Experiment Management', description: 'Create, version, and audit controlled experiments.' },
  { title: 'Model Benchmarking', description: 'Compare latency, throughput, and resource cost.' },
  { title: 'Performance Analysis', description: 'Find bottlenecks before production rollout.' },
  { title: 'Model Comparison', description: 'Inspect trade-offs across candidates side-by-side.' },
  { title: 'Evaluation Tracking', description: 'Keep a complete history of every evaluation run.' },
  { title: 'Dataset Evaluation', description: 'Validate models on golden and adversarial suites.' },
  { title: 'Metric Configuration', description: 'Define accuracy, latency, and custom scorers.' },
  { title: 'Experiment Versioning', description: 'Lock configs for full reproducibility.' },
  { title: 'Result Validation', description: 'Gate releases with pass/fail evaluation criteria.' },
  { title: 'Resource Analysis', description: 'Track GPU utilization and inference cost.' },
  { title: 'Evaluation Reporting', description: 'Export evidence for engineering and leadership.' },
]

export const solutions = [
  { title: 'AI/ML Engineering Teams', description: 'Systematize evaluation across candidates and releases.', useCase: 'Release gates with measurable criteria' },
  { title: 'MLOps Teams', description: 'Track experiments and readiness signals in CI pipelines.', useCase: 'CI-integrated evaluation workflows' },
  { title: 'Data Science Teams', description: 'Compare variants against shared golden datasets.', useCase: 'Reproducible research loops' },
  { title: 'Model Developers', description: 'Iterate faster with consistent scoring history.', useCase: 'Local-to-cloud evaluation' },
  { title: 'AI Infrastructure Teams', description: 'Benchmark inference across GPUs and serving stacks.', useCase: 'Cost and latency optimization' },
  { title: 'Enterprise AI Teams', description: 'Centralize evaluation evidence for governance.', useCase: 'Production-readiness reviews' },
]

export const techItems = [
  { name: 'NeMo', description: 'Evaluate NeMo-based model deployments.' },
  { name: 'TensorRT', description: 'Measure optimized inference under load.' },
  { name: 'Triton', description: 'Run workloads against Triton endpoints.' },
  { name: 'NIM', description: 'Assess NIM microservices reproducibly.' },
]

export const readiness = [
  { label: 'Accuracy', value: 95 },
  { label: 'Latency', value: 89 },
  { label: 'Throughput', value: 91 },
  { label: 'Resource Efficiency', value: 87 },
]

export const pricingPlans = [
  {
    name: 'Starter',
    price: '$49',
    period: '/mo',
    description: 'For individual developers and small experiments.',
    featured: false,
    features: ['500 evaluation runs', 'Experiment management', 'Model comparison', 'Core benchmarking', 'Community support'],
  },
  {
    name: 'Professional',
    price: '$199',
    period: '/mo',
    description: 'For AI/ML engineering teams.',
    featured: true,
    features: ['5,000 evaluation runs', 'Shared workspaces', 'Full benchmarking', 'Advanced analytics', 'API access', 'Priority support'],
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: '',
    description: 'For organizations running large-scale AI evaluation.',
    featured: false,
    features: ['Unlimited runs', 'SSO & RBAC', 'Custom metrics', 'Private infra options', 'SLA & dedicated support'],
  },
]

export const docsCards = [
  { title: 'Evaluation APIs', description: 'Submit and retrieve evaluation runs programmatically.' },
  { title: 'Experiment Management', description: 'Create, version, and track controlled experiments.' },
  { title: 'Benchmarking Guides', description: 'Latency, throughput, and resource patterns.' },
  { title: 'Model Integration', description: 'Connect endpoints and artifact registries.' },
  { title: 'Performance Evaluation', description: 'Interpret metrics and readiness signals.' },
]

export const faqs = [
  { q: 'What is TensorVale?', a: 'TensorVale is an AI Model Evaluation & Experimentation Platform that helps teams evaluate, benchmark, compare, and select models with measurable evidence.' },
  { q: 'How does TensorVale evaluate AI models?', a: 'Connect models, select datasets, configure metrics, and run structured evaluation workloads. Results are tracked, versioned, and comparable across runs.' },
  { q: 'Can TensorVale compare multiple models?', a: 'Yes. Side-by-side comparison highlights trade-offs across accuracy, latency, throughput, resource usage, and composite scores.' },
  { q: 'What metrics can be evaluated?', a: 'Accuracy, precision, recall, latency, throughput, GPU utilization, cost-per-inference, and custom scoring functions.' },
  { q: 'Can TensorVale benchmark model performance?', a: 'Yes. The benchmark engine measures performance under real workloads and surfaces resource and latency trade-offs.' },
  { q: 'Can I track experiments?', a: 'Every experiment stores model version, dataset, configuration, runtime, status, and results for full reproducibility.' },
  { q: 'Does TensorVale support generative AI models?', a: 'Yes. TensorVale supports evaluation of ML and generative AI models across datasets, workloads, and deployment environments.' },
  { q: 'Can TensorVale support enterprise deployments?', a: 'Enterprise plans include SSO, RBAC, dedicated support, and options for private infrastructure.' },
]

export const dashboardStats = [
  { label: 'Models Evaluated', value: 128 },
  { label: 'Active Experiments', value: 24 },
  { label: 'Avg Evaluation Score', value: 94.2, suffix: '%' },
  { label: 'Benchmark Runs', value: 1842 },
]

export function statusColor(status: string) {
  switch (status) {
    case 'Completed':
    case 'Passed':
      return 'text-emerald-400'
    case 'Running':
      return 'text-tv-cyan'
    case 'Pending':
      return 'text-amber-400'
    case 'Failed':
      return 'text-red-400'
    default:
      return 'text-tv-muted'
  }
}
