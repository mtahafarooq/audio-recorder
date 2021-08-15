import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { AudioStateModel } from 'pages/Dashboard/types/audio-state-model';
import { State } from 'store/types';
import { RequestStatus } from 'models/enums/request-status';
import { audioInitialState } from '../initial-state';
import { Audio } from 'pages/Dashboard/types/audio';
import { processedAudio } from 'pages/Dashboard/ducks/initial-state'

const REDUCER_NAME = 'audio';

export const processAudioAction: any = createAsyncThunk(
    `${REDUCER_NAME}/fakeProcess`,
    async (args, { getState }: any) => {

        const state: State = getState();

        const { audio } = state.dashboard;
        const { rawAudio } = audio;

        const payload = {
            audio: rawAudio,
            userEmail: 'mtahafrq@gmail' //will get email from userReducer i-e state.user.email
        }// This payload object will go to backend api for processing audio
        console.log(payload)
        const response = new Promise(function (resolve, reject) {
            setTimeout(() => resolve(processedAudio), 500);
        });
        return response
    }
)
export const audioSlice = createSlice({

    name: REDUCER_NAME,
    initialState: audioInitialState,
    reducers: {
        setRawAudio(state, action: PayloadAction<Audio>) {
            state.rawAudio = action.payload
        },
        resetProcessedAudio(state, action: PayloadAction<Audio>) {
            state.processedAudio = action.payload
        }
    },
    extraReducers: {
        [processAudioAction.pending]: (state: AudioStateModel) => {
            state.audioProcessingStatus = RequestStatus.Loading;
        },
        [processAudioAction.fulfilled]: (state: AudioStateModel, action: PayloadAction<Audio>) => {
            state.audioProcessingStatus = RequestStatus.Success;
            state.processedAudio = action.payload
        },
        [processAudioAction.rejected]: (state: AudioStateModel) => {
            state.audioProcessingStatus = RequestStatus.Failure;
        },
    }

});

export const { setRawAudio, resetProcessedAudio } = audioSlice.actions;