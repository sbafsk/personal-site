You have a strong foundation for your personal site, and enhancing it with shadcn/ui is a great way to improve your development workflow and the site's quality. Since you're using Cursor, the Model Context Protocol (MCP) is the most efficient way to integrate shadcn. The MCP server acts as a bridge, allowing the AI to understand your project and add components with simple commands.

1. Initial Setup
First, you need to configure your Next.js project to use the shadcn/ui CLI and then enable the MCP server in Cursor.

Initialize shadcn/ui: In your project's terminal, run npx shadcn-ui@latest init. This command installs necessary dependencies like tailwindcss-animate and class-variance-authority, and creates the components.json configuration file and a lib/utils.ts utility file for a helper function. During the setup process, you'll be prompted to choose a style (e.g., "New York" or "Default"), a base color, and whether to use CSS variables. Selecting yes for CSS variables is recommended for easy theming.



Configure MCP for Cursor:

Run the command npx shadcn@latest mcp init --client cursor in your project.

This will automatically create a .cursor/mcp.json file in your project's root directory.

Open Cursor Settings and Enable the MCP server for shadcn. You should see a green dot next to the shadcn server in the MCP server list.

2. Efficient Component Installation
Once the MCP server is connected, you can use natural language prompts in Cursor to interact with the shadcn registry. This streamlines the process of adding components to your Next.js project.

View Available Components: Use a prompt like Show me all available components in the shadcn registry to see a list of components you can use.

Install a Component: To add a specific component, use a direct command like Add the button component to my project.

Install Multiple Components: You can also install multiple components at once, for example, Add the button, card, and dialog components to my project.

3. Building with Components
The true power of this integration comes from building entire UI sections using simple prompts. Cursor, with the MCP server, can generate complex JSX code by referencing the installed components.

Generate a Form: Instead of building a form from scratch, try a prompt like Create a contact form using components from the shadcn registry. The AI will understand the request and generate the necessary JSX, including form fields, labels, and buttons, using the components you have already installed.

Build a Layout: You can describe more complex layouts. For your personal site, a prompt like Build a landing page section with a hero, features, and testimonials using shadcn components would be a great way to rapidly prototype your site's sections.

4. Advanced Usage
Theming & Customization: Since shadcn components are copied directly into your project's components/ui directory, you have full control. You can modify the Tailwind classes within the component's .tsx file or update the global CSS variables to change the theme system-wide.

Performance: By using shadcn, you only install the components you need, which keeps your bundle size minimal. Next.js's automatic code splitting will ensure that components are only loaded when they are needed.