import { useState } from 'react';
import { CreateIndividualPersonAccount } from './../../api/SistemaBancarioBackend';
import { IIndividualPersonAccount } from './../../interfaces/IndividualPersonAccount'

const Create = () => {
  const [name, setName] = useState("")
  const [cpf, setCpf] = useState("")
  const [rg, setRg] = useState("")
  const [birth, setBirth] = useState(new Date())
  const [password, setPassword] = useState("")
  const [accountType, setAccountType] = useState("CORRENTE")
  const [agencyCode, setAgencyCode] = useState("001")

  const CreateIndividualPersonAccountFunction = async (e: { preventDefault: () => void }) => {
    e.preventDefault()

    await CreateIndividualPersonAccount({name, cpf, rg, birth ,password, accountType, agencyCode} as IIndividualPersonAccount)
  }

  return (
    <form
      method='POST'
      onSubmit={CreateIndividualPersonAccountFunction}
    >
      <label htmlFor="name">Nome: </label>
      <input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)}/>

      <label htmlFor="cpf">CPF: </label>
      <input type="text" name="cpf" value={cpf} onChange={(e) => setCpf(e.target.value)}/>

      <label htmlFor="rg">RG: </label>
      <input type="text" name="rg" value={rg} onChange={(e) => setRg(e.target.value)}/>

      <label htmlFor="birth">Nascimento: </label>
      <input type="date" name="birth" value={birth} onChange={(e) => setBirth(e.target.value)}/>

      <label htmlFor="password">Senha: </label>
      <input type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)}/>

      <label htmlFor="accountType">Tipo da conta:</label>
      <select name="accountType" value={accountType} onChange={(e) => setAccountType(e.target.value)}>
        <option value="CORRENTE">CORRENTE</option>
        <option value="POUPANCA">POUPANCA</option>
        <option value="PAGAMENTOS">PAGAMENTOS</option>
        <option value="UNIVERSITARIA">UNIVERSITARIA</option>
      </select>

      <label htmlFor="agencyCode">Código da agência: </label>
      <select name="agencyCode" value={agencyCode} onChange={(e) => setAgencyCode(e.target.value)}>
        <option value="001">001</option>
        <option value="014">014</option>
        <option value="055">055</option>
        <option value="666">666</option>
      </select>

      <button type="submit">Enviar</button>
    </form>
  );
}

export default Create;
