# Pull Request Guidelines

## PR Title Format

Use the same format as commit messages with additional context:

```
<type>(<scope>): <description>
```

### Examples
```
feat(ui): implement new project portfolio section
fix(contact): resolve form validation issues
refactor(components): improve component architecture
docs: update development guidelines and standards
```

## PR Description Template

Use this template for all pull requests:

```markdown
## Summary
Brief description of what this PR accomplishes.

## Changes
- [ ] List specific changes made
- [ ] Include technical details
- [ ] Mention files modified

## Testing
- [ ] Manual testing completed
- [ ] Responsive design verified
- [ ] Accessibility tested
- [ ] Cross-browser compatibility checked

## Screenshots/Demo
<!-- Include before/after screenshots or GIFs if UI changes -->

## Checklist
- [ ] Code follows project conventions
- [ ] Linting passes (`npm run lint`)
- [ ] Type checking passes (`npm run type-check`)
- [ ] Build succeeds (`npm run build`)
- [ ] No console.log or debugging code
- [ ] Documentation updated if needed
- [ ] Self-reviewed changes

## Related Issues
Closes #[issue-number]
Related to #[issue-number]

## Additional Notes
Any additional context or considerations for reviewers.
```

## PR Types and Guidelines

### Feature PRs
```markdown
feat(ui): add project portfolio with filtering capabilities

## Summary
Implements a comprehensive project portfolio section with filtering, search, and detailed project cards.

## Changes
- [ ] Add ProjectCard component with glassmorphism design
- [ ] Implement project filtering by technology stack
- [ ] Add search functionality for projects
- [ ] Create responsive grid layout
- [ ] Add project data structure in YAML format

## Testing
- [ ] ✅ All filter combinations work correctly
- [ ] ✅ Search functionality works with various inputs
- [ ] ✅ Mobile responsiveness tested on multiple devices
- [ ] ✅ Accessibility verified with screen readers

## Screenshots
<!-- Before/after screenshots -->
```

### Bug Fix PRs
```markdown
fix(contact): resolve form validation and submission issues

## Summary
Fixes multiple issues with the contact form including validation errors and submission failures.

## Changes
- [ ] Fix email validation regex pattern
- [ ] Resolve form submission timeout issues
- [ ] Add proper error handling for network failures
- [ ] Improve loading states and user feedback

## Testing
- [ ] ✅ Form validation works for all field types
- [ ] ✅ Form submission succeeds in all scenarios
- [ ] ✅ Error states display properly
- [ ] ✅ Loading indicators work correctly

## Bug Report
Resolves issues reported in #123, #124, #125
```

### Refactor PRs
```markdown
refactor(architecture): improve component structure and data flow

## Summary
Refactors component architecture to improve maintainability, performance, and code organization.

## Changes
- [ ] Extract custom hooks for business logic
- [ ] Implement service layer pattern
- [ ] Improve component composition
- [ ] Add TypeScript interfaces for better type safety

## Impact
- No functional changes for end users
- Improved developer experience
- Better code organization
- Enhanced maintainability

## Testing
- [ ] ✅ All existing functionality works unchanged
- [ ] ✅ Performance improvements verified
- [ ] ✅ Type safety improvements confirmed
```

## Review Process

### Self-Review Checklist

Before submitting a PR:

#### Code Quality
- [ ] Code follows project style guidelines
- [ ] No debugging code or console.logs
- [ ] Proper error handling implemented
- [ ] TypeScript types are accurate
- [ ] Components are properly structured

#### Testing & Validation
- [ ] `npm run lint` passes
- [ ] `npm run type-check` passes
- [ ] `npm run build` succeeds
- [ ] Manual testing completed
- [ ] Edge cases considered

#### Documentation & Communication
- [ ] PR description is complete and accurate
- [ ] Code changes are well-documented
- [ ] Breaking changes are highlighted
- [ ] Migration notes included if needed

#### Design & UX
- [ ] UI changes match design system
- [ ] Responsive design works on all breakpoints
- [ ] Accessibility standards maintained (WCAG 2.1 AA)
- [ ] Cross-browser compatibility verified

### Reviewer Guidelines

#### What to Review

**Functionality**
- Does the code do what it's supposed to do?
- Are edge cases handled properly?
- Is error handling comprehensive?

**Code Quality**
- Is the code readable and maintainable?
- Are naming conventions consistent?
- Is the code structure logical?

