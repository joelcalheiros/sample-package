import '@testing-library/jest-dom';
import { composeStory } from '@storybook/testing-react';
import { render } from '@esolidar/toolkit/build/__customQueries__/test-utils';
import Meta, { Default as DefaultDetailTitle } from '../TestComponent.stories';

const Default = composeStory(DefaultDetailTitle, Meta);

it('renders TestComponent default component', () => {
  const { getByText } = render(<Default />);

  expect(getByText('Test Component')).toBeInTheDocument();
});
