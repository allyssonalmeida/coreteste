import React, { FormEvent, Fragment, useState } from 'react';
import './index.scss';

const Newsletter: React.FC = () => {
  const [name, setName] = useState<string>('');
  const [errorName, setErrorName] = useState<boolean>(false)
  const [email, setEmail] = useState<string>('');
  const [errorEmail, setErrorEmail] = useState<boolean>(false)
  const [emailSent, setEmailSent] = useState<boolean>(false);

  function handleSubmit(e:FormEvent){
    e.preventDefault();
    if(!name){
      setErrorName(true);
    }
    if(!email){
      setErrorEmail(true);
    }

    fetch(`https://corebiz-test.herokuapp.com/api/v1/newsletter`, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify({email, name})
    })
    .then(response => {
      if(response.status === 200){
        setEmailSent(true);
      }
    })
    .catch(error => console.log(error));
  }

  function clearForm(){
    setEmail('');
    setName('');
    setErrorEmail(false);
    setErrorName(false);
    setEmailSent(false);
  }

  return (
    <section className="newsletter">
      {emailSent ? (
        <div className="newsletter__success">
          <strong>Seu e-mail foi cadastrado com sucesso!</strong>
          A partir de agora você receberá as novidade e ofertas exclusivas.
          <button onClick={clearForm}>Cadastrar novo e-mail</button>
        </div>
      ): (
        <Fragment>
          <strong className="newsletter__title">Participe de nossas news com promoções e novidades</strong>
          <form className="newsletter__form" onSubmit={handleSubmit}>
            <div className="newsletter__group newsletter__group--name">
              <input
                type="text"
                placeholder="Digite seu nome"
                inputMode="text"
                value={name}
                onChange={({target})=>{ setName(target.value) }}
                className={`${errorName ? 'invalid': ''}`}
              />
              {errorName &&
                <span className="newsletter__error newsletter__error--name">
                  Preencha com seu nome completo
                </span>
              }
            </div>
            <div className="newsletter__group newsletter__group--email">
              <input
                type="email"
                placeholder="Digite seu email"
                inputMode="email"
                value={email}
                onChange={({target}) => {setEmail(target.value)}}
                className={`${errorEmail ? 'invalid': ''}`}
              />
              {errorEmail &&               
                <span className="newsletter__error newsletter__error--email">
                  Preencha com um e-mail válido
                </span>
              }
            </div>
            <button type="submit"> Eu quero! </button>
          </form>
        </Fragment>
      )}
    </section>
  );
}

export default Newsletter;