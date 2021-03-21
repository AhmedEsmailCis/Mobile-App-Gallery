import React from 'react';
import AlbumsScreen from '../../app/screens/AlbumsScreen';
import {render} from '@testing-library/react-native';
it('test loader in startup', async () => {
  const {getByTestId} = render(<AlbumsScreen />);
  const input = getByTestId('loader');
  expect(input).toBeTruthy();
});
