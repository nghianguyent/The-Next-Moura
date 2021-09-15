import { useEffect, useRef } from 'react'

import userIcon from '../../assets/images/user-icon.jpeg'
import {
    DropDown,
    UserProfile,
    DropDownUserIcon,
    DropDownUserName,
    DropDownItems,
    DropDownButtons,
    DropDownButtonsSpan,
    DropDownButtonsIcon,
    DropDownInfo,
} from './style'

const DropDownMenu = (props) => {
    const wrapperRef = useRef(null)
    useOutsideAlerter(wrapperRef)
    function useOutsideAlerter(ref) {
        useEffect(() => {
            function handleClickOutside(event) {
                if (ref.current && !ref.current.contains(event.target)) {
                    props.close()
                }
            }
            window.addEventListener('mousedown', handleClickOutside)
            return () => {
                window.addEventListener('mousedown', handleClickOutside)
            }
        }, [ref])
    }

    return (
        <DropDown ref={wrapperRef}>
            <UserProfile>
                <DropDownUserIcon src={userIcon} alt="userIcon"></DropDownUserIcon>
                <DropDownUserName>Hoang Hiep</DropDownUserName>
            </UserProfile>
            <DropDownItems>
                <DropDownButtons>
                    <DropDownButtonsIcon>🔔</DropDownButtonsIcon>
                    <DropDownButtonsSpan>Thông báo</DropDownButtonsSpan>
                </DropDownButtons>
                <DropDownButtons>
                    <DropDownButtonsIcon>🌙</DropDownButtonsIcon>
                    <DropDownButtonsSpan>Dark mode</DropDownButtonsSpan>
                </DropDownButtons>
                <DropDownButtons>
                    <DropDownButtonsIcon>👋</DropDownButtonsIcon>
                    <DropDownButtonsSpan onMouseUp={props.logout}>Đăng xuất</DropDownButtonsSpan>
                </DropDownButtons>
            </DropDownItems>
            <DropDownInfo>Moura team</DropDownInfo>
        </DropDown>
    )
}

export default DropDownMenu
