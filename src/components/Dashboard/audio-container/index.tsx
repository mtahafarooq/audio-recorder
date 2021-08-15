import { FC } from "react";
import { useSelector } from 'react-redux'
import { State } from 'store/types';
import { useDispatch } from 'react-redux';
import { CircularProgress } from "@material-ui/core";
import { RequestStatus } from 'models/enums/request-status';
import Button from '@material-ui/core/Button';
import AudioInput from 'components/Dashboard/audio-input';
import AudioOutput from 'components/Dashboard/audio-output';
import { processAudioAction } from 'pages/Dashboard/ducks/slices/audio-slice';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
        maxWidth: 320,
    },
    button: {
        marginBottom: 15,
        marginTop: 15
    }
});

const AudioContainer: FC = () => {

    const dispatch = useDispatch();
    const classes = useStyles();

    const audioState = useSelector((state: State) => state.dashboard.audio)
    const { rawAudio, processedAudio, audioProcessingStatus } = audioState

    return (
        <div className={classes.root}>
            <h1>Audio Processor</h1>
            <AudioInput
                recordedAudio={rawAudio}
                processedAudio={processedAudio}
                audioProcessingStatus={audioProcessingStatus}
            />
            <Button
                className={classes.button}
                variant="outlined"
                color="primary"
                disabled={rawAudio.url && !processedAudio.url ? false : true}
                onClick={() => dispatch(processAudioAction())}
            >
                Process
            </Button>
            {audioProcessingStatus === RequestStatus.Loading && <CircularProgress />}
            <AudioOutput processedAudio={processedAudio} />
        </div>
    );

}

export default AudioContainer;