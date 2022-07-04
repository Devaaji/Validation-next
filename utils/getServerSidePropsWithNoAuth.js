import { parseCookies } from 'nookies';

export const getServerSidePropsWithNoAuth = async (context) => {

  const {
    _em: email,
  } = parseCookies(context, { path: '/' });

  console.log(email)

  if (email) {
      return {
        redirect: {
          destination: '/',
          permanent: false,
        },
      };
  }

  return {
    props: {},
  };

};
