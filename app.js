const articles = [
  {
    title: "Voice - PII",
    updated: "2026-04-01",
    tags: ["Verification", "Voice", "TTC"],
    summary:
      "Manual PII, Tap to Confirm, failed verification handling, sponsored account notes, and social engineering guardrails.",
  },
  {
    title: "Accounts - Identity Verification (IDV)",
    updated: "2026-03-20",
    tags: ["IDV", "KYC", "Identity Hub"],
    summary:
      "Identity verification requirements, pending verification, pushback, retry guidance, and IDV issue triage.",
  },
  {
    title: "Account Access - Overview, Identification, and Troubleshooting",
    updated: "2026-03-31",
    tags: ["Account Access", "Troubleshooting"],
    summary:
      "When Account Access applies, terminology, login troubleshooting, account recovery, duplicate cases, and rejected attempts.",
  },
  {
    title: "Account Access - Pre Action Steps",
    updated: "2026-05-07",
    tags: ["Account Access", "Pre-Action"],
    summary:
      "Required checklist before using Account Access, including PII, ATO, Risk closure, lost device, balances, and possible issue checks.",
  },
  {
    title: "Account Access - Voice",
    updated: "2026-01-06",
    tags: ["Account Access", "Voice", "Regulator"],
    summary:
      "Voice action assessment for reopen account, temporary access, grant account access, balance transfer, and regulator errors.",
  },
  {
    title: "Account Access - Messaging and Email",
    updated: "2026-01-06",
    tags: ["Account Access", "Messaging", "Email"],
    summary:
      "Messaging and email account access action assessment and tool guidance after pre-action steps are complete.",
  },
  {
    title: "Account Access - Cash Families",
    updated: "2026-03-30",
    tags: ["Sponsored Accounts", "Account Access"],
    summary:
      "Sponsored account access requirements, sponsor involvement, balance transfer, granting access, and reassignment guidance.",
  },
  {
    title: "Support - Misdirected or Missing P2P Payments",
    updated: "2026-02-18",
    tags: ["Payments", "P2P"],
    summary:
      "Sender and recipient paths for missing or misdirected P2P payments, including old account and incorrect recipient handling.",
  },
  {
    title: "Cash App Card - Block or Unblock a Merchant",
    updated: "Article reference",
    tags: ["Cash Card", "Merchant"],
    summary:
      "Manual merchant block and unblock support when the customer cannot complete the action in app.",
  },
  {
    title: "Voice - Account Takeovers (ATO)",
    updated: "Article reference",
    tags: ["ATO", "Unauthorized Activity", "Risk"],
    summary:
      "ATO indicators, exclusions, PII requirements, before-action checks, and escalation workflow.",
  },
  {
    title: "Voice - Case standard practices",
    updated: "2026-05-19",
    tags: ["Voice", "Transfers", "Documentation"],
    summary:
      "Inbound call handling, routing, holds, documentation, transfers, screenshots, and minimum app version guidance.",
  },
  {
    title: "Voice - CSAT closing statements",
    updated: "2026-04-01",
    tags: ["CSAT", "Call Closure"],
    summary:
      "Closing statement options for routine, challenging, transfer, follow-up, resolved, and compromised-resolution interactions.",
  },
  {
    title: "Accounts - Closing Accounts",
    updated: "2026-01-06",
    tags: ["Accounts", "Closure"],
    summary:
      "Customer and support-driven account closure, balances, investing, gift cards, account access, and linked account scenarios.",
  },
  {
    title: "Investing - What Is Stock Investing?",
    updated: "2025-12-01",
    tags: ["Investing", "Transfer"],
    summary:
      "Investing basics, regulatory disclaimer, and transfer guidance for voice cases involving brokerage topics.",
  },
];

