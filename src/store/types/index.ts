import { audioInitialState } from 'pages/Dashboard/ducks/initial-state';

export type State = {

    dashboard: {
        audio: typeof audioInitialState;
    }

};