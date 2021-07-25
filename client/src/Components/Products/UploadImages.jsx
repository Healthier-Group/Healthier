//import axios from 'axios'
import React from 'react'

export default function UploadImages() {
    const [fileInputState, setFileInputState] = useState('')
    const [previewSource, setPreviewSource] = useState()
    const [selectedFile, setSelectedFile] = useState('')
    const handleFileInputChange = (e) => {
        const file = e.target.files[0]
        previewFile(file)
    }

    const previewFile = (file) => {
        const reader = new FileReader()
            reader.readAsDataURL(file)
            reader.onloadend = () => {
                setPreviewSource(reader.result)
            }
    }

    const handleSubmitFile = (e) => {
        e.preventDefault()
        if(!previewSource) return;
        UploadImages(previewSource)
    }

    const uploadImage = async (base64EncodedImage) => {
        clg(base64EncodedImage) 
        try {
            await fetch('/api/upload', {
                method: 'POST',
                body: JSON.stringify({data:
                base64EncodedImage }),
                headers: { 'Content-type' : 'application/json'},
            }) 
        } catch(error) {
            console.error(error)
        }
    }

    return (
        <div>
            <h4>Subir Imagenes</h4>
            <form onSubmit={handleSubmitFile}>
                <input type='file' name='image' onChange={handleFileInputChange} value={}/>
                {previewSource && (<img src={previewSource} alt='chosen' style={{height: '300px'}}/>)}
                <button type='submit'>Aceptar</button>
            </form>
        </div>
    )
}
