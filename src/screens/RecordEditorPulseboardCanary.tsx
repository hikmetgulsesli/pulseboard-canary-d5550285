// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Record Editor - PulseBoard Canary
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Wire interactive controls through the typed actions prop
// 4. Replace placeholder data with props/state

import { BadgeHelp, BarChart3, ChevronDown, ChevronRight, CircleAlert, CircleHelp, CircleUserRound, History, Pencil, Plus, Save, Search, Settings, TriangleAlert } from "lucide-react";


export type RecordEditorPulseboardCanaryActionId = "new-record-1" | "help-2" | "account-circle-3" | "discard-4" | "save-now-5" | "cancel-6" | "save-record-7" | "operations-1" | "editor-2" | "settings-3" | "recovery-4" | "support-5" | "logs-6" | "operations-7";

export interface RecordEditorPulseboardCanaryProps {
  actions?: Partial<Record<RecordEditorPulseboardCanaryActionId, () => void>>;

}

export function RecordEditorPulseboardCanary({ actions }: RecordEditorPulseboardCanaryProps) {
  return (
    <>
      {/* SideNavBar */}
      <nav className="h-screen w-64 flex flex-col sticky left-0 top-0 border-r border-outline-variant dark:border-outline bg-surface-container dark:bg-on-secondary-fixed text-primary dark:text-primary-fixed-dim font-body-md text-body-md flex flex-col gap-sm p-md h-full z-20">
      {/* Header */}
      <div className="mb-lg flex items-center gap-sm">
      <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-on-primary font-bold shadow-sm">PA</div>
      <div className="flex-1 min-w-0">
      <div className="font-headline-md text-headline-md font-bold text-primary dark:text-primary-fixed-dim truncate">PulseBoard</div>
      <div className="text-on-secondary-container text-body-sm truncate">Canary v1.0</div>
      </div>
      </div>
      {/* CTA */}
      <button className="mb-md w-full bg-primary-container text-on-primary-container font-headline-md text-headline-md py-sm px-md rounded-lg hover:bg-tertiary-fixed transition-colors duration-150 flex items-center justify-center gap-sm shadow-sm border border-transparent" type="button" data-action-id="new-record-1" onClick={actions?.["new-record-1"]}>
      <Plus aria-hidden={true} focusable="false" /> New Record
              </button>
      {/* Tabs */}
      <ul className="flex flex-col gap-unit flex-1">
      <li>
      <a className="flex items-center gap-sm px-md py-sm text-on-secondary-container dark:text-secondary-fixed-dim hover:bg-surface-container-high dark:hover:bg-secondary-container rounded-lg transition-colors duration-150" href="#" data-action-id="operations-1" onClick={(event) => { event.preventDefault(); actions?.["operations-1"]?.(); }}>
      <BarChart3 aria-hidden={true} focusable="false" /> Operations
                      </a>
      </li>
      <li>
      {/* Active State Logic Applied Here based on prompt intent */}
      <a className="flex items-center gap-sm px-md py-sm bg-primary-container dark:bg-on-primary-fixed-variant text-on-primary-container dark:text-primary-fixed rounded-lg font-semibold transition-colors duration-150 shadow-sm" href="#" data-action-id="editor-2" onClick={(event) => { event.preventDefault(); actions?.["editor-2"]?.(); }}>
      <Pencil aria-hidden={true} focusable="false" /> Editor
                      </a>
      </li>
      <li>
      <a className="flex items-center gap-sm px-md py-sm text-on-secondary-container dark:text-secondary-fixed-dim hover:bg-surface-container-high dark:hover:bg-secondary-container rounded-lg transition-colors duration-150" href="#" data-action-id="settings-3" onClick={(event) => { event.preventDefault(); actions?.["settings-3"]?.(); }}>
      <Settings aria-hidden={true} focusable="false" /> Settings
                      </a>
      </li>
      <li>
      <a className="flex items-center gap-sm px-md py-sm text-on-secondary-container dark:text-secondary-fixed-dim hover:bg-surface-container-high dark:hover:bg-secondary-container rounded-lg transition-colors duration-150" href="#" data-action-id="recovery-4" onClick={(event) => { event.preventDefault(); actions?.["recovery-4"]?.(); }}>
      <BadgeHelp aria-hidden={true} focusable="false" /> Recovery
                      </a>
      </li>
      </ul>
      {/* Footer Tabs */}
      <ul className="flex flex-col gap-unit mt-auto border-t border-outline-variant pt-sm">
      <li>
      <a className="flex items-center gap-sm px-md py-sm text-on-secondary-container dark:text-secondary-fixed-dim hover:bg-surface-container-high dark:hover:bg-secondary-container rounded-lg transition-colors duration-150" href="#" data-action-id="support-5" onClick={(event) => { event.preventDefault(); actions?.["support-5"]?.(); }}>
      <BadgeHelp aria-hidden={true} focusable="false" /> Support
                      </a>
      </li>
      <li>
      <a className="flex items-center gap-sm px-md py-sm text-on-secondary-container dark:text-secondary-fixed-dim hover:bg-surface-container-high dark:hover:bg-secondary-container rounded-lg transition-colors duration-150" href="#" data-action-id="logs-6" onClick={(event) => { event.preventDefault(); actions?.["logs-6"]?.(); }}>
      <History aria-hidden={true} focusable="false" /> Logs
                      </a>
      </li>
      </ul>
      </nav>
      {/* Main Workspace Area */}
      <div className="flex-1 flex flex-col min-w-0 bg-background">
      {/* TopNavBar */}
      <header className="flex justify-between items-center w-full px-lg py-sm h-16 bg-surface-container-lowest dark:bg-on-surface text-primary dark:text-primary-fixed-dim font-headline-md text-headline-md docked full-width top-0 border-b border-outline-variant dark:border-outline duration-200 ease-in-out z-10 shrink-0">
      <div className="font-display-lg text-display-lg font-bold text-primary dark:text-primary-fixed-dim tracking-tight">PulseBoard Canary</div>
      <div className="flex items-center gap-md">
      <div className="relative flex items-center">
      <Search className="absolute right-sm text-on-surface-variant pointer-events-none text-body-md" aria-hidden={true} focusable="false" />
      <input className="pl-sm pr-xl py-xs w-64 bg-surface-container-low border border-outline-variant rounded focus:outline-none focus:border-primary-container focus:ring-1 focus:ring-primary-container transition-colors font-body-sm text-body-sm text-on-surface placeholder-on-surface-variant" placeholder="Search records..." type="text" />
      </div>
      <div className="flex items-center gap-unit">
      <button aria-label="help" className="w-8 h-8 flex items-center justify-center text-on-surface-variant dark:text-surface-variant hover:bg-surface-container dark:hover:bg-surface-variant transition-colors rounded-full" type="button" data-action-id="help-2" onClick={actions?.["help-2"]}>
      <CircleHelp aria-hidden={true} focusable="false" />
      </button>
      <button aria-label="account_circle" className="w-8 h-8 flex items-center justify-center text-on-surface-variant dark:text-surface-variant hover:bg-surface-container dark:hover:bg-surface-variant transition-colors rounded-full" type="button" data-action-id="account-circle-3" onClick={actions?.["account-circle-3"]}>
      <CircleUserRound aria-hidden={true} focusable="false" />
      </button>
      </div>
      </div>
      </header>
      {/* Main Content Area */}
      <main className="flex-1 overflow-y-auto relative flex flex-col items-center py-lg px-gutter md:px-lg lg:px-xl">
      {/* Unsaved Changes Banner (Sticky) */}
      <div className="w-full max-w-[container-max] mb-lg bg-tertiary-fixed text-on-tertiary-fixed border border-primary-container rounded-lg p-sm flex items-center justify-between shadow-sm animate-pulse" style={{animationDuration: "3s"}}>
      <div className="flex items-center gap-sm">
      <TriangleAlert className="fill text-primary" aria-hidden={true} focusable="false" />
      <span className="font-headline-md text-body-md font-semibold">You have unsaved changes</span>
      </div>
      <div className="flex gap-sm">
      <button className="px-sm py-xs text-body-sm font-semibold text-on-tertiary-fixed hover:bg-surface-tint/10 rounded transition-colors" type="button" data-action-id="discard-4" onClick={actions?.["discard-4"]}>Discard</button>
      <button className="px-sm py-xs bg-primary text-on-primary text-body-sm font-semibold rounded hover:bg-surface-tint transition-colors" type="button" data-action-id="save-now-5" onClick={actions?.["save-now-5"]}>Save Now</button>
      </div>
      </div>
      {/* Page Header */}
      <div className="w-full max-w-[container-max] mb-lg flex justify-between items-end">
      <div>
      <div className="flex items-center gap-sm text-on-surface-variant mb-unit">
      <a className="hover:text-primary transition-colors font-body-sm text-body-sm" href="#" data-action-id="operations-7" onClick={(event) => { event.preventDefault(); actions?.["operations-7"]?.(); }}>Operations</a>
      <ChevronRight  style={{fontSize: "16px"}} aria-hidden={true} focusable="false" />
      <span className="font-body-sm text-body-sm">Records</span>
      </div>
      <h1 className="font-display-lg text-display-lg text-on-surface">Edit Record: <span className="font-label-mono text-headline-md ml-sm px-sm py-unit bg-surface-container rounded border border-outline-variant text-primary">REC-8492A</span></h1>
      </div>
      <div className="flex gap-md">
      <button className="px-md py-sm bg-surface-container-lowest border border-outline-variant text-on-surface rounded-lg hover:bg-surface-container-low transition-colors font-headline-md text-body-md shadow-sm" type="button" data-action-id="cancel-6" onClick={actions?.["cancel-6"]}>Cancel</button>
      <button className="px-md py-sm bg-primary-container text-on-primary-container rounded-lg hover:bg-tertiary-fixed transition-colors font-headline-md text-body-md flex items-center gap-sm shadow-sm" type="button" data-action-id="save-record-7" onClick={actions?.["save-record-7"]}>
      <Save  style={{fontSize: "18px"}} aria-hidden={true} focusable="false" /> Save Record
                          </button>
      </div>
      </div>
      {/* Editor Form Container (Bento Grid Style) */}
      <div className="w-full max-w-[container-max] grid grid-cols-1 lg:grid-cols-12 gap-lg pb-xl">
      {/* Primary Details Column */}
      <div className="lg:col-span-8 flex flex-col gap-lg">
      {/* Core Information Card */}
      <section className="bg-surface-container-lowest border border-outline-variant rounded-xl overflow-hidden">
      <div className="bg-surface-bright border-b border-outline-variant px-md py-sm">
      <h2 className="font-headline-md text-headline-md text-on-surface">Core Information</h2>
      </div>
      <div className="p-md flex flex-col gap-lg">
      {/* Record Name (Error State Example) */}
      <div className="flex flex-col gap-unit relative">
      <label className="font-headline-md text-body-sm text-on-surface flex items-center gap-xs" htmlFor="recordName">
                                          Record Name <span className="text-error">*</span>
      </label>
      <input className="w-full bg-surface-container-lowest border border-error rounded px-sm py-sm focus:outline-none focus:ring-1 focus:ring-error text-on-surface font-body-md text-body-md transition-shadow" id="recordName" type="text" defaultValue="" />
      <div className="text-error font-body-sm text-body-sm flex items-center gap-xs mt-xs">
      <CircleAlert  style={{fontSize: "14px"}} aria-hidden={true} focusable="false" /> Name is required
                                      </div>
      </div>
      {/* Description (Optional) */}
      <div className="flex flex-col gap-unit">
      <label className="font-headline-md text-body-sm text-on-surface flex justify-between" htmlFor="recordDescription">
      <span>Description <span className="text-on-surface-variant font-normal">(Optional)</span></span>
      <span className="text-on-surface-variant font-label-mono text-label-mono">0 / 500</span>
      </label>
      <textarea className="w-full bg-surface-container-lowest border border-outline-variant rounded px-sm py-sm focus:outline-none focus:border-primary-container focus:ring-1 focus:ring-primary-container text-on-surface font-body-md text-body-md resize-y transition-shadow" id="recordDescription" rows={4}></textarea>
      </div>
      </div>
      </section>
      {/* Technical Parameters Card */}
      <section className="bg-surface-container-lowest border border-outline-variant rounded-xl overflow-hidden">
      <div className="bg-surface-bright border-b border-outline-variant px-md py-sm">
      <h2 className="font-headline-md text-headline-md text-on-surface">Technical Parameters</h2>
      </div>
      <div className="p-md grid grid-cols-1 md:grid-cols-2 gap-lg">
      <div className="flex flex-col gap-unit">
      <label className="font-headline-md text-body-sm text-on-surface flex items-center gap-xs" htmlFor="endpointUrl">
                                          Endpoint URL <span className="text-error">*</span>
      </label>
      <div className="flex">
      <span className="inline-flex items-center px-sm rounded-l border border-r-0 border-outline-variant bg-surface-container-low text-on-surface-variant font-label-mono text-label-mono">https://</span>
      <input className="flex-1 min-w-0 bg-surface-container-lowest border border-outline-variant rounded-r px-sm py-sm focus:outline-none focus:border-primary-container focus:ring-1 focus:ring-primary-container text-on-surface font-label-mono text-body-sm transition-shadow" id="endpointUrl" type="text" defaultValue="api.internal.pulse/v2/data" />
      </div>
      </div>
      <div className="flex flex-col gap-unit">
      <label className="font-headline-md text-body-sm text-on-surface flex items-center gap-xs" htmlFor="timeout">
                                          Timeout (ms) <span className="text-error">*</span>
      </label>
      <input className="w-full bg-surface-container-lowest border border-outline-variant rounded px-sm py-sm focus:outline-none focus:border-primary-container focus:ring-1 focus:ring-primary-container text-on-surface font-label-mono text-body-sm transition-shadow" id="timeout" type="number" defaultValue="5000" />
      </div>
      </div>
      </section>
      </div>
      {/* Secondary Metadata Column */}
      <div className="lg:col-span-4 flex flex-col gap-lg">
      {/* Classification Card */}
      <section className="bg-surface-container-lowest border border-outline-variant rounded-xl overflow-hidden">
      <div className="bg-surface-bright border-b border-outline-variant px-md py-sm">
      <h2 className="font-headline-md text-headline-md text-on-surface">Classification</h2>
      </div>
      <div className="p-md flex flex-col gap-lg">
      {/* Status */}
      <div className="flex flex-col gap-unit">
      <label className="font-headline-md text-body-sm text-on-surface flex items-center gap-xs mb-xs">
                                          Status <span className="text-error">*</span>
      </label>
      <div className="flex gap-sm">
      <label className="flex-1 cursor-pointer">
      <input defaultChecked={true} className="peer sr-only" name="status" type="radio" defaultValue="active" />
      <div className="text-center px-sm py-xs border border-outline-variant rounded bg-surface-container-lowest text-on-surface-variant peer-checked:bg-primary-container/20 peer-checked:border-primary-container peer-checked:text-on-primary-fixed peer-checked:font-semibold transition-colors">
                                                  Active
                                              </div>
      </label>
      <label className="flex-1 cursor-pointer">
      <input className="peer sr-only" name="status" type="radio" defaultValue="draft" />
      <div className="text-center px-sm py-xs border border-outline-variant rounded bg-surface-container-lowest text-on-surface-variant peer-checked:bg-surface-variant peer-checked:border-on-surface-variant peer-checked:text-on-surface peer-checked:font-semibold transition-colors">
                                                  Draft
                                              </div>
      </label>
      <label className="flex-1 cursor-pointer">
      <input className="peer sr-only" name="status" type="radio" defaultValue="archived" />
      <div className="text-center px-sm py-xs border border-outline-variant rounded bg-surface-container-lowest text-on-surface-variant peer-checked:bg-error-container peer-checked:border-error peer-checked:text-on-error-container peer-checked:font-semibold transition-colors">
                                                  Archived
                                              </div>
      </label>
      </div>
      </div>
      {/* Category */}
      <div className="flex flex-col gap-unit">
      <label className="font-headline-md text-body-sm text-on-surface flex items-center gap-xs" htmlFor="category">
                                          Category <span className="text-error">*</span>
      </label>
      <div className="relative">
      <select className="w-full appearance-none bg-surface-container-lowest border border-outline-variant rounded px-sm py-sm focus:outline-none focus:border-primary-container focus:ring-1 focus:ring-primary-container text-on-surface font-body-md text-body-md pr-xl transition-shadow cursor-pointer" id="category">
      <option disabled={true} value="">Select category</option>
      <option value="infrastructure">Infrastructure</option>
      <option selected={true} value="application">Application Logic</option>
      <option value="security">Security</option>
      <option value="network">Network Routing</option>
      </select>
      <ChevronDown className="absolute right-sm top-1/2 -translate-y-1/2 pointer-events-none text-on-surface-variant" aria-hidden={true} focusable="false" />
      </div>
      </div>
      {/* Priority */}
      <div className="flex flex-col gap-unit">
      <label className="font-headline-md text-body-sm text-on-surface flex items-center gap-xs" htmlFor="priority">
                                          Priority <span className="text-error">*</span>
      </label>
      <div className="relative">
      <select className="w-full appearance-none bg-surface-container-lowest border border-outline-variant rounded px-sm py-sm focus:outline-none focus:border-primary-container focus:ring-1 focus:ring-primary-container text-on-surface font-body-md text-body-md pr-xl transition-shadow cursor-pointer" id="priority">
      <option value="p1">P1 - Critical</option>
      <option selected={true} value="p2">P2 - High</option>
      <option value="p3">P3 - Medium</option>
      <option value="p4">P4 - Low</option>
      </select>
      <ChevronDown className="absolute right-sm top-1/2 -translate-y-1/2 pointer-events-none text-on-surface-variant" aria-hidden={true} focusable="false" />
      </div>
      </div>
      </div>
      </section>
      {/* Audit Trail Snippet */}
      <section className="bg-surface-bright border border-outline-variant rounded-xl p-md">
      <h3 className="font-label-caps text-label-caps text-on-surface-variant tracking-wider mb-sm uppercase">Audit Metadata</h3>
      <div className="flex flex-col gap-sm font-label-mono text-label-mono text-on-surface-variant">
      <div className="flex justify-between border-b border-outline-variant/50 pb-xs">
      <span>Created:</span>
      <span className="text-on-surface">2023-10-27 14:32Z</span>
      </div>
      <div className="flex justify-between border-b border-outline-variant/50 pb-xs">
      <span>Author:</span>
      <span className="text-on-surface">System Agent</span>
      </div>
      <div className="flex justify-between pb-xs">
      <span>Last Mod:</span>
      <span className="text-primary font-semibold">Unsaved Changes</span>
      </div>
      </div>
      </section>
      </div>
      </div>
      </main>
      </div>
    </>
  );
}
