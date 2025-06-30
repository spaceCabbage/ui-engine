# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview
UI Engine is a Vue 3 component library and design system built with Tailwind CSS v4. The project provides consistent, scalable UI components that can be packaged and distributed as a library.

## Architecture
- **Framework**: Vue 3 with Composition API and `<script setup>`
- **Styling**: Tailwind CSS v4 with Vite plugin
- **Build Tool**: Vite configured for library mode
- **Package Management**: npm
- **Distribution**: UMD and ES modules via `dist/` folder

## Common Commands
```bash
# Development server
npm run dev

# Build library for production
npm run build

# Preview built library
npm run preview
```

## Development Setup
1. Install dependencies: `npm install`
2. The project uses Tailwind CSS v4 with custom color palette (primary/secondary)
3. Vue 3 components should use the Composition API with `<script setup>`
4. Components are built as a library and exported from `src/index.js`

## Component Development
- Prefix all components with `Ui` (e.g., `UiButton`, `UiCard`, `UiInput`)
- Use compound components for complex UI patterns (e.g., `UiCard` with `UiCardHeader`, `UiCardTitle`)
- Components must be registered in `src/index.js` for both named exports and Vue plugin installation
- Follow the existing pattern: export individual components and provide a default plugin object with `install()` method

## Build Configuration
- Library entry point: `src/index.js`
- Build formats: ES modules and UMD
- External dependencies: Vue (peer dependency)
- Output: `dist/ui-engine.es.js` and `dist/ui-engine.umd.js`
- Styles: Bundled separately as `dist/style.css`

## File Structure
```
src/
├── components/        # Vue components (UiButton.vue, UiCard.vue, etc.)
├── styles/           # Tailwind CSS imports
│   └── index.css     # Main stylesheet
└── index.js          # Library entry point and exports
```

## Tailwind Configuration
Custom color palette defined in `tailwind.config.js`:
- Primary colors (blue-based, 50-950 scale)
- Secondary colors (gray-based, 50-950 scale)
- Content scanning: `./src/**/*.{vue,js,ts,jsx,tsx}`

## Documentation
Component documentation should be maintained in Storybook at `yourcompany.github.io/ui-engine` (placeholder URL).

## Support
Team support is available in the **#ui-engine-support** Slack channel.