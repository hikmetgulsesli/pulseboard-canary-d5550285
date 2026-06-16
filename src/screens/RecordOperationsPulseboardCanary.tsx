// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Record Operations - PulseBoard Canary
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Wire interactive controls through the typed actions prop
// 4. Replace placeholder data with props/state

import { BadgeHelp, BarChart3, Bolt, Check, CheckCircle2, CircleHelp, CircleUserRound, Database, History, Pencil, Plus, RefreshCw, Search, Settings, X } from "lucide-react";


export type RecordOperationsPulseboardCanaryActionId = "new-record-1" | "help-2" | "account-circle-3" | "retry-load-4" | "edit-5" | "edit-6" | "edit-7" | "edit-8" | "edit-9" | "close-10" | "pause-11" | "terminate-12" | "operations-1" | "editor-2" | "settings-3" | "recovery-4" | "support-5" | "logs-6";

export interface RecordOperationsPulseboardCanaryProps {
  actions?: Partial<Record<RecordOperationsPulseboardCanaryActionId, () => void>>;

}

export function RecordOperationsPulseboardCanary({ actions }: RecordOperationsPulseboardCanaryProps) {
  return (
    <>
      {/* SideNavBar */}
      <nav className="bg-surface-container dark:bg-on-secondary-fixed h-screen w-64 flex flex-col sticky left-0 top-0 border-r border-outline-variant dark:border-outline flex-shrink-0 hidden md:flex z-20">
      <div className="flex flex-col gap-sm p-md h-full">
      <div className="mb-lg pt-sm px-sm">
      <div className="flex items-center gap-sm mb-xs">
      <img alt="PulseBoard Admin" className="w-8 h-8 rounded-full" data-alt="A small, professional user avatar for an admin profile. The avatar is round with a bright canary yellow background and dark navy blue initials. It fits perfectly within a clean, modern dashboard interface." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCDgtbNlakbmlgqeCxrFrn4Wdr-tc4-1RaduL17-6HXBL_S5B-vfRzXEMmCYcMJzgxcDkT0We-hoVn3CpN-9a89iclcSwxSUvcKnLKiD4d_-kmf7_cjZRpr7btdPFZyXBWchMMH7GBWJWSHe58uhUHx0kcvDoB4CKqbAv7HuRJ4dAcM4Kuup1JZYKjqJFA0oHp2ZfYFiYyBKniM0ygyHUEpYtIIsu-w9W7eouoJuGAMJkhOQK1gunI25zZTR6ufZg4AOAd5SPquYmc" />
      <div>
      <h1 className="font-headline-md text-headline-md font-bold text-primary dark:text-primary-fixed-dim tracking-tight">PulseBoard</h1>
      <p className="font-body-sm text-body-sm text-on-surface-variant">Canary v1.0</p>
      </div>
      </div>
      </div>
      <button className="bg-primary-container text-on-primary-fixed hover:bg-tertiary-fixed font-body-md text-body-md font-semibold py-sm px-md rounded transition-colors flex items-center justify-center gap-sm w-full mb-lg shadow-sm border border-transparent" type="button" data-action-id="new-record-1" onClick={actions?.["new-record-1"]}>
      <Plus  style={{fontVariationSettings: "'FILL' 1"}} aria-hidden={true} focusable="false" />
                      New Record
                  </button>
      <div className="flex-grow flex flex-col gap-unit">
      <a className="bg-primary-container dark:bg-on-primary-fixed-variant text-on-primary-container dark:text-primary-fixed rounded-lg font-semibold flex items-center gap-md px-sm py-sm transition-colors duration-150" href="#" data-action-id="operations-1" onClick={(event) => { event.preventDefault(); actions?.["operations-1"]?.(); }}>
      <BarChart3  style={{fontVariationSettings: "'FILL' 1"}} aria-hidden={true} focusable="false" />
                          Operations
                      </a>
      <a className="text-on-secondary-container dark:text-secondary-fixed-dim hover:bg-surface-container-high dark:hover:bg-secondary-container rounded-lg flex items-center gap-md px-sm py-sm transition-colors duration-150" href="#" data-action-id="editor-2" onClick={(event) => { event.preventDefault(); actions?.["editor-2"]?.(); }}>
      <Pencil aria-hidden={true} focusable="false" />
                          Editor
                      </a>
      <a className="text-on-secondary-container dark:text-secondary-fixed-dim hover:bg-surface-container-high dark:hover:bg-secondary-container rounded-lg flex items-center gap-md px-sm py-sm transition-colors duration-150" href="#" data-action-id="settings-3" onClick={(event) => { event.preventDefault(); actions?.["settings-3"]?.(); }}>
      <Settings aria-hidden={true} focusable="false" />
                          Settings
                      </a>
      <a className="text-on-secondary-container dark:text-secondary-fixed-dim hover:bg-surface-container-high dark:hover:bg-secondary-container rounded-lg flex items-center gap-md px-sm py-sm transition-colors duration-150" href="#" data-action-id="recovery-4" onClick={(event) => { event.preventDefault(); actions?.["recovery-4"]?.(); }}>
      <BadgeHelp aria-hidden={true} focusable="false" />
                          Recovery
                      </a>
      </div>
      <div className="mt-auto flex flex-col gap-unit pt-md border-t border-outline-variant/30">
      <a className="text-on-secondary-container dark:text-secondary-fixed-dim hover:bg-surface-container-high dark:hover:bg-secondary-container rounded-lg flex items-center gap-md px-sm py-sm transition-colors duration-150 font-body-sm text-body-sm" href="#" data-action-id="support-5" onClick={(event) => { event.preventDefault(); actions?.["support-5"]?.(); }}>
      <BadgeHelp aria-hidden={true} focusable="false" />
                          Support
                      </a>
      <a className="text-on-secondary-container dark:text-secondary-fixed-dim hover:bg-surface-container-high dark:hover:bg-secondary-container rounded-lg flex items-center gap-md px-sm py-sm transition-colors duration-150 font-body-sm text-body-sm" href="#" data-action-id="logs-6" onClick={(event) => { event.preventDefault(); actions?.["logs-6"]?.(); }}>
      <History aria-hidden={true} focusable="false" />
                          Logs
                      </a>
      </div>
      </div>
      </nav>
      {/* Main Content Area */}
      <div className="flex-grow flex flex-col min-w-0 overflow-hidden relative z-10">
      {/* TopNavBar */}
      <header className="bg-surface-container-lowest dark:bg-on-surface border-b border-outline-variant dark:border-outline flex justify-between items-center w-full px-lg py-sm h-16 flex-shrink-0 z-20">
      <div className="flex items-center md:hidden">
      <h2 className="font-headline-md text-headline-md font-bold text-primary dark:text-primary-fixed-dim tracking-tight">PulseBoard Canary</h2>
      </div>
      <div className="hidden md:flex items-center w-1/3">
      <div className="relative w-full max-w-md">
      <Search className="absolute left-sm top-1/2 -translate-y-1/2 text-on-surface-variant" aria-hidden={true} focusable="false" />
      <input className="w-full pl-xl pr-sm py-sm bg-surface-container-lowest border border-outline-variant rounded font-body-sm text-body-sm focus:outline-none focus:border-primary-container focus:ring-1 focus:ring-primary-container transition-colors" placeholder="Search records, IDs..." type="text" />
      </div>
      </div>
      <div className="flex items-center gap-sm ml-auto">
      <button className="p-sm text-on-surface-variant dark:text-surface-variant hover:bg-surface-container dark:hover:bg-surface-variant transition-colors duration-200 ease-in-out rounded-full flex items-center justify-center" type="button" aria-label="Help" data-action-id="help-2" onClick={actions?.["help-2"]}>
      <CircleHelp aria-hidden={true} focusable="false" />
      </button>
      <button className="p-sm text-on-surface-variant dark:text-surface-variant hover:bg-surface-container dark:hover:bg-surface-variant transition-colors duration-200 ease-in-out rounded-full flex items-center justify-center" type="button" aria-label="Account Circle" data-action-id="account-circle-3" onClick={actions?.["account-circle-3"]}>
      <CircleUserRound aria-hidden={true} focusable="false" />
      </button>
      </div>
      </header>
      {/* Canvas */}
      <main className="flex-grow flex overflow-hidden p-md gap-md">
      {/* Left Column: Main Data */}
      <div className="flex-grow flex flex-col gap-md min-w-0 overflow-hidden">
      {/* Summary Metrics */}
      <div className="grid grid-cols-3 gap-md flex-shrink-0">
      <div className="bg-surface-container-lowest border border-outline-variant rounded p-md flex items-center justify-between">
      <div>
      <p className="font-label-caps text-label-caps text-on-surface-variant uppercase tracking-wider mb-unit">Total Records</p>
      <p className="font-display-lg text-display-lg text-on-surface">1,248</p>
      </div>
      <div className="h-10 w-10 rounded bg-surface-container flex items-center justify-center text-primary">
      <Database aria-hidden={true} focusable="false" />
      </div>
      </div>
      <div className="bg-surface-container-lowest border border-outline-variant rounded p-md flex items-center justify-between">
      <div>
      <p className="font-label-caps text-label-caps text-on-surface-variant uppercase tracking-wider mb-unit">Active Ops</p>
      <p className="font-display-lg text-display-lg text-on-surface">34</p>
      </div>
      <div className="h-10 w-10 rounded bg-tertiary-container flex items-center justify-center text-on-tertiary-container">
      <Bolt  style={{fontVariationSettings: "'FILL' 1"}} aria-hidden={true} focusable="false" />
      </div>
      </div>
      <div className="bg-surface-container-lowest border border-outline-variant rounded p-md flex items-center justify-between">
      <div>
      <p className="font-label-caps text-label-caps text-on-surface-variant uppercase tracking-wider mb-unit">Success Rate</p>
      <p className="font-display-lg text-display-lg text-on-surface">99.8%</p>
      </div>
      <div className="h-10 w-10 rounded bg-[#dcfce7] flex items-center justify-center text-[#166534]">
      <CheckCircle2 aria-hidden={true} focusable="false" />
      </div>
      </div>
      </div>
      {/* Data Table Panel */}
      <div className="bg-surface-container-lowest border border-outline-variant rounded flex flex-col flex-grow overflow-hidden relative">
      {/* Table Toolbar */}
      <div className="bg-surface-bright border-b border-outline-variant p-sm flex items-center justify-between flex-shrink-0">
      <div className="flex items-center gap-sm">
      <select className="bg-surface-container-lowest border border-outline-variant rounded font-body-sm text-body-sm py-unit px-sm focus:outline-none focus:border-primary-container">
      <option>All Statuses</option>
      <option>Processing</option>
      <option>Completed</option>
      <option>Failed</option>
      </select>
      <select className="bg-surface-container-lowest border border-outline-variant rounded font-body-sm text-body-sm py-unit px-sm focus:outline-none focus:border-primary-container">
      <option>Last 24 Hours</option>
      <option>Last 7 Days</option>
      <option>Last 30 Days</option>
      </select>
      </div>
      <div className="flex items-center gap-sm">
      <button className="bg-surface-container-lowest border border-outline-variant hover:bg-surface-bright text-on-surface font-body-sm text-body-sm py-unit px-sm rounded flex items-center gap-xs transition-colors" type="button" data-action-id="retry-load-4" onClick={actions?.["retry-load-4"]}>
      <RefreshCw className="text-[16px]" aria-hidden={true} focusable="false" />
                                      Retry Load
                                  </button>
      </div>
      </div>
      {/* Table Container */}
      <div className="overflow-auto flex-grow custom-scrollbar">
      <table className="w-full text-left border-collapse">
      <thead className="sticky top-0 bg-surface-bright border-b border-outline-variant z-10">
      <tr>
      <th className="font-label-caps text-label-caps text-on-surface-variant uppercase tracking-wider p-sm pl-md font-semibold">Record ID</th>
      <th className="font-label-caps text-label-caps text-on-surface-variant uppercase tracking-wider p-sm font-semibold">Status</th>
      <th className="font-label-caps text-label-caps text-on-surface-variant uppercase tracking-wider p-sm font-semibold">Timestamp</th>
      <th className="font-label-caps text-label-caps text-on-surface-variant uppercase tracking-wider p-sm pr-md font-semibold text-right">Action</th>
      </tr>
      </thead>
      <tbody className="font-label-mono text-label-mono text-on-surface divide-y divide-outline-variant/50">
      <tr className="data-table-row transition-colors cursor-pointer group">
      <td className="p-sm pl-md">REC-99201</td>
      <td className="p-sm">
      <span className="inline-flex items-center gap-xs px-xs py-[2px] rounded bg-[#dcfce7] text-[#166534] font-label-caps text-[10px]">
      <Check className="text-[12px]" aria-hidden={true} focusable="false" /> COMPLETED
                                              </span>
      </td>
      <td className="p-sm text-on-surface-variant">2023-10-27 14:32:01</td>
      <td className="p-sm pr-md text-right">
      <button className="text-on-surface-variant hover:text-primary transition-colors opacity-0 group-hover:opacity-100" type="button" aria-label="Edit" data-action-id="edit-5" onClick={actions?.["edit-5"]}>
      <Pencil className="text-[18px]" aria-hidden={true} focusable="false" />
      </button>
      </td>
      </tr>
      <tr className="data-table-row transition-colors cursor-pointer group border-l-2 border-primary-container bg-surface-container/30">
      <td className="p-sm pl-md font-bold">REC-99200</td>
      <td className="p-sm">
      <span className="inline-flex items-center gap-xs px-xs py-[2px] rounded bg-tertiary-container/20 text-on-tertiary-container font-label-caps text-[10px]">
      <RefreshCw className="text-[12px] animate-pulse" aria-hidden={true} focusable="false" /> PROCESSING
                                              </span>
      </td>
      <td className="p-sm text-on-surface-variant">2023-10-27 14:30:45</td>
      <td className="p-sm pr-md text-right">
      <button className="text-on-surface-variant hover:text-primary transition-colors" type="button" aria-label="Edit" data-action-id="edit-6" onClick={actions?.["edit-6"]}>
      <Pencil className="text-[18px]" aria-hidden={true} focusable="false" />
      </button>
      </td>
      </tr>
      <tr className="data-table-row transition-colors cursor-pointer group">
      <td className="p-sm pl-md">REC-99199</td>
      <td className="p-sm">
      <span className="inline-flex items-center gap-xs px-xs py-[2px] rounded bg-error-container text-on-error-container font-label-caps text-[10px]">
      <X className="text-[12px]" aria-hidden={true} focusable="false" /> FAILED
                                              </span>
      </td>
      <td className="p-sm text-on-surface-variant">2023-10-27 14:28:12</td>
      <td className="p-sm pr-md text-right">
      <button className="text-on-surface-variant hover:text-primary transition-colors opacity-0 group-hover:opacity-100" type="button" aria-label="Edit" data-action-id="edit-7" onClick={actions?.["edit-7"]}>
      <Pencil className="text-[18px]" aria-hidden={true} focusable="false" />
      </button>
      </td>
      </tr>
      <tr className="data-table-row transition-colors cursor-pointer group">
      <td className="p-sm pl-md">REC-99198</td>
      <td className="p-sm">
      <span className="inline-flex items-center gap-xs px-xs py-[2px] rounded bg-[#dcfce7] text-[#166534] font-label-caps text-[10px]">
      <Check className="text-[12px]" aria-hidden={true} focusable="false" /> COMPLETED
                                              </span>
      </td>
      <td className="p-sm text-on-surface-variant">2023-10-27 14:15:00</td>
      <td className="p-sm pr-md text-right">
      <button className="text-on-surface-variant hover:text-primary transition-colors opacity-0 group-hover:opacity-100" type="button" aria-label="Edit" data-action-id="edit-8" onClick={actions?.["edit-8"]}>
      <Pencil className="text-[18px]" aria-hidden={true} focusable="false" />
      </button>
      </td>
      </tr>
      <tr className="data-table-row transition-colors cursor-pointer group">
      <td className="p-sm pl-md">REC-99197</td>
      <td className="p-sm">
      <span className="inline-flex items-center gap-xs px-xs py-[2px] rounded bg-[#dcfce7] text-[#166534] font-label-caps text-[10px]">
      <Check className="text-[12px]" aria-hidden={true} focusable="false" /> COMPLETED
                                              </span>
      </td>
      <td className="p-sm text-on-surface-variant">2023-10-27 14:10:22</td>
      <td className="p-sm pr-md text-right">
      <button className="text-on-surface-variant hover:text-primary transition-colors opacity-0 group-hover:opacity-100" type="button" aria-label="Edit" data-action-id="edit-9" onClick={actions?.["edit-9"]}>
      <Pencil className="text-[18px]" aria-hidden={true} focusable="false" />
      </button>
      </td>
      </tr>
      </tbody>
      </table>
      </div>
      </div>
      </div>
      {/* Right Column: Details & Timeline */}
      <div className="w-80 flex-shrink-0 flex flex-col gap-md hidden lg:flex">
      {/* Details Drawer (Simulated inline) */}
      <div className="bg-surface-container-lowest border border-outline-variant rounded flex flex-col flex-grow overflow-hidden relative shadow-[0_4px_6px_-1px_rgb(0,0,0,0.1)] border-t-4 border-t-primary-container">
      <div className="p-md border-b border-outline-variant bg-surface-bright flex justify-between items-start">
      <div>
      <h3 className="font-headline-md text-headline-md font-bold text-on-surface">REC-99200</h3>
      <p className="font-body-sm text-body-sm text-on-surface-variant mt-unit">Metadata Inspection</p>
      </div>
      <button className="text-on-surface-variant hover:text-on-surface" type="button" aria-label="Close" data-action-id="close-10" onClick={actions?.["close-10"]}>
      <X aria-hidden={true} focusable="false" />
      </button>
      </div>
      <div className="p-md flex-grow overflow-auto custom-scrollbar flex flex-col gap-md">
      <div>
      <p className="font-label-caps text-label-caps text-on-surface-variant mb-unit">Current Status</p>
      <div className="flex items-center gap-sm">
      <span className="inline-flex items-center gap-xs px-sm py-unit rounded bg-tertiary-container/20 text-on-tertiary-container font-label-caps">
      <RefreshCw className="text-[14px] animate-spin" aria-hidden={true} focusable="false" /> PROCESSING
                                      </span>
      <span className="font-label-mono text-label-mono text-on-surface-variant">Elapsed: 02m 15s</span>
      </div>
      </div>
      <div className="bg-surface-container rounded p-sm border border-outline-variant/50">
      <p className="font-label-mono text-label-mono text-on-surface break-all">
                                      Payload ID: pld_8847291a<br />
                                      Source: API_Gateway_Prod<br />
                                      Target Node: cluster-04
                                  </p>
      </div>
      <div>
      <p className="font-label-caps text-label-caps text-on-surface-variant mb-unit">Actions</p>
      <div className="flex gap-sm">
      <button className="flex-1 bg-surface-container-lowest border border-outline-variant hover:bg-surface-bright text-on-surface font-body-sm text-body-sm py-unit px-sm rounded transition-colors text-center" type="button" data-action-id="pause-11" onClick={actions?.["pause-11"]}>
                                          Pause
                                      </button>
      <button className="flex-1 bg-error-container/20 border border-error-container text-on-error-container hover:bg-error-container/30 font-body-sm text-body-sm py-unit px-sm rounded transition-colors text-center" type="button" data-action-id="terminate-12" onClick={actions?.["terminate-12"]}>
                                          Terminate
                                      </button>
      </div>
      </div>
      </div>
      </div>
      {/* Activity Timeline */}
      <div className="bg-surface-container-lowest border border-outline-variant rounded flex flex-col h-1/3 overflow-hidden">
      <div className="p-sm border-b border-outline-variant bg-surface-bright">
      <h4 className="font-label-caps text-label-caps text-on-surface-variant uppercase tracking-wider">Recent Activity</h4>
      </div>
      <div className="p-sm flex-grow overflow-auto custom-scrollbar font-body-sm text-body-sm">
      <div className="relative pl-md pb-sm border-l border-outline-variant ml-sm">
      <span className="absolute -left-[5px] top-1 w-2 h-2 rounded-full bg-tertiary-container"></span>
      <p className="text-on-surface">REC-99200 started processing.</p>
      <p className="text-on-surface-variant font-label-mono text-[10px]">Just now</p>
      </div>
      <div className="relative pl-md pb-sm border-l border-outline-variant ml-sm">
      <span className="absolute -left-[5px] top-1 w-2 h-2 rounded-full bg-[#166534]"></span>
      <p className="text-on-surface">REC-99201 completed successfully.</p>
      <p className="text-on-surface-variant font-label-mono text-[10px]">2 mins ago</p>
      </div>
      <div className="relative pl-md pb-sm border-l border-transparent ml-sm">
      <span className="absolute -left-[5px] top-1 w-2 h-2 rounded-full bg-error"></span>
      <p className="text-on-surface">REC-99199 failed validation.</p>
      <p className="text-on-surface-variant font-label-mono text-[10px]">5 mins ago</p>
      </div>
      </div>
      </div>
      </div>
      </main>
      </div>
    </>
  );
}
