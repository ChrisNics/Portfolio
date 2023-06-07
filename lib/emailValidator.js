const emailValidator = async (email) => {
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': process.env.NEXT_PUBLIC_RAPIDAPIKEY,
      'X-RapidAPI-Host': 'mailcheck.p.rapidapi.com'
    }
  };

  const res = await fetch(`https://mailcheck.p.rapidapi.com/?domain=${email}`, options);
  return await res.json();
};

export default emailValidator;
