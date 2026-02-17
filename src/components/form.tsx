import { useState, useId, cloneElement, isValidElement } from 'react';

import { Box, Input, InputLabel, Panel, Switch } from '@axelor/ui';
import { withStyled } from '@axelor/ui/core/styled';

function FormControl({ label, children }: any) {
  const id = useId();

  return (
    <Box mb={3}>
      <InputLabel htmlFor={id} mb={2}>
        {label}
      </InputLabel>
      <Box>
        {/* Clone the child and add the id */}
        {isValidElement(children) ? cloneElement(children, { id } as any) : children}
      </Box>
    </Box>
  );
}

const Range = withStyled(Input)(({ value: valueProp, id, ...rest }, ref) => {
  const [value, setValue] = useState(valueProp);

  const handleChange = (event: any) => {
    setValue(event.target.value);
  };

  return (
    <Input
      type="range"
      min="0"
      max="100"
      ref={ref}
      id={id}
      value={value}
      onChange={handleChange}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={value}
      {...rest}
    />
  );
});

const Checkbox = withStyled(Input)(({ id, ...props }, ref) => {
  const [checked, setChecked] = useState(true);

  const handleChange = (event: any) => {
    setChecked(event.target.checked);
  };

  return (
    <Box>
      <Input
        ref={ref}
        type="checkbox"
        id={id}
        checked={checked}
        onChange={handleChange}
        aria-checked={checked}
        {...props}
      />
    </Box>
  );
});

const SwitchBox = ({ id }: { id?: string }) => {
  const [checked, setChecked] = useState(true);

  return (
    <Switch
      id={id}
      checked={checked}
      onChange={(e: any) => setChecked(e.target.checked)}
      aria-checked={checked}
    />
  );
};

export default function FormComponents() {
  return (
    <Panel header="Form controls">
      <Box p={3}>
        <FormControl label="Text">
          <Input type="text" />
        </FormControl>
        <FormControl label="Checkbox">
          <Checkbox />
        </FormControl>
        <FormControl label="Switch">
          <SwitchBox />
        </FormControl>
        {/* <FormControl label="Range">
            <Range />
          </FormControl> */}
      </Box>
    </Panel>
  );
}
