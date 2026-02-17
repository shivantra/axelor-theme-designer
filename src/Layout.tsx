import { Box, Panel } from '@axelor/ui';

import { GridView } from './views/grid';
import { FormView } from './views/form';
import { CardsView } from './views/cards';
import { KanbanView } from './views/kanban';

import { elements } from './components/theme-builder/theme-elements';
import { useShowEditorPopup } from './scope';
import formStyles from './views/form/form.module.scss';
import styles from './App.module.scss';
import { i18n } from './services/i18n';

export function Layout() {
  const showPopup = useShowEditorPopup();

  function showGridColorize(e: any) {
    showPopup?.(e.target, elements.find((e) => e.name === 'Table')!);
  }

  function showFormColorize(e: any) {
    const formElement = elements.find((e) => e.name === 'Form')!;
    const panelElement = elements.find((e) => e.name === 'Panel')!;
    showPopup?.(e.target, {
      ...formElement,
      editors: [...formElement.editors!, ...panelElement.editors!],
    });
  }

  return (
    <Box className={styles.layout} d="flex" flexWrap="wrap" mt={2} gap={10}>
      <Panel
        header={i18n.get('Grid')}
        style={{ width: 'calc(50% - 5px)' }}
        toolbar={{
          className: formStyles.commandBar,
          items: [
            {
              key: 'pick',
              iconOnly: true,
              description: 'Grid settings',
              iconProps: { icon: 'palette' },
              onClick: showGridColorize,
              hidden: !showPopup,
            },
          ],
        }}
      >
        <Box borderStart borderEnd>
          <GridView />
        </Box>
      </Panel>
      <Panel
        header={i18n.get('Form')}
        className={styles.form}
        style={{ width: 'calc(50% - 5px)' }}
        toolbar={{
          className: formStyles.commandBar,
          items: [
            {
              key: 'pick',
              iconOnly: true,
              description: 'Form settings',
              iconProps: { icon: 'palette' },
              onClick: showFormColorize,
              hidden: !showPopup,
            },
          ],
        }}
      >
        <FormView />
      </Panel>
      <Panel header={i18n.get('Cards')} style={{ width: 'calc(100% - 10px)' }}>
        <CardsView />
      </Panel>
      <Panel header={i18n.get('Kanban')} style={{ width: 'calc(100% - 10px)' }}>
        <KanbanView />
      </Panel>
    </Box>
  );
}