const quickTextLibrary = [
  {
    name: "Cash App {Account Access - Confirm Access}",
    keywords: ["accountAccess", "access", "grant", "verify", "account"],
    text:
      "Based on the information you provided, we will attempt to grant you access to your previous account and close your current account. If successful, you will be able to access the previous account's payment history and balance.",
  },
  {
    name: "Cash App {Account Access - Confirm Balance Transfer}",
    keywords: ["accountAccess", "balance", "transfer", "cash"],
    text:
      "Based on the information you provided, we will attempt a one-time balance transfer. This should only be used for eligible cash balances and not stock, gift card, savings, or bitcoin balances.",
  },
  {
    name: "Cash App {Account Access - Complete}",
    keywords: ["accountAccess", "complete", "resolved", "access"],
    text:
      "We’ve granted you access to your previous account and closed your current account. You now have full access to the previous account's payment history and balance.",
  },
  {
    name: "Cash App {IDV - General Info - Pushback}",
    keywords: ["idv", "verification", "identity", "pushback"],
    text:
      "I understand it can be alarming to enter personal info. Cash App verifies customer information to help provide a safe and secure environment to send and receive money.",
  },
  {
    name: "Cash App {IDV - Retry}",
    keywords: ["idv", "retry", "verification", "identity"],
    text:
      "To continue, please verify your identity from Cash App on your mobile device and follow the prompts. Be sure to open the link from the device where you use Cash App.",
  },
  {
    name: "Cash Risk {IDV Attempts Exhausted}",
    keywords: ["idv", "failed", "unable", "attempts", "verification"],
    text:
      "After reviewing your account, we were unable to verify the personal information provided. You may still be able to use Cash App within unverified account limits.",
  },
  {
    name: "Cash App {ATO Lock}",
    keywords: ["ato", "locked", "security", "account takeover"],
    text:
      "We noticed some unusual activity and temporarily locked your account for your security. You will receive a notification within 24-48 hours confirming the review outcome.",
  },
  {
    name: "Cash App {ATO in Progress}",
    keywords: ["ato", "escalate", "investigation", "progress"],
    text:
      "I can confirm that your case has been escalated to the appropriate team and an investigation is in progress. You can expect to hear back about the status of your claim.",
  },
  {
    name: "Cash App {ACH - Merchant Block - Complete}",
    keywords: ["unauthorizedCard", "merchant", "block", "card"],
    text:
      "Transactions with the merchant are now blocked. Any new transactions with them will be returned. If you need to unblock them later, you can reach back out and we can help.",
  },
  {
    name: "Misdirected Payment - Sender Contact Guidance",
    keywords: ["p2pMisdirected", "payment", "sender", "missing"],
    text:
      "The best way to trace these funds is to have the sender contact us directly. This helps us review the sender's transaction details and determine what happened.",
  },
];

const sharedVerificationSteps = [
  {
    stage: "Verification",
    title: "Caller classification",
    body:
      "Determine whether the caller is the account holder, a sponsored account or sponsor, or a third party. Do not disclose account-specific information to third parties.",
    actions: ["Classify caller type", "Confirm the call channel", "Apply sponsored account rules when relevant"],
    articles: ["Voice - PII", "Account Access - Cash Families"],
    tools: ["CF1 Lightning"],
    scripts: ["To start, I’ll need a few more pieces of information before we further discuss your question."],
    options: [
      { label: "Account holder or eligible sponsor", next: 1 },
      { label: "Third party / non-customer", next: "thirdPartyEnd" },
    ],
  },
  {
    stage: "Verification",
    title: "Tap to Confirm status",
    body:
      "Check whether Tap to Confirm is already complete, available but pending, failed, expired, or unavailable.",
    actions: ["Review TTC status", "Ask customer to complete TTC when available", "Move to manual PII if TTC cannot be completed"],
    articles: ["Voice - PII", "PII Verification workbook"],
    tools: ["CF1 Lightning", "Cash App in-app prompt"],
    scripts: [
      "We sent a prompt to your Cash App account to help make sure that it's really you requesting support. Please open your app and look for a screen that says, 'Are you requesting support?' and tap 'Yes, I am'.",
    ],
    options: [
      { label: "TTC successful", next: 3 },
      { label: "TTC failed or unavailable", next: 2 },
    ],
  },
  {
    stage: "Verification",
    title: "Manual PII verification",
    body:
      "Verify the approved Voice PII details without hints. If a detail does not match, retry only the failed item and track attempts.",
    actions: ["Request full legal name and account identifier", "Validate required PII", "Allow up to three attempts"],
    articles: ["Voice - PII", "Accounts - Identity Verification (IDV)"],
    tools: ["CF1 Lightning", "Manual verification flow"],
    scripts: ["That does not match what we have in the system. Is there different information we can try?"],
    options: [
      { label: "Manual PII successful", next: 3 },
      { label: "Three attempts failed", next: "unableToVerify" },
    ],
  },
  {
    stage: "Verification",
    title: "IDV status assessment",
    body:
      "Determine whether the account is identity verified and whether the customer’s issue is IDV-related before continuing into the issue workflow.",
    actions: ["Check IDV status", "Identify IDV-related blockers", "Route to Identity Hub guidance when needed"],
    articles: ["Accounts - Identity Verification (IDV)", "Voice - PII"],
    tools: ["Identity Hub", "CF1 Lightning"],
    scripts: ["Verification helps Cash App provide a safe and secure environment to send and receive money."],
    options: [
      { label: "Verified or TTC sufficient", next: "workflowStart" },
      { label: "IDV support needed", next: "idvSupport" },
    ],
  },
];

