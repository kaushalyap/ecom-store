const PrismicTypes = {
  Main: {
    category: {
      type: 'Group',
      config: {
        fields: {
          image: {
            type: 'Image',
            config: {
              constraint: {},
              thumbnails: [],
              label: 'Image',
            },
          },
          list_key: {
            type: 'StructuredText',
            config: {
              single: 'heading1,heading2,heading3,heading4,heading5,heading6',
              label: 'List Key',
            },
          },
          href: {
            type: 'StructuredText',
            config: {
              single: 'heading1,heading2,heading3,heading4,heading5,heading6',
              label: 'href',
            },
          },
          title: {
            type: 'StructuredText',
            config: {
              single: 'heading1,heading2,heading3,heading4,heading5,heading6',
              label: 'Title',
            },
          },
          object_fit: {
            type: 'StructuredText',
            config: {
              single: 'heading1,heading2,heading3,heading4,heading5,heading6',
              label: 'Object Fit',
            },
          },
          object_position: {
            type: 'StructuredText',
            config: {
              single: 'heading1,heading2,heading3,heading4,heading5,heading6',
              label: 'Object Position',
            },
          },
        },
        label: 'Category',
      },
    },
  },
};

export default PrismicTypes;
