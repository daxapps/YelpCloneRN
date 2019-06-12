import { Appregistry } from 'react-native';
import App from './src/App';

Appregistry.registerComponent('yelpClone', () => App);
