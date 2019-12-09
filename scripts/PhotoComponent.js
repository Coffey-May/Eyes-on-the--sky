// Convert a raw data flower to an HTML representation of that flower
const SinglePhotoComponent = (photo) => {
  return `
    
  <div class ="photoClass" >
  <ul class="ul">
       <li>IMAGE: <img src="${photo.img_src}"></li>
       <li> ID NUMBER:${photo.id}</li>
       <li>SOL:${photo.sol}</li>
       <li>CAMERA FULL NAME: ${photo.camera.full_name}</li>
       <li>EARTH DATE:${photo.earth_date}</li>
       <li>CAMERA ID:${photo.camera.rover_id}</li>
       <li>CAMERA NAME:${photo.camera.name}</li>
       <li>ROVER ID:${photo.camera.id}</li>
</ul>
  </div>
  
   
    `
}

export default SinglePhotoComponent
