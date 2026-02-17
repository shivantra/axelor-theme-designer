import { memo, ReactElement, useCallback, useEffect, useMemo, useRef, useState } from 'react';
import {
  Box,
  Button,
  ClickAwayListener,
  clsx,
  CommandBar,
  Popper,
  ThemeProvider,
  TVariant,
} from '@axelor/ui';
import { Navigate, useLocation, useNavigationType } from 'react-router-dom';
import { ResponsiveThemeOptions } from '@axelor/ui/core/styles/theme/types';
import { MaterialIcon } from '@axelor/ui/icons/material-icon';
import { produce } from 'immer';

import TabsComponent from '../../components/tabs';
import Sidebar from '../../components/nav-menu';
import { Dialog } from '../../components/dialog';
import { ThemeBuilder, ThemeBuilderProvider } from '../../components/theme-builder';

import getDefaultTheme from '../../themes/default';
import getThemeByColor from '../../themes/color';

import { ElementEditor } from '../../components/theme-builder/theme-editor';
import { ThemeElement } from '../../components/theme-builder/theme-elements';
import { EditorPopupProvider } from '../../scope';
import { Layout } from '../../Layout';
import { i18n } from '@/services/i18n';
import formStyles from '../../views/form/form.module.scss';
import styles from '../../App.module.scss';
import { Footer } from '@/components/footer';

type DefineTheme = {
  key: string;
  title: string;
  getTheme: (mode?: string) => any;
};

type CustomTheme = {
  key: string;
  title: string;
  content?: any;
};

const Variants = ['Primary', 'Secondary', 'Success', 'Warning', 'Danger', 'Info', 'Light', 'Dark'];

const colorMap: Record<string, string> = {
  default: '#1976d2',
  red: '#E7000B',
  orange: '#F54900',
  green: '#358438',
  blue: '#155DFC',
  yellow: '#FDC700',
  violet: '#7F22FE',
};

const THEMES = [
  { key: 'default', title: 'Standard', getTheme: getDefaultTheme },
  {
    key: 'red',
    title: 'Red',
    getTheme: (mode?: string) => getThemeByColor('#E7000B', mode),
  },
  {
    key: 'orange',
    title: 'Orange',
    getTheme: (mode?: string) => getThemeByColor('#F54900', mode),
  },
  {
    key: 'green',
    title: 'Green',
    getTheme: (mode?: string) => getThemeByColor('#358438', mode),
  },
  {
    key: 'blue',
    title: 'Blue',
    getTheme: (mode?: string) => getThemeByColor('#155DFC', mode),
  },
  {
    key: 'yellow',
    title: 'Yellow',
    getTheme: (mode?: string) => getThemeByColor('#FDC700', mode),
  },
  {
    key: 'violet',
    title: 'Violet',
    getTheme: (mode?: string) => getThemeByColor('#7F22FE', mode),
  },
];

const getAppMode = () => localStorage.getItem('app.theme.mode') || 'light';
const setAppMode = (mode: string) => localStorage.setItem('app.theme.mode', mode);

const getCustomThemes = () => {
  try {
    const json = localStorage.getItem('app.custom.themes') || '[]';
    return JSON.parse(json) as CustomTheme[];
  } catch (err) {
    // error
  }
  return [];
};

const saveCustomThemes = (themes: CustomTheme[]) =>
  localStorage.setItem('app.custom.themes', JSON.stringify(themes));

const getSavedTheme = () => localStorage.getItem('app.theme.name') || 'default';
const saveApplyTheme = (themeName: string) => localStorage.setItem('app.theme.name', themeName);

const titleToKey = (title: string) => title.toLowerCase().replace(/\s+/g, '-');

