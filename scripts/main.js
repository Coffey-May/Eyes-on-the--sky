import getPhotoCollection from './PhotoDataProvider.js'
import PhotoListComponent from './PhotoListComponent.js'
 import getPhotoOfTheDayCollection from './PhotoofthedayProvider.js'
//  import photoofthedaylistComponent from './photoOfTheDayListComponent'
// getPhotoCollection().then(PhotoSelect)
getPhotoCollection().then(PhotoListComponent)
 getPhotoOfTheDayCollection().then()

//  getPhotoOfTheDayCollection().then(photoofthedaylistComponent)
