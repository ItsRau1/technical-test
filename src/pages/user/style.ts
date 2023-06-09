import styled, { keyframes } from "styled-components";

export const Container = styled.div`
    background-color: ${props=>props.theme["background"]};
    flex: 1;
    display: flex;
    align-items: flex-end;
    justify-content: center;
    overflow: hidden;

    @media(max-width: 768px){
        padding: 3rem 1rem;
        overflow: auto;
        align-items: flex-start;
        margin: 0 0 -3rem;
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

export const ProfileBox = styled.div`
    background-color: ${props=>props.theme["purple-500"]};
    color: ${props=>props.theme["gray-100"]};
    margin: 0 0 -3rem;
    padding: 3rem;
    border-radius: 3rem;
    width: 75%;
    height: 75%;
    box-shadow: 3px 0 5px 2px rgba(0, 0, 0, 0.4);
    color: #fff;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 1.5rem;
    animation: ${first} 0.5s cubic-bezier(0.94, 0.62, 0.05, 0.95);

    @media(max-width: 768px){
        gap: 5rem;
        height: auto;
        width: auto;
        margin: 0 0 -7rem;
        padding: 3rem 1rem 4rem;
    }
`

export const ProfileUserNamesBox = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;
    @media(max-width: 768px){
        flex-direction: column;
        justify-content: center;
        text-align: center;
    }
`

export const ProfileName = styled.p`
    font-weight: 700;
    font-size: 4rem;
`

export const ProfileUserName = styled.p`
    font-size: 2rem;
    margin: 0 0 0 -0.5rem;
    letter-spacing: 1px;
`

export const ProfileUserInfoBox = styled.div`
    display: flex;
    align-items: center;
    gap: 0.25rem;
`   

export const ProfileUserInfoAddressBox = styled.div`
    display: flex;
    align-items: center;
    gap: 0.25rem;
`   

export const ProfileUserInfos = styled.p`
    letter-spacing: 0.5px;
`

export const ProfileUserInfosAddress = styled.p`
    letter-spacing: 0.5px;
`

export const ProfileUserWebsite = styled.a`
    letter-spacing: 0.5px;
    text-decoration: none;
    color: ${props=> props.theme["gray-100"]};

    &::after {
        content: '';
        display: block;
        width: 0;
        height: 4px;
        background: ${props=>props.theme["gray-100"]};
        transition: width 0.4s;
        border-radius: 4px;
    }
    &:hover::after {
        width: 100%;
    }
`

export const ProfileUserInfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;  
    @media(max-width: 768px){
        gap: 3rem;
        font-size: 1.2rem;
    }
`