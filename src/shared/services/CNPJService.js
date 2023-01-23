import axios from "axios";

const CNPJInstance = axios.create({
  baseURL: "https://cnpjconsultaback-end.herokuapp.com",
});

export async function findClienteCnpj(cnpj) {
  const  response  = await CNPJInstance.get('/v1/cnpj?cnpj='+cnpj);
  if (response.data.statusCode === 200) {
    return response.data.data;

  }
  return response.data

}