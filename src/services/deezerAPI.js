export const fetchMusica = async (query) => {
  try {
    const response = await fetch(`https://striveschool-api.herokuapp.com/api/deezer/search?q=${query}`);

    if (response.ok) {
      const data = await response.json();

      return data.data;
    } else {
      console.error("Il server di Strive School ha risposto picche.");
      return [];
    }
  } catch (error) {
    console.error("Errore disastroso di rete:", error);
    return [];
  }
};
