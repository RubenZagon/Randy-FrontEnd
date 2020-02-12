import React, { FC, useState, useEffect } from "react";
import styled from "@emotion/styled";
import { LogoApp } from "../logoApp/logoApp";
import { HelloWithAvatar } from "../hello/hello";
import { useLocation } from "react-router-dom";
import { SMALLPHONE } from "../../utils/const";
import { useWindowSize } from "../../utils/hooks/useWindowSize";
import { FakeUser, HeaderProps } from "./types";





const navOptions = {
  link1: '/dashboard',
  link2: '/calendar',
  link3: '/tasklist',
  link4: '/bill',
  link5: '/settings'
}

const HelloProps = {
  name: "Jhon Doe",
  srcAvatar: "https://cbsnews1.cbsistatic.com/hub/i/2018/11/06/0c1af1b8-155a-458e-b105-78f1e7344bf4/2018-11-06t054310z-1334124005-rc1be15a8050-rtrmadp-3-people-sexiest-man.jpg"
};

export const HeaderTop: FC<HeaderProps> = () => {
  const [currentLocalitation, setCurrentLocalitation] = useState<string>('');
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [width, height] = useWindowSize()

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [user, setUser] = useState<FakeUser>(
    {
      results: [
        { gender: '' },
        {
          name: {
            title: '',
            first: '',
            last: ''
          }
        },
        {
          picture: {
            large: '',
            medium: '',
            thumbnail: ''
          }
        }
      ]
    }
  );

  useEffect(() => {
    //data => data.results[0].name.first
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    let fakeUser = handleUser().then(data => data.results[0]);

    // setUser({ ...fakeUser })
  }, [])


  let location = useLocation();

  useEffect(() => {
    setCurrentLocalitation(handleText(location.pathname) || 'Dashboard ✨')
  }, [location])

  return (
    <HeaderPage>
      <LogoApp></LogoApp>
      {(width >= 500) && <h2>{currentLocalitation}</h2>}
      <HelloWithAvatar {...HelloProps}></HelloWithAvatar>
    </HeaderPage>
  );
};

async function handleUser() {
  let respond = await fetch('https://randomuser.me/api/?nat=ES')
    .then(res => res.json())
    .then(data => data);

  return respond
}


function handleText(location: string) {
  switch (location) {
    case navOptions.link1:
      return 'Dashboard ✨'
    case navOptions.link2:
      return 'Calendario 📅'
    case navOptions.link3:
      return 'Lista de tareas 📌'
    case navOptions.link4:
      return 'Facturación 💸'
    case navOptions.link5:
      return 'Ajustes 🔧'
    default:
      return ''
  }

}

const HeaderPage = styled.div`

@media screen and (max-width: ${SMALLPHONE}) {
  background: lightskyblue;
  max-height: 70px;
  padding-right: 1em;
  padding-left: 1em;
  }

  max-height: 100px;
  padding-right: 50px;
  padding-left: 50px;
  margin-top:1em;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