const terminalSteps = {
  thirdPartyEnd: {
    stage: "Call Closure",
    title: "Third-party caller",
    body: "Provide only general support information. Do not disclose account-specific information.",
    actions: ["Explain privacy limitation", "Redirect account holder to contact support directly", "Document caller type"],
    articles: ["Voice - PII", "Voice - Case standard practices"],
    tools: ["CF1 Lightning"],
    scripts: ["For account security, we can only discuss account-specific details with the account holder after verification."],
    options: [],
  },
  unableToVerify: {
    stage: "Call Closure",
    title: "Unable to verify PII",
    body:
      "Stop account-specific support. Direct the customer to in-app support and attach the Voice Only - Unable to Verify PII guidance.",
    actions: ["Do not disclose account details", "Create manual case if required", "Provide in-app support instructions"],
    articles: ["Voice - PII", "Accounts - Identity Verification (IDV)"],
    tools: ["CF1 Lightning", "In-app Support"],
    scripts: [
      "In order to answer account-specific questions, you’ll need to reach out through your app: Profile icon, Support, select the issue, then Contact Support.",
    ],
    options: [],
  },
  idvSupport: {
    stage: "IDV Support",
    title: "Identity verification assistance",
    body:
      "Use Identity Hub guidance, provide general IDV information, and troubleshoot supported IDV scenarios such as no government ID, no SSN/ITIN, retry requests, underage, or app issues.",
    actions: ["Confirm whether IDV was attempted three times", "Provide Identity Hub guidance", "Use IDV troubleshooting scenario"],
    articles: ["Accounts - Identity Verification (IDV)"],
    tools: ["Identity Hub", "CF1 Lightning"],
    scripts: ["You can manage identity verification from Security & Privacy in the app by choosing Verify."],
    options: [],
  },
};

