# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview
UI Engine is a Vue 3 component library and design system built with Tailwind CSS. The project aims to provide consistent, scalable UI components for building applications.

## Architecture
- **Framework**: Vue 3 with Composition API
- **Styling**: Tailwind CSS v4 with Vite plugin
- **Build Tool**: Vite (implied from dependencies)
- **Package Management**: npm

## Common Commands
Since this project is in early development, most standard commands are not yet configured. The package.json currently only has a placeholder test script.

Expected commands once development tooling is set up:
```bash
# Development server (when configured)
npm run dev

# Build for production (when configured)  
npm run build

# Run tests (currently returns error)
npm test

# Lint code (when configured)
npm run lint

# Type checking (when configured)
npm run typecheck

# Storybook development (when configured)
npm run storybook
```

## Development Setup
1. Install dependencies: `npm install`
2. The project uses Tailwind CSS v4 with the Vite plugin for styling
3. Vue 3 components should use the Composition API with `<script setup>`

## Component Development
Based on the README examples, components follow these patterns:
- Prefix all components with `Ui` (e.g., `UiButton`, `UiCard`)
- Use compound components for complex UI patterns (e.g., `UiCard` with `UiCardHeader`, `UiCardTitle`, `UiCardContent`)
- Components should be designed for consistency across applications
- Export components from the main package entry point

## Key Files to Create/Configure
This project will likely need:
- `vite.config.js` - Vite configuration for build and development
- `tailwind.config.js` - Tailwind configuration for design tokens
- `src/` directory structure for components
- `src/index.js` or `src/index.ts` - Main export file
- Storybook configuration for component documentation
- Test setup (Vitest recommended for Vite projects)
- TypeScript configuration if using TypeScript

## Documentation
The project references Storybook documentation at `yourcompany.github.io/ui-engine` (placeholder URL). Component documentation should be maintained in Storybook stories.

## Support
Team support is available in the **#ui-engine-support** Slack channel.