module.exports = () => ({
  'duplicate-button': true,
  "vercel-deploy": {
    enabled: true,
    config: {
      deployHook: process.env.VERCEL_DEPLOY_PLUGIN_HOOK,
      apiToken: process.env.VERCEL_DEPLOY_PLUGIN_API_TOKEN,
      appFilter: process.env.VERCEL_DEPLOY_PLUGIN_APP_FILTER,
      // teamFilter: process.env.VERCEL_DEPLOY_PLUGIN_TEAM_FILTER,
      roles: ["strapi-super-admin"],
    },
  },
  slugify: {
    enabled: true,
    config: {
      contentTypes: {
        service: {
          field: 'url',
          references: 'title',
          shouldUpdateSlug: true
        },
        'service-category': {
          field: 'url',
          references: 'title',
          shouldUpdateSlug: true
        },
        'truck-category': {
          field: 'url',
          references: 'title',
          shouldUpdateSlug: true
        },
        'parts-category': {
          field: 'url',
          references: 'title',
          shouldUpdateSlug: true
        },
        part: {
          field: 'url',
          references: 'title',
          shouldUpdateSlug: true
        },

        truck: {
          field: 'url',
          references: 'title',
          shouldUpdateSlug: true
        },

      },
    },
  },
  upload: {
    config: {
      providerOptions: {
        localServer: {
          maxage: 300000
        },
      },
    },
  },
  seo: {
    enabled: true,
  },
  'import-export-entries': {
    enabled: true,
  },
  graphql: {
    enabled: true,
    config: {
      endpoint: '/graphql',
      shadowCRUD: true,
      playgroundAlways: false,
      depthLimit: 10,
      defaultLimit: 100,
      amountLimit: 100,
      maxLimit: 150,

      apolloServer: {

        tracing: false,
      },
    },
  },
  ckeditor: {
    enabled: true,
    config: {
      plugin: {
        editor: { // editor default config

          // https://ckeditor.com/docs/ckeditor5/latest/features/markdown.html
          // if you need markdown support and output set: removePlugins: [''],
          // default is
          // removePlugins: ['Markdown'],

          // https://ckeditor.com/docs/ckeditor5/latest/features/toolbar/toolbar.html
          toolbar: {
            items: [
              'paragraph',
              'heading1',
              'heading2',
              '|',
              'bold',
              'italic',
              'fontColor',
              'fontBackgroundColor',
              'fontFamily',
              'underline',
              'fontSize',
              'removeFormat',
              '|',
              'bulletedList',
              'todoList',
              'numberedList',
              '|',
              'alignment',
              'outdent',
              'indent',
              'horizontalLine',
              '|',
              'StrapiMediaLib',
              'insertTable',
              'blockQuote',
              'mediaEmbed',
              'link',
              'highlight',
              '|',
              'htmlEmbed',
              'sourceEditing',
              'code',
              'codeBlock',
              '|',
              'subscript',
              'superscript',
              'strikethrough',
              'specialCharacters',
              '|',
              'heading',
              "fullScreen",
              'undo',
              'redo'
            ]
          },
          // https://ckeditor.com/docs/ckeditor5/latest/features/font.html
          fontSize: {
            options: [
              9,
              11,
              13,
              'default',
              17,
              19,
              21,
              27,
              35,
            ],
            supportAllValues: false
          },
          fontFamily: {
            options: [
              'default',
              'Arial, Helvetica Neue, Helvetica, Source Sans Pro, sans-serif',
              'Courier New, Courier, monospace',
              'Georgia, serif',
              'Lucida Sans Unicode, Lucida Grande, sans-serif',
              'Tahoma, Geneva, sans-serif',
              'Times New Roman, Times, serif',
              'Trebuchet MS, Helvetica, sans-serif',
              'Verdana, Geneva, sans-serif',
              'Roboto, Roboto Black, Roboto Medium, Roboto Light, sans-serif',
            ],
            supportAllValues: true
          },
          fontColor: {
            columns: 5,
            documentColors: 10,
          },
          fontBackgroundColor: {
            columns: 5,
            documentColors: 10,
          },
          // https://ckeditor.com/docs/ckeditor5/latest/features/ui-language.html
          // default language: 'en',
          // https://ckeditor.com/docs/ckeditor5/latest/features/images/images-overview.html
          image: {
            resizeUnit: "%",
            resizeOptions: [{
              name: 'resizeImage:original',
              value: null,
              icon: 'original'
            },
              {
                name: 'resizeImage:25',
                value: '25',
                icon: 'small'
              },
              {
                name: 'resizeImage:50',
                value: '50',
                icon: 'medium'
              },
              {
                name: 'resizeImage:75',
                value: '75',
                icon: 'large'
              }],
            toolbar: [
              'toggleImageCaption',
              'imageTextAlternative',
              'imageStyle:inline',
              'imageStyle:block',
              'imageStyle:side',
              'linkImage',
              'resizeImage:25', 'resizeImage:50', 'resizeImage:75', 'resizeImage:original'
            ]
          },
          // https://ckeditor.com/docs/ckeditor5/latest/features/table.html
          table: {
            defaultProperties: {
              borderStyle: 'solid',
              borderColor: 'hsl(0,0%,27%)',
              borderWidth: '1px',
              alignment: 'left',
              width: '100%',
              height: 'auto'
            },
            tableProperties: {
              // The default styles for tables in the editor.
              // They should be synchronized with the content styles.

              contentToolbar: [
                'tableColumn',
                'tableRow',
                'mergeTableCells',
                'tableCellProperties',
                'tableProperties',
                'toggleTableCaption'
              ],
              // The default styles for table cells in the editor.
              // They should be synchronized with the content styles.
              tableCellProperties: {
                defaultProperties: {
                  horizontalAlignment: 'center',
                  verticalAlignment: 'bottom',
                  padding: '10px'
                }
              }
            }
          },
          // https://ckeditor.com/docs/ckeditor5/latest/features/headings.html
          heading: {
            options: [
              {model: 'paragraph', title: 'Paragraph', class: 'ck-heading_paragraph'},
              {model: 'heading1', view: 'h1', title: 'Heading 1', class: 'ck-heading_heading1'},
              {model: 'heading2', view: 'h2', title: 'Heading 2', class: 'ck-heading_heading2'},
              {model: 'heading3', view: 'h3', title: 'Heading 3', class: 'ck-heading_heading3'},
              {model: 'heading4', view: 'h4', title: 'Heading 4', class: 'ck-heading_heading4'},
            ]
          },
          // https://ckeditor.com/docs/ckeditor5/latest/features/general-html-support.html
          // Regular expressions (/.*/  /^(p|h[2-4])$/' etc) for htmlSupport does not allowed in this config
          htmlSupport: {
            allow: [
              {
                name: 'img',
                attributes: {
                  sizes: true,
                  loading: true,
                }
              },
            ]
          }
        }
      }
    }
  },
  "fuzzy-search": {
    enabled: true,
    config: {
      contentTypes: [
        {
          uid: "api::part.part",
          modelName: "parts",
          transliterate: true,
          // queryConstraints: {
          //   where: {
          //     $and: [
          //       {
          //         publishedAt: { $notNull: true },
          //       },
          //     ],
          //   },
          // },
          fuzzysortOptions: {
            characterLimit: 300,
            threshold: -600,
            limit: 50,
            keys: [
              {
                name: "title",
                weight: 100,
              },
              {
                name: "partNumber",
                weight: -100,
              },
            ],
          },
        }

      ],
    },
  },
});
