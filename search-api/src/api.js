const searchBreeds = async (term) => {
  let url = 'http://localhost:8080/api/breeds';
  if (term !== null && term !== undefined && term !== '') {
    url += '?search=' + term;
  }
  try {
    const response = await fetch(url);
    const data = await response.json();
    //console.log(data);
    return data; // render in base ai dati
  } catch (error) {
    console.log(error);
  }
};

export const postBreed = async (breed) => {
  // const body = '{"name":"bari museum","description":"eeeee","imageUrl":"http://localhost:3000/","trainability":1,"minLifeSpan":1,"maxLifeSpan":1,"size":"MEDIUM"}'

  const response = await fetch('http://localhost:8080/api/breeds', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(breed),
  });
  console.log(response);
};

export { searchBreeds };
