import Icon from '../../assets/images/user-icon.jpeg'
import {
    PostBox,
    PostContent,
    PostInfo,
    PosterIcon,
    PosterInfo,
    PosterName,
    PosterNameSpan,
    PosterDecryption,
    PosterDecryptionSpan,
    Question,
    QuestionSpan,
    QuestionPicture, // Answer,
    // AnswerSpan,
    PostInteraction,
    InteractionContainer,
    Interaction,
    Like,
    Comment,
    Share,
    PostTag,
    PostMain,
} from './style'

const Answer = (props) => {
    return (
        <PostBox>
            <PostContent>
                <PostInfo>
                    <PosterIcon src={Icon}></PosterIcon>
                    <PosterInfo>
                        <PosterName>
                            <PosterNameSpan>{props.name}</PosterNameSpan>
                        </PosterName>
                        <PosterDecryption>
                            <PosterDecryptionSpan>
                                {props.description + ' · ' + props.date}
                            </PosterDecryptionSpan>
                        </PosterDecryption>
                    </PosterInfo>
                    <PostTag>{props.tag}</PostTag>
                </PostInfo>
                <PostMain>
                    <Question>
                        <QuestionSpan>{props.question}</QuestionSpan>
                    </Question>
                    {props.image === null ? null : (
                        <QuestionPicture href={props.image}>{props.image}</QuestionPicture>
                    )}
                    {/* <Answer>
                        <AnswerSpan>{props.answer}</AnswerSpan>
                    </Answer> */}
                </PostMain>
            </PostContent>
            <PostInteraction>
                <InteractionContainer>
                    <Interaction>
                        <Like>{props.like + ' Likes'}</Like>
                    </Interaction>
                    <Interaction>
                        <Comment>Comment</Comment>
                    </Interaction>
                    <Interaction>
                        <Share>Share</Share>
                    </Interaction>
                </InteractionContainer>
            </PostInteraction>
        </PostBox>
    )
}

export default Answer
