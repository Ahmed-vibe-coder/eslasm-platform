import type grapesjs from 'grapesjs'

export const coursesGridBlock = (editor: grapesjs.Editor) => {
  editor.BlockManager.add('courses-grid', {
    label: 'Courses Grid',
    category: 'LMS',
    content: {
      type: 'div',
      attributes: { class: 'courses-grid', 'data-component': 'courses-grid' },
      components: Array.from({ length: 3 }, (_, i) => ({
        type: 'div',
        attributes: { class: 'course-card' },
        components: [
          { type: 'image', attributes: { class: 'course-thumbnail', src: `https://placehold.co/400x225?text=Course+${i + 1}` } },
          { type: 'text', content: `Course Title ${i + 1}`, attributes: { class: 'course-title' } },
          { type: 'text', content: 'Instructor Name', attributes: { class: 'course-instructor' } },
          { type: 'text', content: '$49.99', attributes: { class: 'course-price' } },
        ],
      })),
    },
  })
}
