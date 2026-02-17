export default function get(mode?: string) {
  if (mode === 'dark') {
    return {
      palette: {
        mode: 'dark',
        blue: '#339af0',
        indigo: '#748ffc',
        purple: '#9775fa',
        pink: '#f783ac',
        red: '#ff6b6b',
        orange: '#ffa94d',
        yellow: '#ffd43b',
        green: '#51cf66',
        teal: '#38d9a9',
        cyan: '#22b8cf',

        white: '#fff',
        black: '#333',

        gray: '#adb5bd',
        gray_dark: '#495057',

        gray_100: '#31334D',
        gray_200: '#343a40',
        gray_300: '#495057',
        gray_400: '#868e96',
        gray_500: '#adb5bd',
        gray_600: '#ced4da',
        gray_700: '#dee2e6',
        gray_800: '#e9ecef',
        gray_900: '#f8f9fa',

        body_bg: '#31334D',
        body_color: '#C7C8DC',

        secondary_bg: '#30334E',
        tertiary_bg: '#3F425C',
        secondary_color: '#adb5bd',
        // tertiary_bg: "#2a2a2a",
        tertiary_color: '#dee2e6',

        primary: '#339af0',
        secondary: '#adb5bd',
        success: '#51cf66',
        warning: '#ffd43b',
        danger: '#ff6b6b',
        info: '#22b8cf',
        light: '#343a40',
        dark: '#f8f9fa',
        emphasis_color: '',
      },
      border: {
        color: 'rgba(234, 234, 255, 0.12)',
      },
      typography: {
        body: {
          fontSize: '15px',
        },
      },
      components: {
        Shell: {
          view: {
            toolbar: {
              gap: '0.25rem',
              padding: '0.25rem',
              border: {
                color: 'var(--bs-border-color)',
                style: 'solid',
                width: '1px',
              },
            },
            content: {
              padding: '0',
            },
          },
        },
        Panel: {
          bg: '#30334E',
          header: {
            bg: '#3A3E5B',
            border: {
              width: 0,
            },
          },
          title: {
            padding: '0.25rem 0.5rem',
          },
        },
        Dropdown: {
          border: {
            color: '',
          },
          item_hover: {
            bg: 'rgba(234, 234, 255, 0.05)',
          },
          item_active: {
            bg: 'primary',
            color: '#fff',
          },
          divider: {
            bg: 'rgba(234, 234, 255, 0.12)',
          },
        },
        NavMenu: {
          bg: '#292A41',
          border: {
            radius: '1rem',
          },
          item: {
            border: {
              radius: '1rem',
            },
          },
          header: {
            padding: '0.5rem',
          },
          item_hover: {
            bg: 'rgba(234, 234, 255, 0.05)',
          },
          item_active: {
            bg: 'rgba(var(--bs-primary-rgb), 0.8)',
            color: 'white',
          },
          icon: {
            bg: 'transparent',
          },
          icon_hover: {
            bg: 'transparent',
          },
          icon_active: {
            color: 'white',
          },
          buttons: {
            bg: 'transparent',
          },
        },
        NavTabs: {
          item: {
            padding: '0.25rem 0.5rem',
          },
          text: {
            transform: 'none',
          },
          icon: {
            bg: 'transparent',
          },
          icon_hover: {
            bg: 'transparent',
          },
          icon_active: {
            bg: 'transparent',
          },
        },
        CommandBar: {
          button: {
            padding: '0.35rem 0.45rem',
          },
          button_hover: {
            bg: '',
          },
          button_active: {
            bg: '',
          },
        },
        Table: {
          bg: '#292A41',
          border: {
            color: 'rgba(234, 234, 255, 0.1)',
          },
          header: {
            bg: '#292A41',
          },
          row_odd: {
            bg: 'rgba(102, 108, 255, 0.05)',
          },
          row_hover: {
            bg: 'rgba(102, 108, 255, 0.16)',
          },
          row_active: {
            bg: 'rgba(102, 108, 255, 0.16)',
          },
          cell_active: {
            bg: 'rgba(102, 108, 255, 0.18)',
          },
          cell: {
            padding: '0.375rem 0.5rem',
          },
        },
        Button: {
          paddingX: '0.5rem',
          paddingY: '0.25rem',
        },
        Badge: {
          padding: '0.25rem 0.5rem',
          border: {
            radius: '1rem',
          },
        },
        Form: {
          padding: '1rem',
          gap: '0.5rem 0.75rem',
        },
        Input: {
          padding: 'calc(0.25rem + 1px) 0 0.25rem 0',
          focus: {
            shadow: 'none',
            border_width: '0 0 1px 0',
          },
          invalid_focus: {
            shadow: 'none',
            border_width: '0 0 1px 0',
          },
          placeholder: {
            color: 'var(--bs-tertiary-color)',
          },
          invalid: {
            border_width: '0 0 1px 0',
          },
          border: {
            radius: 0,
          },
          border_width: '0 0 1px 0',
        },
      },
    };
  }

  return {
    palette: {
      mode: 'light',
      blue: '#0d6efd',
      indigo: '#6610f2',
      purple: '#6f42c1',
      pink: '#d63384',
      red: '#dc3545',
      orange: '#fd7e14',
      yellow: '#ffc107',
      green: '#198754',
      teal: '#20c997',
      cyan: '#0dcaf0',

      white: '#fff',
      black: '#000',

      gray: '#6c757d',
      gray_dark: '#343a40',

      gray_100: '#f8f9fa',
      gray_200: '#e9ecef',
      gray_300: '#dee2e6',
      gray_400: '#ced4da',
      gray_500: '#adb5bd',
      gray_600: '#6c757d',
      gray_700: '#495057',
      gray_800: '#343a40',
      gray_900: '#212529',

      body_bg: '#fff',
      body_color: '#212529',
      secondary_bg: '#e9ecef',
      secondary_color: '#6c757d',
      tertiary_bg: '#f8f9fa',
      tertiary_color: '#495057',
      emphasis_color: '#000',

      primary: '#0d6efd',
      secondary: '#6c757d',
      success: '#198754',
      warning: '#ffc107',
      danger: '#dc3545',
      info: '#0dcaf0',
      light: '#f8f9fa',
      dark: '#212529',

      // blue: "#6C67FA",
      // green: "#3ECF8E",
      // purple: "#C354F2",
      // red: "#DD514C",
      // yellow: "#FFBE4E",
      // cyan: "#26C6F9",

      // white: "#FFF",
      // black: "#333",

      // body_color: "#5A5A7C",
      // emphasis_color: "#33325B",
    },
    border: {
      color: '#EAEAFE',
    },
    typography: {
      body: {
        fontSize: '15px',
      },
    },
    components: {
      Shell: {
        view: {
          toolbar: {
            gap: '0.25rem',
            padding: '0.25rem',
            border: {
              color: 'var(--bs-border-color)',
              style: 'solid',
              width: '1px',
            },
          },
          content: {
            padding: '0',
          },
        },
      },
      Panel: {
        header: {
          bg: '#FBFBFF',
          border: {
            width: 0,
          },
        },
        title: {
          padding: '0.25rem 0.5rem',
        },
      },
      Dropdown: {
        border: {
          color: '#EAEAFE',
        },
        item_hover: {
          bg: '#F8F8FF',
        },
        item_active: {
          bg: 'primary',
          color: '#fff',
        },
        divider: {
          bg: '#EAEAFE',
        },
      },
      NavMenu: {
        bg: '#F8F8FF',
        border: {
          radius: '1rem',
        },
        item: {
          border: {
            radius: '1rem',
          },
        },
        header: {
          padding: '0.5rem',
        },
        item_hover: {
          bg: 'var(--bs-primary-bg-subtle)',
        },
        item_active: {
          bg: 'rgba(var(--bs-primary-rgb), 0.8)',
          color: 'white',
        },
        icon: {
          bg: 'transparent',
        },
        icon_hover: {
          bg: 'transparent',
        },
        icon_active: {
          color: 'white',
        },
        buttons: {
          bg: 'transparent',
        },
      },
      NavTabs: {
        item: {
          padding: '0.25rem 0.5rem',
        },
        text: {
          transform: 'none',
        },
        icon: {
          bg: 'transparent',
        },
        icon_hover: {
          bg: 'transparent',
        },
        icon_active: {
          bg: 'transparent',
        },
      },
      CommandBar: {
        button: {
          padding: '0.35rem 0.45rem',
        },
        button_hover: {
          bg: '#F8F8FF',
        },
        button_active: {
          bg: '#EAEAFE',
        },
      },
      Table: {
        bg: '#FFF',
        border: {
          color: '#EFEDFE',
        },
        header: {
          bg: '#FFF',
        },
        row_odd: {
          bg: '#FBFBFF',
        },
        row_hover: {
          bg: '#F0F0FD',
        },
        row_active: {
          bg: '#F0F0FD',
        },
        cell_active: {
          bg: '#E8E8FD',
        },
        cell: {
          padding: '0.375rem 0.5rem',
        },
      },
      Button: {
        paddingX: '0.5rem',
        paddingY: '0.25rem',
      },
      Badge: {
        padding: '0.25rem 0.5rem',
        border: {
          radius: '1rem',
        },
      },
      // Form: {
      //   padding: "1rem",
      //   gap: "0.5rem 0.75rem",
      // },
      // Input: {
      //   padding: "calc(0.25rem + 1px) 0 0.25rem 0",
      //   focus: {
      //     shadow: "none",
      //     border_width: "0 0 1px 0",
      //   },
      //   invalid_focus: {
      //     shadow: "none",
      //     border_width: "0 0 1px 0",
      //   },
      //   placeholder: {
      //     color: "var(--bs-tertiary-color)",
      //   },
      //   invalid: {
      //     border_width: "0 0 1px 0",
      //   },
      //   border: {
      //     radius: 0,
      //   },
      //   border_width: "0 0 1px 0",
      // },
    },
  };
}