const workflowDefinitions = [
  {
    id: "accountAccess",
    category: "Account Access",
    title: "Account Access Recovery",
    purpose: "Assist customers who cannot access their account.",
    articleTitles: [
      "Account Access - Overview, Identification, and Troubleshooting",
      "Account Access - Pre Action Steps",
      "Account Access - Voice",
      "Account Access - Cash Families",
      "Voice - PII",
      "Accounts - Identity Verification (IDV)",
    ],
    steps: [
      {
        stage: "Investigation",
        title: "Complete pre-action checklist",
        body:
          "Confirm account status, Risk closure, ATO indicators, lost or stolen device claims, balances, and whether Account A and Account B can be located.",
        actions: ["Complete Account Access pre-action steps", "Do not unlink aliases unless the workflow states to", "Gather Account A and Account B identifiers"],
        tools: ["CF1 Lightning", "Regulator", "Shared Assets graph"],
        scripts: ["To help you recover your Cash App account, please try logging in with another linked alias or $cashtag first."],
        options: [
          { label: "Checklist complete", next: 1 },
          { label: "Account recovery may work", next: 2 },
        ],
      },
      {
        stage: "Assessment",
        title: "Choose Account Access action",
        body:
          "Select the correct action: Reopen Account for closed-account documents or disputes, Temporary Access for Investing or Borrow, Grant Account Access for remaining Bitcoin/Savings/Gift Card balances, or Balance Transfer for cash-only balance scenarios.",
        actions: ["Assess balances and product flags", "Confirm consent before Regulator action", "Escalate Investing or Borrow cases as required"],
        tools: ["Regulator", "Investing Triage queue"],
        scripts: ["Based on the information you provided, we’ll move the appropriate login access or balance after you confirm how you’d like to proceed."],
        options: [
          { label: "Reopen / temporary / grant access", next: 3 },
          { label: "Balance transfer", next: 4 },
        ],
      },
      {
        stage: "Resolution",
        title: "Login troubleshooting first",
        body:
          "If another alias exists, guide the customer through Account Recovery before using manual Account Access actions.",
        actions: ["Have customer sign out of accidental new account if needed", "Use $cashtag recovery path", "Return to pre-action steps if recovery fails"],
        tools: ["Cash App", "CF1 Lightning"],
        scripts: ["Open Cash App, tap Add a profile to this device, tap '?', then Get help logging in, and choose $Cashtag."],
        options: [{ label: "Recovery failed, continue access workflow", next: 1 }],
      },
      {
        stage: "Resolution",
        title: "Perform access action",
        body:
          "Use the selected Regulator workflow and handle user errors or all other Regulator errors according to the article.",
        actions: ["Confirm required aliases", "Execute selected action in Regulator", "Handle 400 or other Regulator errors"],
        tools: ["Regulator", "CF1 Lightning"],
        scripts: ["I’m going to attempt the access action now. I’ll let you know what the next step is once the system response comes back."],
        options: [{ label: "Action complete", next: 5 }],
      },
      {
        stage: "Resolution",
        title: "Transfer eligible cash balance",
        body:
          "Use Balance Transfer only when the customer wants to move cash from Account B to Account A and no other balance types are present.",
        actions: ["Confirm Account B has cash only", "Confirm sponsorship status if relevant", "Transfer cash balance and document outcome"],
        tools: ["Regulator"],
        scripts: ["I can help move the eligible cash balance after confirming there are no other balance types that need a different process."],
        options: [{ label: "Transfer complete", next: 5 }],
      },
      {
        stage: "Call Closure",
        title: "Document and close",
        body:
          "Document verification, assessment, action taken, result, customer guidance, and any remaining next steps.",
        actions: ["Document outcome", "Provide final customer guidance", "Use CSAT closing statement"],
        tools: ["CF1 Lightning"],
        scripts: ["Thank you for your patience as we worked through this. After we disconnect, a brief survey will be available for your feedback."],
        options: [],
      },
    ],
  },
  {
    id: "missingDirectDeposit",
    category: "Payments",
    title: "Missing Direct Deposit",
    purpose: "Assist customers reporting missing or delayed direct deposits.",
    articleTitles: ["Voice - PII", "Accounts - Identity Verification (IDV)", "Voice - Case standard practices"],
    steps: [
      {
        stage: "Investigation",
        title: "Gather deposit details",
        body:
          "Capture expected deposit date, payer or employer, amount, previous deposit pattern, and whether the sender has confirmed release.",
        actions: ["Collect expected date and amount", "Ask whether payer released funds", "Check account and routing context"],
        tools: ["CF1 Lightning", "Regulator"],
        scripts: ["I’ll check what we can see on this account and ask a few details about the deposit so we can identify the right next step."],
        options: [{ label: "Details gathered", next: 1 }],
      },
      {
        stage: "Assessment",
        title: "Determine status",
        body:
          "Assess whether the deposit is pending, rejected, posted to another account, outside expected timing, or requires escalation.",
        actions: ["Review transaction activity", "Compare expected timing", "Determine if escalation criteria are met"],
        tools: ["CF1 Lightning", "Regulator", "Escalation queue"],
        scripts: ["If the payer has not sent the deposit yet, they’ll need to release it before Cash App can receive it."],
        options: [
          { label: "Provide guidance", next: 2 },
          { label: "Escalation needed", next: 3 },
        ],
      },
      {
        stage: "Resolution",
        title: "Provide deposit guidance",
        body:
          "Explain current status, payer dependency, standard timing, and the customer’s next action.",
        actions: ["Explain findings", "Set expectation for payer or bank timing", "Document details"],
        tools: ["CF1 Lightning"],
        scripts: ["Based on what I can see, the next best step is to confirm the deposit status with the payer."],
        options: [{ label: "Close call", next: 4 }],
      },
      {
        stage: "Resolution",
        title: "Escalate deposit issue",
        body:
          "Escalate when the deposit cannot be resolved with available account details and meets the internal escalation threshold.",
        actions: ["Capture required escalation details", "Route to proper queue", "Set follow-up expectations"],
        tools: ["Escalation queue", "CF1 Lightning"],
        scripts: ["I’m going to route this for additional review. Please keep an eye on your preferred contact method for updates."],
        options: [{ label: "Close call", next: 4 }],
      },
      {
        stage: "Call Closure",
        title: "Close and document",
        body: "Document deposit details, status, guidance, escalation path if used, and closing statement.",
        actions: ["Document outcome", "Use relevant CSAT close", "Confirm no other issues"],
        tools: ["CF1 Lightning"],
        scripts: ["After we disconnect, a brief survey will be available to share your feedback about today’s service."],
        options: [],
      },
    ],
  },
  {
    id: "p2pMisdirected",
    category: "Payments",
    title: "P2P Misdirected Payment",
    purpose: "Assist customers who sent money to an unintended recipient or cannot locate a payment.",
    articleTitles: ["Support - Misdirected or Missing P2P Payments", "Voice - PII", "Accounts - Identity Verification (IDV)"],
    steps: [
      {
        stage: "Investigation",
        title: "Identify who is contacting",
        body:
          "Determine whether the sender, intended recipient, actual recipient, or recipient of an unrecognized payment is contacting support.",
        actions: ["Classify contact party", "Identify specific payment", "Exclude scams, unauthorized transactions, gift cards, and cancel requests"],
        tools: ["CF1 Lightning", "Regulator"],
        scripts: ["Do you know if the sender sees the payment on their end? If they reach out to Cash App support, we can help identify where they sent the funds."],
        options: [
          { label: "Sender is contacting", next: 1 },
          { label: "Recipient is contacting", next: 2 },
        ],
      },
      {
        stage: "Assessment",
        title: "Sender path",
        body:
          "Determine whether funds were sent to the intended recipient’s old account, incorrect recipient, or cannot be located.",
        actions: ["Review sender transaction details", "Check recipient identifier used", "Assess old-account possibility"],
        tools: ["Regulator", "CF1 Lightning"],
        scripts: ["I’ll review the payment details to help identify where the funds were sent and what options are available."],
        options: [{ label: "Resolution identified", next: 3 }],
      },
      {
        stage: "Assessment",
        title: "Recipient path",
        body:
          "If the recipient cannot see the payment, they may need the sender to contact support because sender transaction details are required.",
        actions: ["Confirm payment amount and sender information", "Check if payment arrived", "Ask sender to contact support when required"],
        tools: ["CF1 Lightning"],
        scripts: ["While I can only view your account details, the best way to trace these funds is to have the sender contact us directly."],
        options: [{ label: "Guidance provided", next: 3 }],
      },
      {
        stage: "Resolution",
        title: "Resolve or escalate",
        body:
          "Provide guidance, help locate an old account when appropriate, or escalate to AET when adequate information exists.",
        actions: ["Give next steps", "Escalate to AET if criteria are met", "Document payment identifiers"],
        tools: ["AET escalation", "CF1 Lightning"],
        scripts: ["Do you know if you had any other Cash App accounts that might have received this payment?"],
        options: [{ label: "Close call", next: 4 }],
      },
      {
        stage: "Call Closure",
        title: "Close and document",
        body: "Document contact party, payment details, classification, guidance, and escalation outcome.",
        actions: ["Document outcome", "Use CSAT close", "Confirm no other issue"],
        tools: ["CF1 Lightning"],
        scripts: ["Thank you for working through this with me today. A brief survey will be available after we disconnect."],
        options: [],
      },
    ],
  },
  {
    id: "unauthorizedCard",
    category: "Cash Card",
    title: "Unauthorized Cash Card Transaction",
    purpose: "Assist customers reporting unauthorized card activity.",
    articleTitles: ["Cash App Card - Block or Unblock a Merchant", "Voice - PII", "Accounts - Identity Verification (IDV)"],
    steps: [
      {
        stage: "Investigation",
        title: "Classify card issue",
        body:
          "Confirm whether the customer is reporting an unauthorized card transaction, a merchant block or unblock request, a pending charge, or another card dispute path.",
        actions: ["Identify transaction type", "Check card vs Cash App Pay", "Confirm whether merchant block applies"],
        tools: ["CF1 Lightning", "Regulator"],
        scripts: ["I’ll review the transaction details and confirm whether this is a dispute path or a merchant blocking request."],
        options: [
          { label: "Merchant block / unblock", next: 1 },
          { label: "Unauthorized transaction", next: 2 },
        ],
      },
      {
        stage: "Resolution",
        title: "Block or unblock merchant",
        body:
          "Use the card or Cash App Pay merchant block guidance. Blocking does not restrict existing subscriptions, recurring charges, outstanding balances, or pending transactions.",
        actions: ["Send correct quick text", "Manually block or unblock if customer cannot in app", "Explain limitations"],
        tools: ["CF1 Lightning", "Merchant controls"],
        scripts: ["Blocking a merchant helps prevent new transactions, but it may not stop existing subscriptions or pending transactions."],
        options: [{ label: "Close call", next: 3 }],
      },
      {
        stage: "Assessment",
        title: "Unauthorized card activity",
        body:
          "If the claim only includes Cash App Card transactions, follow the appropriate dispute handling path instead of ATO.",
        actions: ["Confirm device possession context", "Avoid ATO route for card-only claims", "Route to dispute workflow"],
        tools: ["CF1 Lightning", "Dispute workflow"],
        scripts: ["Since this is card-only activity, I’ll route this through the correct card dispute process."],
        options: [{ label: "Close call", next: 3 }],
      },
      {
        stage: "Call Closure",
        title: "Close and document",
        body: "Document transaction type, action taken, limitation explained, and any dispute route used.",
        actions: ["Document result", "Use CSAT close", "Confirm customer understands next steps"],
        tools: ["CF1 Lightning"],
        scripts: ["After we disconnect, a brief survey will be available for your feedback about today’s service."],
        options: [],
      },
    ],
  },
  {
    id: "ato",
    category: "Account Safety",
    title: "Account Takeover (ATO)",
    purpose: "Assist customers reporting unauthorized account access.",
    articleTitles: ["Voice - Account Takeovers (ATO)", "Voice - PII", "Accounts - Identity Verification (IDV)", "Voice - Case standard practices"],
    steps: [
      {
        stage: "Investigation",
        title: "Confirm ATO indicators",
        body:
          "ATO may apply when the customer’s device was in possession, activity includes multiple transaction types, or the customer was directed by fake support to download an app.",
        actions: ["Confirm device possession", "Identify transaction types", "Check for fake support or remote-access indicators"],
        tools: ["CF1 Lightning", "Regulator"],
        scripts: ["I’m going to ask a few questions to understand whether this was unauthorized account access or another dispute path."],
        options: [
          { label: "ATO indicators present", next: 1 },
          { label: "Card-only or lost/stolen device", next: 2 },
        ],
      },
      {
        stage: "Assessment",
        title: "ATO escalation workflow",
        body:
          "Check account closure, locate transactions, review optional answers, and determine if the customer authorized any part of the transaction.",
        actions: ["Review account lock or closure", "Locate provided transactions", "Check duplicate or existing ATO cases"],
        tools: ["Regulator", "Risk ATO queue"],
        scripts: ["I’ll document what you’ve shared and route the case to the team that reviews account takeover reports."],
        options: [{ label: "Escalate or document outcome", next: 3 }],
      },
      {
        stage: "Assessment",
        title: "Use alternate workflow",
        body:
          "Do not escalate to ATO if the device was lost or stolen at the time of activity, or if the claim only includes Cash App Card transactions.",
        actions: ["Route card-only claims to dispute handling", "Route lost/stolen device scenarios appropriately", "Document why ATO was not used"],
        tools: ["CF1 Lightning", "Dispute workflow"],
        scripts: ["This situation follows a different workflow, so I’ll make sure it goes through the correct path."],
        options: [{ label: "Close call", next: 3 }],
      },
      {
        stage: "Call Closure",
        title: "Close and document",
        body:
          "Document ATO indicators, exclusions, customer statements, transactions reviewed, escalation decision, and closing statement.",
        actions: ["Document required details", "Set expectation for review", "Use CSAT close"],
        tools: ["CF1 Lightning", "Risk ATO queue"],
        scripts: ["I understand this has been a challenging experience, and I appreciate your time working through this with me."],
        options: [],
      },
    ],
  },
];