export function Designer() {
  const location = useLocation();
  const navigationType = useNavigationType();

  const [deleteKey, setDeleteKey] = useState<string | null>(null);

  const [editingTheme, setEditingTheme] = useState<CustomTheme | null>(null);

  const [applyTheme, setTheme] = useState(getSavedTheme());
  const [customThemes, setCustomThemes] = useState(getCustomThemes());

  const appliedCustomTheme = customThemes.find((x) => x.key === applyTheme);
  const customThemeMode = appliedCustomTheme?.content?.palette?.mode;

  const [options, setOptions] = useState<any>(
    () => (appliedCustomTheme ? appliedCustomTheme.content : null) ?? getDefaultTheme(getAppMode())
  );

  const [popper, setPopper] = useState<{ target: HTMLElement } | null>(null);

  const [addColorPopper, setAddColorPopper] = useState<{
    target: HTMLElement;
  } | null>(null);
  const [showPalette, setShowPalette] = useState(false);
  const [editorPopper, setEditorPopper] = useState<{
    target: HTMLElement;
    element?: ThemeElement;
  } | null>(null);

  const [mode, setMode] = useState(customThemeMode ?? getAppMode());
  const defaultTheme = useMemo(() => getDefaultTheme(mode), [mode]);

  // if any defined theme is active
  const activeTheme = useMemo(() => THEMES.find((t) => t.key === applyTheme), [applyTheme]);

  const getActiveDefineTheme = activeTheme?.getTheme as (mode?: string) => any;
  const isColored = activeTheme && activeTheme?.key !== 'default';

  const closePopper = useCallback(() => setPopper(null), []);

  const closeAddColorPopper = useCallback(() => setAddColorPopper(null), []);

  const closeEditorPopper = useCallback(() => {
    setEditorPopper(null);
  }, []);

  const handleShowEditorPopper = useCallback((target: HTMLElement, element: ThemeElement) => {
    requestAnimationFrame(() => {
      setEditorPopper({ target, element });
    });
  }, []);

  const handleChangePaletteColor = (variant: TVariant, color: string) => {
    if (variant === 'primary' && (isColored || addColorPopper)) {
      return setOptions(getThemeByColor(color));
    }
    setOptions((options: any) => ({
      ...options,
      palette: {
        ...options.palette,
        [variant]: color,
      },
    }));
  };

  const visibleCustomThemes = customThemes.slice(0, 2); // first 2 on screen
  const overflowCustomThemes = customThemes.slice(2); // rest go into More

  const handleAddCustomTheme = useCallback((newTheme: CustomTheme) => {
    setTheme(newTheme.key);
    setCustomThemes((themes) => [...themes, newTheme]);
  }, []);

  const handleSaveCustomTheme = useCallback((newTheme: Partial<CustomTheme>) => {
    setCustomThemes((themes) =>
      themes.map((t) => (t.key === newTheme.key ? { ...t, ...newTheme } : t))
    );
  }, []);

  const handleEditThemeColorChange = useCallback((name: string, value: string) => {
    setEditingTheme(
      produce((draft) => {
        if (draft?.content?.palette) {
          draft.content.palette[name] = value;
        }
      })
    );
  }, []);

  const handleAddCustomColorTheme = useCallback(() => {
    // Generate automatic name
    const existingNumbers = customThemes.map((t) => {
      const match = t.title.match(/^Custom (\d+)$/);
      return match ? parseInt(match[1], 10) : 0;
    });
    const nextNumber = existingNumbers.length > 0 ? Math.max(...existingNumbers) + 1 : 1;
    const title = `Custom ${nextNumber}`;
    const key = titleToKey(title);

    const newTheme: CustomTheme = {
      key,
      title,
      content: options,
    };

    setCustomThemes((prev) => [...prev, newTheme]);
    setTheme(key);

    closeAddColorPopper();
  }, [closeAddColorPopper, options, customThemes]);

  const handleEditTheme = (key: string) => {
    const editTheme = customThemes.find((t) => t.key === key);
    if (editTheme) {
      setEditingTheme(editTheme);
    }
  };

  const handleDeleteTheme = (key: string) => {
    setCustomThemes((prev) => prev.filter((theme) => theme.key !== key));
    setDeleteKey(null);

    if (applyTheme === key) {
      setTheme('default');
    }
  };

  // function from update custom color popup
  const handleUpdateTheme = useCallback(() => {
    if (!editingTheme) return;

    setCustomThemes((prev) =>
      prev.map((theme) => (theme.key === editingTheme.key ? editingTheme : theme))
    );

    // If this theme is currently applied, update UI
    if (applyTheme === editingTheme.key) {
      setOptions(editingTheme.content);
    }

    setEditingTheme(null);
  }, [editingTheme, applyTheme]);

  const handleCloseEditThemeDialog = useCallback(() => setEditingTheme(null), []);

  // if any defined theme is applied
  useEffect(() => {
    if (getActiveDefineTheme) {
      setOptions(getActiveDefineTheme(mode));
    }
  }, [getActiveDefineTheme, mode]);

  useEffect(() => {
    if (appliedCustomTheme) {
      setOptions(appliedCustomTheme.content);
      setMode(customThemeMode);
    }
  }, [appliedCustomTheme, customThemeMode]);

  useEffect(() => {
    setAppMode(mode);
  }, [mode]);

  // save to local storage
  useEffect(() => {
    saveCustomThemes(customThemes);
  }, [customThemes]);

  // save to local storage
  useEffect(() => {
    saveApplyTheme(applyTheme);
  }, [applyTheme]);

  const isReload = navigationType === 'POP'; // reload or direct URL
  if (isReload || !location.state?.fromApp) {
    return <Navigate to="/" replace />;
  }

  // Colored circle component
  const ColorCircle = ({ color }: { color: string }) => (
    <div className="w-3 h-3 rounded-full" style={{ backgroundColor: color }} />
  );

  const allColorMap: Record<string, string> = {
    ...colorMap,
    ...Object.fromEntries(
      customThemes.map((t) => [t.title, t.content?.palette?.primary ?? '#000000'])
    ),
  };

  return (
    <ThemeProvider theme={mode} options={options}>
      <Render>
        <Box className="container mx-auto p-4">
          <Box
            d="flex"
            className="relative overflow-x-scroll rounded-xl bg-white/20 backdrop-blur-lg border border-white/10 p-3 mb-6! shadow-lg transition-all duration-500 hover:shadow-xl"
          >
            <CommandBar
              className={clsx(
                styles.themeOptions,
                formStyles.commandBar,
                'lg:flex-wrap flex-row! gap-1'
              )}
              items={[
                // STATIC THEMES
                ...THEMES.map((theme) => ({
                  key: theme.key,
                  text: i18n.get(theme.title),
                  className: clsx(theme.key === applyTheme && styles.active, 'color-option'),
                  icon: () => <ColorCircle color={allColorMap[theme.key]} />,
                  onClick: () => setTheme(theme.key),
                })),

                // FIRST 2 CUSTOM THEMES
                ...visibleCustomThemes.map((theme) => ({
                  key: theme.key,
                  text: i18n.get(theme.title),
                  className: clsx(
                    theme.key === applyTheme && styles.active,
                    'custom-color-button truncate-custom'
                  ),
                  icon: () => <ColorCircle color={allColorMap[theme.title]} />,
                  showDownArrow: true,
                  items: [
                    {
                      key: `${theme.key}-edit`,
                      text: 'Edit',
                      onClick: () => handleEditTheme(theme.key),
                    },
                    {
                      key: `${theme.key}-delete`,
                      text: 'Delete',
                      onClick: () => setDeleteKey(theme.key),
                    },
                  ],
                  onClick: () => setTheme(theme.key),
                })),
                {
                  key: 'more',
                  iconProps: {
                    icon: 'more_vert',
                  },
                  className: overflowCustomThemes.length >= 1 ? 'block' : 'hidden!',
                  items: overflowCustomThemes.map((theme) => ({
                    key: theme.key,
                    text: i18n.get(theme.title),
                    className: clsx(theme.key === applyTheme && styles.active, 'customcolorbutton'),
                    icon: () => <ColorCircle color={allColorMap[theme.key]} />,
                    showDownArrow: true,
                    items: [
                      {
                        key: `${theme.key}-apply`,
                        text: 'Apply',
                        onClick: () => setTheme(theme.key),
                      },
                      {
                        key: `${theme.key}-edit`,
                        text: 'Edit',
                        onClick: () => handleEditTheme(theme.key),
                      },
                      {
                        key: `${theme.key}-delete`,
                        text: 'Delete',
                        onClick: () => setDeleteKey(theme.key),
                      },
                    ],
                  })),
                },
                {
                  key: 'plus',
                  iconOnly: true,
                  iconProps: {
                    icon: 'add',
                  },
                  description: 'Add colors',
                  onClick: (e) => {
                    setAddColorPopper({ target: e.target as HTMLElement });
                  },
                },
                {
                  key: 'picker',
                  iconOnly: true,
                  iconProps: {
                    icon: 'colors',
                  },
                  description: 'Main colors',
                  onClick: (e) => {
                    setPopper({ target: e.target as HTMLElement });
                  },
                },
                {
                  key: 'palette',
                  iconOnly: true,
                  iconProps: {
                    icon: 'palette',
                  },
                  description: `${showPalette ? 'Hide' : 'Show'} palettes`,
                  onClick: () => setShowPalette(!showPalette),
                },
                {
                  key: 'dark_mode',
                  iconOnly: true,
                  description: `Switch to ${mode === 'light' ? 'Dark' : 'Light'}`,
                  iconProps: {
                    icon: 'contrast',
                  },
                  onClick: () => setMode(mode === 'light' ? 'dark' : 'light'),
                },
              ]}
            />
            <AppThemeActions
              options={options}
              setOptions={setOptions}
              customTheme={appliedCustomTheme?.key}
              onCreate={handleAddCustomTheme}
              onSave={handleSaveCustomTheme}
            />
          </Box>
          <EditorPopupProvider enabled={showPalette} showPopup={handleShowEditorPopper}>
            <ThemeContent />
          </EditorPopupProvider>

          <Popper
            open={Boolean(popper)}
            target={popper?.target ?? null}
            placement="bottom-start"
            offset={[0, 4]}
          >
            <ClickAwayListener onClickAway={closePopper}>
              <Box p={2} className=" p-3! flex flex-col gap-1 z-10">
                {Variants.map((colorTitle) => {
                  const color = colorTitle.toLowerCase();
                  return (
                    <Box
                      key={color}
                      d="flex"
                      justifyContent={'center'}
                      className={styles.colorBox}
                      alignItems={'center'}
                    >
                      <label className=" w-32!">{i18n.get(colorTitle)} : </label>
                      <label
                        className="w-7! h-7! rounded-full cursor-pointer"
                        style={{ backgroundColor: options?.palette?.[color] }}
                      >
                        <input
                          type="color"
                          className="sr-only w-7! h-7!"
                          value={options?.palette?.[color]}
                          onChange={(e) =>
                            handleChangePaletteColor(color as TVariant, e.target.value)
                          }
                        />
                      </label>
                    </Box>
                  );
                })}
              </Box>
            </ClickAwayListener>
          </Popper>

          {/* Add Custom Color */}
          <Popper
            open={Boolean(addColorPopper)}
            target={addColorPopper?.target ?? null}
            placement="bottom-start"
            offset={[0, 4]}
          >
            <ClickAwayListener onClickAway={closeAddColorPopper}>
              <Box p={2} className="p-3! flex flex-col gap-1 z-10 bg-white rounded shadow-lg">
                {/* Color pickers for all variants */}
                {Variants.map((colorTitle) => {
                  const color = colorTitle.toLowerCase();
                  return (
                    <Box
                      key={color}
                      d="flex"
                      // justifyContent={"center"}
                      className={styles.colorBox}
                      alignItems={'center'}
                    >
                      <label className=" w-32!">{i18n.get(colorTitle)} : </label>
                      <label
                        className="w-7! h-7! rounded-full cursor-pointer"
                        style={{ backgroundColor: options?.palette?.[color] }}
                      >
                        <input
                          type="color"
                          className="sr-only w-7! h-7!"
                          value={options?.palette?.[color]}
                          onChange={(e) =>
                            handleChangePaletteColor(color as TVariant, e.target.value)
                          }
                        />
                      </label>
                    </Box>
                  );
                })}

                {/* Action buttons */}
                <Box className="flex justify-end gap-2 mt-3">
                  <button
                    className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300"
                    onClick={closeAddColorPopper}
                  >
                    Cancel
                  </button>
                  <button
                    className="px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700"
                    onClick={() => handleAddCustomColorTheme()}
                  >
                    Add
                  </button>
                </Box>
              </Box>
            </ClickAwayListener>
          </Popper>

          <Popper
            open={Boolean(editorPopper)}
            target={editorPopper?.target ?? null}
            placement="end-top"
            className={styles.popper}
          >
            <ClickAwayListener onClickAway={closeEditorPopper}>
              <Box p={2}>
                {editorPopper?.element && (
                  <AppThemeBuilder
                    theme={options!}
                    setTheme={setOptions!}
                    element={editorPopper.element}
                  />
                )}
              </Box>
            </ClickAwayListener>
          </Popper>

          {/* Delete Custom Color */}
          <Dialog
            open={!!deleteKey}
            title="Delete Custom Color"
            okTitle={null}
            closeTitle="Cancel"
            onClose={() => setDeleteKey(null)}
            buttons={[
              {
                title: 'Delete',
                onClick: () => {
                  if (deleteKey) handleDeleteTheme(deleteKey);
                },
              },
            ]}
          >
            Are you sure you want to delete this custom color?
          </Dialog>

          {/* Update Custom Color */}
          <Dialog
            open={Boolean(editingTheme)}
            title={`Edit Theme: ${editingTheme?.title}`}
            okTitle={null}
            closeTitle={null}
            onClose={handleCloseEditThemeDialog}
            buttons={[
              {
                title: 'Update',
                variant: 'primary',
                onClick: () => {
                  handleUpdateTheme(); // your update logic
                  handleCloseEditThemeDialog();
                },
              },
            ]}
          >
            {Variants.map((colorTitle) => {
              const color = colorTitle.toLowerCase();
              const value =
                editingTheme?.content?.palette?.[color] ??
                (defaultTheme as any)?.palette?.[color] ??
                '#000';

              return (
                <Box
                  key={color}
                  d="flex"
                  className={`${styles.colorBox} mb-1.5`}
                  alignItems={'center'}
                >
                  <label className=" w-full">{i18n.get(colorTitle)} : </label>
                  <label
                    className="w-7! h-7! rounded-full cursor-pointer"
                    style={{
                      backgroundColor: value,
                    }}
                  >
                    <input
                      type="color"
                      className="sr-only w-7! h-7!"
                      value={value}
                      onChange={(e) => handleEditThemeColorChange(color, e.target.value)}
                    />
                  </label>
                </Box>
              );
            })}
          </Dialog>
        </Box>
      </Render>
    </ThemeProvider>
  );
}

