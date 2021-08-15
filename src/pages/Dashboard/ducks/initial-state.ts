import { AudioStateModel } from '../types/audio-state-model';
import { RequestStatus } from 'models/enums/request-status';
import { Audio } from '../types/audio';

export const initialAudio: Audio = {
    url: '',
    format: '',
    duration: ''
}

export const rawAudio: Audio = {
    url: 'Raw Audio',
    format: 'mp3',
    duration: '1:00'
}

export const processedAudio: Audio = {
    url: 'Processed Audio',
    format: 'mp3',
    duration: '1:20'
}
export const audioInitialState: AudioStateModel = {
    rawAudio: initialAudio,
    processedAudio: initialAudio,
    audioProcessingStatus: RequestStatus.Idle

}