const workflowSelect = document.querySelector("#workflowSelect");
const loadWorkflowButton = document.querySelector("#loadWorkflow");
const resetWorkflowButton = document.querySelector("#resetWorkflow");
const prevStepButton = document.querySelector("#prevStep");
const decisionOptions = document.querySelector("#decisionOptions");
const progressTrack = document.querySelector("#progressTrack");
const knowledgeGrid = document.querySelector("#knowledgeGrid");
const knowledgeSearch = document.querySelector("#knowledgeSearch");

let currentWorkflow = workflowDefinitions[0];
let currentStepKey = 0;
let historyStack = [];

function unique(items) {
  return [...new Set(items.filter(Boolean))];
}

function getCurrentStep() {
  if (typeof currentStepKey === "number" && currentStepKey < sharedVerificationSteps.length) {
    return sharedVerificationSteps[currentStepKey];
  }
  if (currentStepKey === "workflowStart") {
    return currentWorkflow.steps[0];
  }
  if (typeof currentStepKey === "number") {
    return currentWorkflow.steps[currentStepKey - sharedVerificationSteps.length];
  }
  return terminalSteps[currentStepKey];
}

function workflowStepToGlobal(index) {
  return sharedVerificationSteps.length + index;
}

function resolveNext(next) {
  if (next === "workflowStart") return workflowStepToGlobal(0);
  if (typeof next === "number" && currentStepKey >= sharedVerificationSteps.length) {
    return workflowStepToGlobal(next);
  }
  return next;
}

