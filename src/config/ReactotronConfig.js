import Reactotron from 'reactotron-react-native';
import { reactotronRedux } from 'reactotron-redux';

if (process.env.NODE_ENV === 'development') {
  const tron = Reactotron.configure()
    .useReactNative()
    .use(reactotronRedux())
    .connect();

  console.tron = tron;

  tron.clear();
}
