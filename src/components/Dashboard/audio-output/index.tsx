import { FC } from "react";
import { Audio } from "pages/Dashboard/types/audio";

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

interface IProcessedAudio {
    processedAudio: Audio
}

const AudioOutput: FC<IProcessedAudio> = ({ processedAudio }) => {

    return (
        <Card variant="outlined" >
            <CardContent>
                <Typography variant="subtitle1" component="h2" gutterBottom>
                    Output
                </Typography>
                <Typography variant="body2" component="p" color={"primary"}>
                    {processedAudio.url && processedAudio.url}
                </Typography>
            </CardContent>
        </Card>
    );

}

export default AudioOutput;