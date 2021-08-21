import Icon from '../../assets/images/user-icon.jpeg'
import Navbar from '../navbar'
import {
    FullPageContainer,
    HomeContent,
    AskingBox,
    AskingTitle,
    UserIcon,
    UserName,
    AskQuestion,
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
    Answer,
    AnswerSpan,
    PostInteraction,
    InteractionContainer,
    Interaction,
    UpVote,
    VoteSplit,
    DownVote,
    Comment,
    Share,
} from './style.js'

const Post = () => {
    return (
        <PostBox>
            <PostContent>
                <PostInfo>
                    <PosterIcon src={Icon}></PosterIcon>
                    <PosterInfo>
                        <PosterName>
                            <PosterNameSpan>Hoàng Hiệp</PosterNameSpan>
                        </PosterName>
                        <PosterDecryption>
                            <PosterDecryptionSpan>K16 KTPM · 22/08/21</PosterDecryptionSpan>
                        </PosterDecryption>
                    </PosterInfo>
                </PostInfo>
                <Question>
                    <QuestionSpan>
                        Cách đặt tên Styled Components thế nào cho hợp lí ạ, em cảm thấy thật rối
                        bời :{'<'}
                    </QuestionSpan>
                </Question>
                <Answer>
                    <AnswerSpan>
                        Cứ đặt đại đi bạn ơi, component bạn code thì bạn cứ chơi hoi, có ai hỏi thì
                        nhận thôi :{')))))'}
                    </AnswerSpan>
                </Answer>
            </PostContent>
            <PostInteraction>
                <InteractionContainer>
                    <Interaction>
                        <UpVote>Up</UpVote>
                        <VoteSplit>/</VoteSplit>
                        <DownVote>Down</DownVote>
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

function Home() {
    return (
        <FullPageContainer>
            <Navbar></Navbar>
            <HomeContent>
                <AskingBox>
                    <AskingTitle>
                        <UserIcon src={Icon}></UserIcon>
                        <UserName>Hiệp Hoàng</UserName>
                    </AskingTitle>
                    <AskQuestion>Câu hỏi của bạn hoặc địa chỉ trang web?</AskQuestion>
                </AskingBox>
                <Post></Post>
            </HomeContent>
        </FullPageContainer>
    )
}

export default Home
