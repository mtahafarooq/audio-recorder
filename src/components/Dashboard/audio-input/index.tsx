import { FC, useState } from "react";
import { useDispatch } from 'react-redux';
import { setRawAudio, resetProcessedAudio } from 'pages/Dashboard/ducks/slices/audio-slice';
import { Audio } from 'pages/Dashboard/types/audio';
import { initialAudio, rawAudio } from 'pages/Dashboard/ducks/initial-state';
import { RequestStatus } from 'models/enums/request-status';

import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

interface IAudioInput {
    recordedAudio: Audio;
    processedAudio: Audio;
    audioProcessingStatus: RequestStatus;
}

const AudioInput: FC<IAudioInput> = ({
    recordedAudio,
    processedAudio,
    audioProcessingStatus
}) => {

    const dispatch = useDispatch();

    const [isRecording, toggleRecordingState] = useState(false)

    const handleRecording = () => {
        if (isRecording) {
            const recordedAudio: Audio = rawAudio
            setTimeout(() => dispatch(setRawAudio(recordedAudio)), 500) //intentional delay to make it look async
        }

        toggleRecordingState(!isRecording)
        dispatch(setRawAudio(initialAudio))

        if (processedAudio.url)// check to avoid resetting processed audio for first time
            dispatch(resetProcessedAudio(initialAudio))
    }

    return (
        <Card variant="outlined">
            <CardContent>
                <Typography variant="body2" component="p" color={"textPrimary"}>
                    Record Audio
                </Typography>
            </CardContent>
            <CardActions>
                <Button
                    variant="contained"
                    color={isRecording ? "secondary" : "primary"}
                    onClick={handleRecording}
                    disabled={audioProcessingStatus === RequestStatus.Loading ? true : false}
                >
                    {isRecording ? 'Stop' : 'Start'}
                </Button>
            </CardActions>
            <CardContent>
                <Typography variant="body2" component="p" color={"textSecondary"}>
                    {recordedAudio.url && recordedAudio.url}
                </Typography>
            </CardContent>
        </Card>
    );

}

export default AudioInput;