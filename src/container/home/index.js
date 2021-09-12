import { React, useState, useEffect } from 'react'

import { useHistory } from 'react-router-dom'

import Container from '../../components/Loading'
import TagBoard from '../../components/tagboard'

import Icon from '../../assets/images/user-icon.jpeg'
import LocalStorageUtils from '../../utils/LocalStorageUtils'
import Navbar from '../navbar'
import {
    FullPageContainer,
    HomeContent,
    MainContent,
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
    QuestionPicture,
    Answer,
    AnswerSpan,
    PostInteraction,
    InteractionContainer,
    Interaction,
    Like,
    Comment,
    Share,
    PostTag,
    PageWrap,
} from './style.js'

const Post = (props) => {
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
                <Question>
                    <QuestionSpan>{props.question}</QuestionSpan>
                </Question>
                {props.image === null ? null : (
                    <QuestionPicture href={props.image}>{props.image}</QuestionPicture>
                )}
                <Answer>
                    <AnswerSpan>{props.answer}</AnswerSpan>
                </Answer>
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

const RenderPost = ({ items }) => {
    return items.map((item) => (
        <Post
            key={item.idx}
            icon={item.icon}
            name={item.name}
            description={item.description}
            date={item.date}
            tag={item.tag}
            question={item.question}
            image={item.image}
            answer={item.answer}
            like={item.like}
        ></Post>
    ))
}

const Home = () => {
    const history = useHistory()
    const user = LocalStorageUtils.getUser('token')
    const logout = () => {
        LocalStorageUtils.deleteUser()
        history.push('/')
    }
    const [posts, setPosts] = useState([
        {
            icon: { Icon },
            name: 'Hoang Hiep',
            description: 'K16',
            date: '23/7/2021',
            tag: 'Front-end',
            question:
                'Cách đặt tên Styled Components thế nào cho hợp lí ạ, em cảm thấy thật rối bời :<',
            image: '',
            answer: 'Cứ đặt đại đi bạn ơi, component bạn code thì bạn cứ chơi hoi, có ai hỏi thì nhận thôi :)))',
            like: 300,
        },
        {
            icon: { Icon },
            name: 'Hoang Hiep',
            description: 'K16',
            date: '23/7/2021',
            tag: 'Front-end',
            question:
                'Cách đặt tên Styled Components thế nào cho hợp lí ạ, em cảm thấy thật rối bời :<',
            image: '',
            answer: 'Cứ đặt đại đi bạn ơi, component bạn code thì bạn cứ chơi hoi, có ai hỏi thì nhận thôi :)))',
            like: 300,
        },
        {
            icon: { Icon },
            name: 'Hoang Hiep',
            description: 'K16',
            date: '23/7/2021',
            tag: 'Front-end',
            question:
                'Cách đặt tên Styled Components thế nào cho hợp lí ạ, em cảm thấy thật rối bời :<',
            image: '',
            answer: 'Cứ đặt đại đi bạn ơi, component bạn code thì bạn cứ chơi hoi, có ai hỏi thì nhận thôi :)))',
            like: 300,
        },
        {
            icon: { Icon },
            name: 'Hoang Hiep',
            description: 'K16',
            date: '23/7/2021',
            tag: 'Front-end',
            question:
                'Cách đặt tên Styled Components thế nào cho hợp lí ạ, em cảm thấy thật rối bời :<',
            image: '',
            answer: 'Cứ đặt đại đi bạn ơi, component bạn code thì bạn cứ chơi hoi, có ai hỏi thì nhận thôi :)))',
            like: 300,
        },
        {
            icon: { Icon },
            name: 'Hoang Hiep',
            description: 'K16',
            date: '23/7/2021',
            tag: 'Front-end',
            question:
                'Cách đặt tên Styled Components thế nào cho hợp lí ạ, em cảm thấy thật rối bời :<',
            image: '',
            answer: 'Cứ đặt đại đi bạn ơi, component bạn code thì bạn cứ chơi hoi, có ai hỏi thì nhận thôi :)))',
            like: 300,
        },
        {
            icon: { Icon },
            name: 'Hoang Hiep',
            description: 'K16',
            date: '23/7/2021',
            tag: 'Front-end',
            question:
                'Cách đặt tên Styled Components thế nào cho hợp lí ạ, em cảm thấy thật rối bời :<',
            image: '',
            answer: 'Cứ đặt đại đi bạn ơi, component bạn code thì bạn cứ chơi hoi, có ai hỏi thì nhận thôi :)))',
            like: 300,
        },
        {
            icon: { Icon },
            name: 'Hoang Hiep',
            description: 'K16',
            date: '23/7/2021',
            tag: 'Front-end',
            question:
                'Cách đặt tên Styled Components thế nào cho hợp lí ạ, em cảm thấy thật rối bời :<',
            image: '',
            answer: 'Cứ đặt đại đi bạn ơi, component bạn code thì bạn cứ chơi hoi, có ai hỏi thì nhận thôi :)))',
            like: 300,
        },
        {
            icon: { Icon },
            name: 'Hoang Hiep',
            description: 'K16',
            date: '23/7/2021',
            tag: 'Front-end',
            question:
                'Cách đặt tên Styled Components thế nào cho hợp lí ạ, em cảm thấy thật rối bời :<',
            image: '',
            answer: 'Cứ đặt đại đi bạn ơi, component bạn code thì bạn cứ chơi hoi, có ai hỏi thì nhận thôi :)))',
            like: 300,
        },
        {
            icon: { Icon },
            name: 'Hoang Hiep',
            description: 'K16',
            date: '23/7/2021',
            tag: 'Front-end',
            question:
                'Cách đặt tên Styled Components thế nào cho hợp lí ạ, em cảm thấy thật rối bời :<',
            image: '',
            answer: 'Cứ đặt đại đi bạn ơi, component bạn code thì bạn cứ chơi hoi, có ai hỏi thì nhận thôi :)))',
            like: 300,
        },
        {
            icon: { Icon },
            name: 'Hoang Hiep',
            description: 'K16',
            date: '23/7/2021',
            tag: 'Front-end',
            question:
                'Cách đặt tên Styled Components thế nào cho hợp lí ạ, em cảm thấy thật rối bời :<',
            image: '',
            answer: 'Cứ đặt đại đi bạn ơi, component bạn code thì bạn cứ chơi hoi, có ai hỏi thì nhận thôi :)))',
            like: 300,
        },
    ])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 5000)
    }, [])
    return (
        <PageWrap>
            {loading ? (
                <Container size="large" />
            ) : (
                <FullPageContainer>
                    <Navbar logout={logout}></Navbar>
                    <HomeContent>
                        <TagBoard></TagBoard>
                        <MainContent>
                            <AskingBox>
                                <AskingTitle>
                                    <UserIcon src={Icon}></UserIcon>
                                    <UserName>Hiệp Hoàng</UserName>
                                </AskingTitle>
                                <AskQuestion>Câu hỏi của bạn hoặc địa chỉ trang web?</AskQuestion>
                            </AskingBox>
                            <RenderPost items={posts}></RenderPost>
                        </MainContent>
                    </HomeContent>
                </FullPageContainer>
            )}
        </PageWrap>
    )
}
export default Home
