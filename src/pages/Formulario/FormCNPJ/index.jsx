import React, { useState } from "react";
import {Title } from "components";
import { Paper, Divider, Grid, Box} from "@material-ui/core";
import { useSnackbar, withSnackbar } from "notistack";
import { Button } from "@material-ui/core";
import { Text } from "@react-pdf/renderer";
import { findClienteCnpj } from "shared/services/CNPJService";

import "./styles.scss";

import SearchIcon from '@mui/icons-material/Search';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import InputMask from 'react-input-mask';
import { useEffect } from "react";


function FormCNPJ() {
  const { enqueueSnackbar } = useSnackbar();

  const [retorno, setRetorno] = useState({})
  const [cnpj, setCnpj] = useState('')
  
useEffect(() => {console.log(retorno)}, [retorno])
  
  const handleSubmit = async () => {
    if (cnpj !== "" ) {

      setRetorno( await findClienteCnpj(cnpj))
    } else {
      enqueueSnackbar("Adicione um Cnpj valido.", {
        variant: "warning",
      });
    }
  };

    const handleReset = () => {
      setRetorno(()=>{})
      setCnpj(()=>'')
    }

  return (
    <Box mt={2} mb={2}>
      <Paper>
        <Box className="headerPaper">
          <Grid container justifyContent="center" spacing={2}>
            <Grid  item xs={10}>
              <Title>Busca Informaçãoes pelo CNPJ </Title>
            </Grid>
          </Grid>
        </Box>
        <Divider/>
        <Box p={3} className="headerPaper">
          <Grid container justifyContent="center" spacing={2}>
              <Grid item xs={10}>
                <InputMask value={cnpj} className="input" mask= "99.999.999/9999-99" placeholder="Digite um cnpj" onChange={ (e) => setCnpj(e.target.value)} />
              </Grid>
          </Grid>
        </Box>
        <Box p={3} className="headerPaper">
          <Grid container justifyContent="center" spacing={1}>
              <Grid item xs={2}>
                 <Button  variant="contained" color="secondary" type="submit" onClick={ async () => handleSubmit() }>Buscar <SearchIcon fontSize="small"/></Button>       
              </Grid>
              <Grid item xs={2}>
                  <Button  variant="contained" color="primary" onClick={ async () => handleReset() }>Limpar <DeleteForeverIcon fontSize="small"/></Button>  
              </Grid> 
          </Grid>
        </Box>
      </Paper>
      <Box mt={2} mb={2}>
      {(retorno !== undefined) &&(<Paper>
        {(retorno.message !== undefined) && (
          <Box p={3} className="headerPaper" >
            <Grid container justifyContent="center" spacing={2}>
              <Grid item xs={10}>
              <Text className="text">{retorno.message && retorno.message}</Text>
              </Grid>
            </Grid>
          </Box>
        )}
        {(retorno.cnpj !== undefined) && (
        <Box p={3} className="headerPaper">
            <Grid container justifyContent="center" spacing={2}>
                <table >
                <Text className="text">
                  <tr>
                    <th colspan="2" >Resultado</th>
                  </tr>
                  <tr>
                    <td>Abertura: </td>
                    <td>{retorno.abertura && retorno.abertura}</td>
                  </tr>
                  <tr>
                    <td>Bairro: </td>
                    <td>{retorno.bairro && retorno.bairro}</td>
                  </tr>
                  <tr>
                    <td>Capital social: </td>
                    <td>{retorno.capital_social && retorno.capital_social}</td>
                  </tr>
                  <tr>
                    <td>Cep: </td>
                    <td>{retorno.cep && retorno.cep}</td>
                  </tr>
                  <tr>
                    <td>Cnpj: </td>
                    <td>{retorno.cnpj && retorno.cnpj}</td>
                  </tr>
                  <tr>
                    <td>Complemento: </td>
                    <td>{retorno.complemento && retorno.complemento}</td>
                  </tr>
                  <tr>
                    <td>Data situacao especial: </td>
                    <td>{retorno.data_situacao_especial && retorno.data_situacao_especial}</td>
                  </tr>
                  <tr>
                    <td>Data situacao: </td>
                    <td>{retorno.data_situacao && retorno.data_situacao}</td>
                  </tr>
                  <tr>
                    <td>Email: </td>
                    <td>{retorno.email && retorno.email}</td>
                  </tr>
                  <tr>
                    <td>Efr: </td>
                    <td>{retorno.efr && retorno.efr}</td>
                  </tr>
                  <tr>
                    <td>Fantasia: </td>
                    <td>{retorno.fantasia && retorno.fantasia}</td>
                  </tr>
                  <tr>
                    <td>Logradouro: </td>
                    <td>{retorno.logradouro && retorno.logradouro}</td>
                  </tr>
                  <tr>
                    <td>Motivo situacao: </td>
                    <td>{retorno.motivo_situacao && retorno.motivo_situacao}</td>
                  </tr>
                  <tr>
                    <td>Municipio: </td>
                    <td>{retorno.municipio && retorno.municipio}</td>
                  </tr>
                  <tr>
                    <td>Natureza juridica: </td>
                    <td>{retorno.natureza_juridica && retorno.natureza_juridica}</td>
                  </tr>
                  <tr>
                    <td>Nome: </td>
                    <td>{retorno.nome && retorno.nome}</td>
                  </tr>
                  <tr>
                    <td>Numero: </td>
                    <td>{retorno.numero && retorno.numero}</td>
                  </tr>
                  <tr>
                    <td>Porte: </td>
                    <td>{retorno.porte && retorno.porte}</td>
                  </tr>
                  <tr>
                    <td>Situacao: </td>
                    <td>{retorno.situacao && retorno.situacao}</td>
                  </tr>
                  <tr>
                    <td>Situacao especial: </td>
                    <td>{retorno.situacao_especial && retorno.situacao_especial}</td>
                  </tr>
                  <tr>
                    <td>Status: </td>
                    <td>{retorno.status && retorno.status}</td>
                  </tr>
                  <tr>
                    <td>Telefone: </td>
                    <td>{retorno.telefone && retorno.telefone}</td>
                  </tr>
                  <tr>
                    <td>Tipo: </td>
                    <td>{retorno.tipo && retorno.tipo}</td>
                  </tr>
                  <tr>
                    <td>Uf: </td>
                    <td>{retorno.uf && retorno.uf}</td>
                  </tr>
                  <tr>
                    <td>Ultima atualizacao: </td>
                    <td>{retorno.ultima_atualizacao && retorno.ultima_atualizacao}</td>
                  </tr>
                  <tr>
                    <td>Tipo: </td>
                    <td>{retorno.tipo && retorno.tipo}</td>
                  </tr>
                  </Text>
                </table>
            </Grid>
          </Box>
          )}
       </Paper> 
       )}
      </Box>
    </Box>
  );
}

export default withSnackbar(FormCNPJ);
