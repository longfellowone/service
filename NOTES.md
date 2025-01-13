Node

- npm cache clean --force
- rm -rf node_modules package-lock.json

Webstorm

- Type div. then <tab>
- Shift + Shift, bring up search
- Cmd + 1, go to project files
- Cmd + B, go to
- Ctrl + Tab, switch between open files

Data management

- https://nextjs.org/blog/security-nextjs-server-components-actions#component-level-data-access

Prisma

- Turn on relation queries
- npx prisma studio
- npx prisma db push (use when prototyping)
- npx prisma migrate dev (use when developing while in production)
- Use @@index

Forms

- Use zod-form-data, not sure if zod is also needed?
- https://x.com/rwieruch/status/1857105224806068629/photo/1
- https://www.youtube.com/watch?v=KhO4VjaYSXU

Save state to URL

- https://nuqs.47ng.com/

Tailwind

- Tailwind fold

Font

- Inter using next/font?

React Aria Components (headless components)
https://react-spectrum.adobe.com/react-aria/components.html
https://react-spectrum.adobe.com/react-aria/styling.html#plugin
https://react-spectrum.adobe.com/react-aria/internationalization.html

- Use ComboBox/SearchField for autocomplete

Drag and dop
https://github.com/alexreardon/pdnd-react-tailwind
https://github.com/atlassian/pragmatic-drag-and-drop

Icons

- Lucide React
  https://lucide.dev/guide/packages/lucide-react
- Phosphor Icons
  https://github.com/phosphor-icons/homepage?tab=readme-ov-file#phosphor-icons

Animated text highlight (not this project)
https://www.npmjs.com/package/react-rough-notation

Lucia (auth)
https://lucia-auth.com/

Try using grid over flex

Instead of margins
<div class="container flex gap-10">
  <div class="flex gap-5">
    <h1>Header</h1>
    <p>Subheading</p>
  </div>
  <p>Lorem ipsum description</p>
</div>

