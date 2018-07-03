
export const getPhotos = () => (
  fetch('http://jsonplaceholder.typicode.com/photos?_limit=30', {
    method: 'get'
  }).then(res => res.json())
    .then(photos =>  photos )
    .catch(err => console.log(err)) //TODO: put catch in the component to be able to track the error and show some message to the user
)

export const getPhoto = (photoId) => (
  fetch(`http://jsonplaceholder.typicode.com/photos/${photoId}`, {
    method: 'get'
  }).then(res => res.json())
    .then(photo =>  photo )
    .catch(err => console.log(err)) //TODO: put catch in the component to be able to track the error and show some message to the user
)