function setView(viewName) {
  if (!viewName) return;
  document.querySelectorAll(".view").forEach((view) => view.classList.remove("active"));
  document.querySelectorAll(".nav-button").forEach((button) => {
    button.classList.toggle("active", button.dataset.view === viewName);
  });
  const targetView = document.querySelector(`#${viewName}View`);
  if (targetView) targetView.classList.add("active");
}

function renderResources(step) {
  const articleSet = unique([...(step.articles || []), ...(currentWorkflow.articleTitles || [])]);
  renderList("#actionsList", step.actions || []);
  renderList("#articlesList", articleSet);
  renderList("#toolsList", [
    "Do not share OTP or security codes.",
    "Always verify before attempting any reset.",
    "Document all steps taken in the case notes.",
    ...(step.tools || []).map((tool) => `Use ${tool} when required.`),
  ]);
  const escalationTarget = document.querySelector("#escalationTarget");
  if (escalationTarget) {
    escalationTarget.textContent =
      currentWorkflow.id === "ato"
        ? "Risk ATO Queue"
        : currentWorkflow.id === "unauthorizedCard"
          ? "Dispute / Card Support Path"
          : currentWorkflow.id === "p2pMisdirected"
            ? "AET Escalation"
            : currentWorkflow.id === "missingDirectDeposit"
              ? "Payments Escalation Queue"
              : "Account Security Team";
  }

  const scriptsList = document.querySelector("#scriptsList");
  scriptsList.innerHTML = "";
  (step.scripts || ["No script guidance for this step."]).forEach((script) => {
    const box = document.createElement("div");
    box.className = "script-box";
    box.innerHTML = `<strong>Script</strong><p>${escapeHtml(script)}</p>`;
    scriptsList.appendChild(box);
  });

  const suggestions = getQuickTextSuggestions(step);
  suggestions.forEach((qt) => {
    const box = document.createElement("div");
    box.className = "script-box";
    box.innerHTML = `<span class="qt-name">${escapeHtml(qt.name)}</span><p>${escapeHtml(qt.text)}</p>`;
    scriptsList.appendChild(box);
  });
}