**Performance**
- Are there any performance implications?
- Is the bundle size impact acceptable?
- Are images and assets optimized?

**Security**
- No sensitive information exposed
- Input validation is proper
- Dependencies are secure

**Accessibility**
- ARIA labels are appropriate
- Keyboard navigation works
- Color contrast meets standards
- Screen reader compatibility

#### Review Comments Format

Use these prefixes for clarity:

- **MUST**: Critical issues that block merging
- **SHOULD**: Important suggestions for improvement
- **CONSIDER**: Optional improvements or alternatives
- **QUESTION**: Clarification needed
- **PRAISE**: Positive feedback for good practices

```markdown
**MUST**: Fix accessibility issue - missing alt text on images
**SHOULD**: Consider extracting this logic into a custom hook
**CONSIDER**: Using memo here could improve performance
**QUESTION**: Why did we choose this approach over the previous one?
**PRAISE**: Great error handling implementation!
```

## Branch Strategy

### Main Branch Protection
- No direct pushes to `main`
- All changes via pull requests
- Require at least 1 review
- Require status checks to pass

### Feature Branch Workflow
1. Create feature branch from `main`
2. Implement changes with atomic commits
3. Push to remote feature branch
4. Open pull request
5. Address review feedback
6. Merge after approval

### Hotfix Process
1. Create hotfix branch from `main`
2. Implement minimal fix
3. Test thoroughly
4. Fast-track review process
5. Merge and deploy immediately

## Merge Strategies

### Squash and Merge (Preferred)
- Use for feature branches
- Creates clean commit history
- Combines all commits into one
- Use descriptive merge commit message

### Merge Commit
- Use for hotfixes
- Preserves individual commits
- Shows branch history
- Use when commit history is important

### Rebase and Merge
- Use for simple changes
- Creates linear history
- No merge commit created
- Use sparingly for small PRs

## PR Size Guidelines

### Small PRs (Preferred)
- **Lines**: 1-50 changed lines
- **Files**: 1-3 files modified
- **Review time**: < 30 minutes
- **Merge time**: Same day

### Medium PRs (Acceptable)
- **Lines**: 51-200 changed lines
- **Files**: 4-10 files modified
- **Review time**: 1-2 hours
- **Merge time**: 1-2 days

### Large PRs (Avoid)
- **Lines**: 200+ changed lines
- **Break down**: Split into smaller PRs
- **Exception**: Major refactoring with careful planning

## Continuous Integration

### Required Checks
- ✅ ESLint passes
- ✅ TypeScript compilation succeeds
- ✅ Build process completes
- ✅ No type errors
- ✅ Accessibility standards maintained

### Optional Checks
- Bundle size analysis
- Performance regression tests
- Visual regression testing
- Security vulnerability scanning

## Documentation Updates

### When to Update Docs
- New features or components
- API changes or breaking changes
- Configuration modifications
- Development process changes

### Documentation Types
- README updates
- Code comments
- TypeScript interfaces
- Style guide updates
- Architecture decisions

## Release Process

### Version Management
- Follow semantic versioning (semver)
- Use conventional commits for automated versioning
- Create release notes from PR descriptions
- Tag releases properly

### Deployment Pipeline
1. PR merged to `main`
2. Automated build and tests
3. Deploy to staging environment
4. Manual verification
5. Deploy to production
6. Monitor for issues

## Best Practices Summary

### Do
- Keep PRs small and focused
- Write descriptive titles and descriptions
- Test thoroughly before submitting
- Respond promptly to review feedback
- Use draft PRs for work in progress
- Include screenshots for UI changes

### Don't
- Mix unrelated changes in one PR
- Submit PRs with failing tests
- Ignore linting or type errors
- Skip the review process
- Force push after review starts
- Merge your own PRs without review

## Emergency Procedures

### Critical Bug Fixes
1. Create hotfix branch immediately
2. Implement minimal fix
3. Skip normal review for critical issues
4. Deploy and monitor closely
5. Create follow-up PR for comprehensive fix

### Rollback Process
1. Identify problematic commit/PR
2. Create revert PR
3. Fast-track review and merge
4. Deploy rollback
5. Investigate root cause
6. Implement proper fix

## Tools and Integrations

### GitHub Features
- Use draft PRs for work in progress
- Enable auto-merge after reviews
- Use PR templates
- Link to issues and projects

### External Tools
- Vercel preview deployments
- Lighthouse CI for performance
- Bundle analyzer for size tracking
- Accessibility testing tools