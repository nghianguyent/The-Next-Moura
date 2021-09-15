import { React, useState, useEffect } from 'react'

import { useHistory } from 'react-router-dom'

import Answer from '../../components/Answer'
import Container from '../../components/Loading'
import Navbar from '../../components/Navbar'
import TagBoard from '../../components/TagBoard'

import Icon from '../../assets/images/user-icon.jpeg'
import LocalStorageUtils from '../../utils/LocalStorageUtils'
import {
    FullPageContainer,
    HomeContent,
    MainContent,
    AskingBox,
    AskingTitle,
    UserIcon,
    UserName,
    AskQuestion,
    PageWrap,
} from './style.js'

const RenderAnswer = ({ items }) => {
    return items.map((item) => (
        <Answer
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
        ></Answer>
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
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        setIsLoading(true)
        setTimeout(() => {
            setIsLoading(false)
        }, 0)
    }, [])
    return (
        <PageWrap>
            {isLoading ? (
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
                            <RenderAnswer items={posts}></RenderAnswer>
                        </MainContent>
                    </HomeContent>
                </FullPageContainer>
            )}
        </PageWrap>
    )
}
export default Home
