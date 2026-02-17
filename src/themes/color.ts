import { generateShades } from '@/utils';

export default function get(color: string, mode?: string) {
  const isDark = mode === 'dark';
  const shades = generateShades(color);

  // --- Base text + background ----------------------------------------
  const bodyBg = isDark ? shades[950] : '#ffffff';
  const bodyColor = isDark ? '#C7C8DC' : shades[950];

  // --- Primary / Secondary / Tertiary --------------------------------
  const primary = isDark ? shades[400] : shades[500]; // lighter in dark mode
  const secondary = isDark ? shades[200] : shades[900]; // softer in dark mode
  const light = isDark ? shades[850] : shades[50];
  const secondaryBg = isDark ? shades[950] : shades[100];
  const secondaryColor = isDark ? shades[100] : shades[800];
  const tertiaryBg = isDark ? shades[900] : shades[50];
  const tertiaryColor = isDark ? shades[100] : shades[900];
  const emphasisColor = isDark ? shades[50] : shades[950];

  // --- Navigation / Panels / Borders ---------------------------------
  const navMenuBg = isDark ? shades[925] : shades[100];
  const borderColor = isDark ? shades[750] : shades[200];
  const panelHeaderBg = isDark ? shades[900] : shades[200];

  // --- Dropdown / Commandbar -----------------------------------------
  const dropdownBorder = isDark ? shades[800] : shades[300];
  const dropdownItemHoverBg = isDark ? shades[800] : shades[100];
  const dropdownDividerBg = dropdownBorder;
  const commandbarButtonHover = isDark ? shades[800] : shades[200];
  const commandbarButtonActive = isDark ? shades[700] : shades[300];

  // --- Table ----------------------------------------------------------
  const tableBg = isDark ? shades[900] : shades[50];
  const tableBorder = borderColor;
  const tableHeader = isDark ? shades[950] : shades[100];
  const tableRowOdd = isDark ? shades[925] : shades[150];
  const tableRowHover = isDark ? shades[850] : shades[250];
  const tableRowActive = isDark ? shades[800] : shades[300];
  const tableRowCellActive = isDark ? shades[750] : shades[350];

  if (isDark) {
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

        body_bg: bodyBg,
        body_color: bodyColor,

        secondary_bg: secondaryBg,
        secondary_color: secondaryColor,
        tertiary_bg: tertiaryBg,
        tertiary_color: tertiaryColor,

        primary: primary, // default MUI primary (blue[700])
        secondary: secondary, // default MUI secondary (purple[500])
        success: '#4caf50', // green[500]
        warning: '#ff9800', // orange[500]
        danger: '#f44336', // red[500]
        info: '#2196f3', // blue[500]
        light,
        dark: '#f8f9fa',
        emphasis_color: '',
      },
      border: {
        color: borderColor,
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
            bg: panelHeaderBg,
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
            bg: dropdownItemHoverBg,
          },
          item_active: {
            bg: 'primary',
            color: '#fff',
          },
          divider: {
            bg: dropdownDividerBg,
          },
        },
        NavMenu: {
          bg: navMenuBg,
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
            bg: 'rgba(var(--bs-primary-rgb), 0.35)',
          },
          item_active: {
            bg: 'rgba(var(--bs-primary-rgb), 0.25)',
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
              radius: 0,
            },
          },
          button_hover: {
            bg: commandbarButtonHover,
          },
          button_active: {
            bg: commandbarButtonActive,
          },
        },
        Table: {
          bg: tableBg,
          border: {
            color: tableBorder,
          },
          header: {
            bg: tableHeader,
          },
          row_odd: {
            bg: tableRowOdd,
          },
          row_hover: {
            bg: tableRowHover,
          },
          row_active: {
            bg: tableRowActive,
          },
          cell_active: {
            bg: tableRowCellActive,
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
      blue: '#2196f3',
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
      body_color: bodyColor,
      secondary_bg: secondaryBg,
      secondary_color: secondaryColor, // grey[500]
      tertiary_bg: tertiaryBg,
      tertiary_color: tertiaryColor,
      emphasis_color: emphasisColor,

      primary,
      secondary, // default MUI secondary (purple[500])
      success: '#4caf50', // green[500]
      warning: '#ff9800', // orange[500]
      danger: '#f44336', // red[500]
      info: '#2196f3', // blue[500]
      light, // grey[100]
      dark: '#212121', // grey[900]
    },
    border: {
      color: borderColor,
    },
    typography: {},
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
          bg: panelHeaderBg,
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
          color: dropdownBorder,
        },
        item_hover: {
          bg: dropdownItemHoverBg,
        },
        item_active: {
          bg: 'primary',
          color: '#fff',
        },
        divider: {
          bg: dropdownDividerBg,
        },
      },
      NavMenu: {
        bg: navMenuBg,
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
            radius: 0,
          },
        },
        button_hover: {
          bg: commandbarButtonHover,
        },
        button_active: {
          bg: commandbarButtonActive,
        },
      },
      Table: {
        bg: tableBg,
        border: {
          color: tableBorder,
        },
        header: {
          bg: tableHeader,
        },
        row_odd: {
          bg: tableRowOdd,
        },
        row_hover: {
          bg: tableRowHover,
        },
        row_active: {
          bg: tableRowActive,
        },
        cell_active: {
          bg: tableRowCellActive,
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
