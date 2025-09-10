# Git Commit Guidelines

## Commit Message Format

Use the conventional commit format with the following structure:

```
<type>(<scope>): <subject>

<body>

<footer>
```

### Type
- **feat**: A new feature for the user
- **fix**: A bug fix for the user
- **docs**: Documentation changes
- **style**: Code style changes (formatting, semicolons, etc.)
- **refactor**: Code changes that neither fix bugs nor add features
- **test**: Adding or updating tests
- **chore**: Changes to build process, dependencies, or auxiliary tools
- **perf**: Performance improvements
- **ci**: Continuous integration changes
- **build**: Changes to build system or dependencies

### Scope (optional)
- **ui**: User interface components
- **api**: API endpoints or services  
- **data**: Data handling, YAML files, or content
- **config**: Configuration files
- **deps**: Dependencies
- **assets**: Images, icons, or static files
- **hooks**: Custom React hooks
- **utils**: Utility functions
- **types**: TypeScript type definitions

### Examples

#### Good Commits
```bash
feat(ui): add ProjectCard component with glassmorphism design
fix(api): resolve contact form validation error
docs: update README with deployment instructions
style(ui): improve card hover animations and transitions
refactor(hooks): extract business logic to custom hooks
chore(deps): update Next.js to version 15
perf(ui): optimize image loading with WebP format
```

#### Bad Commits
```bash
update stuff
fix bug
changes
wip
.
```

## Commit Frequency

### When to Commit
- **Logical units**: Each commit should represent one logical change
- **Working state**: Code should compile and run after each commit
- **Atomic changes**: Keep commits focused on a single concern
- **Regular intervals**: Commit frequently to avoid large changesets

### Commit Size Guidelines
- **Small commits**: 1-50 lines changed (preferred)
- **Medium commits**: 51-200 lines changed (acceptable)
- **Large commits**: 200+ lines (break into smaller commits)

## Current Changes Analysis

Based on your current git status, here are suggested commit separations:

### Commit 1: Assets and Static Files
```bash
feat(assets): add GitHub and LinkedIn brand icons

- Add GitHub mark icons (white and black variants)
- Add LinkedIn SVG icon for social links
- Support brand consistency across components
```

### Commit 2: Data Structure Updates
```bash
feat(data): update projects.yaml with new project information

- Add/update project entries
- Improve project descriptions and metadata
- Maintain YAML structure consistency
```

### Commit 3: Component Architecture Improvements
```bash
refactor(ui): enhance component architecture and design system

- Update ProjectCard with improved styling
- Enhance URLPreview component functionality
- Refactor card component base styles
- Improve SkillCard component structure
```

### Commit 4: Layout and Navigation Updates
```bash
feat(ui): improve layout and navigation components

- Update app layout with enhanced structure
- Improve FloatingSidebar component functionality
- Add projects page improvements
- Enhance overall navigation experience
```

### Commit 5: Dependency Cleanup
```bash
chore(deps): remove package-lock.json in favor of yarn

- Delete package-lock.json to prevent lock file conflicts
- Maintain yarn.lock as single source of truth
```

## Branch Naming Conventions

### Feature Branches
```bash
feature/add-project-portfolio
feature/implement-contact-form
feature/enhance-ui-components
```

### Bugfix Branches
```bash
fix/contact-form-validation
fix/mobile-responsiveness
fix/accessibility-issues
```

### Refactor Branches
```bash
refactor/component-architecture
refactor/data-structure
refactor/service-layer
```

### Chore Branches
```bash
chore/update-dependencies
chore/improve-build-process
chore/add-linting-rules
```

## Best Practices

### Do
- Write clear, descriptive commit messages
- Use imperative mood ("add" not "added")
- Include context in the body when needed
- Reference issues/tickets when applicable
- Keep the subject line under 72 characters
- Use consistent formatting

### Don't
- Use generic messages like "update" or "fix"
- Include file extensions in commit messages
- Commit broken or untested code
- Mix multiple unrelated changes
- Use past tense in commit messages
- Include debugging code or console.logs

## Integration with Development Workflow

### Before Committing
1. Run linting: `npm run lint`
2. Run type checking: `npm run type-check`
3. Test the build: `npm run build`
4. Review your changes: `git diff --cached`

### Commit Commands
```bash
# Stage specific files
git add src/components/ui/ProjectCard.tsx

# Commit with detailed message
git commit -m "feat(ui): enhance ProjectCard with glassmorphism design

- Add backdrop-blur effect for modern appearance
- Implement hover animations and transitions
- Improve accessibility with proper ARIA labels
- Update responsive design for mobile devices"

# Push to feature branch
git push origin feature/enhance-project-cards
```

## Tools Integration

### ESLint Integration
- Commits should pass linting rules
- Fix linting issues before committing
- Use `npm run lint:fix` for auto-fixes

### TypeScript Integration
- Commits should pass type checking
- Use `npm run type-check` before committing
- Fix type errors before pushing

### Husky Hooks (if implemented)
- Pre-commit: Run linting and type checking
- Pre-push: Run build and tests
- Commit-msg: Validate commit message format

## Review Process

### Self Review Checklist
- [ ] Commit message follows conventions
- [ ] Code passes linting and type checking
- [ ] Changes are atomic and focused
- [ ] No debugging code or console.logs
- [ ] Documentation updated if needed
- [ ] Tests added/updated if applicable

### Code Review Focus
- Functionality correctness
- Code quality and maintainability
- Performance implications
- Accessibility compliance
- Design system consistency
- TypeScript type safety