function renderList(selector, items) {
  const list = document.querySelector(selector);
  list.innerHTML = "";
  if (!items.length) {
    const li = document.createElement("li");
    li.textContent = "No resources assigned.";
    list.appendChild(li);
    return;
  }
  items.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = item;
    list.appendChild(li);
  });
}

function renderProgress() {
  const steps = [
    { title: "Verify Customer", body: "Confirm customer identity", stages: ["Verification", "IDV Support"] },
    { title: "Check Account Status", body: "Determine account standing", stages: ["Investigation", "Assessment"] },
    { title: "Resolve the Issue", body: "Follow recommended actions", stages: ["Resolution"] },
    { title: "Closure & Documentation", body: "Wrap up and document the case", stages: ["Call Closure"] },
  ];
  const currentStage = getCurrentStep().stage;
  progressTrack.innerHTML = "";
  steps.forEach((step, index) => {
    const chip = document.createElement("div");
    chip.className = "progress-step";
    chip.classList.toggle("active", step.stages.includes(currentStage));
    chip.innerHTML = `
      <span class="progress-number">${index + 1}</span>
      <span class="progress-copy">
        <strong>${step.title}</strong>
        <span>${step.body}</span>
      </span>
    `;
    progressTrack.appendChild(chip);
  });
}

function renderStep() {
  const step = getCurrentStep();
  document.querySelector("#stepMeta").textContent = getStepMeta(step);
  document.querySelector("#stepTitle").textContent = step.title;
  document.querySelector("#stepBody").textContent = step.body;
  const outcomeText = document.querySelector("#outcomeText");
  if (outcomeText) outcomeText.textContent = getOutcomeText(step);

  decisionOptions.innerHTML = "";
  (step.options || []).forEach((option) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "decision-button";
    button.textContent = option.label;
    button.addEventListener("click", () => {
      historyStack.push(currentStepKey);
      currentStepKey = resolveNext(option.next);
      renderStep();
    });
    decisionOptions.appendChild(button);
  });

  prevStepButton.disabled = historyStack.length === 0;
  const nextStepFallback = document.querySelector("#nextStepFallback");
  if (nextStepFallback) nextStepFallback.disabled = !(step.options || []).length;
  renderProgress();
  renderResources(step);
}

