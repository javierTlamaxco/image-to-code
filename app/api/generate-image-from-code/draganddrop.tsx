'use -client'

import { Dropzone, ExtFile, FileMosaic } from '@files-ui/react'
import { useState } from 'react'

export const DragAndDrop = ({
    transformImageToCode
} : {
    transformImageToCode: (file: File) => Promise<void>
}) => {
	//const [files, setFiles] = useState<ExtFile[]>([])

	const updateFiles = (files: ExtFile[]) => {
		console.log(files)
        const file = files[0].file;
        if(file !== undefined && file !== null) transformImageToCode(file);
		//setFiles(files)
	}

	return (
		<Dropzone
			header={false}
			footer={false}
            maxFiles = { 1 }
			label="Arrastra aqui tu captura de pantalla"
			accept="image/*"
			onChange={updateFiles}
		>
			{/* {files.map((file, index) => {
				return <FileMosaic key={index} {...file} preview />
			})} */}
		</Dropzone>
	)
}
