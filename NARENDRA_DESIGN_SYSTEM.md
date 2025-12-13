# Narendra Experience - Theme Export Guide

Use this guide to apply the **Premium Dark & Gold Theme** to any other project.

## 1. The Strategy
Since I (the AI) cannot "see" across different workspaces simultaneously, you can use this document as a **Design System Bridge**. 

**Instructions:**
1.  Copy the content of this file (or download it).
2.  Open your other workspace.
3.  Paste this into the chat and say: *"Apply this design system to the current project."*

---

## 2. Configuration & Tokens

### Tailwind Configuration (`tailwind.config.js`)
Add these specific font and color tokens.
```javascript
export default {
  theme: {
    extend: {
      fontFamily: {
        serif: ['"Bodoni Moda"', 'serif'], // Or primary serif
        sans: ['"Inter"', 'sans-serif'],   // Or primary sans
      },
      colors: {
        gold: {
          400: '#FACC15',
          500: '#EAB308',
          600: '#CA8A04', // Deep rich gold
        }
      }
    },
  },
}
```

### Global Styles (`index.css`)
Enforce the deep dark background and readable text base.
```css
@layer base {
  body {
    @apply font-sans text-stone-300 bg-slate-950 overflow-x-hidden;
  }
  
  /* Selection Highlight */
  ::selection {
    background-color: #CA8A04; /* gold-600 */
    color: white;
  }
}
```

---

## 3. UI Patterns & Components

### The "Gold Glow" Image Border
This is the signature look—a gold border with a composite shadow (depth + glow) applied directly to the image container.

**Tailwind Classes:**
```text
border-2 
border-gold-500 
shadow-[0_25px_50px_-12px_rgba(0,0,0,0.7),0_0_40px_0px_rgba(234,179,8,0.6)]
rounded-tr-[4rem] rounded-bl-[4rem]
```

**React Snippet:**
```jsx
<div className="relative overflow-hidden group border-2 border-gold-500 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.7),0_0_40px_0px_rgba(234,179,8,0.6)] rounded-tr-[4rem] rounded-bl-[4rem]">
    <img src="..." className="object-cover..." />
</div>
```

### Typography Hierarchy
*   **Headings**: `font-serif text-stone-100` (Off-white for high contrast)
*   **Body Text**: `font-sans text-stone-400` (Softer than pure white for reading)
*   **Accents**: `text-gold-500` or `text-gold-600` (for kicker text or highlights)

---

## 4. Brand Identity & Copywriting
To ensure this page feels like part of the "Narendra Experience" ecosystem:

### Naming Convention
*   **Header/Nav**: Should always display "The Narendra Experience" (uppercase, wide tracking).
*   **Tagline**: "Ultimate Customization for One".
*   **Footer**: Standardized with the brand name and new tagline.

### Tone of Voice
*   **Keywords**: "Honored Guest" (never "tourist"), "Private", "Exclusive", "Sanctuary".
*   **Style**: Editorial, confident, minimal.

### Component Specification: Footer
```jsx
<footer className="bg-slate-950 border-t border-white/10 text-stone-300 py-24 px-6">
  <div className="max-w-4xl mx-auto text-center space-y-12">
      <div className="space-y-4">
          <h2 className="text-3xl md:text-4xl font-serif text-white">The Narendra Experience</h2>
          <p className="tracking-widest uppercase text-sm opacity-60">Ultimate Customization for One</p>
      </div>
      {/* ... links/copyright ... */}
  </div>
</footer>
```

---

## 5. Prompt for the Other Workspace
*Copy and paste this prompt to instruct the AI in the new workspace:*

> "I need to align this project with the 'Narendra Experience' brand ecosystem. Please apply the following Design System and Brand specification:
> 
> **1. Visual Theme (Premium Dark & Gold)**
> *   **Global**: Background `bg-slate-950`, Text `text-stone-300`.
> *   **Accents**: Use `Gold-500` (#EAB308) and `Gold-600` (#CA8A04).
> *   **Images**: Apply this specific glow styling to all feature images: `border-2 border-gold-500 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.7),0_0_40px_0px_rgba(234,179,8,0.6)]`.
> *   **Typography**: Serif headings (`text-stone-100`), Sans-serif body.
> 
> **2. Brand Identity**
> *   **Header**: Display 'The Narendra Experience'.
> *   **Tagline**: Use 'Ultimate Customization for One' in the footer and Hero subtext.
> *   **Tone**: Ensure copy refers to users as 'Honored Guests' or 'Private Clients'.
> 
> Please update the config, styles, and layout components to match this ecosystem offering."
