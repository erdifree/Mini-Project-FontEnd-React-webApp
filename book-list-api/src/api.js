const BASE_URL = 'http://localhost:8080/api/books';

export const getBooks = async () => {
  try {
    const response = await fetch(BASE_URL);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const deleteBook = async (id) => {
  try {
    const response = await fetch(BASE_URL + '/' + id, {
      method: 'DELETE',
    });
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const postBook = async (book) => {
  try {
    const response = await fetch(BASE_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(book),
    });
    const data = await response.json();
    return data; // {id:1, title: "foo"}
  } catch (error) {
    console.log(error);
  }
};

export const putBook = async (id, book) => {
  try {
    const response = await fetch(BASE_URL + '/' + id, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(book),
    });
    const data = await response.json();
    return data; // {id:1, title: "foo"}
  } catch (error) {
    console.log(error);
  }
};