function loadWorkflow() {
  currentWorkflow = workflowDefinitions.find((workflow) => workflow.id === workflowSelect.value) || workflowDefinitions[0];
  currentStepKey = 0;
  historyStack = [];
  setView("workflow");
  renderStep();
}

function renderKnowledge(filter = "") {
  const normalizedFilter = filter.trim().toLowerCase();
  knowledgeGrid.innerHTML = "";
  articles
    .filter((article) => {
      const haystack = `${article.title} ${article.summary} ${article.tags.join(" ")}`.toLowerCase();
      return haystack.includes(normalizedFilter);
    })
    .forEach((article) => {
      const card = document.createElement("article");
      card.className = "knowledge-card";
      card.innerHTML = `
        <h2>${article.title}</h2>
        <p>${article.summary}</p>
        <div class="tag-row">
          <span class="tag">${article.updated}</span>
          ${article.tags.map((tag) => `<span class="tag">${tag}</span>`).join("")}
        </div>
      `;
      knowledgeGrid.appendChild(card);
    });
}

function init() {
  workflowDefinitions.forEach((workflow) => {
    const option = document.createElement("option");
    option.value = workflow.id;
    option.textContent = workflow.title;
    workflowSelect.appendChild(option);
  });

  document.querySelector("#workflowCount").textContent = workflowDefinitions.length;
  document.querySelector("#articleCount").textContent = articles.length;
  document.querySelector("#toolCount").textContent = unique(workflowDefinitions.flatMap((workflow) => workflow.steps.flatMap((step) => step.tools))).length;

  document.querySelectorAll(".nav-button").forEach((button) => {
    button.addEventListener("click", () => setView(button.dataset.view));
  });

  loadWorkflowButton.addEventListener("click", loadWorkflow);
  resetWorkflowButton.addEventListener("click", loadWorkflow);
  prevStepButton.addEventListener("click", () => {
    if (!historyStack.length) return;
    currentStepKey = historyStack.pop();
    renderStep();
  });
  document.querySelector("#nextStepFallback").addEventListener("click", () => {
    const step = getCurrentStep();
    const firstOption = (step.options || [])[0];
    if (!firstOption) return;
    historyStack.push(currentStepKey);
    currentStepKey = resolveNext(firstOption.next);
    renderStep();
  });
  document.querySelector("#toggleScript").addEventListener("click", (event) => {
    const scriptsList = document.querySelector("#scriptsList");
    const hidden = scriptsList.style.display === "none";
    scriptsList.style.display = hidden ? "" : "none";
    event.currentTarget.textContent = hidden ? "Hide Script ^" : "Show Script v";
  });
  knowledgeSearch.addEventListener("input", (event) => renderKnowledge(event.target.value));

  renderKnowledge();
  setView("workflow");
  renderStep();
}

init();

function getQuickTextSuggestions(step) {
  const haystack = `${currentWorkflow.id} ${currentWorkflow.title} ${currentWorkflow.category} ${step.stage} ${step.title} ${step.body}`.toLowerCase();
  return quickTextLibrary
    .map((qt) => ({
      ...qt,
      score: qt.keywords.reduce((count, keyword) => count + (haystack.includes(keyword.toLowerCase()) ? 1 : 0), 0),
    }))
    .filter((qt) => qt.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, 2);
}

function getStepMeta(step) {
  const total = sharedVerificationSteps.length + currentWorkflow.steps.length;
  let index = 1;
  if (typeof currentStepKey === "number") {
    index = currentStepKey < sharedVerificationSteps.length ? currentStepKey + 1 : currentStepKey + 1;
  }
  return `Step ${Math.min(index, total)} of ${total}: ${step.stage}`;
}

function getOutcomeText(step) {
  if (step.stage === "Verification") return "Customer identity path selected. Continue only after approved verification is complete.";
  if (step.stage === "IDV Support") return "Customer needs identity verification support before issue-specific account handling can continue.";
  if (step.stage === "Investigation") return "Required details gathered. Continue to account status and root-cause assessment.";
  if (step.stage === "Assessment") return "Decision path identified. Follow the recommended resolution or escalation route.";
  if (step.stage === "Resolution") return "Recommended action ready. Confirm consent, complete the tool action, and document the result.";
  return "Workflow ready for closure. Document the outcome and provide the appropriate CSAT closing statement.";
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}
