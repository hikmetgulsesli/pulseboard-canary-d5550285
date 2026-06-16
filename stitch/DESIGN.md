---
name: PulseBoard Canary
colors:
  surface: '#f8f9ff'
  surface-dim: '#cbdbf5'
  surface-bright: '#f8f9ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#eff4ff'
  surface-container: '#e5eeff'
  surface-container-high: '#dce9ff'
  surface-container-highest: '#d3e4fe'
  on-surface: '#0b1c30'
  on-surface-variant: '#4f4633'
  inverse-surface: '#213145'
  inverse-on-surface: '#eaf1ff'
  outline: '#817660'
  outline-variant: '#d3c5ac'
  surface-tint: '#785a00'
  primary: '#785a00'
  on-primary: '#ffffff'
  primary-container: '#eab308'
  on-primary-container: '#604700'
  inverse-primary: '#f7be1d'
  secondary: '#565e74'
  on-secondary: '#ffffff'
  secondary-container: '#dae2fd'
  on-secondary-container: '#5c647a'
  tertiary: '#735c00'
  on-tertiary: '#ffffff'
  tertiary-container: '#e1b700'
  on-tertiary-container: '#5c4900'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#ffdf9a'
  primary-fixed-dim: '#f7be1d'
  on-primary-fixed: '#251a00'
  on-primary-fixed-variant: '#5a4300'
  secondary-fixed: '#dae2fd'
  secondary-fixed-dim: '#bec6e0'
  on-secondary-fixed: '#131b2e'
  on-secondary-fixed-variant: '#3f465c'
  tertiary-fixed: '#ffe083'
  tertiary-fixed-dim: '#eec200'
  on-tertiary-fixed: '#231b00'
  on-tertiary-fixed-variant: '#574500'
  background: '#f8f9ff'
  on-background: '#0b1c30'
  surface-variant: '#d3e4fe'
typography:
  display-lg:
    fontFamily: Inter
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '700'
    lineHeight: 32px
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Inter
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
  body-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  body-sm:
    fontFamily: Inter
    fontSize: 13px
    fontWeight: '400'
    lineHeight: 18px
  label-mono:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.02em
  label-caps:
    fontFamily: Inter
    fontSize: 11px
    fontWeight: '700'
    lineHeight: 16px
    letterSpacing: 0.05em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  unit: 4px
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 32px
  container-max: 1440px
  gutter: 16px
---

## Brand & Style
The design system is engineered for high-velocity monitoring and data density. It prioritizes a "calm-tech" philosophy, ensuring that while the interface is information-rich, it remains psychologically manageable for the user. The brand personality is clinical, precise, and authoritative.

The aesthetic follows a **Corporate / Modern** approach with hints of **Minimalism**. It avoids unnecessary ornamentation, focusing instead on deterministic state indicators and functional clarity. The "Canary" influence is felt through strategic highlights rather than a decorative wash, using high-visibility yellow as a functional beacon for attention and status within a disciplined, professional framework.

## Colors
This design system utilizes a high-contrast palette optimized for legibility and state signaling. 

- **Primary Canary (#EAB308):** Reserved for primary actions and "Warning" or "Attention required" states. It provides a warm, sophisticated gold tone that stands out against deep backgrounds.
- **Deep Slate (#0F172A):** Used for primary text and high-contrast UI elements to ground the design.
- **Neutral Gray Scale:** Uses the Slate palette to differentiate between secondary text (#64748B) and structural borders (#E2E8F0).
- **Functional Semantics:** Red (#DC2626) for critical errors, Green (#16A34A) for healthy states, and Blue (#2563EB) for info/active selections. All combinations are tested to meet WCAG 2.1 AA standards.

## Typography
The typography system is built on **Inter** for its exceptional legibility in data-heavy contexts. A secondary typeface, **JetBrains Mono**, is introduced for technical strings, IDs, and tabular data to ensure character differentiation (e.g., 0 vs O).

- **Hierarchy:** We use a tight scale to maximize vertical density. 
- **Labels:** Small caps are utilized for table headers and section labels to create visual separation without increasing font size.
- **Readability:** Line heights are kept strictly functional—enough to prevent crowding but tight enough to allow for maximum data "above the fold."

## Layout & Spacing
The layout uses a **Fluid Grid** model with strict adherence to a 4px baseline shift. This ensures all components—from buttons to input fields—align perfectly across rows.

- **Desktop:** 12-column grid, 16px gutters, 24px side margins. Panels should be collapsible to allow for expansive data views.
- **Tablet:** 8-column grid, 16px gutters.
- **Mobile:** 4-column grid, 12px gutters.
- **Density:** Padding within components (cards, list items) should be kept to `sm` (8px) or `md` (16px) to maintain a professional, utility-first feel.

## Elevation & Depth
Depth is conveyed through **Tonal Layers** and **Low-contrast outlines** rather than heavy shadows. This maintains a clean, flat aesthetic that feels like a professional tool.

- **Level 0 (Background):** #F8FAFC.
- **Level 1 (Cards/Surface):** #FFFFFF with a 1px border (#E2E8F0).
- **Level 2 (Popovers/Modals):** #FFFFFF with a subtle, tight shadow (0 4px 6px -1px rgb(0 0 0 / 0.1)) to indicate focus.
- **Active State:** Elements being dragged or interacted with use a 2px "Canary" border highlight rather than a lift effect.

## Shapes
The shape language is "Soft" yet disciplined. A universal **4px radius** (Base) is used for almost all UI elements including buttons, input fields, and tags. 

Larger containers like cards may scale to **8px** (Large) to provide a subtle structural softening, but never enough to feel "bubbly." Status indicators and "pills" may use a fully rounded (Pill-shaped) radius to differentiate them from interactive buttons.

## Components
- **Buttons:** Primary buttons use a solid #EAB308 fill with #0F172A text. Secondary buttons use a white fill with a #E2E8F0 border.
- **Input Fields:** 1px #E2E8F0 border, 4px radius. On focus, the border transitions to #EAB308 with a subtle 2px outer glow.
- **Data Tables:** High-density. Row height should not exceed 40px. Use Zebra striping (#F8FAFC) for readability in large datasets. 
- **Status Chips:** Small, 12px height. Backgrounds use 10% opacity of the status color (e.g., 10% Canary yellow) with a 100% opacity text color for high contrast.
- **Cards:** No shadows. 1px border. Header areas should have a subtle #F8FAFC background to separate metadata from content.
- **Deterministic Indicators:** Use icons (Check, X, Alert) alongside color to ensure accessibility for colorblind users.