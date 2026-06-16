// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Empty and Error Recovery - PulseBoard Canary
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Wire interactive controls through the typed actions prop
// 4. Replace placeholder data with props/state

import { BadgeHelp, BarChart3, CircleHelp, CircleUserRound, History, Menu, Pencil, Plus, RefreshCw, Search, Settings, Terminal } from "lucide-react";


export type EmptyAndErrorRecoveryPulseboardCanaryActionId = "new-record-1" | "menu-2" | "help-3" | "account-circle-4" | "retry-load-5" | "clear-filters-6" | "operations-1" | "editor-2" | "settings-3" | "recovery-4" | "support-5" | "logs-6";

export interface EmptyAndErrorRecoveryPulseboardCanaryProps {
  actions?: Partial<Record<EmptyAndErrorRecoveryPulseboardCanaryActionId, () => void>>;

}

export function EmptyAndErrorRecoveryPulseboardCanary({ actions }: EmptyAndErrorRecoveryPulseboardCanaryProps) {
  return (
    <>
      {/* SideNavBar (Shared Component Execution) */}
      <aside className="bg-surface-container h-screen w-64 hidden md:flex flex-col sticky left-0 top-0 border-r border-outline-variant flex-shrink-0 z-20">
      <div className="flex flex-col gap-sm p-md h-full">
      {/* Header */}
      <div className="flex items-center gap-md mb-lg px-sm py-xs">
      <div className="w-10 h-10 rounded-full bg-primary-container flex items-center justify-center text-on-primary-container">
      <BadgeHelp  style={{fontVariationSettings: "'FILL' 1"}} aria-hidden={true} focusable="false" />
      </div>
      <div>
      <h2 className="font-headline-md text-headline-md font-bold text-primary">PulseBoard</h2>
      <p className="font-body-sm text-body-sm text-on-secondary-container">Canary v1.0</p>
      </div>
      </div>
      {/* CTA */}
      <button className="w-full bg-surface-container-lowest border border-outline-variant text-on-surface hover:bg-surface-container-high transition-colors duration-150 rounded-DEFAULT py-sm px-md flex items-center justify-center gap-sm mb-md shadow-sm" type="button" data-action-id="new-record-1" onClick={actions?.["new-record-1"]}>
      <Plus className="text-[18px]" aria-hidden={true} focusable="false" />
      <span className="font-label-caps text-label-caps uppercase">New Record</span>
      </button>
      {/* Navigation Links */}
      <nav className="flex-1 flex flex-col gap-xs">
      <a className="flex items-center gap-md px-md py-sm text-on-secondary-container hover:bg-surface-container-high rounded-lg transition-colors duration-150" href="#" data-action-id="operations-1" onClick={(event) => { event.preventDefault(); actions?.["operations-1"]?.(); }}>
      <BarChart3 aria-hidden={true} focusable="false" />
      <span>Operations</span>
      </a>
      <a className="flex items-center gap-md px-md py-sm text-on-secondary-container hover:bg-surface-container-high rounded-lg transition-colors duration-150" href="#" data-action-id="editor-2" onClick={(event) => { event.preventDefault(); actions?.["editor-2"]?.(); }}>
      <Pencil aria-hidden={true} focusable="false" />
      <span>Editor</span>
      </a>
      <a className="flex items-center gap-md px-md py-sm text-on-secondary-container hover:bg-surface-container-high rounded-lg transition-colors duration-150" href="#" data-action-id="settings-3" onClick={(event) => { event.preventDefault(); actions?.["settings-3"]?.(); }}>
      <Settings aria-hidden={true} focusable="false" />
      <span>Settings</span>
      </a>
      {/* Active State Applied */}
      <a className="flex items-center gap-md px-md py-sm bg-primary-container text-on-primary-container rounded-lg font-semibold transition-colors duration-150" href="#" data-action-id="recovery-4" onClick={(event) => { event.preventDefault(); actions?.["recovery-4"]?.(); }}>
      <BadgeHelp  style={{fontVariationSettings: "'FILL' 1"}} aria-hidden={true} focusable="false" />
      <span>Recovery</span>
      </a>
      </nav>
      {/* Footer Links */}
      <div className="mt-auto flex flex-col gap-xs pt-md border-t border-outline-variant">
      <a className="flex items-center gap-md px-md py-sm text-on-secondary-container hover:bg-surface-container-high rounded-lg transition-colors duration-150" href="#" data-action-id="support-5" onClick={(event) => { event.preventDefault(); actions?.["support-5"]?.(); }}>
      <BadgeHelp className="text-[20px]" aria-hidden={true} focusable="false" />
      <span className="font-body-sm text-body-sm">Support</span>
      </a>
      <a className="flex items-center gap-md px-md py-sm text-on-secondary-container hover:bg-surface-container-high rounded-lg transition-colors duration-150" href="#" data-action-id="logs-6" onClick={(event) => { event.preventDefault(); actions?.["logs-6"]?.(); }}>
      <History className="text-[20px]" aria-hidden={true} focusable="false" />
      <span className="font-body-sm text-body-sm">Logs</span>
      </a>
      </div>
      </div>
      </aside>
      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0 relative h-full">
      {/* TopNavBar (Shared Component Execution) */}
      <header className="bg-surface-container-lowest text-primary docked full-width top-0 border-b border-outline-variant flex justify-between items-center w-full px-lg py-sm h-16 z-10 flex-shrink-0">
      <div className="flex items-center gap-md">
      <button className="md:hidden text-on-surface-variant hover:bg-surface-container rounded-DEFAULT p-xs transition-colors duration-200 ease-in-out" type="button" aria-label="Menu" data-action-id="menu-2" onClick={actions?.["menu-2"]}>
      <Menu aria-hidden={true} focusable="false" />
      </button>
      <h1 className="font-display-lg text-display-lg font-bold text-primary tracking-tight md:block hidden">PulseBoard Canary</h1>
      <h1 className="font-display-lg-mobile text-display-lg-mobile font-bold text-primary tracking-tight md:hidden">PulseBoard</h1>
      </div>
      <div className="flex items-center gap-md">
      {/* Search Bar: on_right */}
      <div className="relative hidden sm:block">
      <Search className="absolute left-sm top-1/2 -translate-y-1/2 text-on-surface-variant text-[20px]" aria-hidden={true} focusable="false" />
      <input className="bg-surface text-on-surface border border-outline-variant rounded-DEFAULT pl-xl pr-md py-xs text-body-sm focus:outline-none focus:border-primary-container focus:ring-1 focus:ring-primary-container transition-colors w-64 placeholder:text-on-surface-variant" placeholder="Search telemetry..." type="text" />
      </div>
      {/* Trailing Icons */}
      <button className="text-on-surface-variant hover:bg-surface-container rounded-full p-xs transition-colors duration-200 ease-in-out flex items-center justify-center" type="button" aria-label="Help" data-action-id="help-3" onClick={actions?.["help-3"]}>
      <CircleHelp aria-hidden={true} focusable="false" />
      </button>
      <button className="text-on-surface-variant hover:bg-surface-container rounded-full p-xs transition-colors duration-200 ease-in-out flex items-center justify-center" type="button" aria-label="Account Circle" data-action-id="account-circle-4" onClick={actions?.["account-circle-4"]}>
      <CircleUserRound aria-hidden={true} focusable="false" />
      </button>
      </div>
      </header>
      {/* Canvas Background Layer */}
      <div className="canvas-bg"></div>
      {/* Recovery / Empty State Canvas */}
      <main className="flex-1 overflow-y-auto relative z-10 p-md md:p-xl flex items-center justify-center">
      {/* High-end Bento Grid Layout for Error Recovery */}
      <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-12 gap-md items-start">
      {/* Primary Action & Status Panel (Span 8) */}
      <div className="md:col-span-8 bg-surface-container-lowest border border-outline-variant rounded-xl overflow-hidden shadow-sm flex flex-col h-full min-h-[400px]">
      {/* Status Header Indicator */}
      <div className="h-unit w-full bg-error"></div>
      <div className="p-xl flex-1 flex flex-col items-center justify-center text-center">
      {/* Deterministic Indicator */}
      <div className="w-20 h-20 rounded-full bg-error-container flex items-center justify-center mb-lg relative">
      <BadgeHelp className="text-error text-[40px]" aria-hidden={true} focusable="false" />
      {/* Micro-interaction ring */}
      <div className="absolute inset-0 rounded-full border border-error opacity-20 animate-ping"></div>
      </div>
      <h2 className="font-display-lg text-display-lg text-on-surface mb-sm">Telemetry Sync Failed</h2>
      <p className="font-body-md text-body-md text-on-surface-variant max-w-lg mx-auto mb-xl">
                                  The connection to the primary data stream timed out or returned no records matching your current active filters. Adjust your parameters or re-establish the connection to resume monitoring.
                              </p>
      {/* Action Controls */}
      <div className="flex flex-col sm:flex-row items-center gap-md w-full max-w-md justify-center">
      <button className="w-full sm:w-auto bg-primary-container text-on-primary-container font-semibold rounded-DEFAULT px-lg py-sm shadow-sm hover:brightness-105 active:scale-95 transition-colors flex items-center justify-center gap-sm" type="button" data-action-id="retry-load-5" onClick={actions?.["retry-load-5"]}>
      <RefreshCw className="text-[20px]" aria-hidden={true} focusable="false" />
                                      Retry Load
                                  </button>
      <button className="w-full sm:w-auto bg-surface-container-lowest text-on-surface border border-outline-variant font-medium rounded-DEFAULT px-lg py-sm hover:bg-surface-container transition-colors flex items-center justify-center gap-sm" type="button" data-action-id="clear-filters-6" onClick={actions?.["clear-filters-6"]}>
      <BadgeHelp className="text-[20px]" aria-hidden={true} focusable="false" />
                                      Clear Filters
                                  </button>
      </div>
      </div>
      </div>
      {/* Contextual Diagnostic Panel (Span 4) */}
      <div className="md:col-span-4 flex flex-col gap-md h-full">
      {/* Diagnostic Data Card */}
      <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-md flex-1">
      <div className="flex items-center justify-between border-b border-outline-variant pb-sm mb-sm">
      <h3 className="font-label-caps text-label-caps text-on-surface-variant uppercase tracking-wider flex items-center gap-xs">
      <Terminal className="text-[16px]" aria-hidden={true} focusable="false" /> System Context
                                  </h3>
      <span className="px-xs py-xs bg-error-container text-error rounded text-[10px] font-bold">ERR_TIMEOUT</span>
      </div>
      <div className="font-label-mono text-label-mono text-on-surface-variant space-y-sm mt-md">
      <div className="flex justify-between">
      <span className="opacity-70">Timestamp:</span>
      <span className="text-on-surface">2023-10-27 14:02:11Z</span>
      </div>
      <div className="flex justify-between">
      <span className="opacity-70">Endpoint:</span>
      <span className="text-on-surface">/api/v1/metrics/stream</span>
      </div>
      <div className="flex justify-between">
      <span className="opacity-70">Active Filters:</span>
      <span className="text-on-surface">Region=EU, Severity&gt;2</span>
      </div>
      <div className="flex justify-between">
      <span className="opacity-70">Latency:</span>
      <span className="text-error font-bold">&gt; 5000ms</span>
      </div>
      </div>
      </div>
      {/* Secondary Fallback Action Card */}
      <div className="bg-surface-container border border-outline-variant rounded-xl p-md flex items-center justify-between group cursor-pointer hover:bg-surface-container-high transition-colors">
      <div>
      <h4 className="font-headline-md text-headline-md text-on-surface text-[16px] mb-xs">Bypass Stream</h4>
      <p className="font-body-sm text-body-sm text-on-surface-variant">Create a static manual entry instead.</p>
      </div>
      <div className="w-10 h-10 rounded-full bg-surface-container-lowest border border-outline-variant flex items-center justify-center group-hover:bg-primary-container group-hover:text-on-primary-container transition-colors">
      <Plus aria-hidden={true} focusable="false" />
      </div>
      </div>
      </div>
      </div>
      </main>
      </div>
    </>
  );
}
