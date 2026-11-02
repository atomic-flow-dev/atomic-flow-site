import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  site: 'https://atomic-flow.dev',
  trailingSlash: 'always',
  integrations: [
    starlight({
      title: 'Atomic Flow',
      description: 'Documentation for reliable workflow execution and predictable failure handling.',
      logo: {
        src: './src/assets/atomic-flow-mark.svg',
        alt: 'Atomic Flow',
      },
      favicon: '/favicon.svg',
      social: [
        { icon: 'github', label: 'GitHub', href: 'https://github.com/atomic-flow-dev' },
      ],
      customCss: ['./src/styles/starlight.css'],
      components: {
        ThemeProvider: './src/components/DocsLightThemeProvider.astro',
        ThemeSelect: './src/components/EmptyThemeSelect.astro',
      },
      editLink: {
        baseUrl: 'https://github.com/atomic-flow-dev/atomic-flow-site/edit/main/',
      },
      sidebar: [
        { label: 'Documentation home', link: '/docs/' },
        {
          label: 'Fundamentals',
          items: [
            { label: 'Why Atomic Flow?', link: '/docs/concepts/overview/' },
            { label: 'Execution lifecycle', link: '/docs/concepts/execution-lifecycle/' },
            { label: 'Failures & recovery', link: '/docs/concepts/failures-and-recovery/' },
            { label: 'Guarantees & limitations', link: '/docs/concepts/guarantees/' },
          ],
        },
        {
          label: 'Implementations',
          items: [
            { label: 'TypeScript / JavaScript', link: '/docs/implementations/typescript/' },
          ],
        },
        {
          label: 'Tooling',
          items: [
            { label: 'Failure Lab', link: '/docs/tools/failure-lab/' },
          ],
        },
        {
          label: 'Project',
          items: [
            { label: 'Development status', link: '/docs/project/status/' },
            { label: 'Roadmap', link: '/roadmap/' },
            { label: 'Website', link: '/' },
          ],
        },
      ],
    }),
  ],
});
