import React, { useState, useEffect, useContext } from "react";
import { Flex } from "../../ui/util/flex.styled";
import {
  Actions,
  Author,
  ButtonLike,
  Publish,
  Delete,
  Desc,
  Edit,
  EndingCon,
  Image,
  ImageCon,
  StyledBody,
} from "./styles/body.styled";
import { AiFillEdit, AiFillLike, AiOutlineLike } from "react-icons/ai";
import { FaTrash } from "react-icons/fa";
import { Grid } from "../../ui/util/grid.styled";
import Top_writers from "./Top_writers";
import { publicRequest } from "../../../util/axiosRequest";
import { useNavigate, useParams } from "react-router-dom";
import parse from 'html-react-parser'
import { UserContext } from "../../../context/userContext";

interface Props {
  blog: any,
  handleLikePost: ()=> void,
  isLike: boolean,
  totalLikes: number
}

const Body = ({ blog, handleLikePost, isLike, totalLikes }: Props) => {

  const { state } = useContext(UserContext)
  const navigate = useNavigate()

  const deletePost = async (id: string) => {
  const filename =  blog.img.split("/")[4]
    try {
      if(!window.confirm("Are you sure u want to delete this blog?")) return
      await publicRequest.delete(`/post/${id}`)
      await publicRequest.delete(`/post/file/${filename}`)
      navigate(-1)
    } catch (error) {
      console.log(error)
    }    
  } 
  
  return (
    <>
    <StyledBody> 
      {
        Object.keys(blog).length > 0 && (
          <>
          <div>
            <Author>{blog.author?.username}</Author>
            <h1>{blog.title}</h1>
            <Flex>
              <Publish>{new Date(blog.createdAt).toDateString()}</Publish>
              {
                state.user?._id === blog.author._id && (
                  <Actions>
                    <Edit>
                      <AiFillEdit size={16} />
                    </Edit>
                    <Delete onClick={()=>deletePost(blog._id)}>
                      <FaTrash size={16} />
                    </Delete>
                  </Actions>
                )
              }
            </Flex>
          </div>
          <ImageCon>
            <Image src={blog.img} />
          </ImageCon>
          <Desc>
            {parse(blog.desc)}
          </Desc>
          <EndingCon>
            {
              state.user && (
                <ButtonLike>
                  {
                    isLike
                      ? <AiFillLike onClick={handleLikePost} size={24} color="blue" />
                      : <AiOutlineLike onClick={handleLikePost} size={24} color="blue" />
                  }
                  <span>
                    {totalLikes}
                  </span>
                </ButtonLike>
              )
            }
            <h3>Thanks For Reading!</h3>
          </EndingCon>
          <Top_writers />
        </>
        )
      } 
    </StyledBody>
    </>
    );
};

export default Body;
