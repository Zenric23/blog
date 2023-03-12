import Navbar from "../components/pages/Add_blog/Navbar";
import { ActionContainer } from "../components/ui/util/container.styled";
import React, { useState, useRef, useContext } from "react";
import { AiFillPlusCircle } from "react-icons/ai";
import {
  AddCon,
  AddImg,
  IconCon,
  InputCon,
  StyledForm,
} from "../components/pages/Add_blog/styles/form.styled";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { publicRequest } from "../util/axiosRequest";
import { UserContext } from "../context/userContext";
import { useNavigate } from "react-router-dom";

const Add_blog = () => {
  const navigate = useNavigate()
  const fileRef = useRef<HTMLInputElement>(null);
  const [desc, setDesc] = useState("");
  const [title, setTitle] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const [topic, setTopic] = useState("");

  const { state } = useContext(UserContext);

  const selectFile = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const { files } = event.target;
    const selectedFiles = files as FileList;
    setFile(selectedFiles?.[0]);
  };

  const triggerImage = () => {
    fileRef.current?.click();
  };


  const createBlog = async (filename: string): Promise<void> => {
    const form = new FormData();
    form.append("blog-image", file as File);
    form.append("filename", filename);
    form.append('title', title)
    form.append('desc', desc)
    form.append('topic', topic)
    form.append('author', state.user!._id.toString())
    await publicRequest.post("/post", form);
  }


  // const createBlog = async (filename: string): Promise<void> => {
  //   await publicRequest.post("/post", {
  //     title,
  //     desc,
  //     topic,
  //     img: filename,
  //     author: state.user?._id,
  //   });
  // }


  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    if(!file) {
      window.alert('make sure to upload an image')
      return
    }
    try {
      const filename = new Date().getTime().toString() + file?.name.split(" ").join("-");
      await createBlog(filename)
      navigate('/')
      window.alert('Blog published successfully')
    } catch (error) {
      console.log(error);
      window.alert('Blog published fail')
    }
  };


  return (
    <>
      <Navbar />
      <ActionContainer>
        <StyledForm>
          <input
            ref={fileRef}
            id="fileInput"
            style={{ display: "none" }}
            type="file"
            onChange={selectFile}
          />
          <AddCon onClick={triggerImage}>
            <AddImg src={file ? URL.createObjectURL(file) : ""} />
            <IconCon>
              <AiFillPlusCircle size={64} />
            </IconCon>
          </AddCon>
          <form onSubmit={handleSubmit} action="" id="add-blog-form">
            <InputCon>
              <label htmlFor="">TITLE</label>
              <textarea
                required
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </InputCon>
            <InputCon>
              <label htmlFor="">TOPIC</label>
              <select
                name=""
                id=""
                value={topic}
                onChange={(e) => setTopic(e.target.value)}
                required
              >
                <option value="">-- select topic --</option>
                <option value="nature">nature</option>
                <option value="programming">programming</option>
                <option value="sports">sports</option>
                <option value="health">health</option>
                <option value="entertainment">entertainment</option>
              </select>
            </InputCon>
            <InputCon>
              <label htmlFor="">DESCRIPTION</label>
              <ReactQuill value={desc} onChange={setDesc} />
            </InputCon>
          </form>
        </StyledForm>
      </ActionContainer>
    </>
  );
};

export default Add_blog;
