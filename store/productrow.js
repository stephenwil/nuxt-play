export const state = () => (
  {
    productrow1: {
      title: 'Our popular products: 4 product example',
      products: [
        {
          name: 'Prudential ISA',
          icon: 'icon-guarantee',
          'block-list': {
            icon: 'arrow-right5',
            items: [
              {
                body: 'This is item 1',
                icon: 'calculator'
              },
              {
                body: 'This is item 2',
                icon: ''
              }
            ]
          },
          blockListItems: [
            'What is an Individual Savings Account (ISA)?',
            'ISA Calculator'
          ],
          ctaButtonLabel: 'Product link',
          bottomLinkText: 'View all our investment products'
        },
        {
          name: 'Pension Choices Plan',
          icon: 'icon-checklist',
          blockListItems: [
            'Articles related to this product',
            'Retirement Income Calculator'
          ],
          ctaButtonLabel: 'Product link',
          bottomLinkText: 'View all our pension planning products'
        },
        {
          name: 'ISA',
          icon: 'directions',
          blockListItems: [
            'Articles related to this product',
            'Retirement Income Calculator'
          ],
          ctaButtonLabel: 'Product link'
        },
        {
          name: 'Car and home insurance',
          icon: 'directions',
          blockListItems: [
            'Articles related to this product'
          ],
          ctaButtonLabel: 'Find out more'
        }
      ]
    }
  }
)

export const mutations = {}
