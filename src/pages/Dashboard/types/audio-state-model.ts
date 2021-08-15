import { Audio } from './audio';
import { RequestStatus } from 'models/enums/request-status';

export interface AudioStateModel {

    rawAudio: Audio;

    processedAudio: Audio;

    audioProcessingStatus: RequestStatus;
}