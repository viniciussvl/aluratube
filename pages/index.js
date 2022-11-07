import config from '../config.json'
import styled from 'styled-components'
import { CSSReset } from '../src/components/CSSReset';
import Menu from '../src/components/Menu';
import { StyledTimeline } from '../src/components/Timeline';

function HomePage() {

    return (
        <>
            <CSSReset />
            <div style={{
                display: "flex",
                flexDirection: "column",
                flex: 1
            }}>
                <Menu />
                <Banner imgUrl={"/img/banner.jpg"} />
                <Header />
                <Timeline playlists={config.playlists}>
                    Conteudo
                </Timeline>

                <FavoriteChannels channels={config.favorites} />
            </div>
        </>
        
    )
}

export default HomePage;

function Timeline(props) {
    const playlistNames = Object.keys(props.playlists)

    return (
        <StyledTimeline>
            {playlistNames.map((playlistName) => {
                const videos = props.playlists[playlistName];
                
                return (
                    <section>
                        <h2>{playlistName}</h2>
                        <div>
                            { videos.map((video) => {
                                return (
                                    <a href={video.url}>
                                        <img src={video.thumb}></img>
                                        <span>
                                            {video.title}
                                        </span>
                                    </a>
                                )
                            })}
                        </div>
                    </section>
                )
            })}

        </StyledTimeline>
    )
}

const StyledHeader = styled.div`
    img {
        width: 80px;
        height: 80px;
        border-radius: 50%;
    }

    .user-info {
        margin-top: 50px;
        display: flex;
        align-items: center;
        width: 100%;
        padding: 16px 32px;
        gap: 16px;
    }
`;

function Header() {
    return (
        <StyledHeader>
            {/* <img src="banner" /> */}

            <section className="user-info">
                <img src={`https://github.com/${config.github}.png`} />

                <div>
                    <h2>{config.name}</h2>
                    <p>{config.job}</p>
                </div>
            </section>
        </StyledHeader>
    )
}

const StyledBanner = styled.div`
    height: 360px;
    width: 100%;
    border: 1px solid #eee;
    background-size: cover;
    background-image: url(${(props) => props.imgUrl});
`

function Banner(props) {
    return (
        <StyledBanner imgUrl={props.imgUrl}>
        </StyledBanner>
    )
}

const StyledFavoriteChannels = styled.section`
    padding: 30px;
    .channels {
        margin-top: 25px;
        gap: 30px;
        display: flex;

        img {
            width: 80px;
            height: 80px;
            border-radius: 50%;
        }

        .channel {
            span {
                display: block;
                text-align: center;
            }
        }
    }
`

function FavoriteChannels(props) {
    return (
        <StyledFavoriteChannels>
            <h2>AluraTube Favoritos</h2>
            <div className="channels">
                { props.channels.map((channel) => {
                    return (
                        <div className="channel">
                            <img src={channel.img}></img>
                            <span>{channel.name}</span>
                        </div>
                    )
                }) }
                
            </div>
        </StyledFavoriteChannels>
    )
}