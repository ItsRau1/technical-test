import styled, { keyframes }  from "styled-components";

export const MainContainer = styled.div`
    background-color: ${(props)=>props.theme['background']};
    flex: 1;
    padding: 5rem;
    
    @media(max-width: 768px){
        padding: 3rem 2rem;
    }
`

const first = keyframes`
    from{
        transform: translateY(500%);
    }
    to{
        transform: translateY(0%);
    }
`

export const PostBox = styled.div`
    background-color: ${(props)=>props.theme['gray-900']}; 
    margin: 0 0 2rem;

    border-radius: 8px;
    box-shadow: 3px 3px 2px 1px rgba(0, 0, 0, 0.4);
    transition: transform 0.3s, text 0.3s;
    animation: ${first} 0.5s cubic-bezier(0.94, 0.62, 0.05, 0.95);

    &:hover{
        transform: scale(1.02);
    }
`

export const PostLinkBox = styled.a`
    color: ${props=>props.theme["white"]};
    text-decoration: none;
    padding: 1rem 0.5rem;
    letter-spacing: 0.5px;
    display: flex;
    flex-direction: column;
    gap: 0.1rem;
`

export const PostUserLink = styled.a`
    color: ${props=>props.theme["gray-100"]};
    text-decoration: none;
    display: flex;
    gap: 0.5rem;
    align-items: center;
    max-width: fit-content;
    font-weight: 700;

    &:hover{
        p::after {
            width: 100%;
        }
    }
`

export const PostUserInfo = styled.div`

`

export const PostUserName = styled.p`

    &::after {
        content: '';
        display: block;
        width: 0;
        height: 4px;
        background: ${props=>props.theme["purple-300"]};
        transition: width 0.4s;
        border-radius: 4px;
    }
`

export const PostContentInfo = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.7rem;
    
`

export const PostTitle = styled.p`
    font-weight: 700;
    padding: 0 0 0 1rem;
`

export const PostBody = styled.p`
    text-align: center;
`