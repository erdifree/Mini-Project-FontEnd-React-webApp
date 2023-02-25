const postBreed = async (breed) => {
  try {
    const response = await fetch('http://localhost:8080/api/breeds', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(breed),
    });
    console.log(response);
    const data = await response.json();
    console.log(data);
    return { ok: response.ok, result: data };
  } catch (error) {
    return { ok: false, result: 'Unable to send request' };
  }
};

export default postBreed;
