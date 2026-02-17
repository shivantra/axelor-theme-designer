export default function get(mode?: string) {
  if (mode === 'dark') {
    return {
      palette: {
        mode: 'dark',
        blue: '#2196f3', // MUI blue[500]
        indigo: '#3f51b5', // indigo[500]
        purple: '#9c27b0', // purple[500]
        pink: '#e91e63', // pink[500]
        red: '#f44336', // red[500]
        orange: '#ff9800', // orange[500]
        yellow: '#ffeb3b', // yellow[500]
        green: '#4caf50', // green[500]
        teal: '#009688', // teal[500]
        cyan: '#00bcd4', // cyan[500]

        white: '#fff',
        black: '#333',

        gray: '#9e9e9e',
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

        primary: '#1976d2', // default MUI primary (blue[700])
        secondary: '#9c27b0', // default MUI secondary (purple[500])
        success: '#4caf50', // green[500]
        warning: '#ff9800', // orange[500]
        danger: '#f44336', // red[500]
        info: '#2196f3', // blue[500]
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
      blue: '#2196f3', // MUI blue[500]
      indigo: '#3f51b5', // indigo[500]
      purple: '#9c27b0', // purple[500]
      pink: '#e91e63', // pink[500]
      red: '#f44336', // red[500]
      orange: '#ff9800', // orange[500]
      yellow: '#ffeb3b', // yellow[500]
      green: '#4caf50', // green[500]
      teal: '#009688', // teal[500]
      cyan: '#00bcd4', // cyan[500]

      white: '#ffffff',
      black: '#000000',

      gray: '#9e9e9e', // grey[500]
      gray_dark: '#424242', // grey[800]

      gray_100: '#f5f5f5', // grey[100]
      gray_200: '#eeeeee', // grey[200]
      gray_300: '#e0e0e0', // grey[300]
      gray_400: '#bdbdbd', // grey[400]
      gray_500: '#9e9e9e', // grey[500]
      gray_600: '#757575', // grey[600]
      gray_700: '#616161', // grey[700]
      gray_800: '#424242', // grey[800]
      gray_900: '#212121', // grey[900]

      body_bg: '#ffffff',
      body_color: '#212121',
      secondary_bg: '#f5f5f5', // grey[100]
      secondary_color: '#9e9e9e', // grey[500]
      tertiary_bg: '#eeeeee', // grey[200]
      tertiary_color: '#616161', // grey[700]
      emphasis_color: '#000000',

      primary: '#1976d2', // default MUI primary (blue[700])
      secondary: '#9c27b0', // default MUI secondary (purple[500])
      success: '#4caf50', // green[500]
      warning: '#ff9800', // orange[500]
      danger: '#f44336', // red[500]
      info: '#2196f3', // blue[500]
      light: '#f5f5f5', // grey[100]
      dark: '#212121', // grey[900]
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
          border: {
            radius: '0',
          },
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
