import React from 'react'

import Header from '../atoms/Header'

const LoginHeader = props => {
  const element =  document.getElementsByName('csrf-token')[0];
  return(
    <Header>
      <div style={{margin: "0 0 0 auto", padding: "8px"}} >
        {
          props.session
          ? <div>
              <form method="post" name="formLogout" action="/logout">
                <input type="hidden" name="authenticity_token" value={element.content} />
                <a href="javascript:formLogout.submit()">Logout</a>
              </form>
              <img src={props.session.avatar} style={{width: "40px", height: "40px"}} />
            </div>
          : <a href="/auth/google_oauth2" >Login</a>
        //   : <form method="post" name="form1" action="/auth/google_oauth2">
        //       <input type="hidden" name="authenticity_token" value="{props.session.token}" />
        //       <a href="javascript:form1.submit()">Login</a>
        //     </form>
        }
      </div>
    </Header>
  )
}

export default LoginHeader 