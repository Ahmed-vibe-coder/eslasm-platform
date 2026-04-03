import type grapesjs from 'grapesjs'

export const heroBlock = (editor: grapesjs.Editor) => {
  editor.BlockManager.add('hero-section', {
    label: 'Hero Section',
    category: 'Sections',
    content: {
      type: 'section',
      attributes: { class: 'hero-section' },
      components: [
        {
          type: 'div',
          attributes: { class: 'hero-content' },
          components: [
            { type: 'text', content: 'Your Learning Journey Starts Here', attributes: { class: 'hero-title' } },
            { type: 'text', content: 'Join thousands of students and start learning today.', attributes: { class: 'hero-subtitle' } },
            { type: 'button', content: 'Explore Courses', attributes: { class: 'btn-primary' } },
          ],
        },
      ],
    },
  })
}
