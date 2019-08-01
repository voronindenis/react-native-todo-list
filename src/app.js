// @flow
import { Navigation } from 'react-native-navigation';
import { registerScreens } from '@/screens/register-screens';

export function start() {
  registerScreens();
  Navigation.events().registerAppLaunchedListener(async () => {
    Navigation.setRoot({
      root: {
        stack: {
          id: 'TaskList',
          children: [
            {
              component: {
                name: 'TaskList',
                options: {
                  topBar: {
                    visible: false,
                    height: 0,
                  },
                },
              },
            },
          ],
        },
      },
    });
  });
}
