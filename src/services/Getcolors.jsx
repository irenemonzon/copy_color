export default function Getcolors({ page = "1" } = {}) {
  const apiURL = `https://reqres.in/api/colors?page=${page}`;

  return (
    fetch(apiURL)
      //la api devuelve un json
      .then(resp => resp.json())
      //se accede a los datos  de la api
      .then(response => {
        const { data } = response;
        const infoColor = data.map(element => {
          const { id, name, year, color, pantone_value } = element;
          return { id, name, year, color, pantone_value };
        });
        return infoColor;
      })
  );
}
