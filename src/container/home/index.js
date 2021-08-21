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
} from './style.js'

const Post = () => {
    return <PostBox></PostBox>
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
