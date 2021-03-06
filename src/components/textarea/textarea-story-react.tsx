/**
 * @license
 *
 * Copyright IBM Corp. 2019, 2020
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
// Below path will be there when an application installs `carbon-web-components` package.
// In our dev env, we auto-generate the file and re-map below path to to point to the generated file.
// @ts-ignore
import BXTextarea from 'carbon-web-components/es/components-react/textarea/textarea';
// @ts-ignore
import BXTextareaSkeleton from 'carbon-web-components/es/components-react/textarea/textarea-skeleton';
// @ts-ignore
import BXFormItem from 'carbon-web-components/es/components-react/form/form-item';
import {
  defaultStory as baseDefaultStory,
  formItem as baseFormItem,
  withoutFormItemWrapper as baseWithoutFormItemWrapper,
} from './textarea-story';

export { default } from './textarea-story';

export const defaultStory = ({ parameters }) => {
  const { colorScheme, disabled, value, placeholder, invalid, onInput } = parameters?.props?.['bx-textarea'];
  return (
    <BXTextarea
      colorScheme={colorScheme}
      disabled={disabled}
      invalid={invalid}
      value={value}
      placeholder={placeholder}
      onInput={onInput}
    />
  );
};

defaultStory.story = baseDefaultStory.story;

export const formItem = ({ parameters }) => {
  const { colorScheme, disabled, value, placeholder, invalid, onInput } = parameters?.props?.['bx-textarea'];
  return (
    <BXFormItem>
      <BXTextarea
        colorScheme={colorScheme}
        value={value}
        placeholder={placeholder}
        onInput={onInput}
        disabled={disabled}
        invalid={invalid}>
        <span slot="label-text">Label text</span>
        <span slot="helper-text">Optional helper text</span>
        <span slot="validity-message">Something isn't right</span>
      </BXTextarea>
    </BXFormItem>
  );
};

formItem.story = baseFormItem.story;

export const withoutFormItemWrapper = ({ parameters }) => {
  const { colorScheme, disabled, value, placeholder, invalid, onInput } = parameters?.props?.['bx-textarea'];
  return (
    <BXTextarea
      colorScheme={colorScheme}
      value={value}
      placeholder={placeholder}
      onInput={onInput}
      disabled={disabled}
      invalid={invalid}>
      <span slot="label-text">Label text</span>
      <span slot="helper-text">Optional helper text</span>
      <span slot="validity-message">Something isn't right</span>
    </BXTextarea>
  );
};

withoutFormItemWrapper.story = baseWithoutFormItemWrapper.story;

export const skeleton = () => <BXTextareaSkeleton />;
