import styled from "styled-components";
import usePostList from "../../../hooks/usePostList";
import FeaturePost from "../../ui/FeaturePost";
import { Loader } from "../../ui/styles/loader.styled";
import { StickyCon } from "../../ui/styles/sticky.styled";
import { BlogCon, StyledSide } from "./styles/side.styled";
import { Title } from "./styles/top_writers.styled";


interface Props {
  topic: string
  id: string
}

const EmptyBlog = styled.div`
  opacity: 0.5;
  font-size: 14px;
`

const Side = ({topic, id}: Props) => {
  const { posts, isLoading } = usePostList(`/post/relevant-topic?topic=${topic}&id=${id}`, true)


  return (
    <StyledSide>
      <StickyCon>
          <Title>YOU MAY ALSO LIKE</Title>
          <BlogCon>
            {posts?.length > 0 && posts.map((blog) => (
              <FeaturePost
                id={blog._id}
                key={blog._id}
                author={blog.author?.username}
                date={blog.createdAt}
                title={blog.title}
              />
            ))}
            {
              isLoading && <Loader />
            }
            {
              posts?.length === 0 && !isLoading && <EmptyBlog>No blogs yet</EmptyBlog> 
            }
          </BlogCon>
      </StickyCon>
    </StyledSide>
  );
};

export default Side;