function AppThemeBuilder({
  theme,
  setTheme,
  element,
}: {
  theme: ResponsiveThemeOptions;
  setTheme: (theme: ResponsiveThemeOptions) => void;
  element: ThemeElement;
}) {
  const handleChange = useCallback(
    (newTheme: ResponsiveThemeOptions) => {
      setTheme(newTheme);
    },
    [setTheme]
  );

  return (
    <ThemeBuilderProvider theme={theme}>
      <ElementEditor compact theme={theme} element={element} onChange={handleChange} />
    </ThemeBuilderProvider>
  );
}

function AppThemeActions({
  options,
  setOptions,
  onCreate,
  onSave,
  customTheme,
}: {
  customTheme?: string;
  options?: ResponsiveThemeOptions;
  setOptions?: (options: ResponsiveThemeOptions) => void;
  onCreate?: (theme: CustomTheme) => void;
  onSave?: (theme: Partial<CustomTheme>) => void;
}) {
  const [copied, setCopied] = useState(false);
  const [showCopyDialog, setShowCopyDialog] = useState(false);
  const [showEditDialog, setShowEditDialog] = useState(false);
  const [jsonText, setJsonText] = useState('{}');
  const [invalid, setInvalid] = useState(false);
  const [showJSON, setShowJSON] = useState(false);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const text = useMemo(() => JSON.stringify(options, null, 2), [options]);

  const handleCopyAction = useCallback(() => {
    navigator?.clipboard
      ?.writeText?.(text)
      .then(() => setCopied(true))
      .catch(() => {
        setCopied(false);
      });
    setShowCopyDialog(true);
  }, [text]);

  const closeCopyDialog = useCallback(() => {
    setShowCopyDialog(false);
  }, []);

  const handleEditAction = useCallback(() => {
    setJsonText(JSON.stringify(options));
    setShowEditDialog(true);
  }, [options]);

  const handleJsonTextChange = useCallback((value?: string | null) => {
    setJsonText(value ?? '{}');
  }, []);

  const saveTheme = useCallback(
    (content?: string) => {
      if (!invalid) {
        try {
          const options = JSON.parse(content || jsonText);
          setOptions?.(options);
        } catch (err) {
          // handle error
        }
      }
    },
    [invalid, jsonText, setOptions]
  );

  const closeEditDialog = useCallback(() => {
    setShowEditDialog(false);
  }, []);

  const formatJSON = useCallback(() => {
    try {
      const json = JSON.parse(jsonText);
      setJsonText(JSON.stringify(json, null, 2));
    } catch {
      // handle error
    }
  }, [jsonText]);

  const createAndSave = useCallback(
    (fileName?: string, content?: string) => {
      const themes = getCustomThemes();
      const themeName = prompt(
        'Please enter custom theme name',
        fileName || 'Theme ' + (themes.length + 1)
      );
      if (!themeName) return;

      const key = titleToKey(themeName);

      if (THEMES.map((t) => t.key).includes(key) || getCustomThemes().some((x) => x.key === key)) {
        alert('Theme name must be unique.');
        return;
      }

      const newTheme = {
        key,
        title: themeName,
        content: JSON.parse(content || jsonText),
      };
      onCreate?.(newTheme);
      setShowEditDialog(false);
      saveTheme(content);
    },
    [jsonText, saveTheme, onCreate]
  );

  const save = useCallback(() => {
    setShowEditDialog(false);
    saveTheme();
    onSave?.({ key: customTheme!, content: JSON.parse(jsonText) });
  }, [customTheme, onSave, jsonText, saveTheme]);

  const handleUpload = useCallback(() => {
    fileInputRef.current?.click();
  }, []);

  const handleDownload = useCallback(() => {
    const blob = new Blob([JSON.stringify(JSON.parse(jsonText), null, 2)], {
      type: 'application/json',
    });

    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `${customTheme ?? 'theme'}.json`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  }, [jsonText, customTheme]);

  const handleFileUpload = useCallback(
    (event: any) => {
      const file = event.target.files[0];
      if (!file) return;

      if (file.type !== 'application/json') {
        alert('Please upload a valid JSON file.');
        return;
      }

      const name = file.name?.replace('.json', '');
      const reader = new FileReader();

      reader.onload = (e: any) => {
        setJsonText(e.target.result);
        createAndSave(name, e.target.result);
      };

      reader.readAsText(file);
    },
    [createAndSave]
  );

  return (
    <>
      <Box d="flex" gap={5} me={2}>
        <CommandBar
          className={clsx(formStyles.commandBar)}
          items={[
            {
              key: 'customize',
              text: i18n.get('Customize'),
              onClick: handleEditAction,
              icon: () => <MaterialIcon icon="tune" className="text-[18px]" />,
            },
            {
              key: 'copy',
              text: i18n.get('Copy code'),
              onClick: handleCopyAction,
              icon: () => <MaterialIcon icon="content_copy" className="text-[18px]" />,
            },
          ]}
        />
      </Box>
      <Dialog
        title={'Copy theme'}
        size="lg"
        okTitle={null}
        open={showCopyDialog}
        onOk={() => {}}
        onClose={closeCopyDialog}
      >
        <Box>
          <Box as="p">
            {copied
              ? '✅ Copied to clipboard! You can paste into theme configuration editor'
              : 'Copy and paste the following code into theme configuration editor.'}
          </Box>
          <Box as="pre" bg="light" p={2} rounded overflow="auto">
            {text}
          </Box>
        </Box>
      </Dialog>
      <Dialog
        title={'Edit theme'}
        size="xl"
        open={showEditDialog}
        onOk={saveTheme}
        onClose={closeEditDialog}
        {...(customTheme && { okTitle: '' })}
        buttons={
          !showJSON && !invalid
            ? [
                {
                  variant: 'secondary',
                  title: 'Create',
                  onClick: () => createAndSave(),
                },
                ...(customTheme
                  ? [
                      {
                        variant: 'primary',
                        title: 'Save',
                        onClick: save,
                      } as any,
                    ]
                  : []),
              ]
            : []
        }
      >
        <Box>
          <Box d="flex">
            <Box>
              <Button variant="light" d="inline-flex" mx={1} onClick={handleUpload}>
                <MaterialIcon icon="upload" /> Upload
              </Button>
              <Button variant="light" d="inline-flex" mx={1} onClick={handleDownload}>
                <MaterialIcon icon="download" /> Download
              </Button>
              <Box
                ref={fileInputRef}
                as="input"
                d="none"
                type="file"
                accept=".json"
                onChange={handleFileUpload}
              />
            </Box>
            <Box px={2} flex={1} d="flex" alignItems="center" justifyContent="flex-end">
              <Button
                variant="link"
                d={'inline-flex'}
                gap={3}
                onClick={() => {
                  if (!showJSON) {
                    formatJSON();
                  }
                  setShowJSON(!showJSON);
                }}
              >
                {showJSON ? (
                  <>
                    <MaterialIcon icon="design_services" />
                    {'Back to editor'}
                  </>
                ) : (
                  <>
                    <MaterialIcon icon="data_object" />
                    {'Show json content'}
                  </>
                )}
              </Button>
            </Box>
          </Box>
          <Box as="p">
            {invalid &&
              '❌ Theme configuration is invalid. Please check the content and try again.'}
          </Box>
          {showEditDialog &&
            (showJSON ? (
              <textarea
                className={styles.textEditor}
                value={jsonText}
                onChange={(e) => setJsonText(e.target.value)}
              />
            ) : (
              <ThemeBuilder
                value={jsonText}
                onChange={handleJsonTextChange}
                onInvalid={setInvalid}
              />
            ))}
        </Box>
      </Dialog>
    </>
  );
}

const ThemeContent = memo(function ThemeContent() {
  return (
    <Box d="flex" className=" overflow-x-scroll" mt={1}>
      <Box d="flex" border>
        <Sidebar />
      </Box>
      <Box flex={1}>
        <TabsComponent />
        <Box ms={2} flex={1} overflow="auto" style={{ height: '90vh' }}>
          <Layout />
        </Box>
      </Box>
    </Box>
  );
});

function Render({ children }: { children: ReactElement }) {
  return (
    <>
      {children}
      <Footer />
    </>
  );
}

export default Designer;
