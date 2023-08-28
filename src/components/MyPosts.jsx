import React from "react";
import {Post} from './Post/Post';

export const MyPosts = ()=>{
    return (
        <div>
            My posts
            <div>
                <textarea></textarea>
                <button>Add post</button>
        </div>
            <div className={s.posts}>
                <Post message='Hi, how are you ?'></Post>
                <Post message='Its my first...'></Post>
                      </div>
                      </div>
    )
}