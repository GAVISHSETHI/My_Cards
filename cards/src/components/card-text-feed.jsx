import React, { Component } from 'react';
import { Card , Feed , Image } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import Wrapper from './likes-counter';
import Claps from './claps';
import '../App.css';
import userData from '../content'

class CardText extends Component {
    // state = {
    //     isLoading:true,
    // }
    // componentDidUpate(prevProps) {
    //     const img = new Image();
    //     img.src = this.userData[0].url;
    //     console.log(img.src)
    //     const handleImageLoad = ()=>{
    //         this.setState({ isLoading: false})
    //     }
    //     img.addEventListener('load', handleImageLoad);
    // }

            feedBackCard() {
        // console.log('some',this.state.isLoading)
                return userData.map((user) => (
                    <Card fluid className="my-card-css">
                        <Image src= {user.url} className = 'header-image' />
                        <Card.Content>
                            <Card.Header>
                                {user.name}
                            </Card.Header>
                            <Card.Meta>
                            <span className='date'>
                                Member since : {user.yearOfJoining}
                            </span>
                            </Card.Meta>
                            <Card.Description>
                                {user.Card_text_userspecific_content}
                            </Card.Description>
                            <Feed>
                                <Feed.Event>
                                    <Feed.Label >
                                       <Image as="img" avatar className="feed-label-image" circular src={user.url}  />
                                    </Feed.Label>
                                    <Feed.Content>
                                        <Feed.Summary>
                                            <a>{user.name}</a> posted on his page.
                                            <Feed.Date>{user.feed_date}</Feed.Date>
                                        </Feed.Summary>
                                        <br />
                                        <Feed.Meta className='like'>
                                            <Wrapper likes= {user.likes}/>
                                        </Feed.Meta>
                                            <Feed.Meta className='claps'>
                                                <Claps  claps={user.claps}/>
                                            </Feed.Meta>
                                    </Feed.Content>
                                </Feed.Event>
                            </Feed>

                        </Card.Content>
                    </Card>

                ));
            }

    render() {

        return (
            <div className="App">

                    {this.feedBackCard()}


            </div>
        );
    }
}

export default CardText;
