import React, { useState } from 'react'
import { AiFillPlusCircle } from 'react-icons/ai'
import { AddCon, AddImg, IconCon, InputCon, StyledForm } from './styles/form.styled'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css';


const Form = () => {
  const [desc, setDesc] = useState('')
  const [title, setTitle] = useState('')
  const [file, setFile] = useState<File | null>(null)


  const selectFile = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { files } = event.target;
    const selectedFiles = files as FileList;
    setFile(selectedFiles?.[0]);
  }
   

  return (
    <StyledForm>
      <input id='fileInput' style={{display: 'none'}} type="file" onChange={selectFile} />
      <label htmlFor="fileInput">
        <AddCon>
          <AddImg src={file ? URL.createObjectURL(file) : ''} />
          <IconCon>
            <AiFillPlusCircle size={64} />
          </IconCon>
        </AddCon>
      </label>
      <form action="">
        <InputCon>
          <label htmlFor="">TITLE</label>
          <textarea value={title} onChange={(e)=>setTitle(e.target.value)} />
        </InputCon>
        <InputCon>
          <label htmlFor="">DESCRIPTION</label>
          <ReactQuill value={desc} onChange={setDesc} />
        </InputCon>
      </form>
    </StyledForm>
  )
}

export default Form