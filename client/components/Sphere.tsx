import React from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model() {
  const model = useGLTF("http://localhost:3000/api/sphere")
  
  let n_objects = model.scene.children[0].children.length
  

  for (let i=0; i < n_objects; ++i){
      let isMesh = model
        .scene
        .children[0]
        .children[i]
        .isMesh

      console.log(
        model
        .scene
        .children[0]
        .children[i]
      )

      let isLine = model
        .scene
        .children[0]
        .children[i]
        .isLine


      if (isMesh){
        model
          .scene
          .children[0]
          .children[i]
          .material
          .transparent = true

          model
            .scene
            .children[0]
            .children[i]
            .material
            .color = {r:1, g:1, b:1}


      }

      if (isLine){
        let color = model
          .scene
          .children[0]
          .children[i]
          .material
          .color

          if (color.r==1 && color.g ==1 && color.b ==1){
            model
            .scene
            .children[0]
            .children[i]
            .material
            .transparent = true
          }




      }
  }

  console.log(model.scene)
  return (
     <primitive object={model.scene} />
  )
}
