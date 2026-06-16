// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Settings and Preferences - PulseBoard Canary
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Wire interactive controls through the typed actions prop
// 4. Replace placeholder data with props/state

import { BadgeHelp, BarChart3, BellRing, CheckCircle2, ChevronDown, CircleHelp, CircleUserRound, FilterX, History, ListFilter, Pencil, Plus, Save, Search, Settings, SlidersHorizontal, Tag, Timer, Trash2 } from "lucide-react";


export type SettingsAndPreferencesPulseboardCanaryActionId = "new-record-1" | "help-2" | "account-circle-3" | "reset-to-defaults-4" | "save-preferences-5" | "add-filter-6" | "edit-7" | "delete-8" | "edit-9" | "delete-10" | "edit-11" | "delete-12" | "operations-1" | "editor-2" | "settings-3" | "recovery-4" | "support-5" | "logs-6";

export interface SettingsAndPreferencesPulseboardCanaryProps {
  actions?: Partial<Record<SettingsAndPreferencesPulseboardCanaryActionId, () => void>>;

}

export function SettingsAndPreferencesPulseboardCanary({ actions }: SettingsAndPreferencesPulseboardCanaryProps) {
  return (
    <>
      {/* SideNavBar */}
      <nav className="bg-surface-container dark:bg-on-secondary-fixed h-screen w-64 flex flex-col sticky left-0 top-0 border-r border-outline-variant dark:border-outline flex-shrink-0 hidden md:flex">
      <div className="flex flex-col gap-sm p-md h-full">
      <div className="mb-xl flex items-center gap-md px-sm pt-sm">
      <div className="h-10 w-10 bg-primary-container rounded flex items-center justify-center text-on-primary-container font-bold text-headline-md font-headline-md flex-shrink-0">
                          P
                      </div>
      <div>
      <h1 className="font-headline-md text-headline-md font-bold text-primary dark:text-primary-fixed-dim tracking-tight leading-tight">PulseBoard</h1>
      <span className="font-label-mono text-label-mono text-on-surface-variant">Canary v1.0</span>
      </div>
      </div>
      <button className="w-full bg-surface-container-lowest border border-outline-variant hover:bg-surface-container-high transition-colors duration-150 rounded text-primary font-bold py-md flex justify-center items-center gap-sm mb-lg" type="button" data-action-id="new-record-1" onClick={actions?.["new-record-1"]}>
      <Plus  style={{fontVariationSettings: "'FILL' 1"}} aria-hidden={true} focusable="false" />
                      New Record
                  </button>
      <div className="flex-grow flex flex-col gap-unit">
      <a className="flex items-center gap-md px-sm py-md text-on-secondary-container dark:text-secondary-fixed-dim hover:bg-surface-container-high dark:hover:bg-secondary-container rounded-lg transition-colors duration-150" href="#" data-action-id="operations-1" onClick={(event) => { event.preventDefault(); actions?.["operations-1"]?.(); }}>
      <BarChart3 className="text-xl" aria-hidden={true} focusable="false" />
                          Operations
                      </a>
      <a className="flex items-center gap-md px-sm py-md text-on-secondary-container dark:text-secondary-fixed-dim hover:bg-surface-container-high dark:hover:bg-secondary-container rounded-lg transition-colors duration-150" href="#" data-action-id="editor-2" onClick={(event) => { event.preventDefault(); actions?.["editor-2"]?.(); }}>
      <Pencil className="text-xl" aria-hidden={true} focusable="false" />
                          Editor
                      </a>
      <a className="flex items-center gap-md px-sm py-md bg-primary-container dark:bg-on-primary-fixed-variant text-on-primary-container dark:text-primary-fixed rounded-lg font-semibold transition-colors duration-150" href="#" data-action-id="settings-3" onClick={(event) => { event.preventDefault(); actions?.["settings-3"]?.(); }}>
      <Settings  style={{fontVariationSettings: "'FILL' 1"}} className="text-xl" aria-hidden={true} focusable="false" />
                          Settings
                      </a>
      <a className="flex items-center gap-md px-sm py-md text-on-secondary-container dark:text-secondary-fixed-dim hover:bg-surface-container-high dark:hover:bg-secondary-container rounded-lg transition-colors duration-150" href="#" data-action-id="recovery-4" onClick={(event) => { event.preventDefault(); actions?.["recovery-4"]?.(); }}>
      <BadgeHelp className="text-xl" aria-hidden={true} focusable="false" />
                          Recovery
                      </a>
      </div>
      <div className="mt-auto border-t border-outline-variant pt-sm flex flex-col gap-unit">
      <a className="flex items-center gap-md px-sm py-sm text-on-secondary-container dark:text-secondary-fixed-dim hover:bg-surface-container-high dark:hover:bg-secondary-container rounded-lg transition-colors duration-150 font-body-sm text-body-sm" href="#" data-action-id="support-5" onClick={(event) => { event.preventDefault(); actions?.["support-5"]?.(); }}>
      <BadgeHelp className="text-lg" aria-hidden={true} focusable="false" />
                          Support
                      </a>
      <a className="flex items-center gap-md px-sm py-sm text-on-secondary-container dark:text-secondary-fixed-dim hover:bg-surface-container-high dark:hover:bg-secondary-container rounded-lg transition-colors duration-150 font-body-sm text-body-sm" href="#" data-action-id="logs-6" onClick={(event) => { event.preventDefault(); actions?.["logs-6"]?.(); }}>
      <History className="text-lg" aria-hidden={true} focusable="false" />
                          Logs
                      </a>
      </div>
      </div>
      </nav>
      {/* Main Content Canvas */}
      <div className="flex-grow flex flex-col h-screen overflow-hidden">
      {/* TopNavBar */}
      <header className="bg-surface-container-lowest dark:bg-on-surface border-b border-outline-variant dark:border-outline flex justify-between items-center w-full px-lg py-sm h-16 flex-shrink-0 z-10">
      <div className="flex items-center md:hidden">
      <h1 className="font-display-lg text-display-lg font-bold text-primary dark:text-primary-fixed-dim tracking-tight">PulseBoard Canary</h1>
      </div>
      <div className="hidden md:flex flex-1 max-w-xl justify-end ml-auto mr-lg">
      <div className="relative w-64 group">
      <Search className="absolute left-sm top-1/2 -translate-y-1/2 text-on-surface-variant group-focus-within:text-primary transition-colors" aria-hidden={true} focusable="false" />
      <input className="w-full bg-surface border border-outline-variant rounded pl-xl pr-sm py-sm font-body-sm text-body-sm focus:outline-none focus:border-primary-container focus:ring-1 focus:ring-primary-container transition-colors text-on-surface placeholder-on-surface-variant" placeholder="Search parameters..." type="text" />
      <div className="absolute right-xs top-1/2 -translate-y-1/2 flex gap-xs">
      <kbd className="hidden lg:inline-block bg-surface-container px-unit py-px rounded font-label-mono text-[10px] text-on-surface-variant border border-outline-variant">⌘</kbd>
      <kbd className="hidden lg:inline-block bg-surface-container px-unit py-px rounded font-label-mono text-[10px] text-on-surface-variant border border-outline-variant">K</kbd>
      </div>
      </div>
      </div>
      <div className="flex items-center gap-sm">
      <button className="p-sm text-on-surface-variant dark:text-surface-variant hover:bg-surface-container dark:hover:bg-surface-variant transition-colors duration-200 ease-in-out rounded-full flex items-center justify-center" type="button" aria-label="Help" data-action-id="help-2" onClick={actions?.["help-2"]}>
      <CircleHelp aria-hidden={true} focusable="false" />
      </button>
      <button className="p-sm text-on-surface-variant dark:text-surface-variant hover:bg-surface-container dark:hover:bg-surface-variant transition-colors duration-200 ease-in-out rounded-full flex items-center justify-center" type="button" aria-label="Account Circle" data-action-id="account-circle-3" onClick={actions?.["account-circle-3"]}>
      <CircleUserRound aria-hidden={true} focusable="false" />
      </button>
      </div>
      </header>
      {/* Settings Canvas */}
      <main className="flex-grow overflow-y-auto custom-scrollbar p-lg md:p-xl bg-background">
      <div className="max-w-4xl mx-auto">
      <div className="flex justify-between items-end mb-xl border-b border-outline-variant pb-md">
      <div>
      <h2 className="font-display-lg text-display-lg font-bold text-on-surface tracking-tight mb-xs">Settings &amp; Preferences</h2>
      <p className="text-on-surface-variant font-body-sm text-body-sm">Configure workflow parameters and operational thresholds.</p>
      </div>
      <div className="flex gap-md">
      <button className="px-md py-sm bg-surface-container-lowest text-on-surface border border-outline-variant rounded font-body-sm text-body-sm hover:bg-surface-container transition-colors" type="button" data-action-id="reset-to-defaults-4" onClick={actions?.["reset-to-defaults-4"]}>
                                  Reset to Defaults
                              </button>
      <button className="px-md py-sm bg-primary-container text-on-primary-fixed rounded font-body-sm text-body-sm font-medium hover:bg-tertiary-fixed transition-colors flex items-center gap-sm" type="button" data-action-id="save-preferences-5" onClick={actions?.["save-preferences-5"]}>
      <Save className="text-sm" aria-hidden={true} focusable="false" />
                                  Save Preferences
                              </button>
      </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-xl">
      {/* Left Column: Primary Settings */}
      <div className="lg:col-span-2 flex flex-col gap-lg">
      {/* Workflow Preferences */}
      <section className="bg-surface-container-lowest border border-outline-variant rounded p-lg">
      <div className="flex items-center gap-sm mb-lg pb-sm border-b border-surface-container">
      <SlidersHorizontal className="text-primary" aria-hidden={true} focusable="false" />
      <h3 className="font-headline-md text-headline-md text-on-surface">Workflow Preferences</h3>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-lg">
      {/* Default View Mode */}
      <div className="flex flex-col gap-sm">
      <label className="font-label-caps text-label-caps text-on-surface-variant uppercase tracking-wider">Default View Mode</label>
      <div className="relative input-glow border border-outline-variant rounded bg-surface">
      <select className="w-full appearance-none bg-transparent py-sm pl-md pr-xl font-body-sm text-body-sm text-on-surface focus:outline-none">
      <option value="dense">High Density List</option>
      <option value="comfortable">Comfortable Grid</option>
      <option value="kanban">Board View</option>
      </select>
      <ChevronDown className="absolute right-sm top-1/2 -translate-y-1/2 text-on-surface-variant pointer-events-none" aria-hidden={true} focusable="false" />
      </div>
      </div>
      {/* Data Refresh Interval */}
      <div className="flex flex-col gap-sm">
      <label className="font-label-caps text-label-caps text-on-surface-variant uppercase tracking-wider">Data Refresh Interval (ms)</label>
      <div className="flex items-center gap-sm input-glow border border-outline-variant rounded bg-surface px-md py-sm">
      <Timer className="text-on-surface-variant text-sm" aria-hidden={true} focusable="false" />
      <input className="w-full bg-transparent border-none p-0 font-label-mono text-label-mono text-on-surface focus:ring-0" type="number" defaultValue="5000" />
      </div>
      </div>
      {/* Auto-Save Toggle */}
      <div className="md:col-span-2 flex items-center justify-between p-md bg-surface-container-low rounded border border-surface-container-high mt-sm">
      <div>
      <span className="block font-body-md text-body-md font-medium text-on-surface">Auto-save Draft Records</span>
      <span className="block font-body-sm text-body-sm text-on-surface-variant mt-px">Automatically persist changes to local storage every 30s.</span>
      </div>
      <label className="relative inline-flex items-center cursor-pointer">
      <input defaultChecked={true} className="sr-only switch-peer" type="checkbox" defaultValue="" />
      <div className="switch-bg w-11 h-6 bg-surface-dim rounded-full peer peer-focus:ring-2 peer-focus:ring-primary-container transition-colors duration-200"></div>
      <div className="switch-knob absolute left-[2px] top-[2px] bg-white border border-outline-variant rounded-full h-5 w-5 transition-transform duration-200"></div>
      </label>
      </div>
      </div>
      </section>
      {/* Notification Density */}
      <section className="bg-surface-container-lowest border border-outline-variant rounded p-lg">
      <div className="flex items-center gap-sm mb-md pb-sm border-b border-surface-container">
      <BellRing className="text-primary" aria-hidden={true} focusable="false" />
      <h3 className="font-headline-md text-headline-md text-on-surface">Notification Density</h3>
      </div>
      <p className="font-body-sm text-body-sm text-on-surface-variant mb-md">Control the verbosity of system alerts and status updates.</p>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-md">
      {/* Option: Low */}
      <label className="cursor-pointer">
      <input className="peer sr-only" name="notif_density" type="radio" defaultValue="low" />
      <div className="p-md rounded border border-outline-variant peer-checked:border-primary-container peer-checked:bg-surface-container-low transition-colors h-full flex flex-col gap-sm">
      <div className="flex justify-between items-center">
      <span className="font-body-md text-body-md font-medium text-on-surface">Low</span>
      <BadgeHelp className="text-on-surface-variant peer-checked:text-primary-container text-sm" aria-hidden={true} focusable="false" />
      </div>
      <span className="font-body-sm text-body-sm text-on-surface-variant leading-tight">Critical alerts and errors only. Suppresses routine logs.</span>
      </div>
      </label>
      {/* Option: Standard */}
      <label className="cursor-pointer">
      <input defaultChecked={true} className="peer sr-only" name="notif_density" type="radio" defaultValue="standard" />
      <div className="p-md rounded border border-primary-container bg-surface-container-low transition-colors h-full flex flex-col gap-sm relative overflow-hidden">
      <div className="absolute top-0 right-0 w-8 h-8 bg-primary-container/10 rounded-bl-full"></div>
      <div className="flex justify-between items-center z-10">
      <span className="font-body-md text-body-md font-medium text-on-surface">Standard</span>
      <BadgeHelp className="text-primary text-sm" aria-hidden={true} focusable="false" />
      </div>
      <span className="font-body-sm text-body-sm text-on-surface-variant leading-tight z-10">Balanced approach. Warnings, errors, and task completions.</span>
      </div>
      </label>
      {/* Option: High */}
      <label className="cursor-pointer">
      <input className="peer sr-only" name="notif_density" type="radio" defaultValue="high" />
      <div className="p-md rounded border border-outline-variant peer-checked:border-primary-container peer-checked:bg-surface-container-low transition-colors h-full flex flex-col gap-sm">
      <div className="flex justify-between items-center">
      <span className="font-body-md text-body-md font-medium text-on-surface">High</span>
      <BadgeHelp className="text-on-surface-variant peer-checked:text-primary-container text-sm" aria-hidden={true} focusable="false" />
      </div>
      <span className="font-body-sm text-body-sm text-on-surface-variant leading-tight">Verbose. All state changes, background tasks, and debug logs.</span>
      </div>
      </label>
      </div>
      </section>
      </div>
      {/* Right Column: Secondary / Management */}
      <div className="flex flex-col gap-lg">
      {/* Saved Filters */}
      <section className="bg-surface-container-lowest border border-outline-variant rounded flex flex-col h-full max-h-[500px]">
      <div className="p-md border-b border-surface-container flex justify-between items-center bg-surface-bright rounded-t">
      <div className="flex items-center gap-sm">
      <ListFilter className="text-primary text-sm" aria-hidden={true} focusable="false" />
      <h3 className="font-headline-md text-headline-md text-on-surface">Saved Filters</h3>
      </div>
      <button className="text-primary hover:bg-surface-container p-unit rounded transition-colors" title="Add Filter" type="button" data-action-id="add-filter-6" onClick={actions?.["add-filter-6"]}>
      <Plus className="text-md" aria-hidden={true} focusable="false" />
      </button>
      </div>
      <div className="overflow-y-auto custom-scrollbar flex-grow p-sm flex flex-col gap-unit">
      {/* Filter Item */}
      <div className="group flex items-center justify-between p-sm hover:bg-surface-container-low rounded border border-transparent hover:border-surface-container-high transition-colors">
      <div className="flex items-center gap-sm overflow-hidden">
      <Tag className="text-on-surface-variant text-sm" aria-hidden={true} focusable="false" />
      <span className="font-body-sm text-body-sm text-on-surface truncate">Q3 Anomalies</span>
      </div>
      <div className="flex gap-unit opacity-0 group-hover:opacity-100 transition-opacity">
      <button className="text-on-surface-variant hover:text-primary p-unit" type="button" aria-label="Edit" data-action-id="edit-7" onClick={actions?.["edit-7"]}><Pencil className="text-sm" aria-hidden={true} focusable="false" /></button>
      <button className="text-on-surface-variant hover:text-error p-unit" type="button" aria-label="Delete" data-action-id="delete-8" onClick={actions?.["delete-8"]}><Trash2 className="text-sm" aria-hidden={true} focusable="false" /></button>
      </div>
      </div>
      {/* Filter Item */}
      <div className="group flex items-center justify-between p-sm hover:bg-surface-container-low rounded border border-transparent hover:border-surface-container-high transition-colors">
      <div className="flex items-center gap-sm overflow-hidden">
      <Tag className="text-on-surface-variant text-sm" aria-hidden={true} focusable="false" />
      <span className="font-body-sm text-body-sm text-on-surface truncate">High Priority Tickets</span>
      </div>
      <div className="flex gap-unit opacity-0 group-hover:opacity-100 transition-opacity">
      <button className="text-on-surface-variant hover:text-primary p-unit" type="button" aria-label="Edit" data-action-id="edit-9" onClick={actions?.["edit-9"]}><Pencil className="text-sm" aria-hidden={true} focusable="false" /></button>
      <button className="text-on-surface-variant hover:text-error p-unit" type="button" aria-label="Delete" data-action-id="delete-10" onClick={actions?.["delete-10"]}><Trash2 className="text-sm" aria-hidden={true} focusable="false" /></button>
      </div>
      </div>
      {/* Filter Item */}
      <div className="group flex items-center justify-between p-sm hover:bg-surface-container-low rounded border border-transparent hover:border-surface-container-high transition-colors">
      <div className="flex items-center gap-sm overflow-hidden">
      <Tag className="text-on-surface-variant text-sm" aria-hidden={true} focusable="false" />
      <span className="font-body-sm text-body-sm text-on-surface truncate">Unassigned Operations</span>
      </div>
      <div className="flex gap-unit opacity-0 group-hover:opacity-100 transition-opacity">
      <button className="text-on-surface-variant hover:text-primary p-unit" type="button" aria-label="Edit" data-action-id="edit-11" onClick={actions?.["edit-11"]}><Pencil className="text-sm" aria-hidden={true} focusable="false" /></button>
      <button className="text-on-surface-variant hover:text-error p-unit" type="button" aria-label="Delete" data-action-id="delete-12" onClick={actions?.["delete-12"]}><Trash2 className="text-sm" aria-hidden={true} focusable="false" /></button>
      </div>
      </div>
      {/* Empty State Context (Hidden but here for structure) */}
      {/* <div className="p-xl text-center flex flex-col items-center gap-sm text-on-surface-variant">
                                          <FilterX className="text-3xl opacity-50" aria-hidden={true} focusable="false" />
                                          <span className="font-body-sm text-body-sm">No saved filters.</span>
                                      </div> */}
      </div>
      </section>
      {/* System Status Micro-Widget */}
      <div className="bg-surface-bright border border-outline-variant rounded p-md flex items-center gap-md">
      <div className="h-10 w-10 rounded-full bg-surface-container flex items-center justify-center">
      <div className="w-3 h-3 rounded-full bg-primary-container animate-pulse"></div>
      </div>
      <div>
      <span className="block font-label-mono text-label-mono text-on-surface">Config Sync: ACTIVE</span>
      <span className="block font-body-sm text-[10px] text-on-surface-variant mt-px">Last synced: Just now</span>
      </div>
      </div>
      </div>
      </div>
      {/* Spacer for scrolling past bottom elements if needed */}
      <div className="h-xl"></div>
      </div>
      </main>
      </div>
      {/* Feedback Toast (Hidden by default, shown via JS ideally) */}
      <div className="fixed bottom-lg right-lg bg-inverse-surface text-inverse-on-surface px-md py-sm rounded border border-surface shadow-lg flex items-center gap-sm transform transition-transform duration-300 translate-y-[150%] z-50" id="save-toast">
      <CheckCircle2 className="text-primary-container text-sm" aria-hidden={true} focusable="false" />
      <span className="font-body-sm text-body-sm">Preferences saved successfully.</span>
      </div>
      
    </>
  );
}
