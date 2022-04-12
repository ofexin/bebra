import React from 'react';
import s from './MyPosts.module.css'
import Post from "./post/Post";

const MyPosts = (props) => {
    let postsElements =
        props.posts.map ( p => <Post message={p.message} likesCount={p.likesCount}/>);

    let newPostElement = React.createRef();

    let onAddPost = () => {
        props.addPost();
        //props.updateNewPostText('');
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text);
    }

    return <div className={s.postsBlock}>
        <h3>My posts</h3>
        <div>
            <div>
                <textarea onChange={onPostChange} ref={newPostElement}
                          value={props.newPostText} />
            </div>
            <div>
            <button onClick={ onAddPost }>Add post</button>
            </div>
            { postsElements }
        </div>
        <div className={s.posts}>

        </div>
    </div>
}

export default MyPosts;