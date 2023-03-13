/**
 * Learn more about deep linking with React Navigation
 * https://reactnavigation.org/docs/deep-linking
 * https://reactnavigation.org/docs/configuring-links
 */

import { LinkingOptions } from '@react-navigation/native';
import * as Linking from 'expo-linking';

import { RootStackParamList } from '../types';

const linking: LinkingOptions<RootStackParamList> = {
  prefixes: [Linking.createURL('/')],
  config: {
    screens: {
      Root: {
        screens: {
          Home: {
            screens: {
              Home: 'one',
            },
          },
          Search: {
            screens: {
              Search: 'two',
            },
          },
          Notifications: {
            screens: {
              Notifications: 'three',
            },
          },
          Messages: {
            screens: {
              Messages: 'four',
            },
          },

        },
      },
      Modal: 'modal',
      NotFound: '*',
      NewTweet: 'newtweet'
    },
  },
};

export default linking;
